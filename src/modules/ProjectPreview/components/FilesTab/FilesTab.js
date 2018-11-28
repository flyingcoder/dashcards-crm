import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import request from '@/services/axios_instance'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'

export default {
	name: 'FilesTab',
	components: {
		CustomTable, TableHeader, vueDropzone: vue2Dropzone
	},

	props: {
		id: [String, Number]
	},

	data: () => ({
		headers: [
			{text: 'Filetype', value: 'filetype'},
			{text: 'Filename', value: 'filename'},
			{text: 'Uploaded by', value: 'member'},
			{text: 'Project', value: 'project'}
		],
	}),

	computed: {
		dropzoneOptions() {
			return {
				thumbnailWidth: 150,
				paramName: 'files',
				timeout: 500000,
				url: `https://api.bizzooka.ca/api/projects/${this.id}/file`,
				headers: { "Authorization": "Bearer " + localStorage.getItem('token') },
			}
		}
	},

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Files' }})
	},

	methods: {
		files_added(files) {
			console.log(files)
		}
	}

}