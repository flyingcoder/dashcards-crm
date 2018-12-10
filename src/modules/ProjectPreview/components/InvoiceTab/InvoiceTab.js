export default {
  name: 'InvoiceTab',

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Invoice' }
    })
  }
}
