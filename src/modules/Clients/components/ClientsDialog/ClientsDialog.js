import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'ClientsDialog',

  components: {
    CustomDialog
  },

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    show_password: false,
    show_repeat_password: false,
    first_name: null,
    last_name: null,
    company_name: null,
    telephone: null,
    contact_name: null,
    email: null,
    status: null,
    location: null,
    password: null,
    repeat_password: null,
    status_items: [
      { id: 1, text: 'Active', value: 'Active' },
      { id: 2, text: 'Inactive', value: 'Inactive' }
    ]
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
        first_name: this.first_name,
        last_name: this.last_name,
        company_name: this.company_name,
        telephone: this.telephone,
        contact_name: this.contact_name,
        email: this.email,
        status: this.status,
        location: this.location
      }

      if (!this.isEditDialog) {
        if (this.password !== this.repeat_password) {
          this.$event.$emit('open_snackbar', `Passwords don't match`, 'error')
          return
        }
        fields_to_save.password = this.password
        fields_to_save.password_confirmation = this.repeat_password
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = Object.assign({}, fields)
      this.first_name = new_fields.first_name
      this.last_name = new_fields.last_name
      this.company_name = new_fields.company_name
      this.telephone = new_fields.telephone,
      this.contact_name = new_fields.contact_name,
      this.email = new_fields.email
      this.status = new_fields.status
      this.location = new_fields.location
    },

    clear_and_close() {
      this.first_name = this.last_name = this.company_name = this.location = this.contact_name = ''
      this.telephone = this.email = this.status = ''
      this.password = this.repeat_password = ''
      this.cancel() //close the modal
    }
  }
}
