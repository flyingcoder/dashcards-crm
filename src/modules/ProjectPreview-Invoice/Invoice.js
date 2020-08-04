import { apiTo } from './api'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import { global_utils } from '@/global_utils/global_utils'
//Components

import ViewInvoice from '@/modules/Invoice/components/ViewInvoice/ViewInvoice.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import StepperInvoiceDialog from '@/modules/Invoice/components/StepperDialog/StepperInvoiceDialog.vue'

export default {
    name: 'Invoice',
    mixins: [list_functionality, global_utils],

    components: {
        VueTable,
        DeleteDialog,
        ViewInvoice,
        Actions,
        StepperInvoiceDialog
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        headers: [
            { text: 'Invoice', value: 'invoice' },
            { text: 'Client', value: 'client', width: 120, sortable: false },
            { text: 'Due Date', value: 'due_date', width: 150 },
            { text: 'Amount', value: 'amount', width: 120 },
            { text: 'Actions', value: 'action', width: 150, align: 'center', sortable: false}
        ],
        view_invoice_dialog: false,
        view_item: null,
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.loading = true
        this.fetch_data()
        this.getInvoices()
    },
    computed: {
        type() {
            return this.$route.params.type || 'project'
        },
        tableTitle() {
            return this.type === 'project' ? `Project Invoice` : 'Campaign Invoice'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                { text: this.type, disabled: false, route: {path: `/dashboard/${this.type}/preview/${this.id}`}},
                { text: 'Invoice', disabled: true, route: null }
            ]
        }

    },
    methods: {
        ...mapMutations('invoice', [
            'set_dialog',
            'set_toolbar',
            'set_projects',
            'open_invoice_for_editing',
            'set_selected_project'
        ]),
        async delete_invoice() {
            this.loading = true
            this.delete_dialog = false
            await apiTo.delete_invoice(this.delete_item_id)
            this.loading = false
            const index = this.items.findIndex(
                item => item.id === this.delete_item_id
            )
            if (~index) this.items.splice(index, 1)
        },
        open_view_dialog(data) {
            this.view_item = data
            this.$refs.view_invoice_dialog.open_dialog(data)
        },
        open_edit_dialog(data) {
            this.set_toolbar({ title: 'Edit Dialog' })
            this.open_invoice_for_editing(_cloneDeep(data))
            this.set_selected_project(data.project_id)
            this.set_dialog({ type: 'edit', open: true })
            this.$refs.invoiceEditDialog.openDialog()
        },
        fetch_data() {
            apiTo.get_all_projects().then(res2 => {
                this.set_projects(res2.data)
            })
        },
        getInvoices() {
            this.loading = true
            apiTo
                .getInvoices(this.id, this.pagination.current)
                .then(({ data }) => {
                    this.items = data.data
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },
        getMoreInvoices() {
            this.loading = true
            apiTo
                .getInvoices(this.id, this.pagination.current + 1)
                .then(({ data }) => {
                    data.data.forEach(item => {
                        this.items.push(item)
                    })
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },
        invoice_updated(invoice) {
            const index = this.items.findIndex(item => item.id === invoice.id)
            if (~index) {
                this.items.splice(index, 1, invoice)
            }
        }
    }
}