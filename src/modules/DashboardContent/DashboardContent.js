import { mapGetters, mapMutations, mapActions } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
import {is_screen_utils} from "@/global_utils/is_screen_utils";

//Components
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import DashCard from '@/common/DashCard.vue'
import DashboardTiles from './components/DashboardTiles/DashboardTiles.vue'
import NoCards from './components/NoCards.vue'
import draggable from 'vuedraggable'
import CalendarCard from '@/common/CalendarCard/CalendarCard.vue'
import ClientCard from '@/common/ClientCard/ClientCard.vue'
import InvoiceCard from '@/common/InvoiceCard/InvoiceCard.vue'
import TimerCard from '@/common/TimerCard/TimerCard.vue'
import PaymentCard from '@/common/PaymentCard/PaymentCard.vue'
import PassboxCard from '@/common/PassboxCard/PassboxCard.vue'
import AlarmCard from '@/common/AlarmCard/AlarmCard.vue'

export default {
    name: 'DashboardContent',
    mixins: [is_screen_utils],
    components: {
        TasksCard,
        TimelineCard,
        DashCard,
        DashboardTiles,
        NoCards,
        draggable,
        CalendarCard,
        ClientCard,
        InvoiceCard,
        TimerCard,
        PaymentCard,
        PassboxCard,
        AlarmCard,
        VBoilerplate: {
            functional: true,
            render(h, { data, props, children }) {
                return h(
                    'v-skeleton-loader', {
                        ...data,
                        props: {
                            boilerplate: true,
                            elevation: 2,
                            ...props
                        }
                    },
                    children
                )
            }
        }
    },
    props: {
        id: [Number, String]
    },
    data: () => ({
        loading: true,
        init: true,
        isRequestInProgress: false,
        args: {
            dashboard: true
        },
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' }
        ],
    }),

    computed: {
        ...mapGetters('cards', ['should_show', 'dash_items']),
        ...mapGetters(['user', 'global_configs']),
        cards: {
            get() {
                if (!this.user) return []
                let cards = _cloneDeep(this.$store.getters['cards/cards'])
                return cards.map(card => {
                    card.can_view = () => {
                        const method = `can_view_${card.slug}`
                        return this[method](this.user)
                    }
                    return card
                })
            },
            set(val) {
                this.set_cards(val)
            }
        },

        card_components() {
            let cards = _cloneDeep(this.cards)
            return cards.map(card => {
                if (
                    [
                        'timeline',
                        'tasks',
                        'calendar',
                        'invoice',
                        'client',
                        'timer',
                        'payment',
                        'passbox',
                        'alarm'
                    ].includes(card.slug)
                ) {
                    card.component = card.slug + '-card'
                }
                return card
            })
        },
        allowed_dashcards(){
            return this.global_configs.allowed_dashcards
        }
    },

    watch: {
        cards(val) {
            if (this.init) {
                this.init = false
            } else {
                request.post('api/dashboard/default/dashitems', {
                    dashitem_id: val.map(card => card.id)
                })
            }
        }
    },
    mounted(){
        this.$event.$emit('path-change', this.paths)
    },
    created() {
        this.fill_cards().finally(() => (this.loading = false))
        this.set_id(null)
    },

    methods: {
        ...mapActions('cards', ['fill_cards', 'update_cards']),
        ...mapMutations('cards', ['set_cards']),
        ...mapMutations('taskCards', ['set_id']),
        close(id) {
            if (this.isRequestInProgress) return
            this.isRequestInProgress = true
            const card_ids = this.cards
                .filter(card => card.id !== id)
                .map(card => card.id)
            this.update_cards({ dashitem_id: card_ids }).finally(
                () => (this.isRequestInProgress = false)
            )
        },
        can_view_tasks(user) {
            return (
                user.can.hasOwnProperty('tasks') ||
                user.can.hasOwnProperty('tasks_own') ||
                user.is_admin
            )
        },
        can_view_timeline(user) {
            return !!user
        },
        can_view_client(user) {
            return user.is_admin
        },
        can_view_timer(user) {
            return (
                user.can.hasOwnProperty('timers') ||
                user.can.hasOwnProperty('timers_own') ||
                user.is_admin
            )
        },
        can_view_alarm(user) {
            return (
                user.can.hasOwnProperty('timers') ||
                user.can.hasOwnProperty('timers_own') ||
                user.is_admin
            )
        },
        can_view_payment(user) {
            return !!user
        },
        can_view_invoice(user) {
            return user.can.hasOwnProperty('invoices') || user.is_admin
        },
        can_view_calendar(user) {
            return (
                user.can.hasOwnProperty('calendars') ||
                user.can.hasOwnProperty('calendars_own') ||
                user.is_admin
            )
        },
        can_view_passbox(user) {
            return !!user
        },

        is_dashcard_enabled(slug){
            return this.allowed_dashcards.includes(slug)
        }
    }
}