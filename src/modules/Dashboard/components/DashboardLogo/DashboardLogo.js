export default {
  props: {
    miniSidebar: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    rotateIcon() {
      this.$emit('update:miniSidebar', !this.miniSidebar)
    }
  }
}
