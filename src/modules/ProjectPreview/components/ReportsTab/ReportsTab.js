export default {
  data: () => ({
    iframe_src: null,
    iframe_loading: false
  }),

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Reports' }
    })
  },

  methods: {
    add_content() {
      this.$store.commit('set_custom_loader', true)
      this.iframe_src =
        'https://www.your-report.com/clients/au/5cornerdental.com/aakspr6973'
    },
    iframe_loaded() {
      this.$store.commit('set_custom_loader', false)
    }
  }
}
