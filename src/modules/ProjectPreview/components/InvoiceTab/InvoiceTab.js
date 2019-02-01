import { mapGetters } from 'vuex'
import makeRequestTo from '@/services/makeRequestTo'
//Components
import CreateInvoiceDialog from './components/CreateInvoiceDialog/CreateInvoiceDialog.vue'

export default {
  name: 'InvoiceTab',

  components: {
    CreateInvoiceDialog
  },

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
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Invoice' }
    })
  },

  beforeDestroy() {
    this.$store.commit('invoice/reset_state')
  },

  methods: {
    create_invoice() {
      this.loading = true
      this.create_invoice_dialog = false
      this.$store
        .dispatch('invoice/save_invoice', {
          method: 'post',
          api: `api/invoice`
        })
        .then(({ data }) => this.items.unshift(data))
        .finally(() => {
          this.loading = false
          this.$store.commit('invoice/reset_state')
        })
    },

    edit_invoice() {
      this.$store.commit('invoice/set_company_logo', null)
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
      await makeRequestTo.delete_invoice(this.delete_item_id)
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
