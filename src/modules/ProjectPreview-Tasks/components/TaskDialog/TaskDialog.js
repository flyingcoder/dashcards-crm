import apiTo from '../../api'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import DatePicker from '@/common/DatePicker.vue'
import RichEditor from '@/common/RichEditor.vue'
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    DatePicker,
    RichEditor,
    MembersDropdown,
    CustomDialog
  },

  props: {
    id: [Number, String],
    dialog: Boolean,
    dialogTitle: String,
    task: Object,
    milestoneStartDate: String,
  },

  data: () => ({
    btnloading : false,
    open: false,
    title: null,
    description: null,
    status: 'open',
    start_date: null,
    end_date: null,
    members: {
      selected: [],
      all_items: [],
      items: [],
      loading: false
    },
    milestones: {
      selected: null,
      items: []
    }
  }),

  mounted() {
    this.$event.$on( 'btnloading_off', (status) => (this.btnloading = status))
  },

  computed: {
    computedDialog: {
      get() {
        return this.dialog
      },
      set(val) {
        !val && this.$emit('close')
        this.$emit('update:dialog', val)
      }
    }
  },

  watch: {
    dialog: {
      handler(new_val) {
        this.open = new_val
        if (
          new_val &&
          !this.members.all_items.length &&
          !this.milestones.items.length
        )
          this.fill_dropdowns()
      }
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    }
  },

  methods: {
    cancel() {
      this.dialog = false
    },

    open_dialog() {
      this.fill_dropdowns()
      this.$refs.dialog.open_dialog()
      this.update_fields(this.task)
    },

    save() {
      this.btnloading = true
      const fields_to_save = {
        milestone_id: this.milestones.selected,
        title: this.title,
        description: this.description,
        status: this.status,
        started_at: this.start_date,
        end_at: this.end_date,
        assigned: this.members.selected
      }
      this.$emit('save', fields_to_save)
    },

    update_fields(fields) {
      const task = _cloneDeep(fields)
      this.title = task.title
      this.description = task.description
      this.start_date = task.started_at
      this.end_date = task.end_at
      this.milestones.selected = task.milestone_id
      //this.members.selected = task.assigned_ids
      this.$set(this.members, 'selected', task.assignee)
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel()
    },

    async fill_dropdowns() {
      this.loading = true
      const [members, milestones] = await Promise.all([
        apiTo.get_project_members(this.id),
        apiTo.get_project_milestones(this.id)
      ])
      this.loading = false
      this.members.all_items = members.data
      this.members.items = members.data
      this.milestones.items = milestones.data
    },

    filter_dropdown_items(data_prop, search) {
      let items = _cloneDeep(this[data_prop].all_items)
      if (!search) {
        this[data_prop].items = items
      } else {
        const filtered = items.filter(item => {
          return (
            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
            item.last_name.toLowerCase().includes(search.toLowerCase())
          )
        })
        this.$set(this[data_prop], 'items', filtered)
      }
    }
  }
}
