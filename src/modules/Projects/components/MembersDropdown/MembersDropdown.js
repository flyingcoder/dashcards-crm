import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'MembersDropdown',
  inheritAttrs: false,

  props: {
    members: Array,
    memberItems: Array,
    isLoading: Boolean,
    multiple: {
      type: Boolean,
      default: true
    },
    showOuterIcon: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [],
    search: null
  }),

  watch: {
    search(val) {
      this.$emit('search', val)
    },

    memberItems(val) {
      this.items = [...val]
    }
  },

  methods: {
    members_selected(val) {
      this.$emit('update:members', val)
    },

    is_item_active(id) {
      return this.members.includes(id)
    },

    remove_chip(index) {
      let members = _cloneDeep(this.members)
      members.splice(index, 1)
      this.$emit('update:members', members)
    },
    add_to_selected(item) {
      if (this.is_item_active(item.id)) {
        return
      }
      this.members.push(item.id)
    },
    open_add_new_member() {
      this.$event.$emit('open-new-member-dialog', true)
    }
  }
}
