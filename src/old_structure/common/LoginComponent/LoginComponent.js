import CustomField from '@/common/CustomField/CustomField.vue'

export default {
  name: 'LoginComponent',
  components: {CustomField},
  props: {
    'title-text': String,
    'button-text': String,
    'has-forgot-password': Boolean,
    'checkbox-text': String,
    'footer-text': String,
    'footer-link': String,
    'link-text': String,
    'card-height': String,
    'has-tools': {
      default: true
    },
    'has-footer': {
      default: true
    }
  },

  data: () => ({
    checkbox: false,
  }),

  watch: {
    checkbox(new_value) {
      this.$emit('checkbox-changed', this.checkbox)
    }
  },
}