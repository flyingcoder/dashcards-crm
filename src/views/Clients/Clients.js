import makeRequestTo from '@/services/makeRequestTo'
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
  name: 'Clients',
  components: { CustomTable },

  data: () => ({
      dialog: false,
      page: 1,
      paths: [
      { text: 'Dashboard', disabled: false },
      { text: 'Clients', disabled: true }
      ],

      clients: [],
      headers: [
          { text: 'Client', align: 'left', value: 'name' },
          { text: 'Contact No.',  value: 'contact' },
          { text: 'Email', value: 'email' },
          { text: 'Status', value: 'status' }
    ],
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Client' : 'Edit Client'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    makeRequestTo.get_clients()
      .then(response => {
        this.clients = response.data.data
      })
  },

  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.clients.slice()
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedMember = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

  
  }
}