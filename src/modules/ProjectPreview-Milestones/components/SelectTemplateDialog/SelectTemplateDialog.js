import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'SelectTemplateDialog',
    components: {
        CustomDialog
    },
    props: {
        title: String,
        dialogTitle: String
    },
    data: () => ({
        dialog: false,
        loading: false,
        btnloading: false,
        templates: [],
        selected_template: []
    }),
    created() {
        this.$event.$on('btnloading_off', () => { this.btnloading = false })
    },
    computed: {
        is_disabled() {
            return this.loading || this.selected_template.length === 0
        }
    },

    watch: {
        dialog(val) {
            val && this.fill_tree()
            this.btnloading = false
            this.dialog = val
            this.selected_template = []
        }
    },
    methods: {
        fill_tree() {
            this.loading = true
            request
                // .get('api/template?all=true&type=milestone')
                .get('api/template/milestone/tree-view?all=true')
                .then(response => (this.templates = response.data))
                .finally(() => (this.loading = false))
        },
        open() {
            this.dialog = true
            this.btnloading = false
        },
        cancel() {
            this.dialog = false
        },

        save() {
            if (this.is_disabled) return
            this.btnloading = true
            this.$emit('save', this.selected_template)
        }
    }
}