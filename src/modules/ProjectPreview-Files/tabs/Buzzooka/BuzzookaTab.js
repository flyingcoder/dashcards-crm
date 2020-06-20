import { list_functionality } from '@/services/list-functionality/list-functionality'
import { global_utils } from '@/global_utils/global_utils'
import { settings } from '@/variables'
import * as apiTo from './api'

//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import LinkDialog from '@/modules/ProjectPreview-Files/components/LinkDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ToolbarItem from '@/modules/ProjectPreview-Files/components/ToolbarItem.vue'
import Empty from '@/common/Empty.vue'
import EmbedViewer from '@/common/Viewer/EmbedViewer.vue'
import VideoViewer from '@/common/Viewer/VideoViewer.vue'
import ImageViewer from '@/common/Viewer/ImageViewer.vue'
import DocsViewer from '@/common/Viewer/DocsViewer.vue'
import IframeViewer from '@/common/Viewer/IframeViewer.vue'
import OtherViewer from '@/common/Viewer/OtherViewer.vue'

export default {
    name: 'BuzzookaTab',

    mixins: [list_functionality, global_utils],
    props: {
        projectId: [String, Number]
    },
    components: {
        VueTable,
        CustomDropzone,
        LinkDialog,
        DeleteDialog,
        ToolbarItem,
        Empty,
        EmbedViewer,
        VideoViewer,
        ImageViewer,
        DocsViewer,
        OtherViewer,
        IframeViewer
    },

    data: () => ({
        headers: [{
                text: 'Thumbnail',
                value: 'thumbnail',
                sortable: false
            },
            {
                text: 'Filetype',
                value: 'filetype'
            },
            {
                text: 'Filename',
                value: 'filename',
                width: '35%'
            },
            {
                text: 'Added by',
                value: 'member'
            },
            {
                text: 'Action',
                value: 'action',
                sortable: false,
                align: 'center',
                width: '180px'
            }
        ],
        table_config: {
            route_name: 'project_preview',
            add_message: 'New File(s) added successfully!',
            delete_message: 'File deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_tab_files_table'
        },
        btnloading: false,
        url: '',
        dialog: false,
        filter: 'all',
        toolbarItems: [{
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
            },
            {
                id: 7,
                className: 'approval',
                type: 'approval',
                icon: 'mdi-thumb-up',
                iconText: 'Approval'
            }
        ],
        log_id: null,
        selected_media: null,
        bulk_delete_dialog: false
    }),

    computed: {

        permissionsAll() {
            return this.$_permissions.get('hq_files')
        },
        permissionsOwn() {
            return this.$_permissions.get('hq_files_own')
        },

        filteredItems() {
            if (this.items.length === 0) return []
            if (this.filter === 'all') return this.items
            if (this.filter === 'approval') {
                return this.items.filter(item => item.approved === 1 && (item.category === 'videos' || item.category === 'images'))
            }
            return this.items.filter(item => item.category.includes(this.filter))
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
                maxFiles: 5,
                url: settings.apiHostBaseURL + `/api/projects/${this.id}/file`,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        },

        dynamic_api() {
            return `api/projects/${this.id}/file`
        },

        id() {
            return this.projectId ? this.projectId : this.$route.params.id
        },
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, router_name: 'default-content' },
                { text: this.type, disabled: true, router_name: null },
                { text: 'Files', disabled: true, router_name: null }
            ]
        }

    },

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.view = this.getPreferredView()
        this.get_files()
    },

    methods: {
        can_delete(item) {
            if (this.user.is_admin) return true
            if (this.permissionsAll && this.permissionsAll.delete) return true
            return (
                this.permissionsOwn &&
                this.permissionsOwn.delete &&
                this.is_file_owner(file)
            )
        },
        is_file_owner(file) {
            return (
                file.custom_properties.user &&
                file.custom_properties.user.id === this.user.id
            )
        },
        get_files() {
            this.item = []
            var payload = {
                page: 1,
                type: this.filter
            }
            apiTo
                .getFilesByTypes(this.id, payload)
                .then(({ data }) => {
                    this.items = data.data
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },

        get_more_files() {
            this.item = []
            var payload = {
                page: this.pagination.current + 1,
                type: 'all'
            }
            apiTo
                .getFilesByTypes(this.id, payload)
                .then(({ data }) => {
                    data.data.forEach(item => {
                        this.items.push(item)
                    })
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },

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

        file_added(emitted) {
            this.$event.$emit('open_snackbar', 'File(s) uploaded successfully')
            var fileUploaded = typeof emitted.response === 'string' ? JSON.parse(emitted.response) : emitted.response
            this.items.unshift(fileUploaded)
            this.$refs.dropzone.remove_file(emitted.file)
            this.clear_selected()
        },

        open_link_dialog() {
            this.$refs.link_dialog.openDialog()
        },

        addLink(payload) {
            apiTo
                .addProjectLink(this.id, payload)
                .then(({ data }) => {
                    this.items.push(data)
                    this.$refs.link_dialog.closeAndClearDialog()
                    this.$event.$emit('open_snackbar', 'New link added!')
                    this.clear_selected()
                })
                .finally(() => this.$event.$emit('btnloading_off', false))
        },
        confirmBulkDeleteFiles(selected) {
            this.selected = selected
            this.bulk_delete_dialog = true
        },
        bulk_delete_files() {
            this.bulk_delete_via_url(`${this.dynamic_api}/bulk-delete`)
            this.bulk_delete_dialog = false
        },

        delete_item() {
            apiTo
                .deleteFile(this.delete_item_id)
                .then(() => {
                    const indexFound = this.items.findIndex(
                        item => item.id === this.delete_item_id
                    )
                    if (~indexFound) {
                        this.items.splice(indexFound, 1)
                        this.delete_item_id = null
                        this.delete_dialog = false
                        this.clear_selected()
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
        },

        openViewer(media) {
            this.selected_media = media
            if (
                media.category === 'links' &&
                media.custom_properties.hasOwnProperty('embed') &&
                media.custom_properties.embed
            ) {
                this.$refs.embed_viewer_dialog.openDialog()
            } else if (media.category === 'videos') {
                this.$refs.video_viewer_dialog.openDialog()
            } else if (media.category === 'images') {
                this.$refs.image_viewer_dialog.openDialog()
            } else if (media.category === 'documents') {
                this.$refs.doc_viewer_dialog.openDialog()
            } else if (media.category === 'links') {
                this.$refs.iframe_viewer_dialog.openDialog()
            } else {
                this.$refs.other_viewer_dialog.openDialog()
            }
        },
        approval_actions(item) {
            const list = [{ id: 2, title: 'Approved', action: 'approved', icon: 'mdi-file-check-outline' }, 
                { id: 0, title: 'Reject', action: 'reject', icon: 'mdi-file-cancel-outline' }, 
                { id: 1, title: 'For Modification', action: 'modification', icon: 'mdi-file-edit-outline' }]
            return list.filter(i => { return i.id !== item.approved || i.id === 1 })
        },
        update_status(item, action) {
            var payload = { action: action.id }
            apiTo.updateMediaStatus(item.id, payload)
                .then(({ data }) => {
                    let index = this.items.findIndex(i => i.id === item.id)
                    if (~index) {
                        this.$event.$emit('open_snackbar', data.message)
                        this.items[index].approved = action.id
                    }
                })
        }
    }
}