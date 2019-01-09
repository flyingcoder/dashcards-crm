import { validations } from './validations'
import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'TeamsDialog',
  mixins: [validations],
  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    first_name: '',
    last_name: '',
    group_name: '',
    job_title: '',
    email: '',
    contact_number: '',
    password: '',
    repeat_password: '',
    group_items: [],
    show_password: false,
    show_repeat_password: false,
    loading: false
  }),

  watch: {
    dialog(new_val) {
      this.open = new_val
      new_val && this.fill_group_items()
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
    fill_group_items() {
      this.loading = false
      makeRequestTo
        .get_all_groups()
        .then(({ data }) => (this.group_items = data))
        .finally(() => (this.loading = false))
    },

    cancel() {
      this.open = false
    },

    save() {
      if (this.all_validations_passed()) {
        const fields_to_save = this.get_fields()
        this.$emit('save', fields_to_save)
      }
    },

    update_fields({ fields }) {
      this.password = 'dummypassword1'
      this.repeat_password = 'dummypassword1'
      const new_fields = Object.assign({}, fields)
      this.first_name = new_fields.first_name
      this.last_name = new_fields.last_name
      this.email = new_fields.email
      this.contact_number = new_fields.telephone
      this.group_name = new_fields.group_name
      this.job_title = new_fields.job_title
    },

    get_fields() {
      let fields = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        telephone: this.contact_number,
        group_name: this.group_name,
        job_title: this.job_title
      }
      if (!this.isEditDialog) {
        fields.password = this.password
        fields.password_confirmation = this.repeat_password
      }
      return fields
    },

    clear_and_close() {
      this.first_name = this.last_name = this.group_name = ''
      this.job_title = this.email = this.contact_number = ''
      this.password = this.repeat_password = ''
      this.cancel() //close the modal
    }
  }
}
