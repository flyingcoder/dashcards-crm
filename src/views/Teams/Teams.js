export default {
  data: () => ({
      dialog: false,
      groups: '',
      page: 1,
      paths: [
      { text: 'Dashboard', disabled: false },
      { text: 'Teams', disabled: true }
      ],
      headers: [
          { text: 'Member', align: 'left', value: 'name' },
          { text: 'Position',  value: 'position' },
          { text: 'Tasks', value: 'tasks' },
          { text: 'Projects', value: 'projects' },
      ],
      members: [],
      editedIndex: -1,
      editedMember: {
        first_name: '',
        last_name: '',
        group_name: '',
        job_title: '',
        email: '',
        telephone: '',
        password: '',
        check_pass: '',
      },
      defaultItem: {
        first_name: '',
        last_name: '',
        group_name: '',
        job_title: '',
        email: '',
        telephone: '',
        password: '',
        check_pass: '',
      }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Member' : 'Edit Member'
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
      this.members = [
        {
          name: 'Brian Howard',
          image: require('@/assets/temp/user.png'),
          position: 'UI/UX Designer',
          tasks: 6,
          projects: 24,
        },
        {
          name: 'Brian Howard',
          image: require('@/assets/temp/atomic.png'),
          position: 'UI/UX Designer',
          tasks: 6,
          projects: 24,
        },
        {
          name: 'Brian Howard',
          image: require('@/assets/temp/user.png'),
          position: 'UI/UX Designer',
          tasks: 6,
          projects: 24,
        },
        {
          name: 'Brian Howard',
          image: require('@/assets/temp/atomic.png'),
          position: 'UI/UX Designer',
          tasks: 6,
          projects: 24,
        },
      ]
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.members.slice()
    },

    editItem (item) {
      this.editedIndex = this.members.indexOf(item)
      this.editedMember = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.members.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.members.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedMember = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.members[this.editedIndex], this.editedMember)
      } else {
        this.members.push(this.editedMember)
      }
      this.close()
    }
  }
}