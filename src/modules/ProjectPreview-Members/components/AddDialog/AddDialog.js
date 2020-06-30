import * as apiTo from '../../api'
// Components
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'AddDialog',
  components: {
    MembersDropdown,
    CustomDialog
  },
  props: {
    dialog: Boolean,
    title: String,
    id: [Number, String]
  },

  data: () => ({
    open: false,
    name: '',
    members: {
      selected: [],
      items: [],
      allItems: [],
      loading: false
    }
  }),

  computed: {
    disableSave() {
      return !this.members.selected.length
    }
  },

  watch: {
    dialog(new_val) {
      new_val && this.getProjectMembers()
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    }
  },

  methods: {
    getProjectMembers() {
      this.members.loading = true
      apiTo
        .getProjectMembers(this.id)
        .then(({ data }) => {
          this.members.allItems = data
          this.members.items = data
        })
        .finally(() => (this.members.loading = false))
    },

    cancel() {
      this.open = false
    },
    save() {
      if (this.disableSave) return
      this.$emit('save', this.members.selected)
    },
    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },
    filter_members(search) {
      let items = _cloneDeep(this.members.allItems)
      if (!search) {
        this.members.items = items
      } else {
        const filtered = items.filter(item => {
          return (
            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
            item.last_name.toLowerCase().includes(search.toLowerCase())
          )
        })
        this.$set(this.members, 'items', filtered)
      }
    }
  }
}
