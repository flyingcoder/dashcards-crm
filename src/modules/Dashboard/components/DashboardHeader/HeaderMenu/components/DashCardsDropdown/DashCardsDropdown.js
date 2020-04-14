import { mapGetters, mapMutations, mapActions } from 'vuex'
import _isEqual from 'lodash/isEqual'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
//Components
import HeaderIcon from '@/common/HeaderIcon.vue'
import DashCard from '@/common/BaseComponents/DashCard.vue'
import CustomCheckbox from '@/common/BaseComponents/CustomCheckbox.vue'

export default {
  components: {
    HeaderIcon,
    DashCard,
    CustomCheckbox
  },

  data: () => ({
    dropdown_visible: false,
    avatarSize: 'auto',
    selected_cards: [],
    checkbox: false,
    icons: {
      tasks: 'sidebar/tasks.svg',
      timeline: 'sidebar/timers.svg',
      client: 'sidebar/clients.svg',
      timer: 'sidebar/timers.svg',
      payment: 'sidebar/payment.svg',
      invoice: 'sidebar/invoice.svg',
      calendar: 'sidebar/calendar.svg',
      passbox: 'header/user/lock.svg',
      alarm: 'sidebar/alarms.svg'
    }
  }),

  computed: {
    ...mapGetters('cards', ['cards']),

    dash_items() {
      let items = _cloneDeep(this.$store.getters['cards/dash_items'])
      return items.map(item => {
        item.img_path = this.icons[item.slug]
        return item
      })
    },

    cards_id() {
      const ids = this.cards.map(card => card.id)
      this.selected_cards = [...ids]
      return ids
    },

    nothing_changed() {
      return _isEqual(
        this.cards_id.slice().sort(),
        this.selected_cards.slice().sort()
      )
    },

    disabled() {
      return !!(this.nothing_changed || !this.selected_cards.length)
    }
  },

  watch: {
    checkbox(val) {
      val && this.select_all_cards()
    }
  },

  created() {
    this.get_dashitems()
  },

  methods: {
    ...mapActions('cards', ['update_cards']),
    ...mapMutations('cards', ['set_dash_items']),
    save() {
      this.dropdown_visible = false
      this.update_cards({ dashitem_id: this.selected_cards })
    },
    get_dashitems() {
      this.loading = true
      request
        .get('api/dashitems')
        .then(({ data }) => {
          this.set_dash_items(data)
        })
        .finally(() => (this.loading = false))
    },

    check_selected(id) {
      if (this.selected_cards.includes(id)) {
        const index = this.selected_cards.findIndex(card_id => card_id === id)
        if (~index) this.selected_cards.splice(index, 1)
      } else {
        this.selected_cards.push(id)
      }
    },
    reset() {
      this.selected_cards = [...this.cards_id]
    },
    select_all_cards() {
      const ids = this.dash_items.map(item => item.id)
      this.selected_cards = [...ids]
    }
  }
}
