import moment from 'moment/moment'
import makeRequestTo from '@/services/makeRequestTo'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import DatePicker from '@/common/DatePicker.vue'
import RichEditor from '@/common/RichEditor.vue'
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'AddTaskDialog',

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
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} },
    milestoneStartDate: String
  },

  data: () => ({
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
    days_init_value: 1
  }),

  computed: {
    days: {
      get: function() {
        return this.days_init_value
      },
      set: function(newValue) {
        if (!this.start_date && !this.end_date) {
          this.days_init_value = newValue
          return
        }
        if (!this.start_date) {
          this.start_date = moment(this.end_date)
            .subtract(newValue, 'days')
            .format('YYYY-MM-DD')
        } else {
          this.end_date = moment(this.start_date)
            .add(newValue, 'days')
            .format('YYYY-MM-DD')
        }

        this.days_init_value = newValue
      }
    }
  },

  watch: {
    dialog: {
      handler(new_val) {
        this.open = new_val
        if (new_val && !this.isEditDialog) {
          this.start_date = this.milestoneStartDate
          this.end_date = moment(this.milestoneStartDate)
            .add(1, 'days')
            .format('YYYY-MM-DD')
        }
        new_val && this.fill_members_dropdown()
      },
      immediate: true
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    },
    fieldsToEdit: {
      handler(new_val) {
        this.isEditDialog && this.update_fields(new_val)
      },
      deep: true
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    save() {
      const fields_to_save = {
        title: this.title,
        description: this.description,
        status: this.status,
        days: this.days,
        started_at: this.start_date,
        end_at: this.end_date,
        assigned_id: this.members.selected
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = Object.assign({}, fields)
      this.title = new_fields.title
      this.description = new_fields.description
      this.status = new_fields.status
      this.days = new_fields.days
      this.start_date = new_fields.started_at
      this.end_date = new_fields.end_at
      this.$set(this.members, 'selected', new_fields.assigned_id)
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel()
    },

    end_date_changed(val) {
      this.end_date = val
      if (val) {
        this.start_date = moment(val)
          .subtract(this.days, 'days')
          .format('YYYY-MM-DD')
      }
    },

    start_date_changed(val) {
      this.start_date = val
      if (val) {
        this.end_date = moment(val)
          .add(this.days, 'days')
          .format('YYYY-MM-DD')
      }
    },

    fill_members_dropdown() {
      this.loading = true
      makeRequestTo
        .get_project_members(this.id)
        .then(({ data }) => {
          this.members.all_items = data.data
          this.members.items = data.data
        })
        .finally(() => (this.loading = false))
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
