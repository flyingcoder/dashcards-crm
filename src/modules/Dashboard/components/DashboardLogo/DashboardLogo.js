export default {
  props: {
    methods: {
      type: Object
    }
  },
  data: () => ({
    iconClass: ''
  }),

  methods: {
    rotateIcon(iconClass) {
      if (iconClass) this.iconClass = ''
      else this.iconClass = 'close'
      this.$emit('toggle-sidebar', !iconClass)
    }
  }
}
