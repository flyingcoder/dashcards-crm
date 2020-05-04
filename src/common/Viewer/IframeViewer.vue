<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="closeDialog"
  >
    <v-card v-if="media">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            outlined
            color="primary"
            v-on="on"
            fab
            :href="mainurl"
            style="position: absolute;right: 115px;top:10px; z-index: 1;"
            ><v-icon>link</v-icon></v-btn
          >
        </template>
        <span>Go to link site</span>
      </v-tooltip>
      <v-btn
        icon
        outlined
        color="error"
        fab
        @click="closeDialog"
        style="position: absolute;right: 55px;top:10px; z-index: 1;"
        ><v-icon>close</v-icon></v-btn
      >
      <iframe
        :src="mainurl"
        frameborder="0"
        width="100%"
        height="800"
        @load="iframeLoaded"
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script>
import Empty from '@/common/Empty'

export default {
  name: 'IframeViewer',
  components: {
    Empty
  },
  props: {
    media: Object
  },
  data: () => ({
    iframe_loading: true,
    dialog: false
  }),
  computed: {
    mainurl() {
      return this.media ? this.media.download_url : null
    }
  },
  methods: {
    iframeLoaded() {
      this.iframe_loading = false
    },
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>
