import makeRequestTo from '@/services/makeRequestTo'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TeamsDialog from '@/common/TeamsDialog/TeamsDialog.vue'

export default {
  name: 'Teams',
  components: { CustomTable, TeamsDialog },

  data: () => ({
    add_dialog: false,
    edit_dialog: false,
    paths: [
      { text: 'Dashboard', disabled: false },
      { text: 'Teams', disabled: true }
    ],
    members: [],
    page: 1,
    headers: [
        { text: 'Member', align: 'left', value: 'name' },
        { text: 'Position',  value: 'position' },
        { text: 'Tasks', value: 'tasks' },
        { text: 'Projects', value: 'projects' }
    ],
    
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
    },

	  update_member(updated_member){
	    let members = this.members.slice()
	    const index = members.findIndex(member => member.id === updated_member.id)
      if (~index) {
	      members.splice(index, 1, updated_member.member)
        this.members = members
      }
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.members.slice()
    },

	  editItem(item) {
		  this.edit_dialog = true
		  console.log(item)
    },

  }
}