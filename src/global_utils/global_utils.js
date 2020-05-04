import moment from 'moment'
import timezone from 'moment-timezone'
import { settings } from '@/variables'

export const global_utils = {
  methods: {
    scrollToBottom(e) {
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height
      })
    },
    addHost(urlString) {
      if (typeof urlString === 'undefined') {
        return settings.apiHostBaseURL
      }

      if (
        !(
          urlString.indexOf('http://') === 0 ||
          urlString.indexOf('https://') === 0
        )
      ) {
        return settings.apiHostBaseURL + urlString
      }
      return urlString
    },
    altImage(item) {
      if (
        item &&
        item.hasOwnProperty('collection_name') &&
        item.collection_name === 'project.files.videos'
      ) {
        item.thumb_url = require('@/assets/temp/no-video-preview.png')
        item.public_url = require('@/assets/temp/no-video-preview.png')
      } else {
        item.thumb_url = require('@/assets/temp/no-image.jpg')
        item.public_url = require('@/assets/temp/no-image.jpg')
      }
    },
    generate_random(qty, min, max) {
      var items = []
      for (var i = 0; i < qty; i++) {
        items.push(parseInt((Math.random() * (max - min) + min).toFixed(0)))
      }
      return items
    }
  }
}
