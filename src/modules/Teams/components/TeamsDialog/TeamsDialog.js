import { validations } from './validations'
import makeRequestTo from '@/services/makeRequestTo'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'TeamsDialog',
  mixins: [validations],
  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: { type: Boolean, default: false },
    fieldsToEdit: { type: Object, default: () => {} }
  },

  components: {
    CustomDialog
  },

  created() {
    this.$event.$on('btnloading_off', status => (this.btnloading = status))
    this.show_create_password = this.isEditDialog
  },

  data: () => ({
    btnloading: false,
    open: false,
    first_name: '',
    last_name: '',
    group_name: '',
    job_title: '',
    email: '',
    contact_number: '',
    rate: '',
    address: '',
    password: '',
    repeat_password: '',
    group_items: [],
    show_password: false,
    show_repeat_password: false,
    loading: false,
    show_create_password: false,
    show_create_password_label: 'Let user set their password'
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
    },
    show_create_password(new_val) {
      if (!this.show_create_password) {
        this.password = this.repeat_password = ''
      }
      this.show_create_password_label = !this.show_create_password
        ? 'Let user set their password'
        : 'Let admin set their password'
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
      this.btnloading = false
      this.$emit('close-dialog')
    },

    save() {
      if (this.all_validations_passed()) {
        this.btnloading = true
        const fields_to_save = this.get_fields()
        this.$emit('save', fields_to_save)
      }
    },

    update_fields({ fields }) {
      fields['rate'] = 'rate' in fields.meta ? fields.meta.rate.value : ''
      fields['address'] =
        'address' in fields.meta ? fields.meta.address.value : ''
      this.password = 'dummypassword1'
      this.repeat_password = 'dummypassword1'
      const new_fields = Object.assign({}, fields)
      this.first_name = new_fields.first_name
      this.last_name = new_fields.last_name
      this.email = new_fields.email
      this.rate = new_fields.rate
      this.address = new_fields.address
      this.contact_number = new_fields.telephone
      this.group_name = new_fields.group_name
      this.job_title = new_fields.job_title
    },

    get_fields() {
      let fields = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        rate: this.rate,
        address: this.address,
        telephone: this.contact_number,
        group_name: this.group_name,
        job_title: this.job_title
      }
      if (this.isEditDialog) {
        fields.id = this.fieldsToEdit.id
      }
      if (this.show_create_password) {
        fields.password = this.password
        fields.password_confirmation = this.repeat_password
      }
      return fields
    },

    clear_and_close() {
      this.first_name = this.last_name = this.group_name = ''
      this.job_title = this.email = this.contact_number = ''
      this.password = this.repeat_password = ''
      this.rate = this.address = ''
      this.cancel() //close the modal
    }
  }
}
