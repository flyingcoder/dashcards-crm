import { validations } from './local-mixins/validations'
import * as api from './api'
//components
import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'


export default {
  name: 'SetPassword',
  mixins: [ validations ],
  components: { LoginComponent, CustomField },

  data: () => ({
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
      code : '',
      email : '',
      input_type: 'password',
      is_code_valid : true
  }),
  
  mounted: function() {
      this.code = this.$route.params.code
      this.email = this.$route.params.email
  },
  
  methods: {
    set_password() {
      
      /*if (!this.is_code_valid) {
        this.$event.$emit('open_snackbar', "Invalid set password code", 'error')
      } else */
      if (this.all_validations_passed()) {
        const fields = {
          email : this.email,
          password : this.password.text,
          password_confirmation : this.repeat_password.text,
          token : this.code
        }
        let __this = this
        api
          .set_user_password(fields)
          .then(function(res){
            __this.$event.$emit('open_snackbar', "Successfully set a password. Please Login to continue.", 'success', 4000)
            __this.$router.push({ name: 'login'})
          })
      }
    }
  }
}
