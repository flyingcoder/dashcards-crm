import makeRequestTo from '@/services/makeRequestTo'

export default {
  props: {
    id: [Number, String]
  },

  data: () => ({
    reports: [],
    loading: false
  }),

  created() {
    this.loading = true
    makeRequestTo
      .get_project_reports(this.id)
      .then(({ data }) => (this.reports = data.data))
      .finally(() => (this.loading = false))
  }
}
