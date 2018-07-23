export default {
  data: () => ({
      dialog: false,
      groups: '',
      page: 1,
      paths: [
      { text: 'Dashboard', disabled: false },
      { text: 'Teams', disabled: false },
      { text: 'Groups', disabled: true },
      ],
      headers: [
          { text: 'ID', align: 'left', value: 'id' },
          { text: 'Group Name', align: 'left', value: 'name' },
          { text: 'Team', value: 'team' },
      ],
      groups: [],
      editedIndex: -1,
      editedGroup: {
          group_name: '',
      },
      defaultItem: {
          group_name: '',
      }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Group' : 'Edit Group'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.groups = [
        {
          id: 1,
          name: 'Administrator',
          team: 2,
        },
        {
          id: 2,
          name: 'Agent',
          team: 2,
        },
        {
          id: 3,
          name: 'Manager',
          team: 2,
        },
        {
          id: 4,
          name: 'Sales',
          team: 2,
        },
        {
          id: 5,
          name: 'Staff',
          team: 2,
        },
      ]
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.groups.slice()
    },

    permissionsItem (item) {
      this.editedIndex = this.groups.indexOf(item)
      this.editedGroup = Object.assign({}, item)
      this.dialog = true
    },

    editItem (item) {
      this.editedIndex = this.groups.indexOf(item)
      this.editedGroup = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.groups.indexOf(item)
      confirm('Are you sure you want to delete this group?') && this.groups.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedGroup = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.groups[this.editedIndex], this.editedGroup)
      } else {
        this.groups.push(this.editedGroup)
      }
      this.close()
    }
  }
}