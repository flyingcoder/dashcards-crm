<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="500"
    @click:outside="closeDialog"
  >
    <v-card v-if="media" class="file-wrapper">
      <div class="dialog-header">
        <v-btn icon fab small text class="action" @click="closeDialog"
          ><v-icon>close</v-icon></v-btn
        >
      </div>
      <div class="dialog-body">
        <v-row no-gutters class="pa-2 mb-5">
          <v-col md="3">
            <Media :media="media" size="xl"></Media>
            <v-btn text small block disabled>{{
              media.size | bytesToSize
            }}</v-btn>
          </v-col>
          <v-col grow>
            <p class="headline file-title">File preview not yet supported</p>
            <p class="subtitle file-subtitle">
              {{ media.file_name }}
            </p>
            <v-btn dark color="#3b589e" :href="media.download_url"
              ><v-icon left>mdi-cloud-download</v-icon> Download file</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'OtherViewer',
  props: {
    media: Object
  },

  data: () => ({
    dialog: false
  }),

  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="scss">
@import '~@/sass/_variables';

.file-wrapper {
  border-radius: 15px;
  height: 100%;
  .file-title,
  .file-subtitle {
    color: $titleDarkBlue;
  }
}

.dialog-header {
  text-align: right;
}
.dialog-body {
  max-height: 500px;
  overflow: auto;
}
</style>
