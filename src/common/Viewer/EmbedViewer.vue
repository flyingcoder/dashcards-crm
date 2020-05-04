<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    scrollable
    :width="embedWidth"
    @click:outside="closeDialog"
  >
    <v-spacer></v-spacer>
    <v-card
      :style="style"
      v-if="media"
      ref="iframe_video"
      v-html="media.custom_properties.embed"
    ></v-card>
    <v-spacer></v-spacer>
  </v-dialog>
</template>

<script>
export default {
  name: 'EmbedViewer',
  props: {
    media: Object
  },

  data: () => ({
    dialog: false
  }),
  computed: {
    style() {
      let width = 500
      let height = 500
      if (this.media && this.media.custom_properties.embed_width) {
        width = this.media.custom_properties.embed_width
      }
      if (this.media && this.media.custom_properties.embed_height) {
        height = this.media.custom_properties.embed_height
      }
      return `width:${width}px;height:${height}px;`
    },
    embedWidth() {
      if (this.media) {
        return this.media.custom_properties.embed_width
          ? this.media.custom_properties.embed_width
          : 500
      }
      return 500
    }
  },
  methods: {
    closeAllIframe() {
      const iframes = document.getElementsByTagName('iframe')
      if (iframes != null) {
        for (var i = 0; i < iframes.length; i++) {
          iframes[i].src = iframes[i].src
        }
      }
    },
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.closeAllIframe()
      this.dialog = false
    }
  }
}
</script>
