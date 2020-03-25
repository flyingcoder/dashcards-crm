<template>
  <div>
    <v-layout row>
      <v-flex xs12 md12>
        <vue-dropzone
          ref="dropzone"
          id="dropzone"
          :options="options"
          v-bind="$attrs"
          @vdropzone-thumbnail="$emit('thumbnail', arguments)"
          @vdropzone-file-added="file_is_uploaded(arguments)"
          @vdropzone-success="$emit('success', arguments)"
          @vdropzone-error="$emit('failed', arguments)"
          @vdropzone-removed-file="file_is_removed()"
          @vdropzone-canceled="file_is_removed()"
          @vdropzone-sending="file_is_sending"
        >
          <v-layout
            row
            align-center
            justify-center
            fill-height
            class="drop__files_content"
          >
            <div class="file__icon">
              <v-icon>file_copy</v-icon>
            </div>

            <div class="drop__title">Drop files here</div>
            <div class="drop__text">or</div>
            <div class="drop__btn">
              <v-btn large dark color="#3b589e">Choose your files</v-btn>
            </div>
          </v-layout>
        </vue-dropzone>
      </v-flex>
    </v-layout>
    <v-row no-gutters v-if="needConfirmation" class="py-1">
      <v-flex xs12 md12 justify-content-between>
        <v-btn
          dark
          class="mr-1"
          color="#3b589e"
          @click="$emit('open-add-link-dialog')"
        >
          Add Link <v-icon right>link</v-icon>
        </v-btn>
        <v-btn
          color="success"
          :disabled="counts < 1"
          class="mr-1"
          @click="$emit('upload-this-files')"
        >
          Upload Selected Files <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        <v-btn
          v-show="counts > 0"
          class="mr-1"
          color="error"
          @click="remove_all_files()"
        >
          Remove All Files <v-icon right>close</v-icon>
        </v-btn>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { v4 as uuidv4 } from 'uuid';

export default {
  inheritAttrs: false,
  components: {
    vueDropzone: vue2Dropzone
  },

  props: {
    options: Object,
    needConfirmation: { type: Boolean, default: false }
  },
  data: () => ({
    counts: 0,
    session_id: 0
  }),
  created() {
    this.session_id = uuidv4()
  },
  methods: {
    getCount() {
      setTimeout(() => {
        this.counts = this.$refs.dropzone.getAcceptedFiles().length
      }, 1)
    },
    remove_file(file) {
      this.$refs.dropzone.removeFile(file)
      this.getCount()
    },
    remove_all_files() {
      this.$refs.dropzone.removeAllFiles()
      this.counts = 0
    },
    process_queue() {
      this.$refs.dropzone.processQueue()
    },
    file_is_uploaded(event) {
      this.$emit('file-added', event)
      this.getCount()
    },
    file_is_removed() {
      this.getCount()
    },
    file_is_sending(file, xhr, formData) {
      formData.append('file_upload_session', this.session_id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';
.dz-error-message {
  top: 20px;
}

.dz-remove {
  opacity: inherit;
}

.drop__files_content {
  flex-direction: column;
  .file__icon {
    .v-icon {
      font-size: 100px;
      color: $btnGray;
    }
  }
  .drop__title {
    font-size: 17px;
    color: $tableDarkText;
  }
  .drop__text {
    font-size: 12px;
    color: $tableDarkText;
  }
}

@media only screen and (max-width: 768px) and (min-width: 481px) {
  .drop__files_content {
    .drop__title {
      font-size: 17px;
    }
    .drop__btn {
      .v-btn--large {
        font-size: 13px;
        height: 38px;
        padding: 0 22px;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .drop__files_content {
    .file__icon {
      .v-icon {
        font-size: 70px;
      }
    }
    .drop__title {
      font-size: 15px;
    }
    .drop__btn {
      .v-btn--large {
        font-size: 13px;
        height: 33px;
        padding: 0 20px;
      }
    }
  }
}
</style>
