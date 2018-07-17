export default {
  name: 'CustomField',
  props: {
    className: String,
    icon: String,
    'input-type': String,
    'placeholder': String,
    value: String
  },

  computed: {
    imagePath () {
      return this.icon ? require('@/assets/' + this.icon) : null
    }
  },

  methods: {
    emit_input_value(event) {
      this.$emit('input', event.target.value)
    }
  }
}