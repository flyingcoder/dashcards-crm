import { api_to } from './api'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import TableHeader from '@/common/TableHeader.vue'
// import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'
import InvoiceDialog from './components/InvoiceDialog/InvoiceDialog.vue'
import ViewInvoice from './components/ViewInvoice/ViewInvoice.vue'
import Actions from '@/common/VueTable/Actions.vue'
import VueTable from '@/common/VueTable/VueTable.vue'

export default {
  name: 'Invoice',
  mixins: [list_functionality],

  components: {
    TableHeader,
    InvoiceDialog,
    // CustomTable,
    VueTable,
    EmailDialog,
    DeleteDialog,
    ViewInvoice,
    Actions
  },

  data: () => ({
    view_invoice_dialog: false,
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Invoice', disabled: true, router_name: null }
    ],
    headers: [
      { text: 'Invoice', value: 'invoice', sortable: false },
      { text: 'Due Date', value: 'due_date', sortable: false },
      { text: 'Client', value: 'client', sortable: false },
      { text: 'Amount', value: 'amount', sortable: false },
      { text: 'Action',value: 'actions', sortable: false, }
    ],
    view_item : null,
    table_config: {
      add_message: 'New invoice added successfully!',
      update_message: 'Invoice updated successfully!',
      delete_message: 'Invoice deleted successfully!',
      refresh_table_message: 'Table refreshed',
    }
  }),

  created() {
    this.fetch_data()
    this.getInvoices()
  },

  beforeDestroy() {
    this.$store.commit('invoice/reset_state')
  },

  methods: {
    ...mapMutations('invoice', [
      'set_dialog',
      'set_toolbar',
      'set_projects',
      'open_invoice_for_editing',
      'set_selected_project'
    ]),

    open_create_dialog() {
      this.set_toolbar({ title: 'Create Invoice' })
      this.set_dialog({ type: 'create', open: true })
    },

    open_edit_dialog(data) {
      this.set_toolbar({ title: 'Edit Dialog' })
      this.open_invoice_for_editing(_cloneDeep(data))
      this.set_selected_project(data.project_id)
      this.set_dialog({ type: 'edit', open: true })
    },

    open_view_dialog(data) {
      this.view_item = data
      this.view_invoice_dialog = true
    },

    async delete_invoice() {
      this.loading = true
      this.delete_dialog = false
      await api_to.delete_invoice(this.delete_item_id)
      this.loading = false
      const index = this.items.findIndex(
        item => item.id === this.delete_item_id
      )
      if (~index) this.items.splice(index, 1)
    },

    fetch_data() {
      api_to
        .get_all_projects()
        .then(res2 => {
          this.set_projects(res2.data)
        })
        .finally(() => (this.loading = false))
    },

    invoice_updated(invoice) {
      const index = this.items.findIndex(item => item.id === invoice.id)
      if (~index) {
        this.items.splice(index, 1, invoice)
      }
    },

    getInvoices() {
      this.loading = true
      api_to.get_invoices(this.pagination.current, this.rows_per_page )
        .then(({data}) => {
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
    load_more() {
      this.loading = true
      api_to.get_invoices(this.pagination.current+1 )
        .then(({data}) => {
          console.log(data.data)
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
    }
  }
}
