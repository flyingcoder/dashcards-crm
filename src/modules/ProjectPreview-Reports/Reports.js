import makeRequestTo from '@/services/makeRequestTo'
//Components
import ReportsList from './components/ReportsList/ReportsList.vue'
import ReportsDialog from './components/ReportsDialog.vue'
import ReportsSection from './components/ReportsSection.vue'

export default {
  components: {
    ReportsList,
    ReportsDialog,
    ReportsSection
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    reports: [],
    loading: false,
    iframe_src: null,
    activate_save: false,
    active_report: null
  }),

  computed: {
    has_permission() {
      if (this.$store.getters.user.is_admin) return true
      return this.$_permissions.get('hq_reports')
    }
  },

  created() {
    this.loading = true
    makeRequestTo
      .get_project_reports(this.id)
      .then(({ data }) => (this.reports = data.data))
      .finally(() => (this.loading = false))
  },

  methods: {
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    add_new_report(report) {
      this.reports.push(report)
    },
    preview_row_url(report) {
      this.iframe_src = report.url
      this.active_report = report
    }
  }
}
