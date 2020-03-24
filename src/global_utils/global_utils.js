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
    }
  },
  methods: {
    scrollToBottom(e) {
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height
      })
    },
    addHost(urlString) {
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
      item.thumb_url = require('@/assets/temp/no-image.jpg')
      item.public_url = require('@/assets/temp/no-image.jpg')
    }
  }
}
