export default {
  name: 'EmailDialog',

  props: {
    dialog: Boolean
  },

  data: () => ({
    open: false,
    status_items: [
      { id: 1, text: 'Once', value: 'Once' },
      { id: 2, text: 'Weekly', value: 'Weekly' },
      { id: 3, text: 'Monthly', value: 'Monthly' }
    ]
  }),

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
    clear_and_close() {
      this.cancel() //close the modal
    }
  }
}
