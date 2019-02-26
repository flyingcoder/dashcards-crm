<template>
  <vue-dropzone
    ref="dropzone"
    id="dropzone"
    :options="options"
    v-bind="$attrs"
    @vdropzone-thumbnail="$emit('thumbnail', arguments)"
    @vdropzone-file-added="$emit('file-added', arguments)"
    @vdropzone-success="$emit('success', arguments)"
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
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  inheritAttrs: false,
  components: {
    vueDropzone: vue2Dropzone
  },

  props: {
    options: Object
  },

  methods: {
    remove_file(file) {
      this.$refs.dropzone.removeFile(file)
    },
    remove_all_files() {
      this.$refs.dropzone.removeAllFiles()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';
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
