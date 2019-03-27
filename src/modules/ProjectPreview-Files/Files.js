import { table_functionality } from '@/services/table-functionality/table-functionality'
import * as apiTo from './api'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import LinkDialog from './components/LinkDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'FilesTab',

  mixins: [table_functionality],

  components: {
    CustomTable,
    TableHeader,
    CustomDropzone,
    LinkDialog,
    DeleteDialog
  },

  props: {
    id: [String, Number]
  },

  data: () => ({
    headers: [
      { text: 'Thumbnail', value: 'thumbnail' },
      { text: 'Filetype', value: 'filetype' },
      { text: 'Filename', value: 'filename' },
      { text: 'Uploaded by', value: 'member' },
      { text: 'Project', value: 'project' },
      { is_action: true }
    ],
    table_config: {
      route_name: 'project_preview',
      add_message: 'New File(s) added successfully!',
      delete_message: 'File deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_tab_files_table'
    },
    url: '',
    dialog: false
  }),

  computed: {
    user() {
      return this.$store.getters.user
    },
    dropzoneOptions() {
      return {
        thumbnailWidth: 150,
        timeout: 500000,
        addRemoveLinks: true,
        url: `https://api.bizzooka.com/api/projects/${this.id}/file`,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      }
    },
    dynamic_api() {
      return `api/projects/${this.id}/file`
    },
    can_delete() {
      if (this.user.is_admin) return true
      return (
        this.$_permissions.get('hq_files') &&
        this.$_permissions.get('hq_files').delete
      )
    }
  },

  created() {
    this.fill_table('get_files', true, this.dynamic_api)
  },

  methods: {
    pop(url) {
      this.dialog = true
      this.url = url
    },
    sortFile(type) {
      alert('This feature is under-construction.')
    },
    file_added([file, response]) {
      this.$event.$emit('open_snackbar', 'File(s) uploaded successfully')
      this.items.unshift(JSON.parse(response))
      this.$refs.dropzone.remove_file(file)
    },

    open_link_dialog() {
      this.$refs.link_dialog.openDialog()
    },

    delete_item() {
      apiTo.deleteFile(this.delete_item_id).then(() => {
        const indexFound = this.items.findIndex(
          item => item.id === this.delete_item_id
        )
        if (~indexFound) {
          this.items.splice(indexFound, 1)
          this.delete_item_id = null
          this.delete_dialog = false
          this.$event.$emit('open_snackbar', this.table_config.delete_message)
        }
      })
    }
  }
}
