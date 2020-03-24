import { table_functionality } from '@/services/table-functionality/table-functionality'
import { global_utils } from '@/global_utils/global_utils'
import { settings } from '@/variables'
import * as apiTo from './api'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import LinkDialog from './components/LinkDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ToolbarItem from './components/ToolbarItem.vue'

export default {
  name: 'FilesTab',

  mixins: [table_functionality, global_utils],

  components: {
    CustomTable,
    TableHeader,
    CustomDropzone,
    LinkDialog,
    DeleteDialog,
    ToolbarItem
  },

  props: {
    id: [String, Number]
  },

  data: () => ({
    headers: [
      { text: 'Thumbnail', value: 'thumbnail' },
      { text: 'Filetype', value: 'filetype' },
      { text: 'Filename', value: 'filename', width: '35%' },
      { text: 'Added by', value: 'member' },
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
    dialog: false,
    filter: 'all',
    toolbarItems: [
      {
        id: 1,
        className: 'all',
        type: 'all',
        icon: 'select_all',
        iconText: 'All'
      },
      {
        id: 2,
        className: 'image',
        type: 'image',
        icon: 'image',
        iconText: 'Image'
      },
      {
        id: 3,
        className: 'video',
        type: 'video',
        icon: 'video_library',
        iconText: 'Video'
      },
      {
        id: 4,
        className: 'docs',
        type: 'document',
        icon: 'file_copy',
        iconText: 'Docs'
      },
      {
        id: 5,
        className: 'links',
        type: 'link',
        icon: 'link',
        iconText: 'Links'
      },
      {
        id: 6,
        className: 'other',
        type: 'other',
        icon: 'settings_applications',
        iconText: 'Other'
      }
    ],
    layout: 'grid', //list or grid
    log_id: null
  }),

  computed: {
    permissions() {
      return this.$_permissions.get('hq_files')
    },
    filteredItems() {
      if (this.filter === 'all') return this.items
      return this.items.filter(item =>
        item.collection_name.includes(this.filter)
      )
    },

    user() {
      return this.$store.getters.user
    },
    dropzoneOptions() {
      return {
        autoProcessQueue: false,
        thumbnailWidth: 150,
        timeout: 500000,
        addRemoveLinks: true,
        maxFiles: 10,
        url: settings.apiHostBaseURL + `/api/projects/${this.id}/file`,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      }
    },
    dynamic_api() {
      return `api/projects/${this.id}/file`
    },
    can_delete() {
      if (this.user.is_admin) return true
      return (
        this.permissions &&
        this.permissions.delete
      )
    }
  },

  created() {
    this.fill_table('get_files', true, this.dynamic_api)
  },

  methods: {
    manual_upload() {
      this.$refs.dropzone.process_queue()
    },
    pop(url) {
      this.dialog = true
      this.url = url
    },
    sortFile(type) {
      alert('This feature is under-construction.')
    },
    file_added([file, response]) {
      this.$event.$emit('open_snackbar', 'File(s) uploaded successfully')
      var fileUploaded =
        typeof response === 'string' ? JSON.parse(response) : response
      this.items.unshift(fileUploaded)
      this.$refs.dropzone.remove_file(file)
    },

    open_link_dialog() {
      this.$refs.link_dialog.openDialog()
    },

    addLink(payload) {
      apiTo.addProjectLink(this.id, payload).then(({ data }) => {
        this.items.push(data)
        this.$refs.link_dialog.closeAndClearDialog()
      })
      .finally(() => this.$event.$emit('btnloading_off', false))
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
      .finally(() => this.$event.$emit('btnloading_off', false))
    },

    file_failed([file, response]) {
      this.$event.$emit(
        'open_snackbar',
        typeof response === 'object' ? response[0] : response,
        'error'
      )
    },

    goto_link(url) {
      window.open(url)
    }
  }
}
