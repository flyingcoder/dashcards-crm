<template>
  <div class="add-picture">
    <CustomDialog
      :open.sync="dialog"
      title="Upload New Profile Picture"
      ref="picture_dialog"
    >
      <template slot="content">
        <div class="content">
          <CustomDropzone
            ref="dropzone"
            :duplicateCheck="true"
            acceptedFiles="image/*"
            :options="dropzoneOptions"
            :useCustomSlot="true"
            dictFileTooBig="File too big"
            dictInvalidFileType="Invalid file type"
            @file-added="file_added"
            @success="file_added"
          />
        </div>
      </template>

      <template slot="entire-actions">
        <span></span>
        <!-- for removing the actions from the dialog -->
      </template>
    </CustomDialog>
    <CropImage
      v-if="file_uploaded"
      :image="image64"
      :upload="upload"
      @cancel="crop_cancelled"
      @uploaded="uploaded"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { api_to } from '../../api'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import CropImage from '@/common/CropImage.vue'

export default {
  components: {
    CustomDialog,
    CustomDropzone,
    CropImage
  },

  data: () => ({
    file_uploaded: false,
    image64: null
  }),

  computed: {
    ...mapGetters('memberProfile', ['picture_dialog_is_open', 'user_id']),
    ...mapGetters(['user']),

    dialog: {
      get() {
        return this.picture_dialog_is_open
      },
      set(val) {
        this.set_picture_dialog(val)
      }
    },

    dropzoneOptions() {
      return {
        maxFiles: 1,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        url: `https://api.bizzooka.com/api/company/clients/${this.user_id}`,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        method: 'put',
        autoProcessQueue: false
      }
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),

    file_added([file]) {
      const reader = new FileReader()
      reader.onload = () => {
        this.image64 = reader.result
        this.file_uploaded = true
      }
      reader.readAsDataURL(file)
    },

    crop_cancelled() {
      this.$refs.dropzone.remove_all_files()
      this.image64 = null
      this.file_uploaded = false
    },

    upload(image) {
      //passed as prop to the CropImage Component
      let formData = new FormData()
      formData.append('file', image)
      return api_to.upload_image(this.user.id, formData)
    },

    uploaded(response) {
      this.$event.$emit(
        'open_snackbar',
        'Profile picture uploaded successfully!'
      )
      this.$emit('picture-changed', response)
      this.$refs.picture_dialog.clear_and_close()
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
