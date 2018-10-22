import makeRequestTo from '@/services/makeRequestTo'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import TeamsDialog from './components/TeamsDialog/TeamsDialog.vue'

export default {
  name: 'Teams',
  components: { CustomTable, TeamsDialog, DeleteDialog, Breadcrumb },

  data: () => ({
    add_dialog: false,
    edit_dialog: false,
    delete_dialog: false,
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Teams', disabled: true, router_name: null }
    ],
    members: [],
    page: 1,
    headers: [
        { text: 'Member', align: 'left', value: 'name' },
        { text: 'Position',  value: 'position' },
        { text: 'Tasks', value: 'tasks' },
        { text: 'Projects', value: 'projects' }
    ],
    edit_item: null,
    delete_item_id: null
  }),

  created () {
    makeRequestTo.get_teams()
      .then(response => {
        this.members = response.data.data
      })
  },

  methods: {

	  add_new_member(new_item) {
      this.members.unshift(new_item)
      this.$refs.add_dialog.clear_fields()
      this.$event.$emit('open_snackbar', 'New member added successfully!')
    },

    tasks_text(member) {
	    return !member.tasks ? 'no tasks assigned' : member.tasks.length
    },

    projects_text(member) {
	    return !member.projects ? 'no projects assigned' : member.projects.length
    },

	  update_member(updated_member){
	    let members = this.members.slice()
	    const index = members.findIndex(member => member.id === updated_member.id)
      if (~index) {
	      members.splice(index, 1, updated_member)
        this.members = members
      }

      this.$event.$emit('open_snackbar', 'Member updated successfully!')
      this.$refs.edit_dialog.clear_fields()
      this.edit_item = null
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.members.slice()
    },

	  edit_member(item) {
		  this.edit_dialog = true
		  this.edit_item = item
    },

	  open_delete_dialog(item) {
		  this.delete_item_id = item.id
      this.delete_dialog = true
    },

	  delete_member() {
      makeRequestTo.delete_team(this.delete_item_id)
        .then(response => this.member_deleted())
    },

    member_deleted() {
	    let members = this.members.filter(member => member.id !== this.delete_item_id)
	    this.$event.$emit('open_snackbar', 'Member deleted successfully!')
	    this.members = members
	    this.delete_item_id = null
      this.delete_dialog = false
    },

  }
}