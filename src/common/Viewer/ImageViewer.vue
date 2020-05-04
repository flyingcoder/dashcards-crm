<template>
  <v-dialog
    v-model="dialog"
    @click:outside="closeDialog"
    class="image-dialog"
  >
    <div class="mx-auto image-wrapper" tile v-if="media">

        <div class="dialog-header">
          <v-btn
            icon
            fab
            small
            text
            class="action"
            @click="closeDialog"
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
  background-color: transparent;

  img {
    max-width: 100%;
    max-height: 600px;
  }

  .dialog-header .action{
    position: absolute;
    top: 20px;
    right: 55px;
    .v-btn__content .v-icon{
      color: $black;
    }
  }

  .dialog-body{
    text-align: center;
  }
}
</style>
<style scoped>
  >>> .v-dialog{
    box-shadow: none;
    width: auto;
  }
</style>
