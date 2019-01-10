import { mapMutations } from 'vuex'
import makeRequestTo from '@/services/makeRequestTo'
import { global_utils } from '@/global_utils/global_utils'

export default {
  mixins: [global_utils],

  props: {
    conv: Object
  },

  data: () => ({
    message: null
  }),

  computed: {
    user() {
      return this.$store.getters.user
    }
  },

  methods: {
    ...mapMutations('chat', [
      'toggle_open_conv',
      'close_active_conv',
      'add_message_to_conv'
    ]),
    send_message() {
      if (!this.message) return
      let payload = {
        message: this.message,
        from_id: this.user.id,
        to_id: this.conv.id
      }
      makeRequestTo.send_message(payload).then(({ data }) => {
        this.add_message_to_conv({
          id: this.conv.id,
          message: data
        })
        this.message = null
        this.$nextTick(() => {
          this.scrollToBottom(this.$refs.chat_box)
        })
      })
    }
  }
}
