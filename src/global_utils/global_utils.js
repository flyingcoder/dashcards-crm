import moment from 'moment'
import timezone from 'moment-timezone'
import { settings } from '@/variables'

export const global_utils = {
  filters: {
    bzFromNow(date) {
      //bz = buzzooka
      const tz_date = moment.tz(date, 'America/Toronto')
      if (moment().diff(date, 'days') >= 2) {
        return moment(tz_date).fromNow()
      }
      return tz_date.calendar().split(' ')[0]
    },
    from_now(date) {
      const tz_date = moment.tz(date, 'America/Toronto')
      return moment(tz_date).fromNow()
    },
    chat_format(date) {
      const tz = timezone.tz.guess()
      const tz_date = timezone.tz(date, 'America/Toronto')
      return tz_date
        .clone()
        .tz(tz)
        .format('YY/MM/DD, h:mm A')
    },
    truncate(text, stop, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    },
    str_limit(value, size) {
      if (!value) return ''
      value = value.toString()

      if (value.length <= size) {
        return value
      }
      return value.substr(0, size) + '...'
    },
    format(value, format ){
      var form = typeof format === 'undefined' ? 'MMM D YYYY' : format 
      return moment(value).format(form)
    },
    ucwords(value){
      return (value + '') .replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase()
      })
    },
    money(value, currency){

      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
      });

      return formatter.format(value);
    }
  },
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
    generate_random(qty, min, max){
      var items = []
      for (var i = 0; i < qty; i++) {
        items.push(parseInt((Math.random() * (max - min) + min).toFixed(0)))
      }
      return items
    }
  }
}
