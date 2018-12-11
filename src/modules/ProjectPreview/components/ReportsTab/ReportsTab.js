export default {
  name: 'ReportsTab',

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Reports' }
    })
  }
}
