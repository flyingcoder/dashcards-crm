import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import request from '@/services/axios_instance'
import { table_functionality } from "@/services/table-functionality";
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'

export default {
	name: 'FilesTab',

	mixins: [table_functionality],

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
			{text: 'Project', value: 'project'},
			{is_action: true},
		],
	}),

	computed: {
		dropzoneOptions() {
			return {
				thumbnailWidth: 150,
				timeout: 500000,
				addRemoveLinks: true,
				url: `https://api.bizzooka.com/api/projects/${this.id}/file`,
				headers: { "Authorization": "Bearer " + localStorage.getItem('token') },
			}
		}
	},

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Files' }})
	},

	methods: {
		file_added(file, response) {
			this.$event.$emit('open_snackbar', 'File(s) uploaded successfully', 'red', 'success', 3000)
			this.items.unshift(JSON.parse(response))
			this.$refs.dropzone.removeFile(file)
		}
	}

}