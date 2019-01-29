import { table_functionality } from '@/services/table-functionality/table-functionality'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'

export default {
  name: 'FilesTab',

  mixins: [table_functionality],

  components: {
    CustomTable,
    TableHeader,
    CustomDropzone
  },

  props: {
    id: [String, Number]
  },

  data: () => ({
    headers: [
      { text: 'Filetype', value: 'filetype' },
      { text: 'Filename', value: 'filename' },
      { text: 'Uploaded by', value: 'member' },
      { text: 'Project', value: 'project' },
      { is_action: true }
    ]
  }),

  computed: {
    dropzoneOptions() {
      return {
        thumbnailWidth: 150,
        timeout: 500000,
        addRemoveLinks: true,
        url: `https://api.bizzooka.com/api/projects/${this.id}/file`,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      }
    }
  },

  created() {
    this.$router.replace({ name: 'project_preview', query: { tab: 'Files' } })
  },

  methods: {
    file_added([file, response]) {
      this.$event.$emit('open_snackbar', 'File(s) uploaded successfully')
      this.items.unshift(JSON.parse(response))
      this.$refs.dropzone.remove_file(file)
    }
  }
}
