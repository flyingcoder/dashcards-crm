import { table_functionality } from '@/services/table-functionality'
import { mapGetters } from 'vuex'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import CreateInvoiceDialog from './components/CreateInvoiceDialog/CreateInvoiceDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    TableHeader,
    CreateInvoiceDialog,
    CustomTable,
    EmailDialog,
    DeleteDialog
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Invoice', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'Due Date', value: 'due_date' },
      { id: 2, text: 'Invoice', value: 'invoice' },
      { id: 3, text: 'Client', value: 'client' },
      { id: 4, text: 'Amount', value: 'amount' },
      { id: 5, is_action: true }
    ],
    email_dialog: false
  }),

  computed: {
    ...mapGetters('invoice', ['selected_project', 'invoice_id']),
    create_invoice_dialog: {
      get() {
        return this.$store.getters['invoice/create_dialog']
      },
      set(val) {
        this.$store.commit('invoice/set_create_dialog', val)
      }
    },
    edit_invoice_dialog: {
      get() {
        return this.$store.getters['invoice/edit_dialog']
      },
      set(val) {
        this.$store.commit('invoice/set_edit_dialog', val)
      }
    }
  },

  created() {
    this.fill_table('get_invoices', true)
  },

  methods: {
    create_invoice() {
      this.loading = true
      this.create_invoice_dialog = false
      this.$store
        .dispatch('invoice/save_invoice', {
          method: 'post',
          api: `api/projects/${this.selected_project}/invoice`
        })
        .then(({ data }) => this.items.unshift(data))
        .finally(() => {
          this.loading = false
          this.$store.commit('invoice/reset_state')
        })
    },

    edit_invoice() {
      this.loading = true
      this.edit_invoice_dialog = true
      this.$store
        .dispatch('invoice/save_invoice', {
          method: 'put',
          api: `api/invoice/${this.invoice_id}`
        })
        .then(({ data }) => {
          const index = this.items.findIndex(item => item.id === data.id)
          if (~index) this.items.splice(index, 1, data)
          this.$store.commit('invoice/set_invoice_id', null)
        })
        .finally(() => {
          this.loading = false
          this.$store.commit('invoice/reset_state')
        })
    },

    async delete_invoice() {
      this.loading = true
      this.delete_dialog = false
      await this.$store.dispatch('invoice/delete_invoice', {
        id: this.delete_item_id
      })
      this.loading = false
      const index = this.items.findIndex(
        item => item.id === this.delete_item_id
      )
      if (~index) this.items.splice(index, this.delete_item_id)
    },

    open_edit_dialog(data) {
      this.$store.commit('invoice/open_invoice_for_editing', data)
    },

    close_dialog(val) {
      if (this.create_invoice_dialog)
        this.$store.commit('invoice/set_create_dialog', val)
      else this.$store.commit('invoice/set_edit_dialog', val)
    }
  }
}
