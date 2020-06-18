<template>
    <div class="link-dialog">
        <CustomDialog ref="dialog" :mainBtnDisabled="!hasPreferredFolders" :open.sync="dialog" title="Enter Google Drive Folder URL" button1-text="Cancel" @button1="close_dialog" button2-text="Save" @button2="saveClicked">
            <template #content>
                <v-row class="custom-dialog">
                    <!-- v-col md="12" class="mb-0">
                      <p class="subtitle-2">
                        Only users with given permissions can manage this folders.
                      </p>
                    </v-col> -->
                    <v-col md="12">
                        <v-row>
                            <v-col md="10">
                                <v-text-field :disabled="maxFolderExceed" label="Enter Google Drive Folder URL" clearable v-model.trim="url" type="url" solo hide-details color="#657186">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn :disabled="maxFolderExceed" @click="getFolderPreview" large icon outlined v-on="on">
                                            <v-icon>mdi-link-plus</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Fetch Folder</span>
                                </v-tooltip>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="12">
                        <v-card flat class="mx-auto mx-0 mb-1" dense v-for="folder in folders" :key="folder.id">
                            <v-card-actions>
                                <v-list-item class="grow">
                                    <v-list-item-avatar tile color="grey darken-3">
                                        <v-img class="elevation-6" :src="folder_icon"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ folder.name }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-row align="center" justify="end">
                                        <v-tooltip left>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" @click="delete_from_preffered(folder)" class="mr-1">mdi-close</v-icon>
                                            </template>
                                            <span>Remove Folder</span>
                                        </v-tooltip>
                                    </v-row>
                                </v-list-item>
                            </v-card-actions>
                        </v-card>
                        <v-card flat class="mx-auto mx-0 mb-1" dense v-for="folder in currentFolders" :key="folder.id">
                            <v-card-actions>
                                <v-list-item class="grow">
                                    <v-list-item-avatar tile color="grey darken-3">
                                        <v-img class="elevation-6" :src="folder_icon"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ folder.name }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-row align="center" justify="end">
                                        <v-tooltip left>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" @click="delete_from_db(folder)" class="mr-1">mdi-folder-remove</v-icon>
                                            </template>
                                            <span>Remove Folder From Project (Not from Google Drive)</span>
                                        </v-tooltip>
                                    </v-row>
                                </v-list-item>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
            <template v-slot:extras>
                {{ futureTotal + '/' + maxFolderTotal }}<v-spacer></v-spacer>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
import request from '@/services/axios_instance'
// Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
export default {
    name: 'GDriveDialog',
    components: {
        CustomDialog
    },

    props: {
        currentFolders: Array,
        maxFolderTotal: { type: Number, default: 10 }
    },

    data: () => ({
        dialog: false,
        url: null,
        folders: [],
        folder_icon: require('@/assets/temp/folder.png')
    }),

    computed: {
        hasPreferredFolders() {
            return this.folders.length > 0
        },
        futureTotal() {
            return this.currentFolders.length + this.folders.length
        },
        maxFolderExceed() {
            return this.futureTotal >= this.maxFolderTotal
        }
    },

    methods: {
        openDialog() {
            this.folders = []
            this.dialog = true
        },

        close_dialog() {
            this.dialog = false
        },

        closeAndClearDialog() {
            Object.assign(this.$data, this.$options.data.apply(this))
            this.close_dialog()
        },

        saveClicked() {
            if (!this.hasPreferredFolders) return
            this.$emit('save', { folders: this.folders })
        },

        getIdFrom() {
            var id = ''
            if (this.url) {
                var url = this.url
                var parts = url.split(
                    /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
                )
                if (url.indexOf('?id=') >= 0) {
                    return (id = parts[6].split('=')[1].replace('&usp', ''))
                } else {
                    id = parts[5].split('/')
                    //Using sort to get the id as it is the longest element.
                    var sortArr = id.sort(function(a, b) {
                        return b.length - a.length
                    })
                    return (id = sortArr[0])
                }
            }
        },

        isFolderDuplicate(id) {
            let index = this.currentFolders.findIndex(i => i.id === id)
            return ~index ? true : false
        },

        getFolderPreview() {
            var id = this.getIdFrom()
            if (typeof id === 'undefined') {
                this.$event.$emit('open_snackbar', 'Invalid URL', 'error')
                return
            }
            if (this.isFolderDuplicate(id)) {
                this.$event.$emit('open_snackbar', 'Duplicate folder.', 'error')
                return
            }
            if (this.isFolderDuplicate(id)) {
                this.$event.$emit('open_snackbar', 'Duplicate folder.', 'error')
                return
            }

            this.$gapi
                .request({
                    path: 'https://www.googleapis.com/drive/v3/files/' + id,
                    method: 'GET'
                })
                .catch(error => {
                    this.$event.$emit(
                        'open_snackbar',
                        error.result.error.message,
                        'error'
                    )
                })
                .then(response => {
                    if (
                        response.result.mimeType &&
                        response.result.mimeType.includes('.folder')
                    ) {
                        let index = this.folders.findIndex(i => i.id === response.result.id)
                        if (~index) {
                            this.$event.$emit('open_snackbar', 'Duplicate Folder!', 'error')
                        } else {
                            this.folders.push(response.result)
                            this.url = null
                        }
                    }
                })
        },

        delete_from_preffered(item) {
            let index = this.folders.findIndex(i => i.id === item.id)
            if (~index) {
                this.folders.splice(index, 1)
            }
        },

        delete_from_db(item) {
            request
                .delete(
                    `api/projects/${this.projectId}/folder-id/google-drive/${item.id}`
                )
                .then(response => {
                    let index = this.currentFolders.findIndex(i => i.id === item.id)
                    if (~index) {
                        this.$emit('folder-removed', item)
                        this.currentFolders.splice(index, 1)
                    }
                })
        }
    }
}
</script>