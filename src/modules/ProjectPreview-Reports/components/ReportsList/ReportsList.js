export default {
    name: 'ReportList',
    props: {
        loading: Boolean,
        reports: Array,
        activeReport: Object
    },
    created() {
        this.reports.length && this.preview_row_url(0)
    },
    methods: {
        preview_row_url(index) {
            this.$emit('row-clicked', this.reports[index])
        },
        actionClicked(report, index, event) {
            this.$emit(event, { report, index })
        }
    }
}