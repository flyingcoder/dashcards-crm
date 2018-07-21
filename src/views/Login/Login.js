import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'
import { validations } from "./local-mixins/validations";

export default {
  name: 'Login',
  mixins: [validations],
  components: {LoginComponent, CustomField},

  data: () => ({
    email: '',
    password: '',
    is_email_valid: true,
    is_password_valid: true,
    remember_me: false,
  }),

  methods: {
    set_checkbox(new_value) {
      this.remember_me =  new_value
    },

    login() {
      this.all_validations_passed() && this.$auth.login({ email: this.email, password: this.password })
    },

  }
}