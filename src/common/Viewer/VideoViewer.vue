<template>
  <v-dialog
      v-model="dialog" 
      transition="dialog-bottom-transition"
      @click:outside="closeDialog"
      :max-width="700"
    >
    <v-card v-if="media">
      <v-btn icon color="red" outlined fab @click="closeDialog" style="position: absolute;right: 55px;top:10px; z-index: 1;"><v-icon>close</v-icon></v-btn>
        <video-player  
          class="video-player-box"
          ref="videoPlayer"
          :playsinline="true"
          :options="{
            muted: false,
            autoplay: false,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: media.mime_type,
              src: media.public_url
            }],
            controls: true,
            fluid: true
          }"
       ></video-player>
     </v-card>
	</v-dialog>
</template>

<script>
export default {
  name: 'VideoViewer',
  props: {
    media: Object
  },
  data: () => ({
    dialog: false,
  }),
  computed :{ 
   
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