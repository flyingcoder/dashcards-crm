<template>
  <div class="files-preview">
    <!-- for videos -->
    <v-tooltip
      left
      v-if="display_videos.length > 0"
      v-for="(media, index) in display_videos"
      :key="media.id"
    >
      <template v-slot:activator="{ on }">
        <v-avatar
          tile
          size="50"
          v-on="on"
          class="mr-1 clickable"
          @click="openViewer(media, 'video')"
        >
          <Media :media="media" size="md"></Media>
        </v-avatar>
      </template>
      <span>{{ media.name }}</span>
    </v-tooltip>

    <!-- for images -->
    <v-tooltip
      left
      v-if="display_medias.length > 0"
      v-for="(media, index) in display_medias"
      :key="media.id"
    >
      <template v-slot:activator="{ on }">
        <v-avatar
          v-on="on"
          tile
          class="mr-1 clickable"
          @click="openViewer(media, 'image')"
        >
          <v-img :src="getMediaSrc(media)">
            <template v-slot:placeholder>
              <Media :media="media" size="md"></Media>
            </template>
          </v-img>
        </v-avatar>
      </template>
      <span>{{ media.name }}</span>
    </v-tooltip>

    <!-- for docs -->
    <v-tooltip
      left
      v-if="display_docs.length > 0"
      v-for="(media, index) in display_docs"
      :key="media.id"
    >
      <template v-slot:activator="{ on }">
        <v-avatar
          tile
          v-on="on"
          class="mr-1 clickable"
          @click="openViewer(media, 'doc')"
        >
          <Media :media="media" size="md"></Media>
        </v-avatar>
      </template>
      <span>{{ media.name }}</span>
    </v-tooltip>

    <!-- for others -->
    <v-tooltip
      left
      v-if="display_others.length > 0"
      v-for="(media, index) in display_others"
      :key="media.id"
    >
      <template v-slot:activator="{ on }">
        <v-avatar
          v-on="on"
          tile
          class="mr-1 clickable"
          @click="openViewer(media, 'other')"
        >
          <Media :media="media" size="md"></Media>
        </v-avatar>
      </template>
      <span>{{ media.name }}</span>
    </v-tooltip>

    <!-- for links -->
    <v-tooltip
      left
      v-if="display_links.length > 0"
      v-for="(media, index) in display_links"
      :key="media.id"
    >
      <template v-slot:activator="{ on }">
        <v-avatar
          v-on="on"
          tile
          class="mr-1 clickable"
          @click="openViewer(media, 'link')"
        >
          <v-img :src="getMediaSrc(media)">
            <template v-slot:placeholder>
              <Media :media="media" size="md"></Media>
            </template>
          </v-img>
        </v-avatar>
      </template>
      <span>{{ media.name }}</span>
    </v-tooltip>

    <EmbedViewer
      ref="embed_viewer_dialog"
      :media="selected_media"
    ></EmbedViewer>
    <VideoViewer
      ref="video_viewer_dialog"
      :media="selected_media"
    ></VideoViewer>
    <ImageViewer
      ref="image_viewer_dialog"
      :media="selected_media"
    ></ImageViewer>
    <DocsViewer ref="doc_viewer_dialog" :media="selected_media"></DocsViewer>
    <IframeViewer
      ref="iframe_viewer_dialog"
      :media="selected_media"
    ></IframeViewer>
    <OtherViewer
      ref="other_viewer_dialog"
      :media="selected_media"
    ></OtherViewer>
  </div>
</template>

<script scoped>
import { global_utils } from '@/global_utils/global_utils'
import _cloneDeep from 'lodash/cloneDeep'

import EmbedViewer from '@/common/Viewer/EmbedViewer.vue'
import VideoViewer from '@/common/Viewer/VideoViewer.vue'
import ImageViewer from '@/common/Viewer/ImageViewer.vue'
import DocsViewer from '@/common/Viewer/DocsViewer.vue'
import IframeViewer from '@/common/Viewer/IframeViewer.vue'
import OtherViewer from '@/common/Viewer/OtherViewer.vue'

