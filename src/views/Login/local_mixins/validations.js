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
        if (this.$v.email.required === false) {
          this.is_email_valid = false
          return
        }

        if (this.$v.email.email === false) {
          this.is_email_valid = false
        }
      }else {
        if (this.$v.password.required === false) {
          this.is_password_valid = false
          return
        }

        if (this.$v.password.minLength === false) {
          this.is_password_valid = false
          return
        }

        if (! /\d/.test(this.password)) {
          this.is_password_valid = false
        }
      }
    },

    all_validations_passed() {
      this.$v.$touch()

      if (this.has_error_the_field('email', 'required', false, 'Email is required')) return false
      if (this.has_error_the_field('email', 'email', false, 'Please type a valid email')) return false

      if (this.has_error_the_field('password', 'required', false, 'Password is required')) return false
      if (this.has_error_the_field('password', 'minLength', false, 'Password length must be at least 6 chars')) return false

      if (! /\d/.test(this.password)) {
        this.$event.$emit('open_snackbar', 'Password must contain at least one number', 'error')
        return false
      }

      return true
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