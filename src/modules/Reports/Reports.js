//TODO DRY, uses the same code as ReportsTab
import makeRequestTo from '@/services/makeRequestTo'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import ReportsList from './components/ReportsList/ReportsList.vue'
import TableHeader from '@/common/TableHeader.vue'
import ReportsSection from './components/ReportsSection.vue'

export default {
  components: {
    CustomDialog,
    ReportsList,
    TableHeader,
    ReportsSection
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Reports', disabled: true, router_name: null }
    ],
    reports: [],
    loading: false,
    iframeSrc: null,
    link: '',
    title: '',
    valid_url: false,
    activateSave: false,
    activeReport: null
  }),

  computed: {
    is_disabled() {
      return !this.link || !this.valid_url || !this.title
    }
  },

  created() {
    this.loading = true
    makeRequestTo
      .get_reports()
      .then(({ data }) => (this.reports = data.data))
      .finally(() => (this.loading = false))
  },

  methods: {
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    iframe_loaded() {
      this.activateSave = true
      this.$store.commit('set_custom_loader', false)
    },

    validate_url(event) {
      this.$nextTick(() => {
        this.valid_url = event.target.validity.valid
      })
    },

    on_dialog_save() {
      this.$refs.dialog.close_dialog()
      this.$store.commit('set_custom_loader', true)
      this.iframeSrc = this.link
    },

    previewRowUrl(report) {
      this.iframeSrc = report.url
      this.activeReport = report
    },

    save_report() {
      this.$store.commit('set_custom_loader', true)
      makeRequestTo
        .add_new_report({
          url: this.link,
          title: this.title
        })
        .then(({ data }) => {
          this.link = ''
          this.title = ''
          this.activateSave = false
          this.iframeSrc = null
          this.reports.push(data)
        })
        .finally(() => this.$store.commit('set_custom_loader', false))
    }
  }
}
