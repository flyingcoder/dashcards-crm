import { mapGetters, mapMutations, mapActions } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import DashCard from '@/common/DashCard.vue'
import LogonLabel from './components/LonOnLabel.vue'
import DashboardTiles from './components/DashboardTiles/DashboardTiles.vue'
import NoCards from './components/NoCards.vue'
import draggable from 'vuedraggable'
import CalendarCard from '@/common/CalendarCard/CalendarCard.vue'

export default {
  name: 'DashboardContent',
  components: {
    Breadcrumb,
    LogonLabel,
    TasksCard,
    TimelineCard,
    DashCard,
    DashboardTiles,
    NoCards,
    draggable,
    CalendarCard
  },

  data: () => ({
    init: true,
    paths: [{ text: 'Dashboard', disabled: true, router_name: null }],
    isRequestInProgress: false
  }),

  computed: {
    ...mapGetters('cards', ['should_show']),
    ...mapGetters(['user']),

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
        if (['timeline', 'tasks', 'calendar'].includes(card.slug)) {
          card.component = card.slug + '-card'
        }
        return card
      })
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

  created() {
    this.fill_cards()
  },

  methods: {
    ...mapActions('cards', ['fill_cards', 'update_cards']),
    ...mapMutations('cards', ['set_cards']),
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
      return user ? true : false
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
    can_view_payment(user) {
      return user ? true : false
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
      return user ? true : false
    }
  }
}
