import moment from 'moment'

export const global_utils = {
  filters: {
    fromNowFormat(value) {
      return moment(value).fromNow()
    }
  },
  methods: {
    scrollToBottom(e) {
      e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height
    }
  }
}
