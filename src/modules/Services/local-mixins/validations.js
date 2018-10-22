import { required, minLength, email } from 'vuelidate/lib/validators'

export const validations = {

	validations: {

        name: { text: {	required } },
        
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
			const FIELDS = ['name']

			for (let field of FIELDS) { //calling validate
				if (!this.validate_field(field)) //if any validation is false
					return false
			}
			return true //if all validation passed
		},

	}

}