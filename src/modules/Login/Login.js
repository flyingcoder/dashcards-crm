import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
    name: 'Login',
    components: { LoginComponent, CustomField },

    data: () => ({
        email: '',
        password: '',
        is_email_valid: true,
        is_password_valid: true,
        remember_me: false
    }),

    created() {
        /* Be sure we remove logged user */
        this.$store.dispatch('logout')
    },
    computed: {
        is_signup_enabled(){
            if(this.$store.getters.global_configs) {
                return this.$store.getters.global_configs.allowed_modules.includes('signup')
            }
            return false;
        }
    },
    methods: {
        set_checkbox(new_value) {
            this.remember_me = new_value
        },

        login() {
            this.$auth.login({ email: this.email, password: this.password })
        }
    }
}