import Empty from '@/common/Empty.vue'
import Uploader from '@/modules/ProjectPreview-Files/components/Uploader.vue'

export default {
    name: 'GoogleDriveTab',
    components: {
        Empty,
        Uploader
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
        uploadApi: 'https://www.googleapis.com/upload/drive/v3/files'
    }),

    mounted() {
        this.$gapi.isSignedIn()
            .then(result => {
                this.isGoogleAuthorized = result
                if (result) {
                    this.getRootFiles()
                    this.$gapi.currentUser()
                        .then(user => {
                            this.googleUser = user
                        })
                } else {
                    this.loading = false
                }
            })
    },

    computed: {
        accessToken() {
            if (this.isGoogleAuthorized) {
                return window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token
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
        is_folder(item) {
            return item.mimeType.includes('.folder')
        },

        go_to_folder(item) {
            if (item === 'root') {
                this.getRootFiles()
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

        getFileForFolder(item) {
            this.loading = true
            this.addToBreadcrumbs(item)
            let qDrive = this.fileApi + '?q=' + encodeURIComponent("trashed = false and '" + item.id + "' in parents")
            this.$gapi.request({
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
            this.loading = true
            let qDrive = this.fileApi + '?q=' + encodeURIComponent("trashed = false and ('root' in parents or sharedWithMe)")
            this.$gapi.request({
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

        load_more() {
            let qDrive = this.fileApi + '?pageToken=' + this.nextPageToken
            this.$gapi.request({
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
                let qDrive = this.fileApi + '?q=' + encodeURIComponent("name contains '" + this.search + "' and trashed = false")
                this.$gapi.request({
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
                text: (i.split("=")).pop(),
                link: i
            }))
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
        sendRequest(file) {
            const contentType = file.type || 'application/octet-stream';
            var metadata = {
                'name': file.name,
                'mimeType': contentType,
                'Content-Type': contentType,
                'Content-Length': file.size
            }
            if (this.activeFolderId && this.activeFolderId !== 'root') {
                metadata.parents = [this.activeFolderId]
            }
            this.$gapi.request({
                    path: this.uploadApi,
                    method: 'POST',
                    params: {
                        'uploadType': 'resumable',
                        'fields': '*'
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Upload-Content-Length': file.size,
                        'X-Upload-Content-Type': contentType
                    },
                    body: JSON.stringify(metadata)
                })
                .then(response => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.$gapi.request({
                                path: response.headers.location,
                                headers: {
                                    'Content-Type': contentType,
                                    'X-Upload-Content-Type': contentType
                                },
                                method: 'PUT',
                                body: reader.result
                            })
                            .then(response2 => {
                                this.files.push(response2)
                                this.$event.$emit('file-uploaded', file)
                            })
                    }
                    reader.readAsArrayBuffer(file);
                })
        },
        sendRequestOld(file) {
        		const _this = this
            const contentType = file.type || 'application/octet-stream'
            const initResumable = new XMLHttpRequest()
            initResumable.open('POST', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&fields=*', true)
            initResumable.setRequestHeader('Authorization', 'Bearer ' + _this.accessToken)
            initResumable.setRequestHeader('Content-Type', 'application/json')
            initResumable.setRequestHeader('X-Upload-Content-Length', file.size)
            initResumable.setRequestHeader('X-Upload-Content-Type', contentType)
            initResumable.onreadystatechange = function() {
                if (initResumable.readyState === XMLHttpRequest.DONE && initResumable.status === 200) {
                    const locationUrl = initResumable.getResponseHeader('Location')
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        const uploadResumable = new XMLHttpRequest()
                        uploadResumable.open('PUT', locationUrl, true)
                        uploadResumable.setRequestHeader('Content-Type', contentType)
                        uploadResumable.setRequestHeader('X-Upload-Content-Type', contentType)
                        uploadResumable.onreadystatechange = function() {
                            if (uploadResumable.readyState === XMLHttpRequest.DONE && uploadResumable.status === 200) {
                                _this.files.push(JSON.parse(uploadResumable.response))
                            }
                        };
                        uploadResumable.send(reader.result)
                    };
                    reader.readAsArrayBuffer(file)
                }
            }
            var metadata = {
                'name': file.name,
                'mimeType': contentType,
                'Content-Type': contentType,
                'Content-Length': file.size
            }
            if (_this.activeFolderId && _this.activeFolderId !== 'root') {
                metadata.parents = [_this.activeFolderId]
            }
            initResumable.send(JSON.stringify(metadata))
        }
    }

}