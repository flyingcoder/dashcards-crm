import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'ForgotPassword',
  components: {LoginComponent, CustomField},

  data: () => ({
    email: ''
  }),

  methods: {
    send_email() {
      //TODO implement send email
      console.log('send clicked')
    }
  }
}