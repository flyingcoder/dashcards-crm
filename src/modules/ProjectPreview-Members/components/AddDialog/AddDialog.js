import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
export default {
  name: 'AddDialog',
  components: {
    MembersDropdown
  },
  props: {
    dialog: Boolean,
    title: String,
    allMembers: Array
  },

  data: () => ({
    open: false,
    name: '',
    members: {
      selected: [],
      items: []
    }
  }),

  watch: {
    dialog(new_val) {
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    },
    allMembers(newVal) {
      this.members.items = [...newVal]
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      this.$emit('save', this.members.selected)
    },
    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },
    items_updated(new_members) {
      this.members.items = new_members.filter(
        new_member =>
          !this.allMembers.find(member => member.id === new_member.id)
      )
    }
  }
}
