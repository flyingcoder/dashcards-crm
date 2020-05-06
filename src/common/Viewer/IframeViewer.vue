<template>
  <v-dialog v-model="dialog" width="800" @click:outside="closeDialog">
    <v-card v-if="media">
      <div class="dialog-header">
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn icon outlined v-on="on" fab small :href="mainurl"
              ><v-icon>link</v-icon></v-btn
            >
          </template>
          <span>Go to link site</span>
        </v-tooltip>
        <v-btn icon outlined fab small @click="closeDialog"
          ><v-icon>close</v-icon></v-btn
        >
      </div>
      <div class="dialog-body">
        <iframe
          :src="mainurl"
          frameborder="0"
          width="100%"
          height="450"
          @load="iframeLoaded"
        ></iframe>
      </div>
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
  max-height: 500px;
  overflow: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
