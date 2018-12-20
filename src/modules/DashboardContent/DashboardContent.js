import { mapGetters, mapMutations, mapActions } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import LogonLabel from './components/LonOnLabel.vue'
import draggable from 'vuedraggable'

export default {
  name: 'DashboardContent',
  components: {
    Breadcrumb,
    LogonLabel,
    TasksCard,
    TimelineCard,
    draggable
  },

  data: () => ({
    init: true,
    paths: [{ text: 'Dashboard', disabled: true, router_name: null }],
    tiles: [
      {
        title: 'Projects',
        counter: '33',
        icon: require('@/assets/icons/sidebar/projects.svg')
      },
      {
        title: 'Open Tasks',
        counter: '12',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Calendar',
        counter: '09',
        icon: require('@/assets/icons/sidebar/calendar.svg')
      },
      {
        title: 'Timer',
        counter: '54',
        icon: require('@/assets/icons/sidebar/timers.svg')
      },
      {
        title: 'Inbound',
        counter: '799',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Outbound',
        counter: '847',
        icon: require('@/assets/icons/sidebar/templates.svg')
      }
    ]
  }),

  computed: {
    ...mapGetters('cards', ['should_show']),

    cards: {
      get() {
        return this.$store.getters['cards/cards']
      },
      set(val) {
        this.set_cards(val)
      }
    },

    card_components() {
      let cards = _cloneDeep(this.cards)
      cards.forEach(card => (card.component = card.slug + '-card'))
      return cards
    }
  },

  watch: {
    cards(val) {
      if (this.init) {
        this.init = false
      } else {
        request.post('api/dashboard/default/dashitems', {
          dashitem_id: this.cards.map(card => card.id)
        })
      }
    }
  },

  created() {
    this.fill_cards()
  },

  methods: {
    ...mapActions('cards', ['fill_cards']),
    ...mapMutations('cards', ['set_cards'])
  }
}
