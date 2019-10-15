<template>
  <div class="add-picture">
    <CustomDialog
      ref="picture_dialog"
      title="Upload New Profile Picture"
      button2-text="Save"
      @button1="cancel"
      :open.sync="dialog"
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
    ...mapGetters('memberProfile', [
      'picture_dialog_is_open',
      'user_id',
      'user'
    ]),

    ...mapGetters({
      logged_user: 'user'
    }),

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
    ...mapMutations('memberProfile', ['set_picture_dialog', 'set_user']),

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
      console.log('this');
      let formData = new FormData()
      formData.append('file', image)
      this.loading = true
      api_to
        .upload_image(this.user_id, formData)
        .then(this.image_uploaded)
        .finally(() => (this.loading = false))
    },

    image_uploaded(response) {
      this.$refs.croppie.clear_component()
      this.$event.$emit(
        'open_snackbar',
        'Profile picture uploaded successfully!'
      )
      this.set_user(response.data)
      if (Number(this.user_id) === Number(this.logged_user.id)) {
        /* if we modify the logged user */
        this.$store.commit('set_user_image', response.data.image_url)
      }
      this.$refs.picture_dialog.clear_and_close()
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    cancel(){
      this.dialog = false
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
