import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'Login',
  components: {LoginComponent, CustomField},

  data: () => ({
    email: '',
    password: '',
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
      //TODO implement login
      this.$event.$emit('open_snackbar', 'Login Clicked')
    },
  }
}