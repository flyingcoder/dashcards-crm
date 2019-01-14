import debounce from 'lodash/debounce'
import _cloneDeep from 'lodash/cloneDeep'
import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'MembersDropdown',
  inheritAttrs: false,

  props: {
    members: Array,
    memberItems: Array
  },

  data: () => ({
    items: [],
    is_loading: false,
    search: null
  }),

  watch: {
    search(val) {
      val && this.debounce(val)
    },
    memberItems(val) {
      this.items = [...val]
    }
  },

  methods: {
    members_selected(val) {
      this.$emit('update:members', val)
    },

    debounce: debounce(function(val) {
      this.is_loading = true
      makeRequestTo
        .fill_dropdown('member', val)
        .then(response => {
          this.$emit('items-updated', response.data)
        })
        .finally(() => (this.is_loading = false))
    }, 500),

    is_item_active(id) {
      return this.members.includes(id)
    },

    remove_chip(index) {
      let members = _cloneDeep(this.members)
      members.splice(index, 1)
      this.$emit('update:members', members)
    }
  }
}