import { required, email, minLength } from 'vuelidate/lib/validators'

export const validations = {
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
    }
  },

  methods: {

    handle_validation(type) {
      if (type === 'email') {
        this.validate_field('email', 'is_email_valid', 'email')
      }else {
        this.validate_field('password', 'is_password_valid', 'minLength')
      }
    },

    validate_field(type, property , validation) { //making red border for input fields
      this.$v[type].$touch()
      if (this.$v[type].required === false) {
        this[property] = false
        return
      }
      if (!this.$v[type][validation]) this[property] = false
    },

    all_validations_passed() {
      this.$v.$touch()
      if (!this.$v.$invalid) return true //if fields are valid return true

      if (this.has_error_the_field('email', 'required', false, 'Email is required')) return false
      if (this.has_error_the_field('email', 'email', false, 'Please type a valid email')) return false

      if (this.has_error_the_field('password', 'required', false, 'Password is required')) return false
      return !this.has_error_the_field('password', 'minLength', false, 'Password length must be at least 6 chars')
    },

    has_error_the_field(type, validation, condition, error_message) {
      if (this.$v[type][validation] === condition) {
        this.$event.$emit('open_snackbar', error_message, 'error')
        return true
      }
      return false
    }

  }
}