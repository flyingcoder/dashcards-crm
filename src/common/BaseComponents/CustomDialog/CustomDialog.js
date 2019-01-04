export default {
  props: {
    title: { type: String, default: 'Default Modal Title' },
    content: { type: String, default: 'Default Modal Text Content' },
    button1Text: { type: String, default: 'Cancel' },
    button2Text: { type: String, default: 'Delete' },
    open: Boolean
  },

  data: () => ({
    dialog: false,
    loading: false
  }),

  watch: {
    open(new_val) {
      this.dialog = new_val
    },
    dialog(new_val) {
      this.$emit('update:open', new_val)
    }
  },

  methods: {
    button1clicked() {
      this.$emit('button1')
    },

    button2clicked() {
      this.$emit('button2')
    },

    open_dialog() {
      this.dialog = true
    },

    close_dialog() {
      this.dialog = false
    },

    activate_loading() {
      this.loading = true
    },

    disable_loading() {
      this.loading = false
    }
  }
}
