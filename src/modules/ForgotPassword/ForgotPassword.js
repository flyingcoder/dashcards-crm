import * as apiTo from './api'
import axios from 'axios'
import { settings } from '@/variables'
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
      axios
        .post(settings.apiHostBaseURL+`/api/password/email/`, { email: this.email })
        .then( response => {
          this.$event.$emit('open_snackbar', response.data.message)
          this.loading = false
          this.sent = true
        })
        .catch(error => {
          console.log(error.response.data.message)
            this.loading = false
            this.sent = false
            this.$event.$emit('open_snackbar', error.response.data.message, 'error')
        })
    }
  }
}
