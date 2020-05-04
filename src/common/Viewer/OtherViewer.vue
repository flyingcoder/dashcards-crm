<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    scrollable
    width="500"
    @click:outside="closeDialog"
  >
    <v-card v-if="media">
      <v-row no-gutters class="pa-2 my-5">
        <v-col md="3">
          <Media :media="media" size="xl"></Media>
          <v-btn text small block disabled>{{
            media.size | bytesToSize
          }}</v-btn>
        </v-col>
        <v-col grow>
          <p class="headline">File preview not yet supported</p>
          <p class="subtitle">
            {{ media.file_name }}
          </p>
          <v-btn dense text outlined :href="media.download_url"
            ><v-icon left>mdi-cloud-download</v-icon> Download file</v-btn
          >
        </v-col>
      </v-row>
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
