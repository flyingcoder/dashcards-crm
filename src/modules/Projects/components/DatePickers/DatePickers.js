export default {
  name: 'DatePickers',
  props: {
    startDate: String,
    endDate: String
  },

  data: () => ({
    date_picker: {
      menu: false,
      start_date: '',
      end_date: ''
    }
  }),

  computed: {
    text_field_label() {
      if (!this.date_picker.start_date) return ''

      const start_date = this.date_picker.start_date
      const end_date = this.date_picker.end_date
      return end_date
        ? `${start_date} until ${end_date}`
        : `${start_date} until forever`
    }
  },

  watch: {
    startDate(val) {
      this.date_picker.start_date = val
    },
    endDate(val) {
      this.date_picker.end_date = val
    },
    'date_picker.start_date'(val) {
      this.$emit('update:startDate', val)
    },
    'date_picker.end_date'(val) {
      this.$emit('update:endDate', val)
    }
  },

  methods: {
    save() {
      this.$emit('close-dropdown')
      this.cancel()
    },
    reset() {
      this.date_picker.start_date = ''
      this.date_picker.end_date = ''
    },

    cancel() {
      this.date_picker.menu = false
    }
  }
}
