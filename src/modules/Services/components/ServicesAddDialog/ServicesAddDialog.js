import recommended_services from '@/assets/services/services.txt'

export default {
  name: 'ServicesAddDialog',
  props: {
    dialog: Boolean,
    title: String
  },

  data: () => ({
    open: false,
    name: '',
    services: [],
    recommendedServices: [],
    btnloading: false
  }),

  mounted() {
    this.services = []
    // this.recommendedServices = this.get_recommended_services()
  },
  created(){
    this.$event.$on('btnloading_off', (val) => { this.btnloading = false })
  },
  computed: {
    is_disabled() {
      return !this.services.length
    }
  },

  watch: {
    dialog(new_val) {
      this.open = new_val
      if (new_val === false) {
        this.services = []
      }
    },
    open(new_val) {
      this.btnloading = false
      this.$emit('update:dialog', new_val)
    }
  },

  methods: {
    get_recommended_services() {
      var services = recommended_services.split('\n')
      return services.filter(function(v) {
        return v.trim().length != 0
      })
    },

    add_service() {
      if (!this.name) {
        this.$event.$emit('open_snackbar', 'Service name required!', 'error')
        return
      }

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
      this.btnloading = true
      const fields_to_save = this.services
      this.$emit('save', fields_to_save)
    },

    clear_and_close() {
      this.btnloading = false
      this.name = ''
      this.services = []
      this.cancel() //close the modal
    }
  }
}
