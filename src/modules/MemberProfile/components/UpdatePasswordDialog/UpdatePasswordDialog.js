import { validations } from './vuelidator'
import request from '@/services/axios_instance'
//components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'UpdatePasswordDialog',
  mixins: [validations],
  props: {
    title: String,
    isEditDialog: { type: Boolean, default: false },
    fieldsToEdit: { type: Object, default: () => {} },
  },

  components: {
    CustomDialog
  },

  created() {
    this.$event.$on('btnloading_off', status => (this.btnloading = status))
  },

  data: () => ({
    btnloading: false,
  	opendialog: false,
  	current_password: '',
    password: '',
    repeat_password: '',
    required_current_password: true,
    show_current_password : false,
		show_password : false,
		show_repeat_password : false,
	    loading: false,
	    disabled_all : false
	 }),
  computed : {
  	initiator() {
  		return this.$store.getters.user
  	}
  },

  methods: {
  	open() {
  		this.opendialog = true
	    if (this.initiator.is_admin && this.initiator.id !== this.fieldsToEdit.id) {
	    	this.required_current_password = false
	    }
	    if (!this.initiator.is_admin && this.initiator.id !== this.fieldsToEdit.id) {
	    	this.disabled_all = true
	    }
      if (!this.initiator.is_admin && this.initiator.id === this.fieldsToEdit.id) {
        this.disabled_all = false
      }
  	},
		cancel() {
	      this.opendialog = false
	      this.btnloading = false
	      this.$emit('close-dialog')
	    },
		clear_and_close() {
	      this.password = this.repeat_password = this.current_password = ''
	      this.cancel() //close the modal
	  },
	  save() {
	    if (this.all_validations_passed()) {
	      this.btnloading = true
	      const fields_to_save = this.get_fields()
	      request.post(`api/user/update-password`, fields_to_save)
	      .then(({data}) => {
	      	this.fieldsToEdit.fields = data.data
	      	this.clear_and_close()
	      	this.$event.$emit('open_snackbar', 'Password updated')
	      })
	      .finally(() => {
	      	this.btnloading = false
	      })
	    }
	  },
		get_fields() {
      let fields = {
      	user_id : this.fieldsToEdit.id,
        password : this.password,
        password_confirmation : this.repeat_password,
        required_current_password : this.required_current_password
      }
      if (this.required_current_password) {
      	fields.current_password = this.current_password
      }
      return fields
    },
  }
}