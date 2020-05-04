import makeRequestTo from '@/services/makeRequestTo'
import apiTo from './api'
//Components
import ReportsList from './components/ReportsList/ReportsList.vue'
import ReportsDialog from './components/ReportsDialog.vue'
import ReportsSection from './components/ReportsSection.vue'
import ReportsEditDialog from './components/ReportEditDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Empty from '@/common/Empty.vue'

export default {
  components: {
    ReportsList,
    ReportsDialog,
    ReportsSection,
    ReportsEditDialog,
    DeleteDialog,
    Empty
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    reports: [],
    loading: false,
    iframe_loading: true,
    iframe_src: null,
    activate_save: false,
    active_report: null,
    reportIdToEdit: null,
    deleteDialog: false,
    deleteReportId: null
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
    iframeLoaded() {
      this.iframe_loading = false
    },
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    add_new_report(report) {
      this.reports.push(report)
      this.preview_row_url(report)
      this.$event.$emit('btnloading_off', false)
    },
    preview_row_url(report) {
      this.active_report = report
      if (this.active_report) {
        this.iframe_src = report.url
      }
    },

    openEditDialog(report, index) {
      this.active_report = report
      this.reportIdToEdit = index
      if (~index) {
        this.$refs.editDialog.open_dialog(this.active_report, index)
      }
    },

    openDeleteDialog(index) {
      this.deleteReportId = index
      this.deleteDialog = true
    },

    reportUpdated({ data, index }) {
      this.$set(this.reports, index, data)
      this.active_report = data
      this.$event.$emit('btnloading_off', false)
    },

    deleteReport() {
      this.$store.commit('set_custom_loader', true)
      apiTo
        .deleteProjectReport(this.id, this.deleteReportId)
        .then(() => {
          const index = this.reports.findIndex(
            r => r.id === this.deleteReportId
          )
          if (~index) {
            this.reports.splice(index, 1)
            this.active_report = null
            this.$event.$emit('open_snackbar', 'Report deleted successfully')
          }
        })
        .finally(() => {
          this.deleteDialog = false
          this.$event.$emit('btnloading_off', false)
          this.$store.commit('set_custom_loader', false)
        })
    }
  }
}
