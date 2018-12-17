import { mapGetters, mapActions } from 'vuex'
import _isEqual from 'lodash/isEqual'
//Components
import HeaderIcon from '../HeaderIcon.vue'

export default {
  name: 'AddDataCards',

  components: {
    HeaderIcon
  },

  data: () => ({
    dropdown_visible: false,
    avatarSize: 'auto',
    items: [
      {
        title: 'Task',
        icon: require('@/assets/icons/sidebar/templates.svg'),
        value: 1
      },
      {
        title: 'Timeline',
        icon: require('@/assets/icons/sidebar/timers.svg'),
        value: 2
      },
      {
        title: 'Client',
        icon: require('@/assets/icons/sidebar/clients.svg'),
        value: 3
      },
      {
        title: 'Timer',
        icon: require('@/assets/icons/sidebar/timers.svg'),
        value: 4
      },
      {
        title: 'Payment',
        icon: require('@/assets/icons/sidebar/payment.svg'),
        value: 5
      },
      {
        title: 'Invoice',
        icon: require('@/assets/icons/sidebar/invoice.svg'),
        value: 6
      },
      {
        title: 'Calendar',
        icon: require('@/assets/icons/sidebar/calendar.svg'),
        value: 7
      },
      {
        title: 'Passbox',
        icon: require('@/assets/icons/header/user/lock.svg'),
        value: 8
      }
    ],
    selected_items: []
  }),

  computed: {
    ...mapGetters('cards', ['cards']),
    selected_cards() {
      return this.cards.map(card => card.id)
    },
    nothing_changed() {
      return _isEqual(this.selected_items.sort(), this.selected_cards.sort())
    },
    disabled() {
      return !!(this.nothing_changed || !this.selected_items.length)
    }
  },

  watch: {
    dropdown_visible(val) {
      val && this.fill_selected_items()
    }
  },

  methods: {
    ...mapActions('cards', ['update_cards']),
    save() {
      this.dropdown_visible = false
      this.update_cards({ dashitem_id: this.selected_items })
    },
    fill_selected_items() {
      this.selected_items = [...this.selected_cards]
    }
  }
}
