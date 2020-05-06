<template>
  <v-dialog v-model="dialog" @click:outside="closeDialog" :max-width="700">
    <div v-if="media" class="video-wrapper">
      <div class="dialog-header">
        <v-btn outlined fab small text class="action" @click="closeDialog"
          ><v-icon>close</v-icon></v-btn
        >
      </div>
      <div class="dialog-body">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :playsinline="true"
          :options="{
            muted: false,
            autoplay: false,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [
              {
                type: media.mime_type,
                src: media.public_url
              }
            ],
            controls: true,
            fluid: true
          }"
        ></video-player>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'VideoViewer',
  props: {
    media: Object
  },
  data: () => ({
    dialog: false
  }),
  computed: {},
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
  margin: 0 auto;
}
</style>
<style scoped>
>>> .video-js .vjs-big-play-button {
  top: calc(50% - 25px);
  left: calc(50% - 45px);
}
</style>
