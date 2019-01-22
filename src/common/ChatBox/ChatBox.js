import { mapMutations } from 'vuex'
import makeRequestTo from '@/services/makeRequestTo'
import { global_utils } from '@/global_utils/global_utils'
import _isEqual from 'lodash/isEqual'

export default {
  mixins: [global_utils],

  props: {
    conv: Object
  },

  data: () => ({
    message: null,
    scroll_load: false,
    scroll_top: null
  }),

  computed: {
    user() {
      return this.$store.getters.user
    },
    unread_message() {
      const unread = this.$store.getters['chat/unread_message'](this.conv.id)
      if (unread) return unread.count
      return 0
    }
  },

  watch: {
    conv({ new_messages, new_page_url }, { old_messages, old_page_url }) {
      if (
        !_isEqual(new_messages, old_messages) &&
        new_page_url !== old_page_url
      )
        this.scrollToBottom(this.$refs.chat_box)
    }
  },

  methods: {
    ...mapMutations('chat', [
      'toggle_open_conv',
      'close_active_conv',
      'add_message_to_conv',
      'add_older_messages'
    ]),
    send_message() {
      if (!this.message) return
      let payload = {
        message: this.message,
        from_id: this.user.id,
        to_id: this.conv.id
      }
      this.send_message_request(payload)
    },

    send_message_request(payload) {
      makeRequestTo.send_message(payload).then(({ data }) => {
        this.add_message_to_conv({
          id: this.conv.id,
          message: data
        })
        this.message = null
        this.scrollToBottom(this.$refs.chat_box)
      })
    },

    toggle_chat_box(id) {
      this.toggle_open_conv(id)
      if (!this.conv.open) {
        this.scrollToBottom(this.$refs.chat_box)
      }
    },

    on_scroll(e) {
      const { next_url } = this.conv
      if (!next_url || this.scroll_load) return
      const diff_from_top = e.target.scrollTop
      if (diff_from_top <= 50) this.fetch_old_messages()
    },

    fetch_old_messages() {
      let el = this.$refs.chat_box
      const height = el.scrollHeight + el.scrollTop

      this.scroll_load = true
      const url = this.conv.next_url.split('.com/')[1]
      makeRequestTo
        .get_old_messages(url)
        .then(({ data }) => {
          this.add_older_messages({
            id: this.conv.id,
            data
          })
          this.$nextTick(() => {
            const scroll_pos = el.scrollHeight - el.scrollTop - height
            el.scrollTo(0, scroll_pos)
          })
        })
        .finally(() => (this.scroll_load = false))
    }
  }
}
