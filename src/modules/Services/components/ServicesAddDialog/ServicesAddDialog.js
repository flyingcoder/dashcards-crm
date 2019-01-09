export default {
  name: 'ServicesAddDialog',

  props: {
    dialog: Boolean,
    title: String
  },

  data: () => ({
    open: false,
    name: '',
    services: []
  }),

  computed: {
    is_disabled() {
      return !this.services.length
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
    add_service() {
      if (!this.name) return

      this.services.unshift({ name: this.name })
      this.name = ''
    },

    delete_service(index) {
      this.services.splice(index, 1)
    },

    cancel() {
      this.open = false
    },
    save() {
      const fields_to_save = this.services
      this.$emit('save', fields_to_save)
    },

    clear_and_close() {
      this.name = ''
      this.services = []
      this.cancel() //close the modal
    }
  }
}
