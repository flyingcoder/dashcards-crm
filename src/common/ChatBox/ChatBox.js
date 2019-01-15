import { mapMutations } from 'vuex'
import makeRequestTo from '@/services/makeRequestTo'
import { global_utils } from '@/global_utils/global_utils'
import _isEqual from 'lodash/isEqual'
import _throttle from 'lodash/throttle'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  mixins: [global_utils],

  props: {
    conv: Object
  },

  data: () => ({
    message: null,
    scroll_load: false,
    scroll_top: null,
    channel: null,
    typing: false,
    timeout: null,
    old_conv: null
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
    conv: {
      handler(new_conv) {
        if (
          !_isEqual(new_conv.messages, this.old_conv.messages) &&
          new_conv.next_url === this.old_conv.next_url
        )
          this.scrollToBottom(this.$refs.chat_box)
        this.old_conv = _cloneDeep(new_conv)
      },
      deep: true
    }
  },

  created() {
    this.old_conv = _cloneDeep(this.conv)
    this.subscribe()
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
    },

    user_typing: _throttle(function() {
      this.channel.trigger('client-typing', { user_id: this.user.id })
    }, 300),

    set_timeout() {
      clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.typing = false
      }, 700)
    },

    subscribe() {
      this.channel = this.$pusher.subscribe(
        `private-chat.typing-${this.user.company_id}`
      )

      this.channel.bind('client-typing', ({ user_id }) => {
        if (user_id === this.conv.id) {
          this.set_timeout()
          this.typing = true
        }
      })
    }
  }
}
