//TODO DRY, uses the same code as ReportsTab
import makeRequestTo from '@/services/makeRequestTo'
import apiTo from './api'
import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import ReportsList from './components/ReportsList/ReportsList.vue'
import TableHeader from '@/common/TableHeader.vue'
import ReportsSection from './components/ReportsSection.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ReportsEditDialog from './components/ReportEditDialog.vue'
import ReportsAddDialog from './components/ReportAddDialog.vue'
import Empty from '@/common/Empty.vue'

export default {
    name: 'Reports',
    mixins: [is_screen_medium_and_down],
    components: {
        CustomDialog,
        ReportsList,
        TableHeader,
        ReportsSection,
        DeleteDialog,
        ReportsEditDialog,
        ReportsAddDialog,
        Empty
    },

    props: {
        id: [Number, String]
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
        activeReport: null,
        deleteDialog: false,
        deleteReportId: null,
        reportIdToEdit: null,
        reports_selected: null
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
            .then(({ data }) => {
                this.reports = data.data
            })
            .finally(() => (this.loading = false))
    },

    methods: {
        open_dialog() {
            this.$refs.dialog.open_dialog()
        },

        openDeleteDialog(index) {
            this.deleteReportId = index
            this.deleteDialog = true
        },

        openEditDialog(report, index) {
            // let index = this.reports.findIndex(i => i.id === this.activeReport.id)
            // if (~index) {
            //   this.$refs.editDialog.open_dialog(this.activeReport, index)
            // }
            if (~index) {
                this.$refs.editDialog.open_dialog(report, index)
            }
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
        /*
        on_dialog_save() { //kirby:removed, transfer to ReportAddDialog component
          this.$refs.dialog.close_dialog()
          this.$store.commit('set_custom_loader', true)
          this.iframeSrc = this.link
        },*/
        getIconFromUrl(report) {
            let domain = new URL(report.url).host
            return `https://www.google.com/s2/favicons?domain=${domain}&alt=feed`
        },
        previewRowUrl(report) {
            // console.log(report.id)
            this.activeReport = report
            if (this.activeReport) {
                this.iframeSrc = report.url
            }
        },

        add_new_report(report) {
            this.reports.push(report)
            this.previewRowUrl(report)
            this.$event.$emit('btnloading_off', false)
        },

        deleteReport() {
            this.$store.commit('set_custom_loader', true)
            apiTo
                .deleteReport(this.deleteReportId)
                .then(() => {
                    const index = this.reports.findIndex(
                        r => r.id === this.deleteReportId
                    )
                    if (~index) {
                        this.reports.splice(index, 1)
                        this.activeReport = null
                        this.$event.$emit('open_snackbar', 'Report deleted successfully')
                    }
                })
                .finally(() => {
                    this.deleteDialog = false
                    this.$store.commit('set_custom_loader', false)
                    this.$event.$emit('btnloading_off', false)
                })
        },

        reportUpdated({ data, index }) {
            this.$set(this.reports, index, data)
            this.$event.$emit('btnloading_off', false)
        }
    }
}