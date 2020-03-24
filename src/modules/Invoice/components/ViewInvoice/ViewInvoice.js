export default {
  props: {
    item: Object,
    open: Boolean
  },

  data: () => ({
    loading: false,
    list_items: [],
    headers: [
      { text: '#', align: 'left', sortable: false, width: '20px' },
      {
        text: 'Descriptions',
        align: 'left',
        sortable: false,
        value: 'descriptions'
      },
      { text: 'Rate', value: 'rate', align: 'left', sortable: false },
      { text: 'Hours', value: 'hours', align: 'left', sortable: false },
      { text: 'Amount', value: 'amount', align: 'left', sortable: false }
    ]
  }),

  computed: {
    view_invoice_dialog: {
      get() {
        return this.open
      },
      set(val) {
        this.$emit('close', val)
      }
    }
  }
}
