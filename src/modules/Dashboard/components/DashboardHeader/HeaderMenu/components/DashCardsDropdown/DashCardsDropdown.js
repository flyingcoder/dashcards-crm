import { mapGetters, mapActions } from 'vuex'
import _isEqual from 'lodash/isEqual'
import request from '@/services/axios_instance'
//Components
import HeaderIcon from '../HeaderIcon.vue'

export default {
  components: {
    HeaderIcon
  },

  data: () => ({
    dropdown_visible: false,
    avatarSize: 'auto',
    items: [],
    selected_items: [],
    loading: false
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
      this.get_dashitems()
    },
    get_dashitems() {
      this.loading = true
      request
        .get('api/dashitems')
        .then(({ data }) => (this.items = data))
        .finally(() => (this.loading = false))
    }
  }
}
