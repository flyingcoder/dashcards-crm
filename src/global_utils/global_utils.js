import moment from 'moment'
import timezone from 'moment-timezone'

export const global_utils = {
  filters: {
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
    }
  },
  methods: {
    scrollToBottom(e) {
      e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height
    }
  }
}
