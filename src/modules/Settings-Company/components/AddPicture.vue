<template>
    <div class="add-picture">
        <CustomDialog ref="picture_dialog" title="Upload New Company Logo" button2-text="Save" @button1="cancel" :open.sync="dialog">
            <template #content>
                <div class="content">
                    <Loader :loading="loading" />
                    <CropImage v-if="file_uploaded" ref="croppie" :image="image64" :options="croppie.options" :result="croppie.result" />
                    <CustomDropzone v-else ref="dropzone" :duplicateCheck="true" acceptedFiles="validFileType" :options="dropzoneOptions" :useCustomSlot="true" dictFileTooBig="File too big" dictInvalidFileType="Invalid file type" @file-added="file_added" />
                </div>
            </template>
            <template #button2>
                <v-btn @click="get_cropped_image" :disabled="!file_uploaded">Save</v-btn>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { api_to } from '../api'
//Components
import Loader from '@/common/BaseComponents/Loader.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import CropImage from '@/common/CropImage.vue'
import { settings } from '@/variables'

export default {
    components: {
        Loader,
        CustomDialog,
        CustomDropzone,
        CropImage
    },
    props: {
        pictureDialog: Boolean
    },
    data: () => ({
        file_uploaded: false,
        image64: null,
        loading: false,
        validFileType: settings.allowedImageType,
        croppie: {
            options: {
                viewport: { width: 200, height: 150, type: 'square' },
                showZoomer: true,
                boundary: { width: 300, height: 300 },
                enableOrientation: true
            },
            result: { type : 'blob', size : 'viewport', format : 'png', quality : 1, circle : false }
        }
    }),

    computed: {
        dialog: {
            get() {
                return this.pictureDialog
            },
            set(val) {
                this.pictureDialog = val
            }
        },
        user() {
            return this.$store.getters.user
        },
        dropzoneOptions() {
            return {
                maxFiles: 1,
                thumbnailWidth: 150,
                addRemoveLinks: true,
                url: settings.apiHostBaseURL + `/api/company/${this.user.company_id}/logo`,
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
                method: 'put',
                autoProcessQueue: false
            }
        }
    },
    methods: {
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
            this.$refs.croppie.get_result().then(this.upload_image)
        },

        upload_image(image) {
            let formData = new FormData()
            formData.append('file', image)
            this.loading = true
            api_to
                .upload_image(this.user.company_id, formData)
                .then(this.image_uploaded)
                .finally(() => (this.loading = false))
        },

        image_uploaded(response) {
            this.$refs.croppie.clear_component()
            this.$event.$emit(
                'open_snackbar',
                'Profile picture uploaded successfully!'
            )
            this.$emit('company-logo-change', response.data.company_logo)
            this.$refs.picture_dialog.clear_and_close()
            Object.assign(this.$data, this.$options.data.apply(this))
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