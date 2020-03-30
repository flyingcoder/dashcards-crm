import {
  required,
  requiredIf,
  numeric,
  email,
  minLength
} from 'vuelidate/lib/validators'
import upperFirst from 'lodash/upperFirst'

export const validations = {
  validations: {
    current_password: {
      required: requiredIf(function() {
        return this.required_current_password
      })
    },
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
    }
  },

  methods: {
    on_blur_field(field) {
      this.$v[field].$touch()
      if (this.$v[field].$invalid) {
        const field_name = field
          .split('_')
          .map(upperFirst)
          .join(' ')
        this.$event.$emit('open_snackbar', `${field_name} is invalid`, 'error')
      }
    },

    all_validations_passed() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.$event.$emit(
          'open_snackbar',
          'Please fill fields correctly!',
          'error'
        )
        return false
      }

      return true
    }
  }
}
