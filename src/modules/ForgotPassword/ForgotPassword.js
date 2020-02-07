import * as apiTo from './api'
//components
import Loader from '@/common/BaseComponents/Loader.vue'
import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'ForgotPassword',
  components: { 
    LoginComponent, 
    CustomField,
    Loader
  },

  data: () => ({
    email: '',
    loading: false,
    sent: false
  }),

  methods: {
    send_email() {
      this.loading = true
      apiTo
        .sendEmail({ email: this.email })
        .then( (response) => {
          this.$event.$emit('open_snackbar', 'Reset instruction is sent to your email!')
          this.loading = false
          this.sent = true
        })
    }
  }
}