export default {
  mixins: [global_utils],
  components: {
    EmbedViewer,
    VideoViewer,
    ImageViewer,
    DocsViewer,
    OtherViewer,
    IframeViewer
  },
  props: {
    item: Object,
    limit: { type: Number, default: 5 }
  },
  data: () => ({
    items: [],
    selected_medias: [],
    selected_media: null,
    default_img: require('@/assets/temp/no-image.jpg'),
    default_video: require('@/assets/temp/no-video-preview.png'),
    default_other: require('@/assets/temp/no-others-available.jpg'),
    image_less: 0,
    video_less: 0,
    other_less: 0,
    docs_less: 0,
    links_less: 0
  }),
  computed: {
    display_medias() {
      var images = this.item.attachments.filter(i => {
        return i.category === 'images'
      })
      if (images.length <= this.limit) {
        return images
      }
      this.image_less = images.length - this.limit
      return _cloneDeep(images).splice(0, this.limit)
    },
    display_videos() {
      var videos = this.item.attachments.filter(i => {
        return i.category === 'videos'
      })
      if (videos.length <= this.limit) {
        return videos
      }
      this.video_less = videos.length - this.limit
      return _cloneDeep(videos).splice(0, this.limit)
    },
    display_others() {
      var others = this.item.attachments.filter(i => {
        return i.category === 'others'
      })
      if (others.length <= this.limit) {
        return others
      }
      this.other_less = others.length - this.limit
      return _cloneDeep(others).splice(0, this.limit)
    },
    display_docs() {
      var docxs = this.item.attachments.filter(i => {
        return i.category === 'documents'
      })
      if (docxs.length <= this.limit) {
        return docxs
      }
      this.docs_less = docxs.length - this.limit
      return _cloneDeep(docxs).splice(0, this.limit)
    },
    display_links() {
      var links = this.item.attachments.filter(i => {
        return i.category === 'links'
      })
      if (links.length <= this.limit) {
        return links
      }
      this.links_less = links.length - this.limit
      return _cloneDeep(links).splice(0, this.limit)
    }
  },
  methods: {
    getMediaSrc(media) {
      // console.log(media)
      if (!media.hasOwnProperty('category')) {
        return this.addHost(this.default_img)
      }
      if (media.category === 'videos') {
        return this.addHost(this.default_video)
      }
      if (media.category === 'others') {
        return this.addHost(this.default_img)
      }
      if (media.category === 'links') {
        return media.custom_properties.thumb
      }
      if (media.category === 'documents') {
        var urls = {
          pdf: require('@/assets/temp/pdf-icon.jpg'),
          docx: require('@/assets/temp/docx-icon.png'),
          txt: require('@/assets/temp/txt-icon.png')
        }
        return urls[media.custom_properties.ext] || url['docx']
      }
      return this.addHost(media.thumb_url)
    },

    openViewer(media, type) {
      this.selected_media = media
      if (
        type === 'link' &&
        media.custom_properties.hasOwnProperty('embed') &&
        media.custom_properties.embed
      ) {
        this.$refs.embed_viewer_dialog.openDialog()
      } else if (type === 'video') {
        this.$refs.video_viewer_dialog.openDialog()
      } else if (type === 'image') {
        this.$refs.image_viewer_dialog.openDialog()
      } else if (type === 'doc') {
        this.$refs.doc_viewer_dialog.openDialog()
      } else if (type === 'link') {
        this.$refs.iframe_viewer_dialog.openDialog()
      } else {
        this.$refs.other_viewer_dialog.openDialog()
      }
    }
  }
}
</script>

<style scoped>
>>> .clickable {
  cursor: pointer;
}

>>> .clickable:hover {
  border: 1px solid gray;
}
</style>
