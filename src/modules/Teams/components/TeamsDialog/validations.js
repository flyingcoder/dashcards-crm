import {email, minLength, numeric, required, requiredIf} from 'vuelidate/lib/validators'
import upperFirst from 'lodash/upperFirst'

export const validations = {
    validations: {
        first_name: {
            required
        },
        last_name: {
            required
        },
        group_name: {
            required
        },
        job_title: {
            required
        },
        email: {
            required,
            email
        },
        rate: {
            numeric
        },

        password: {
            required: requiredIf(function () {
                return this.show_create_password
            }),
            minLength: minLength(6),
            containsNumber(password) {
                if (!password || password.length < 6) return true
                return /\d/.test(password)
            }
        },
        repeat_password: {
            required: requiredIf(function () {
                return this.show_create_password
            }),
            matchPassword(repeat_password) {
                return repeat_password === this.password
            }
        }
    },

    methods: {
        on_blur_field(field) {
            this.$v[field].$touch()
            if (this.$v[field].$invalid) {
                const field_name = field.split('_').map(upperFirst).join(' ')
                this.$event.$emit('open_snackbar', `${field_name} is invalid`, 'error')
            }
        },
        showUpdate(payload) {
            this.telephone_is_valid = payload.isValid
            this.telephone = payload.isValid ? payload : null
        },
        all_validations_passed() {
            this.$v.$touch()
            if (this.telephone && !this.telephone_is_valid) {
                this.$event.$emit('open_snackbar', 'Invalid Phone format', 'error')
                return false
            }
            if (this.$v.$invalid) {
                this.$event.$emit('open_snackbar', 'Please fill fields correctly!', 'error')
                return false
            }
            return true
        }
    }
}
