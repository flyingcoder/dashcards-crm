//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'

export default {
	name: 'FilesTab',
	components: {
		CustomTable, TableHeader,
	},

	data: () => ({
		headers: [
			{text: 'Filetype', value: 'filetype'},
			{text: 'Filename', value: 'filename'},
			{text: 'Uploaded by', value: 'member'},
			{text: 'Project', value: 'project'}
		],
	}),

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Files' }})
	}

}