import request from '@/services/axios_instance'
import { list_functionality } from '@/services/list-functionality/list-functionality'
//components

import VueTable from '@/common/VueTable/VueTable.vue'
import InvoiceTemplateDialog from './components/InvoiceTemplateDialog.vue'
import InvoiceTemplatePreview from './components/InvoiceTemplatePreview.vue'
import InvoiceTemplateHelp from './components/InvoiceTemplateHelp.vue'
import Actions from '@/common/VueTable/Actions.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
    name: 'InvoiceTemplates',
    mixins: [list_functionality],
    components: {
        VueTable,
        InvoiceTemplateDialog,
        InvoiceTemplatePreview,
        InvoiceTemplateHelp,
        Actions,
        DeleteDialog
    },

    data: () => ({
        headers: [
            { text: 'Name', align: 'left', sortable: false },
            { text: 'Added By', sortable: false },
            { text: 'Added On', sortable: false },
            {
                text: 'Action',
                sortable: false,
                align: 'center',
                width: '140px'
            }
        ],
        activeItem: null,
        isEdit: false,
        invoicefields: []
    }),
    computed: {
        user() {
            return this.$store.getters.user
        },
        permissions() {
            return this.$_permissions.get('templates')
        },
        defaultTemplates(){
            if (this.items.length > 0) {
                return this.items.filter(template => { return template.company_id === 0})
            } else {
                return []
            }
        }
    },
    mounted() {
        this.getInvoiceTemplates()
        this.getFields()
        this.$event.$on('show-invoice-template-guide', ()=> {
            this.open_help_dialog()
        })
    },

    methods: {
        can_action(item) {
            return item.company_id !== 0
        },
        can_delete(item) {
            if (this.user.is_admin) {
                return true
            }
            return this.permissions && this.permissions.delete
        },
        getInvoiceTemplates() {
            this.fill_table_via_url(`api/template/invoices`)
        },
        getMoreInvoiceTemplates() {
            this.load_more_via_url(`api/template/invoices`)
        },
        open_add_dialog() {
            this.isEdit = false
            this.$refs.add_edit_dialog.open_dialog(false, null)
        },
        open_view_dialog(item) {
            this.activeItem = item
            this.$refs.view_dialog.open_dialog(item)
        },
        open_help_dialog() {
            this.$refs.help_dialog.open_dialog()
        },
        open_edit_dialog(item) {
            this.isEdit = true
            this.activeItem = item
            this.$refs.add_edit_dialog.open_dialog(true, item)
        },
        handleSave(data) {
            if (this.isEdit) {
                this.updateTemplate(data)
            } else {
                this.createTemplate(data)
            }
        },
        createTemplate(data) {
            request.post(`api/template/invoices`, data)
                .then(({ data }) => {
                    this.items.push(data)
                    this.$refs.add_edit_dialog.clear_and_close()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },
        updateTemplate(data) {
            request.put(`api/template/invoices`, data)
                .then(({ data }) => {
                    let index = this.items.findIndex(ii => ii.id === data.id)
                    if (~index) {
                        this.items.splice(index, 1, data)
                    }
                    this.$refs.add_edit_dialog.clear_and_close()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },
        getFields() {
            request.get(`api/template/invoices/fields`)
                .then(({ data }) => {
                    this.invoicefields = data
                })
        },
    }
}