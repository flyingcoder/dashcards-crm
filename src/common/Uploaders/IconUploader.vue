<template>
    <div class="add-picture">
        <CustomDialog ref="uploader" :title="title" button2-text="Save" @button1="cancel" :open.sync="dialog_is_open">
            <template v-slot:content>
                <div class="content">
                    <Loader :loading="loading" />
                    <CropImage v-if="file_uploaded" ref="croppie" :image="image64" :options="croppie.options"
                               :result="croppie.result"
                    />
                    <CustomDropzone v-else ref="dropzone" :duplicateCheck="true" acceptedFiles="image/*"
                                    :options="dropzoneOptions" :useCustomSlot="true" dictFileTooBig="File too big"
                                    dictInvalidFileType="Invalid file type" @file-added="file_added"
                    />
                </div>
            </template>
            <template #button2>
                <v-btn @click="get_cropped_image" :disabled="!file_uploaded">{{ mainButton }}</v-btn>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
    //Components
    import Loader from '@/common/BaseComponents/Loader.vue'
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
    import CustomDropzone from '@/common/CustomDropzone.vue'
    import CropImage from '@/common/CropImage.vue'
    import {mapGetters} from "vuex";
    import {settings} from "@/variables";
    import request from "../../services/axios_instance";

    export default {
        name: 'IconUploader',
        components: {
            Loader,
            CustomDialog,
            CustomDropzone,
            CropImage
        },
        props: {
            title: {type: String, default: 'Upload Image '},
            type: {type: String, default: 'square'},
            width: {type: Number, default: 200},
            height: {type: Number, default: 200},
            extraData: [Object, Array],
            dialog: {type: Boolean, default: false},
            mainButton: {type: String, default: 'Save'},
            allowResize: {type: Boolean, default: false},
            filename:{type: String, default: ''},
        },
        data: () => ({
            file_uploaded: false,
            image64: null,
            loading: false,
            dialog_is_open: false
        }),
        watch: {
            dialog: {
                handler(val) {
                    this.dialog_is_open = !!val
                    if (val)
                        this.file_uploaded = false
                },
                immediate: true
            }
        },
        computed: {
            ...mapGetters(['user']),
            dropzoneOptions() {
                return {
                    maxFiles: 1,
                    thumbnailWidth: this.width,
                    addRemoveLinks: true,
                    method: 'post',
                    acceptedFiles: 'image/*',
                    url: settings.apiHostBaseURL + `/api/attachments/dropzone`,
                    headers: {Authorization: 'Bearer ' + localStorage.getItem('token')},
                    autoProcessQueue: false
                }
            },
            boundary() {
                return {width: this.width + 100, height: this.height + 100}
            },
            croppie() {
                return {
                    options: {
                        viewport: {width: this.width, height: this.height, type: this.type},
                        showZoomer: true,
                        boundary: this.boundary,
                        enableResize: this.allowResize,
                        enableOrientation: true,
                    },
                    result: 'blob'
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

            get_cropped_image() {
                this.$refs.croppie.get_result().then(this.upload_image)
            },

            upload_image(image) {
                let formData = new FormData()
                formData.append('file', image)
                formData.append('folder', 'icons')
                formData.append('name', this.filename)
                this.loading = true
                request.post(`api/file/image-upload`, formData)
                    .then(({data}) => {
                        this.$emit('uploaded-data', data)
                        this.$refs.croppie.clear_component()
                        this.$event.$emit('open_snackbar', 'File uploaded successfully!')
                        Object.assign(this.$data, this.$options.data.apply(this))
                    })
            },
            cancel() {
                this.dialog_is_open = false
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