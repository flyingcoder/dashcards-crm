import moment from 'moment/moment'
//Components
import DatePicker from '@/common/DatePicker.vue'
import RichEditor from '@/common/RichEditor.vue'
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'

export default {
  name: 'AddTaskDialog',

  components: {
    DatePicker,
    RichEditor,
    MembersDropdown
  },

  props: {
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
    status: null,
    start_date: null,
    end_date: null,
    members: {
      selected: [],
      items: []
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
    dialog(new_val) {
      this.open = new_val
      if (new_val && !this.isEditDialog) {
        this.start_date = this.milestoneStartDate
        this.end_date = moment(this.milestoneStartDate)
          .add(1, 'days')
          .format('YYYY-MM-DD')
      }
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

    save() {
      const fields_to_save = {
        title: this.title,
        description: this.description,
        status: this.status,
        days: this.days,
        started_at: this.start_date,
        end_at: this.end_date,
        assinged_id: this.members.selected
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
      this.$set(this.members, 'items', new_fields.members)
      this.$set(this.members, 'selected', new_fields.members.map(m => m.id))
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

    items_updated(new_members) {
      this.members.items = new_members
    }
  }
}
