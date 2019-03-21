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
    iframe_src_table: null,
    active_report: null
  }),

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

    iframe_loaded() {
      this.stop_loader()
      this.activate_save = true
    },

    stop_loader() {
      this.$store.commit('set_custom_loader', false)
    },

    save_report() {
      makeRequestTo
        .add_project_report(this.id, this.$refs.dialog.get_payload())
        .then(({ data }) => {
          this.$refs.dialog.refresh_payload()
          this.activate_save = false
          this.iframe_src = null
          this.reports.push(data)
        })
    },
    preview_row_url(report) {
      this.$store.commit('set_custom_loader', true)
      this.iframe_src_table = report.url
      this.active_report = report
    }
  }
}
