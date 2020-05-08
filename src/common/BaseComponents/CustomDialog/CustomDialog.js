export default {
  props: {
    title: { type: String, default: 'Default Modal Title' },
    content: { type: String, default: 'Default Modal Text Content' },
    button1Text: { type: String, default: 'Cancel' },
    button2Text: { type: String, default: 'Delete' },
    open: Boolean,
    value: Boolean,
    mainBtnDisabled: { type: Boolean, default: false },
    maxWidth: { type: [Number, String], default: '600px' }
  },

  data: () => ({
    dialog: false,
    loading: false,
    btnloading: false
  }),

  mounted() {
    this.$event.$on('btnloading_off', status => { this.btnloading = false })
  },

  watch: {
    value: {
      handler(val) {
        this.dialog = val
      },
      immediate: true
    },
    open(new_val) {
      this.dialog = new_val
      this.btnloading = false
    },
    dialog(val) {
      this.$emit('update:open', val)
      this.$emit('input', val)
    }
  },

  methods: {
    button1clicked() {
      this.$emit('button1')
      this.close_dialog()
    },

    button2clicked() {
      this.btnloading = true
      this.$emit('button2')
    },

    open_dialog() {
      this.dialog = true
    },

    close_dialog() {
      this.dialog = false
      this.btnloading = false
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.close_dialog() //close the modal
    },

    activate_loading() {
      this.loading = true
    },

    disable_loading() {
      this.loading = false
    }
  }
}
