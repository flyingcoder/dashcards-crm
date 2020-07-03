import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'
import { validations } from './local-mixins/validations'
import request from '@/services/axios_instance'
export default {
    name: 'Signup',
    mixins: [validations],
    components: { LoginComponent, CustomField },

    data: () => ({
        company_name: {
            text: '',
            is_valid: true,
            error_messages: ['Company Name is required'],
            validations: ['required']
        },
        first_name: {
            text: '',
            is_valid: true,
            error_messages: ['First name is required'],
            validations: ['required']
        },
        last_name: {
            text: '',
            is_valid: true,
            error_messages: ['Last name is required'],
            validations: ['required']
        },
        email: {
            text: '',
            is_valid: true,
            error_messages: ['Email is required', 'Please type a valid email'],
            validations: ['required', 'email']
        },
        password: {
            text: '',
            is_valid: true,
            error_messages: [
                'Password is required',
                'Password must have minimum 6 characters',
                'Password must contains at least one number'
            ],
            validations: ['required', 'minLength', 'containsNumber']
        },
        repeat_password: {
            text: '',
            is_valid: true,
            error_messages: ['Passwords do not match'],
            validations: ['matchPassword']
        },
        input_type: 'password',
        is_signup_enabled: false
    }),

    created() {
        request.get('api/configs/allowed_modules')
        .then(({data}) => {
            this.is_signup_enabled = data.allowed_modules.includes('signup') || false
        })
    },
    methods: {
        set_checkbox(new_value) {
            new_value ? (this.input_type = 'text') : (this.input_type = 'password')
        },

        register() {
            if (this.all_validations_passed()) {
                const fields = {
                    company_name: this.company_name.text,
                    first_name: this.first_name.text,
                    last_name: this.last_name.text,
                    email: this.email.text,
                    password: this.password.text
                }

                this.$auth.register(fields)
            }
        }
    }
}