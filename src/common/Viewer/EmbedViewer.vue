<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="600"
    @click:outside="closeDialog"
  >
    <div class="embed-viewer">
      <div class="dialog-header">
        <v-btn outlined fab small text class="action" @click="closeDialog"
          ><v-icon>close</v-icon></v-btn
        >
      </div>
      <div class="dialog-body">
        <div
          :style="style"
          v-if="media"
          ref="iframe_video"
          v-html="media.custom_properties.embed"
        ></div>
      </div>
    </div>
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
<style lang="scss" scoped>
@import '~@/sass/_variables';

.dialog-header {
  text-align: right;
  background: $white;
  padding: 10px;
  border-bottom: 1px solid $borderGray;

  .v-btn__content .v-icon {
    color: $btnGray;
  }
  .v-btn--outlined {
    border: thin solid $btnGray;
    margin-left: 5px;
  }
}

@include styledScrollFor('.dialog-body');

.dialog-body {
  background: $white;
  padding: 20px;
  max-height: 500px;
  overflow: auto;
  display: flex;
  justify-content: center;
}
</style>
