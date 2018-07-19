import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'Login',
  components: {LoginComponent, CustomField},

  data: () => ({
    email: 'ross.buzzooka@gmail.com',
    password: 'gDQsa7nUyadmin',
    remember_me: false,
    error: {
      status: false,
      message: ''
    }
  }),

  methods: {
    set_checkbox(new_value) {
      this.remember_me =  new_value
    },

    login() {
      if (!this.email || !this.password) {
        this.$event.$emit('open_snackbar', 'Wrong email or password')
        return
      }
      this.$auth.login({ email: this.email, password: this.password })
    },
  }
}