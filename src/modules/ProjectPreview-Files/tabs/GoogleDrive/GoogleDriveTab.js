import request from '@/services/axios_instance'
//components
import Empty from '@/common/Empty.vue'
import Uploader from '@/modules/ProjectPreview-Files/components/Uploader.vue'
import FolderDialog from '@/modules/ProjectPreview-Files/components/FolderDialog.vue'
import GDriveFolderDialog from '@/modules/ProjectPreview-Files/components/GoogleDriveFolderDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
    name: 'GoogleDriveTab',
    components: {
        Empty,
        Uploader,
        DeleteDialog,
        FolderDialog,
        GDriveFolderDialog
    },
    props: {
        projectId: [Number, String]
    },
    data: () => ({
        files: [],
        nextPageToken: null,
        breadcrumbs: [{
            text: 'Root Folder',
            disabled: true,
            href: '',
            link: false,
            folder: 'root'
        }],
        loading: true,
        isGoogleAuthorized: false,
        search: '',
        googleUser: null,
        fileApi: 'https://www.googleapis.com/drive/v3/files',
        uploadApi: 'https://www.googleapis.com/upload/drive/v3/files',
        toBeDeleted: null,
        delete_file_dialog: false,
        project_folders: []
    }),

    created() {
        this.getGoogleDriveFolders(this.projectId)
    },

    mounted() {
        this.$gapi.isSignedIn().then(result => {
            this.isGoogleAuthorized = result
            if (result) {
                this.getRootFiles()
                this.$gapi.currentUser().then(user => {
                    this.googleUser = user
                })
                this.loading = false
            } else {
                this.loading = false
            }
        })
    },

    computed: {
        accessToken() {
            if (this.isGoogleAuthorized) {
                return window.gapi.auth2
                    .getAuthInstance()
                    .currentUser.get()
                    .getAuthResponse().access_token
            } else {
                return null
            }
        },
        activeFolderId() {
            let last = this.breadcrumbs[this.breadcrumbs.length - 1]
            if (last.folder === 'root') {
                return 'root'
            } else {
                return last.folder.id
            }
        }
    },

    methods: {
        saveFolders(data) {
            var payload = {
                folders: data.folders
            }
            request.post(`api/projects/${this.projectId}/folder/google-drive`, payload)
                .then(({
                    data
                }) => {
                    data.forEach(item => {
                        this.getFile(item.folder_id, (file) => {
                            this.project_folders.push(file)
                        })
                    })
                }).
            finally(() => {
                this.$refs.gdrive_dialog.closeAndClearDialog()
                if (this.activeFolderId === 'root') {
                    this.files = []
                    this.resetBreadcrumbs()
                    this.getRootFiles()
                }
                this.loading = false
            })
        },
        getGoogleDriveFolders(id) {
            request.get(`api/projects/${id}/folder/google-drive`)
                .then(({
                    data
                }) => {
                    this.project_folders = data
                })
        },
        deleteGoogleDriveFolders(id) {
            request.delete(`api/projects/${this.projectId}/folder/google-drive/${id}`)
                .then(response => {
                    let index = this.project_folders.findIndex(i => i.id === id)
                    if (~index) {
                        this.project_folders.splice(index, 1)
                    }
                })
        },

        folderRemovedFromDB(item) {
            let index = this.project_folders.findIndex(i => i.id === item.id)
            if (~index) {
                this.project_folders.splice(index, 1)
            }
            let index2 = this.files.findIndex(i => i.id === item.id)
            if (~index2) {
                this.files.splice(index2, 1)
            }
        },

        is_folder(item) {
            return item.mimeType.includes('.folder')
        },

        go_to_folder(item) {
            if (item === 'root') {
                this.files = this.project_folders
                this.breadcrumbs = [this.breadcrumbs[0]]
                this.breadcrumbs[0].disabled = true
            } else {
                let index = this.breadcrumbs.findIndex(i => i.folder.id === item.id)
                if (~index) {
                    this.breadcrumbs = this.breadcrumbs.slice(0, index)
                }
                this.getFileForFolder(item)
            }
        },

        resetBreadcrumbs() {
            this.breadcrumbs = [this.breadcrumbs[0]]
            this.breadcrumbs[0].disabled = false
        },

        addToBreadcrumbs(item) {
            this.breadcrumbs[this.breadcrumbs.length - 1].disabled = false
            this.breadcrumbs.push({
                text: item.name,
                disabled: true,
                href: '',
                link: false,
                folder: item
            })
        },

        getFile(id, cb) {
            this.$gapi
                .request({
                    path: this.fileApi + '/' + id,
                    method: 'GET',
                    params: {
                        fields: '*'
                    }
                })
                .catch(response => {
                    if (response.result.error.message.includes(id)) {
                        cb(false)
                    }
                    cb('error')
                })
                .then(response => {
                    if (response.result && !response.result.error) {
                        cb(response.result)
                    }
                })
        },

        getFileForFolder(item) {
            this.loading = true
            this.addToBreadcrumbs(item)
            let qDrive =
                this.fileApi +
                '?q=' +
                encodeURIComponent("trashed = false and '" + item.id + "' in parents")
            this.$gapi
                .request({
                    path: qDrive,
                    method: 'GET',
                    params: {
                        fields: '*'
                    }
                })
                .then(response => {
                    this.files = response.result.files
                    this.nextPageToken = response.result.nextPageToken
                })
                .finally(() => {
                    this.loading = false
                })
        },

        getRootFiles() {
            if (this.project_folders.length > 0) {
                this.loading = true
                this.project_folders.forEach((folder, index) => {
                    var id = folder.hasOwnProperty('folder_id') ? folder.folder_id : folder.id
                    this.getFile(id, (file) => {
                        if (file === 'error') {

                        } else if (file) {
                            this.files.push(file)
                            this.project_folders[index] = file
                        } else {
                            this.deleteGoogleDriveFolders(folder.id)
                        }
                    })
                })
            }
        },

        load_more() {
            let qDrive = this.fileApi + '?pageToken=' + this.nextPageToken
            this.$gapi
                .request({
                    path: qDrive,
                    method: 'GET',
                    params: {
                        fields: '*'
                    }
                })
                .then(response => {
                    this.files = response.result.files
                    this.nextPageToken = response.result.nextPageToken
                })
                .finally(() => {
                    this.loading = false
                })
        },

        searchDrive() {
            if (this.search.trim() === '') {
                return
            } else {
                this.loading = true
                let qDrive =
                    this.fileApi +
                    '?q=' +
                    encodeURIComponent(
                        "name contains '" + this.search + "' and trashed = false"
                    )
                this.$gapi
                    .request({
                        path: qDrive,
                        method: 'GET',
                        params: {
                            fields: '*'
                        }
                    })
                    .then(response => {
                        this.files = response.result.files
                        this.nextPageToken = response.result.nextPageToken
                    })
                    .finally(() => {
                        this.loading = false
                    })
            }
        },

        getImage(file) {
            if (file.mimeType.includes('.folder')) {
                return require('@/assets/temp/folder.png')
            }
            return file.hasThumbnail ? file.thumbnailLink : file.iconLink
        },

        links(object) {
            let arr = Object.values(object)
            return arr.map(i => ({
                text: i.split('=').pop(),
                link: i
            }))
        },
        confirm_delete(file) {
            this.toBeDeleted = file
            this.delete_file_dialog = true
        },
        handleDeletes() {
            this.$gapi
                .request({
                    path: this.fileApi + '/' + this.toBeDeleted.id,
                    method: 'DELETE'
                })
                .then(response => {
                    let index = this.files.findIndex(file => file.id === this.toBeDeleted.id)
                    if (~index) {
                        this.files.splice(index, 1)
                        this.toBeDeleted = null
                    }
                })
                .finally(() => {
                    this.delete_file_dialog = false
                })
        },
        handleUploads(files) {
            var count = 0
            files.forEach(file => {
                this.sendRequestOld(file)
                count += 1
            })
            setTimeout(() => {
                if (count >= files.length) {
                    this.$event.$emit('btnloading_off', false)
                    this.$event.$emit('file-upload-clear-all', true)
                    this.$event.$emit('open_snackbar', 'Files successfully uploaded!')
                }
            })
        },
        openCreateFolderDialog() {
            this.$refs.folder_dialog.openDialog()
        },
        createFolder(data) {
            var metadata = {
                name: data.name,
                mimeType: 'application/vnd.google-apps.folder'
            }
            if (this.activeFolderId && this.activeFolderId !== 'root') {
                metadata.parents = [this.activeFolderId]
            }
            this.$gapi
                .request({
                    path: this.fileApi,
                    method: 'POST',
                    params: {
                        fields: '*'
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(metadata)
                })
                .then(response => {
                    this.$refs.folder_dialog.closeAndClearDialog()
                    this.getFileForFolder(response.result)
                })
        },

        sendRequestOld(file) {
            const _this = this
            const contentType = file.type || 'application/octet-stream'
            const initResumable = new XMLHttpRequest()
            initResumable.open(
                'POST',
                'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&fields=*',
                true
            )
            initResumable.setRequestHeader(
                'Authorization',
                'Bearer ' + _this.accessToken
            )
            initResumable.setRequestHeader('Content-Type', 'application/json')
            initResumable.setRequestHeader('X-Upload-Content-Length', file.size)
            initResumable.setRequestHeader('X-Upload-Content-Type', contentType)
            initResumable.onreadystatechange = function() {
                if (
                    initResumable.readyState === XMLHttpRequest.DONE &&
                    initResumable.status === 200
                ) {
                    const locationUrl = initResumable.getResponseHeader('Location')
                    const reader = new FileReader()
                    reader.onload = e => {
                        const uploadResumable = new XMLHttpRequest()
                        uploadResumable.open('PUT', locationUrl, true)
                        uploadResumable.setRequestHeader('Content-Type', contentType)
                        uploadResumable.setRequestHeader(
                            'X-Upload-Content-Type',
                            contentType
                        )
                        uploadResumable.onreadystatechange = function() {
                            if (
                                uploadResumable.readyState === XMLHttpRequest.DONE &&
                                uploadResumable.status === 200
                            ) {
                                _this.files.push(JSON.parse(uploadResumable.response))
                            }
                        }
                        uploadResumable.send(reader.result)
                    }
                    reader.readAsArrayBuffer(file)
                }
            }
            var metadata = {
                name: file.name,
                mimeType: contentType,
                'Content-Type': contentType,
                'Content-Length': file.size
            }
            if (_this.activeFolderId && _this.activeFolderId !== 'root') {
                metadata.parents = [_this.activeFolderId]
            }
            initResumable.send(JSON.stringify(metadata))
        },

        openAddFolderDialog() {
            this.$refs.gdrive_dialog.openDialog()
        }
    }
}