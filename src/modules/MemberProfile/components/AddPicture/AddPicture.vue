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
            :duplicateCheck="true"
            acceptedFiles="image/*"
            id="dropzone"
            :options="dropzoneOptions"
            :useCustomSlot="true"
            dictFileTooBig="File too big"
            dictInvalidFileType="Invalid file type"
            @success="file_added"
          />
        </div>
      </template>

      <template slot="entire-actions">
        <span></span>
        <!-- for removing the actions from the dialog -->
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import CustomDropzone from '@/common/CustomDropzone.vue'

export default {
  components: {
    CustomDialog,
    CustomDropzone
  },
  computed: {
    ...mapGetters('memberProfile', ['picture_dialog_is_open', 'user_id']),

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
        timeout: 500000,
        addRemoveLinks: true,
        url: `https://api.bizzooka.com/api/user/${this.user_id}`,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      }
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),

    file_added([, response]) {
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
