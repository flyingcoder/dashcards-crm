import { mapGetters, mapActions } from 'vuex'
import _isEqual from 'lodash/isEqual'
import request from '@/services/axios_instance'
//Components
import HeaderIcon from '@/common/HeaderIcon.vue'

export default {
  components: {
    HeaderIcon
  },

  data: () => ({
    dropdown_visible: false,
    avatarSize: 'auto',
    selected_cards: [],
    dash_items: []
  }),

  computed: {
    ...mapGetters('cards', ['cards']),

    cards_id() {
      const ids = this.cards.map(card => card.id)
      this.selected_cards = ids
      return ids
    },

    nothing_changed() {
      return _isEqual(this.cards_id.sort(), this.selected_cards.sort())
    },

    disabled() {
      return !!(this.nothing_changed || !this.selected_cards.length)
    }
  },

  created() {
    this.get_dashitems()
  },

  methods: {
    ...mapActions('cards', ['update_cards']),
    save() {
      this.dropdown_visible = false
      this.update_cards({ dashitem_id: this.selected_cards })
    },
    get_dashitems() {
      this.loading = true
      request
        .get('api/dashitems')
        .then(({ data }) => (this.dash_items = data))
        .finally(() => (this.loading = false))
    }
  }
}
