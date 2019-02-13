<template>
  <div class="add-picture">
    <CustomDialog
      ref="picture_dialog"
      :open.sync="dialog"
      title="Upload New Profile Picture"
      button2-text="Save"
    >
      <template #content>
        <div class="content">
          <Loader :loading="loading" />
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
      <template #button2>
        <v-btn @click="get_cropped_image" :disabled="!file_uploaded"
          >Save</v-btn
        >
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { api_to } from '../../api'
//Components
import Loader from '@/common/BaseComponents/Loader.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'
import CropImage from '@/common/CropImage.vue'

export default {
  components: {
    Loader,
    CustomDialog,
    CustomDropzone,
    CropImage
  },

  data: () => ({
    file_uploaded: false,
    image64: null,
    loading: false,
    croppie: {
      options: {
        viewport: { width: 200, height: 200, type: 'circle' },
        showZoomer: false,
        boundary: { width: 300, height: 300 },
        enableOrientation: true
      },
      result: 'blob'
    }
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

    get_cropped_image() {
      this.$refs.croppie.get_result().then(this.upload_image)
    },

    crop_cancelled() {
      //TODO this is not used
      this.$refs.dropzone.remove_all_files()
      this.image64 = null
      this.file_uploaded = false
    },

    upload_image(image) {
      let formData = new FormData()
      formData.append('file', image)
      this.loading = true
      api_to
        .upload_image(this.user.id, formData)
        .then(this.image_uploaded)
        .finally(() => (this.loading = false))
    },

    image_uploaded(response) {
      this.$refs.croppie.clear_component()
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
