<template>
  <v-dialog
    v-model="dialog"
    @click:outside="closeDialog"
    width="800"
    class="image-dialog"
  >
    <div class="mx-auto image-wrapper" tile v-if="media">
      <div class="dialog-header">
        <v-btn outlined fab small text class="action" @click="closeDialog"
          ><v-icon>close</v-icon></v-btn
        >
      </div>

      <div class="dialog-body">
        <img :src="mainurl" />
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'ImageViewer',
  props: {
    media: Object
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    mainurl() {
      return this.media ? this.media.public_url : null
    }
  },
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
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include styledScrollFor('.dialog-body');

.image-wrapper {
  img {
    max-width: 100%;
    max-height: 460px;
  }

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
}
</style>
