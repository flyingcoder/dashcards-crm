//TODO DRY => has code duplication with Reports List in Reports Tab page
import makeRequestTo from '@/services/makeRequestTo'

export default {
  data: () => ({
    reports: [],
    loading: false
  }),

  created() {
    this.loading = true
    makeRequestTo
      .get_reports()
      .then(({ data }) => (this.reports = data.data))
      .finally(() => (this.loading = false))
  }
}
