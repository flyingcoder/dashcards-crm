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
    dialogTitle: String
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
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
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
