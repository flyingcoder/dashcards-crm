import makeRequestTo from '@/services/makeRequestTo'
import CustomField from '@/common/CustomField/CustomField.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import {validations} from "./local-mixins/validations"

export default {
  name: 'Clients',
  mixins: [validations],
  components: { CustomTable, CustomField, Breadcrumb },

  data: () => ({
    // Breadcrumbs
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Clients', disabled: true, router_name: null }
    ],

    // Form
    dialog: false,
    form_edited: -1,
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
    company_name: {
    	text: '',
			is_valid: true,
			error_messages: ['Company Name is required'],
			validations: ['required']
		},
    telephone: {
    	text: '',
			is_valid: true,
			error_messages: ['Telephone is required'],
			validations: ['required']
		},
    email: {
    	text: '',
			is_valid: true,
			error_messages: ['Email is required', 'Please type a valid email'],
			validations: ['required', 'email']
    },
    status: {
    	text: '',
			is_valid: true,
			error_messages: ['Status is required'],
			validations: ['required']
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


    // Table
    page: 1,
    clients: [],
    headers: [
        { text: 'Client', align: 'left', value: 'name' },
        { text: 'Contact No.',  value: 'contact' },
        { text: 'Email', value: 'email' },
        { text: 'Status', value: 'status' }
    ],

   
  }),

  computed: {
    form_title () {
      return this.form_edited === -1 ? 'New Client' : 'Edit Client'
    },
    total_items() {
			return this.clients.total
		},
		table_action_disabled() {
			return this._.isEmpty(this.selected)
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
        this.form_edited = -1
      }, 300)
    },

    // save () {
    //   if (this.editedIndex > -1) {
    //     makeRequestTo.put_teams(this.editedMember)
    //       .then(response => {
    //         Object.assign(this.members[this.editedIndex], this.editedMember)
    //     })
    //   } else {
    //     makeRequestTo.post_teams(this.editedMember)
    //       .then(response => {
    //         this.members.push(this.editedMember)
    //         console.log(response)
    //       })
    //   }
    //   this.close()
    // },

    save() {
			if (this.all_validations_passed()) {
				const fields = {
					first_name: this.first_name.text,
          last_name: this.last_name.text,
					company_name: this.company_name.text,
					telephone: this.telephone.text,
					email: this.email.text,
					status: this.status.text,
					password: this.password.text
				}
        makeRequestTo.post_clients(fields)
        console.log('pass')
      }
      else{
        console.log('fail')
      }
    },
  
  }
}