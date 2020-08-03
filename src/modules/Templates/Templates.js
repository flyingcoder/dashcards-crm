import {list_functionality} from "@/services/list-functionality/list-functionality";
import request from "@/services/axios_instance";
//components
import VueTable from "@/common/VueTable/VueTable.vue"
import Actions from "@/common/VueTable/Actions.vue"
import MilestoneDialog from "@/modules/Milestone/components/MilestoneDialog/MilestoneDialog.vue";
import DeleteDialog from "@/common/DeleteDialog.vue"
import MilestoneTemplateDialog
    from "@/modules/MilestoneTemplate/components/MilestoneTemplateDialog/MilestoneTemplateDialog.vue";
import InvoiceTemplateDialog from "@/modules/InvoiceTemplates/components/InvoiceTemplateDialog.vue"
import InvoiceTemplateHelp from "@/modules/InvoiceTemplates/components/InvoiceTemplateHelp.vue"
import InvoiceTemplatePreview from "@/modules/InvoiceTemplates/components/InvoiceTemplatePreview.vue"

export default {
    name: 'Templates',
    mixins: [list_functionality],
    components: {
        VueTable,
        Actions,
        MilestoneDialog,
        DeleteDialog,
        MilestoneTemplateDialog,
        InvoiceTemplateDialog,
        InvoiceTemplatePreview,
        InvoiceTemplateHelp,
    },

    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, router_name: 'default-content'},
            {text: 'Templates', disabled: true, router_name: null}
        ],
        headers: [
            {text: 'Type', value: 'replica_type', width: 100},
            {text: 'Name', value: 'name'},
            {text: 'Milestones', value: 'milestones_count', width: 110, align: 'center'},
            {text: 'Added By', width: 90, sortable: false},
            {text: 'Status', value: 'status', width: 100},
            {text: 'Action', value: 'action', align: 'center', sortable: false, width: 180}
        ],
        table_config: {
            route_name: 'templates',
            add_message: 'New Template added successfully!',
            update_message: 'Template updated successfully!',
            delete_message: 'Template deleted successfully!'
        },
        type: 'all',
        activeTemplate: null,
        milestone_add_dialog: false,
        milestone_edit_dialog: false,
        milestone_delete_dialog: false,
        invoice_add_dialog: false,
        invoice_edit_dialog: false,
        invoice_delete_dialog: false,
        report_add_dialog: false,
        report_edit_dialog: false,
        report_delete_dialog: false,
        invoice_fields: []
    }),
    filters: {
        remove_app(text) {
            return text.replace("App\\", '')
        }
    },
    created() {
        this.load_templates()
        this.getFields()
        this.$event.$on('show-invoice-template-guide', () => {
            this.open_help_dialog()
        })
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    computed: {
        dynamic_api() {
            return `api/template?type=${this.type}`
        },
        defaultTemplates() {
            if (this.items.length > 0) {
                return this.items.filter(template => {
                    return template.company_id === 0
                })
            } else {
                return []
            }
        }

    },
    methods: {
        getType(item) {
            return item.replica_type.replace("App\\", '').toLowerCase()
        },
        load_templates() {
            this.fill_table_via_url(this.dynamic_api)
        },
        load_more() {
            this.load_more_via_url(this.dynamic_api)
        },
        showByType(type) {
            this.type = type
            this.load_templates()
        },
        open_template_add_dialog(type) {
            if (type === 'milestone') {
                this.milestone_add_dialog = true
                this.milestone_edit_dialog = false
            } else if (type === 'invoice') {
                this.invoice_add_dialog = true
                this.invoice_edit_dialog = false
                this.$refs.invoice_add_edit_dialog.open_dialog(false, null)
            } else { //report
                this.report_add_dialog = true
                this.report_edit_dialog = false
            }
        },
        open_template_delete_dialog(item) {
            let type = this.getType(item)
            this.activeTemplate = item
            if (type === 'milestone') {
                this.milestone_delete_dialog = true
            } else if (type === 'invoice') {
                this.invoice_delete_dialog = true
            } else { //report
                this.report_delete_dialog = true
            }
        },
        open_template_edit_dialog(item) {
            let type = this.getType(item)
            this.activeTemplate = item
            this.edit_item.id = item.id
            if (type === 'milestone') {
                this.milestone_edit_dialog = true
                this.milestone_add_dialog = false
            } else if (type === 'invoice') {
                this.invoice_edit_dialog = true
                this.invoice_add_dialog = false
                this.$refs.invoice_add_edit_dialog.open_dialog(true, item)
            } else { //report
                this.report_edit_dialog = true
                this.report_add_dialog = false
            }
        },
        open_template_view(item) {
            this.activeTemplate = item
            let type = this.getType(item)
            if (type === 'milestone') {
                this.$router.push({name: 'templates/milestone', params: {id: item.id}})
            } else if (type === 'invoice') {
                this.$refs.invoice_template_view_dialog.open_dialog(item)
            } else { //report
                //todo
            }
        },
        open_help_dialog() {
            this.$refs.help_dialog.open_dialog()
        },
        handleInvoiceTemplateSave(data) {
            if (this.invoice_edit_dialog) {
                this.updateInvoiceTemplate(data)
            } else {
                this.createInvoiceTemplate(data)
            }
        },
        createInvoiceTemplate(data) {
            request.post(`api/template/invoices`, data)
                .then(({data}) => {
                    this.items.push(data)
                    this.invoice_add_dialog = false
                    this.$refs.invoice_add_edit_dialog.clear_and_close()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },
        updateInvoiceTemplate(data) {
            request.put(`api/template/invoices`, data)
                .then(({data}) => {
                    let index = this.items.findIndex(ii => ii.id === data.id)
                    if (~index) {
                        this.items.splice(index, 1, data)
                    }
                    this.invoice_edit_dialog = false
                    this.$refs.invoice_add_edit_dialog.clear_and_close()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },
        getFields() {
            request.get(`api/template/invoices/fields`)
                .then(({data}) => {
                    this.invoice_fields = data
                })
        },
        close_edit_milestone_dialog() {
            this.milestone_edit_dialog = false
        },
        close_milestone_delete_dialog() {
            this.milestone_delete_dialog = false
        },
        close_invoice_delete_dialog() {
            this.invoice_delete_dialog = false
        },
    }
}