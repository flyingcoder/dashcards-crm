import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'Signup',
  components: {LoginComponent, CustomField},

  data: () => ({
    full_name: '',
    company: '',
    email: '',
    password: '',
    input_type: 'password'
  }),

  methods: {
    set_checkbox(new_value) {
      new_value ? this.input_type = 'text' : this.input_type = 'password'
    },

    signup() {
      //TODO implement sign up
      this.$event.$emit('open_snackbar', 'sign up clicked')
    }
  }
}
