<template>
    <CustomDialog ref="dialog" :open.sync="dialog" title="Image URL" button1-text="Cancel" @button1="close_dialog"
                  button2-text="Insert Image" @button2="insertImage"
>
        <template v-slot:content>
            <v-card flat>
                <v-tabs fixed-tabs dense v-model="tab" centered>
                    <v-tabs-slider />
                    <v-tab href="#url">URL</v-tab>
                    <v-tab href="#upload">Upload</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item :value="'url'">
                        <v-card flat>
                            <v-card-text>
                                <label class="mb-3 subtitle-2">Paste your Image URL:</label>
                                <v-text-field label="Image URL" placeholder="https://" v-model.trim="url" type="url"
                                              flat outlined hide-details color="#657186"
/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'upload'">
                        <v-card flat>
                            <v-card-text>
                                <CustomDropzone ref="dropzone" :duplicateCheck="true" acceptedFiles="image/*"
                                                :options="dropzoneOptions" :useCustomSlot="true"
                                                dictFileTooBig="File too big" dictInvalidFileType="Invalid file type"
                                                @success="fileChange" @file-added="file_added"
/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </template>
    </CustomDialog>
</template>
<script>
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
    import CustomDropzone from '@/common/CustomDropzone.vue'
    import {settings} from '@/variables'

    function checkImageExists(imageUrl, callBack) {
        let imageData = new Image();
        imageData.onload = function () {
            callBack(true);
        };
        imageData.onerror = function () {
            callBack(false);
        };
        imageData.src = imageUrl;
    }

    export default {
        components: {
            CustomDialog,
            CustomDropzone
        },
        data: () => ({
            dialog: false,
            command: null,
            url: null,
            tab: 'url',
            file_uploaded: false,
            image64: null,
        }),
        computed: {
            validImage() {
                return (
                    this.imageSrc.match(/unsplash/) !== null ||
                    this.imageSrc.match(/\.(jpeg|jpg|gif|png)$/) != null
                );
            },
            dropzoneOptions() {
                return {
                    maxFiles: 1,
                    thumbnailWidth: 150,
                    addRemoveLinks: false,
                    url: settings.apiHostBaseURL + `/api/file/image-upload`,
                    headers: {Authorization: 'Bearer ' + localStorage.getItem('token')},
                    method: 'post',
                    autoProcessQueue: true
                }
            }
        },
        methods: {
            file_added([file]) {
                const reader = new FileReader()
                reader.onload = () => {
                    this.image64 = reader.result
                    this.file_uploaded = true
                }
                reader.readAsDataURL(file)
            },

            fileChange(data) {
                this.url = data.response.url
                this.imageSrc = data.response.url
            },
            insertImage() {
                checkImageExists(this.url, (existsImage) => {
                    if (existsImage) {
                        const data = {
                            command: this.command,
                            src: this.url
                        };
                        this.$emit("onConfirm", data)
                        this.close_dialog()
                    } else {
                        this.$event.$emit('btnloading_off', false)
                        if (this.tab === 'url') {
                            this.$event.$emit('open_snackbar', 'Invalid Image URL!', 'error')
                        } else {
                            this.$event.$emit('open_snackbar', 'No uploaded image!', 'error')
                        }
                    }
                })
            },
            openDialog(command) {
                this.command = command;
                this.dialog = true
                this.url = null
                this.btnloading = false
                if (this.$refs.dropzone) {
                    this.$refs.dropzone.remove_all_files()
                }
            },
            close_dialog() {
                this.dialog = false
            }
        }
    }
</script>