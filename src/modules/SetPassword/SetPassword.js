import LoginComponent from '@/common/LoginComponent/LoginComponent.vue'
import CustomField from '@/common/CustomField/CustomField.vue'
import { validations } from './local-mixins/validations'
import api from '@/services/makeRequestTo'

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
      id : '',
      input_type: 'password',
      is_code_valid : true
  }),
  
  mounted: function() {
      this.code = this.$route.params.code
      let __this = this;
      api
        .get_user_by_code(this.code)
        .then(function(response) {
            __this.id = response.data.user_id
        })
        .catch(function(error) {
          __this.$event.$emit('open_snackbar', "Invalid set password code", 'error', 10000)
          __this.is_code_valid = false
        })
  },
  
  methods: {
    set_password() {
      
      if (!this.is_code_valid) {
        this.$event.$emit('open_snackbar', "Invalid set password code", 'error')
      } else if (this.all_validations_passed()) {
        const fields = {
          user_id : this.id,
          password : this.password.text,
          code : this.code
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
