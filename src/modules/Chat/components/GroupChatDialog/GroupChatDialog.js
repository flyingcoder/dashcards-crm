import { api_to } from '@/modules/Chat/api'
import _cloneDeep from 'lodash/cloneDeep'

export default {
	name: 'GroupChatDialog',
	data () {
      	return {
        	dialog: false,
        	all_users: [],
        	filtered_by_search: [],
        	all_selected : [],
        	search: '',
        	group_name: '',
        	btnloading: false
      	}
    },
    created (){
    	this.get_chat_list()
    },
    methods :{
    	validate_form(){
    		if (this.group_name === '') {
    			this.$event.$emit('open_snackbar', 'Group name is required', 'error')
    			return false
    		}
    		if (this.all_selected.length < 1) {
    			this.$event.$emit('open_snackbar', 'Select and  add users to group', 'error')
    			return false
    		}
    		return true
    	},
    	save_group() {
    		if(this.validate_form()){
    			this.btnloading = true
    			var payload = {
    				group_name : this.group_name,
    				users : this.all_selected.map((value) => { return value.id })
    			}
    			api_to.save_group(payload)
    			.then((response) => {
    				this.$emit('newChatGroupCreated', response.data)
    				this.clear_and_close()
    			})
    			.finally(() => this.btnloading = false)
    		}
    	},
    	open_dialog(){
    		this.dialog = true
    	},
    	clear_and_close(){
    		this.dialog = false
    		this.all_selected = []
    		this.search = ''
    		this.group_name = ''
			this.filtered_by_search = _cloneDeep(this.all_users)
    	},
    	get_chat_list() {
	      	api_to.get_chat_list().then(({ data }) => {
	        	this.all_users = _cloneDeep(data)
	        	this.filtered_by_search = data
	      	})
	    },
	    select(item, value){
	    	let index = this.filtered_by_search.findIndex(user => item.id === user.id)
	    	if (~index) {
	    		this.filtered_by_search[index].is_selected = value
	    	}
	    },
	    selected(item){
	    	let index = this.all_selected.findIndex(user => item.id === user.id)
	    	if (~index) {
	    		this.select(item, false)
	    		this.all_selected.splice(index, 1)
	    	}
	    	else{
		    	this.select(item, true)
		    	this.all_selected.push(item)
	    	}
	    },
	    filter_users(event){
	    	setTimeout(() => {
		    	if (this.search && this.search !== '') {
			    	this.filtered_by_search = _cloneDeep(this.all_users).filter(item => {
			    		return item.fullname.toLowerCase().includes(this.search.toLowerCase().trim())
			    	})
		    	} else {
		    		this.filtered_by_search = _cloneDeep(this.all_users)
		    	}
	    	}, 1)
	    }
    }
}