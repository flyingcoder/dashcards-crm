import DatePicker from '@/common/DatePicker.vue'
import moment from 'moment'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'MilestoneTabDialog',
  components: {
    DatePicker,
    CustomDialog
  },

  props: {
    dialog: Boolean,
    dialogTitle: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    title: null,
    start_date: null,
    end_date: null,
    status: 'active',
    days_init_value: 0
  }),

  computed: {
    days: {
      get: function() {
        if (!this.start_date || !this.end_date) return this.days_init_value
        return moment(this.end_date).diff(moment(this.start_date), 'days')
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
    end_date_changed(val) {
      this.end_date = val
      if (this.days && val) {
        this.start_date = moment(val)
          .subtract(this.days, 'days')
          .format('YYYY-MM-DD')
      }
    },

    start_date_changed(val) {
      this.start_date = val
      if (this.days && val) {
        this.end_date = moment(val)
          .add(this.days, 'days')
          .format('YYYY-MM-DD')
      }
    },

    cancel() {
      this.open = false
    },

    save() {
      const fields_to_save = {
        title: this.title,
        status: this.status,
        days: this.days,
        started_at: this.start_date,
        end_at: this.end_date
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = Object.assign({}, fields)
      this.title = new_fields.title
      this.status = new_fields.status
      this.days = new_fields.days
      this.start_date = new_fields.started_at
      this.end_date = new_fields.end_at
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    }
  }
}
