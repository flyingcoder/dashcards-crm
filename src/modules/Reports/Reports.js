import makeRequestTo from '@/services/makeRequestTo'
import apiTo from './api'
import {is_screen_utils} from '@/global_utils/is_screen_utils'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import ReportsList from './components/ReportsList/ReportsList.vue'
import TableHeader from '@/common/TableHeader.vue'
import ReportsSection from './components/ReportsSection.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ReportsEditDialog from './components/ReportEditDialog.vue'
import ReportsAddDialog from './components/ReportAddDialog.vue'
import ReportViaTemplate from "./components/ReportViaTemplate.vue";
import Response from "@/modules/Forms-Builder/components/Builder/Response.vue";

export default {
    name: 'Reports',
    mixins: [is_screen_utils],
    components: {
        CustomDialog,
        ReportsList,
        TableHeader,
        ReportsSection,
        DeleteDialog,
        ReportsEditDialog,
        ReportsAddDialog,
        ReportViaTemplate,
        Response
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Reports', disabled: true, route: null}
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
        reports_selected: null,
        add_report_via_template: false,
        edit_report_via_template: false,
        next_url: null
    }),

    computed: {
        calculated_btn() {
            if (this.reports.length >= 3) return 0
            else if (this.reports.length === 2) return 1
            else if (this.reports.length === 1) return 2
            else return 3
        }
    },
    created() {
        this.loadReports()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    methods: {
        loadReports() {
            this.loading = true
            makeRequestTo.get_reports()
                .then(({data}) => {
                    this.reports = data.data
                    this.next_url = data.next_page_url
                })
                .finally(() => (this.loading = false))
        },
        load_more() {
            this.loading = true
            apiTo.get_more_reports(this.next_url)
                .then(({data}) => {
                    this.reports.push(...data.data)
                    this.next_url = data.next_page_url
                })
                .finally(() => {
                    this.loading = false
                    this.reports_selected = this.reports[this.reports.length - 1].id || 0
                })
        },
        open_dialog() {
            this.$refs.dialog.open_dialog()
        },
        openDeleteDialog(index) {
            this.deleteReportId = index
            this.deleteDialog = true
        },

        openEditDialog(report, index) {
            if (report.url === 'template') {
                this.activeReport = report
                this.edit_report_via_template = true
            } else {
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

        getIconFromUrl(report) {
            let domain = report.url !== 'template' ? new URL(report.url).host : 'crm.dashcards.com'
            return `https://www.google.com/s2/favicons?domain=${domain}&alt=feed`
        },
        previewRowUrl(report) {
            this.reports_selected = this.reports.length - 1
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

        reportUpdated({data, index}) {
            // this.$set(this.reports, index, data)
            let index1 = this.reports.findIndex(i => i.id === data.id)
            if (~index1) {
                this.reports.splice(index1, 1, data)
            }
            this.$event.$emit('btnloading_off', false)
        },
        open_add_report_via_template(item) {
            this.add_report_via_template = true
        },
        handleSaveReportViaTemplate(data) {
            this.$store.commit('set_custom_loader', true)
            apiTo.saveReportViaTemplate(data)
                .then(({data}) => {
                    this.reports.push(data)
                    this.previewRowUrl(data)
                    this.add_report_via_template = false
                })
                .finally(() => {
                    this.$store.commit('set_custom_loader', false)
                })
        },
        handleUpdateReportViaTemplate(data) {
            this.$store.commit('set_custom_loader', true)
            apiTo.updateReportViaTemplate(this.activeReport.id, data)
                .then(({data}) => {
                    let index = this.reports.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.reports.splice(index, 1, data)
                        this.previewRowUrl(data)
                    }
                    this.edit_report_via_template = false
                })
                .finally(() => {
                    this.$store.commit('set_custom_loader', false)
                })
        }

    }
}