import { required, numeric, minLength, email } from 'vuelidate/lib/validators'

export const validations = {

	validations: {

		first_name: { text: {	required } },	
		last_name: { text: { required } },
		group_name: { text: { required, } },
    job_title: { text: { required } },
		email: { text: { required, email } },
    telephone: { text: { required,numeric} },
		
		password: {
			text: {
				required,
				minLength: minLength(6),
				containsNumber(password) {
					if (!password || password.length < 6) return
					return /\d/.test(password)
				}
			}
		},
		repeat_password: {
			required,
			text: {
					matchPassword(repeat_password) {
						return repeat_password === this.password.text
					}
				}
		},
		
	},

	methods: {

		validate_field(field) {
			this.$v[field].text.$touch()
			for (let [index, validation] of this[field].validations.entries()) {
				if (this.$v[field].text[validation] === false) { //if the field is not valid
					this[field].is_valid = false
					this.$event.$emit('open_snackbar', this[field].error_messages[index], 'error', 'notification', 3000)
					return false //returning, so the input field has error
				}
			}
			this[field].is_valid = true //if all validation passed, clear the error state of input field
			return true
		},

		all_validations_passed() {
			const FIELDS = ['first_name', 'last_name', 'group_name', 'job_title', 'email', 'telephone', 'password', 'repeat_password']

			for (let field of FIELDS) { //calling validate
				if (!this.validate_field(field)) //if any validation is false
					return false
			}
			return true //if all validation passed
		},

	}

}