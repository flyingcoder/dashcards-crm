//TODO DRY => has code duplication with Reports List in Reports Tab page
export default {
    props: {
        loading: Boolean,
        reports: Array,
        activeReport: Object
    },
    created() {
        this.reports.length && this.previewRowUrl(0)
    },
    methods: {
        previewRowUrl(index) {
            this.$emit('row-clicked', this.reports[index])
        },
        actionClicked(report, index, event) {
            this.$emit(event, {report, index})
        }
    }
}
