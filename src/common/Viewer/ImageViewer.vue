<template>
  <v-dialog
      v-model="dialog" 
      transition="dialog-bottom-transition"
      @click:outside="closeDialog"
    > 
      <v-card class="mx-auto image-wrapper" tile v-if="media">
        <v-btn icon outlined color="error" fab @click="closeDialog" style="position: absolute;right: 55px; z-index: 1;"><v-icon>close</v-icon></v-btn>
          <v-row no-gutters justify="space-between">
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <img
                :src="mainurl"
              />
            </v-col>
            <v-spacer></v-spacer>
        </v-row>      
      </v-card>
	</v-dialog>
</template>

<script>
export default {
  name: 'ImageViewer',
  props: {
    media: Object
  },
  data: () => ({
    dialog: false,
  }),
  computed :{ 
    mainurl(){
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
.image-wrapper {
   img {
    max-width: 100%;
  }
}
</style>