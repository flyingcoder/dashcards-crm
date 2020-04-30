<template>
  <v-dialog
      v-model="dialog" 
      transition="dialog-bottom-transition"
      scrollable
      :max-width="viewableTxt ? `` : `500`"
      @click:outside="closeDialog"
    >
    <v-card v-if="media">
      <v-btn icon color="red" v-if="viewableTxt" fab @click="closeDialog" style="position: absolute;right: 55px;top:10px; z-index: 1;"><v-icon>close</v-icon></v-btn>
      <VueDocPreview :url="media.download_url" v-if="viewableTxt" type="text"></VueDocPreview>
      <v-row v-else no-gutters class="pa-2 my-5">
        <v-col md="3">
          <Media :media="media" size="xl"></Media>
          <v-btn text small block disabled>{{ media.size| bytesToSize}}</v-btn>
        </v-col>
        <v-col grow>
          <p class="headline">File preview not yet supported</p>
          <p class="subtitle">
            {{media.file_name}}
          </p>
          <v-btn dense text outlined :href="media.download_url"><v-icon left>mdi-cloud-download</v-icon> Download file </v-btn>
        </v-col>
      </v-row>
    </v-card>
	</v-dialog>
</template>

<script>
import VueDocPreview from 'vue-doc-preview'
import pdf from 'vue-pdf'

export default {
  name: 'DocsViewer',
  components: {
    VueDocPreview,
    pdf
  },
  props: {
    media: Object
  },

  data: () => ({
    dialog: false,
    currentPage: 0,
    pageCount: 0,
  }),
  computed: {
    viewableTxt() {
      return this.media && this.media.mime_type === 'text/plain'
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

<style>
  #VueDocPreviewRoot { height: 100% !important; padding: 10px; }
  #VueDocPreviewRoot .content { height : 100%; }
  #VueDocPreviewRoot pre {
      overflow-x: auto;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
      overflow-y: auto;
      height : 100%;
   }
</style>