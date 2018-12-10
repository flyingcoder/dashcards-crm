import EmojiPicker from 'vue-emoji-picker'

export default {
  components: {
    EmojiPicker
  },

  data: () => ({
    search: ''
  }),

  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },

  methods: {
    append(emoji) {
      this.$emit('emoji-added', emoji)
    }
  }
}
