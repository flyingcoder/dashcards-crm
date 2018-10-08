import makeRequestTo from '@/services/makeRequestTo'
import CustomField from '@/common/CustomField/CustomField.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import {validations} from "./local-mixins/validations"

export default {
  name: 'Teams',
  mixins: [validations],
  components: { CustomTable, CustomField },

  data: () => ({
    // Form Data
    dialog: false,
    editedIndex: -1,
    first_name: {
      text: '',
      is_valid: true,
      error_messages: ['First name is required'],
      validations: ['required']
    },
    last_name: {
      text: '',
      is_valid: true,
      error_messages: ['Last name is required'],
      validations: ['required']
    },
    group_name: {
      text: '',
      items: [
        'Admin',
        'Developer',
        'Staff',
        'Manager'
      ],
      is_valid: true,
      error_messages: ['Group is required'],
      validations: ['required']
    },
    job_title: {
      text: '',
      is_valid: true,
      error_messages: ['Job Title is required'],
      validations: ['required']
    },
    email: {
      text: '',
      is_valid: true,
      error_messages: [
        'Email is required', 
        'Please type a valid email'
      ],
      validations: ['required', 'email']
    },
    telephone: {
      text: '',
      is_valid: true,
      error_messages: [
        'Contact Number is required', 
        'Please type a valid contact number'
        ],
      validations: ['required', 'numeric']
    },
    password: {
      text: '',
      is_valid: true,
      error_messages: [
        'Password is required',
        'Password must have minimum 6 characters',
        'Password must contains at least one number'
      ],
      validations: ['required', 'minLength', 'containsNumber']
    },
    repeat_password: {
      text: '',
      is_valid: true,
      error_messages: ['Passwords do not match'],
      validations: ['matchPassword']
    },
    input_type: 'password',
     
    // Breadcrumbs Data
    paths: [
      { text: 'Dashboard', disabled: false },
      { text: 'Teams', disabled: true }
    ],
    
    // Table Data
    members: [],
    page: 1,
    headers: [
        { text: 'Member', align: 'left', value: 'name' },
        { text: 'Position',  value: 'position' },
        { text: 'Tasks', value: 'tasks' },
        { text: 'Projects', value: 'projects' }
    ],
    
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Member' : 'Edit Member'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    makeRequestTo.get_teams()
      .then(response => {
        this.members = response.data.data
      })
  },

  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.members.slice()
    },

    editItem (item) {
      this.editedIndex = this.members.indexOf(item)
      this.form = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.members.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.members.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.form = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save: function  () {
      if (this.all_validations_passed()) {
        const fields = {
          first_name: this.first_name.text,
          last_name: this.last_name.text,
          group_name: this.group_name.text,
          job_title: this.job_title.text,
          email: this.email.text,
          telephone: this.telephone.text,
          password: this.password.text,
        }
        makeRequestTo.post_teams(fields)
        console.log('pass')
      }
      else{
        console.log('fail')
      }
    }
  }
}