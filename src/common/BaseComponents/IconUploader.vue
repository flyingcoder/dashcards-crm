<template>
    <div class="add-picture">
        <CustomDialog
                ref="picture_dialog"
                :title="title"
                :open.sync="dialog"
                @button1="cancel"
        >
            <template v-slot:content>
                <div class="content">
                    <Loader :loading="loading"/>
                    <CropImage
                            v-if="file_uploaded"
                            ref="croppie"
                            :image="image64"
                            :options="croppie.options"
                            :result="croppie.result"
                    />
                    <CustomDropzone
                            v-else
                            ref="dropzone"
                            :duplicateCheck="true"
                            :acceptedFiles="validFileType"
                            :options="dropzoneOptions"
                            :useCustomSlot="true"
                            dictFileTooBig="File too big"
                            dictInvalidFileType="Invalid file type"
                            @file-added="file_added"
                    />
                </div>
            </template>
            <template v-slot:button2>
                <v-btn @click="get_cropped_image" :disabled="!file_uploaded">
                    {{ mainBtnText }}
                </v-btn>
            </template>
        </CustomDialog>
    </div>
</template>

<script>
    import request from '@/services/axios_instance'
    //Components
    import Loader from '@/common/BaseComponents/Loader.vue'
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
    import CustomDropzone from '@/common/CustomDropzone.vue'
    import CropImage from '@/common/CropImage.vue'
    import {settings} from '@/variables'

    export default {
        name: 'IconUploader',
        components: {
            Loader,
            CustomDialog,
            CustomDropzone,
            CropImage
        },
        props: {
            title: {type: String, default: 'Upload Icon'},
            mainBtnText: {type: String, default: 'Save'},
            imageWidth: {type: Number, default: 200},
            imageHeight: {type: Number, default: 200},
            imageType: {type: String, default: 'circle'},
            extraData: Object
        },
        data: () => ({
            file_uploaded: false,
            image64: null,
            loading: false,
            open: false
        }),

        computed: {
            validFileType() {
                return settings.allowedImageType
            },
            dialog: {
                get() {
                    return this.open
                },
                set(val) {
                    this.open = val
                }
            },
            dropzoneOptions() {
                return {
                    maxFiles: 1,
                    thumbnailWidth: 150,
                    addRemoveLinks: true,
                    url: settings.apiHostBaseURL + `/api/file/image-upload`,
                    headers: {Authorization: 'Bearer ' + localStorage.getItem('token')},
                    method: 'put',
                    autoProcessQueue: false
                }
            },
            croppie() {
                return {
                    options: {
                        viewport: {
                            width: this.imageWidth,
                            height: this.imageHeight,
                            type: this.imageType
                        },
                        showZoomer: true,
                        boundary: {width: 300, height: 300},
                        enableOrientation: true
                    },
                    result: 'blob'
                }
            }
        },

        methods: {
            openDialog() {
                this.dialog = true
            },
            file_added([file]) {
                const reader = new FileReader()
                if (this.validFileType.includes(file.type)) {
                    reader.onload = () => {
                        this.image64 = reader.result
                        this.file_uploaded = true
                    }
                    reader.readAsDataURL(file)
                } else {
                    this.$event.$emit('open_snackbar', 'Not a valid image!', 'error')
                    this.file_uploaded = false
                    this.dialog = false
                }
            },

            get_cropped_image() {
                this.$refs.croppie.get_result()
                    .then(this.upload_image)
            },

            upload_image(image) {
                let formData = new FormData()
                formData.append('file', image)
                formData.append('extra', this.extraData)
                this.loading = true
                request.post(`api/file/image-upload`, formData)
                    .then(({data}) => {
                        this.$refs.croppie.clear_component()
                        this.$emit('uploaded', data)
                        this.$refs.picture_dialog.clear_and_close()
                        Object.assign(this.$data, this.$options.data.apply(this))
                    })
                    .finally(() => (this.loading = false))
            },

            cancel() {
                this.dialog = false
                this.file_uploaded = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        justify-content: center;
    }
</style>
