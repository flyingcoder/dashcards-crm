import request from '@/services/axios_instance'
import { mapGetters } from 'vuex'

export default {
  name: 'EmailDialog',

  props: {
    dialog: Boolean
  },

  data: () => ({
    open: false,
    status_items: [
      { id: 1, text: 'Once', value: 'once' },
      { id: 2, text: 'Weekly', value: 'weekly' },
      { id: 3, text: 'Monthly', value: 'monthly' }
    ],
    selected_status: null
  }),

  computed: {
    ...mapGetters('invoice', ['invoice_id']),
    status_disabled() {
      return !this.selected_status
    }
  },

  watch: {
    dialog(new_val) {
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    }
  },

  methods: {
    clear_and_close() {
      this.$store.commit('invoice/set_invoice_id', null)
      Object.assign(this.$data, this.$options.data.apply(this))
      this.open = false //close the modal
    },
    save() {
      request.post('api/invoice/email', {
        invoice_id: this.invoice_id,
        iteration: this.selected_status
      })
      this.clear_and_close()
    }
  }
}
