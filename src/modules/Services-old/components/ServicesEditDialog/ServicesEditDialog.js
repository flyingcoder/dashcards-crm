import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import recommended_services from '@/assets/services/services.txt'

export default {
  name: 'ServicesEditDialog',

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  components: {
    CustomDialog
  },

  mounted() {
    // this.recommendedServices = this.get_recommended_services()
  },

  data: () => ({
    open: false,
    name: null,
    recommendedServices: []
  }),

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
    cancel() {
      this.open = false
    },

    save() {
      const fields_to_save = {
        name: this.name
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = Object.assign({}, fields)
      this.name = new_fields.service_name
    },

    get_recommended_services() {
      var services = recommended_services.split('\n')
      return services.filter(function(v) {
        return v.trim().length != 0
      })
    }
  }
}
