import { required, numeric, minLength, email } from 'vuelidate/lib/validators'
import _ from "lodash";

export const validations = {

	validations: {

		first_name: { required },
		last_name: { required },
		group_name: { required },
    job_title: { required },
		email: { required, email },
		contact_number: { required,numeric },

		password: {
			required,
			minLength: minLength(6),
			containsNumber(password) {
				if (!password || password.length < 6) return true
				return /\d/.test(password)
			}
		},
		repeat_password: {
			required,
			matchPassword(repeat_password) {
				return repeat_password === this.password
			}
		},
		
	},

	created(){
		if (this.isEditDialog) { //if is edit dialog don't consider password & repeat_password
			delete this.$options.validations.password
			delete this.$options.validations.repeat_password
		}
	},

	methods: {

		on_blur_field(field) {
			this.$v[field].$touch()
			if (this.$v[field].$invalid) {
				const field_name = field.split('_').map(_.upperFirst).join(' ')
				this.$event.$emit('open_snackbar', `${field_name} is invalid`, 'error')
			}
		},

		all_validations_passed() {
			this.$v.$touch()

			if (this.$v.$invalid) {
				this.$event.$emit('open_snackbar', 'Please fill fields correctly!', 'error')
				return false
			}

			return true
		}

	}

}