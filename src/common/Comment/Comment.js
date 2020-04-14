import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'

import RichEditor from '@/common/RichEditor.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'Comment',
  mixins: [global_utils],
  components: {
    RichEditor,
    DeleteDialog
  },

  props: {
    items: Array,
    deleteApi: { type: String, default: 'api/comments' },
    addApi: { type: String, default: 'api/comments' },
    maxHeight: { type: Number, default: 400 }
  },

  data: () => ({
    comment: '',
    btnloading: false,
    hover: false,
    activeComment: null
  }),
  computed: {
    user() {
      return this.$store.getters.user
    },
    isEmptyComment() {
      return !this.comment || this.comment === ''
    }
  },
  methods: {
    can_delete_comment(comment) {
      if (this.user.is_admin) return true
      if (comment.causer.id === this.user.id) return true
      return false
    },
    confirm_delete_comment(item) {
      this.activeComment = item
      this.$refs.delete_comment_dialog.showDialog()
    },
    addComment() {
      if (!this.comment || this.comment === '') {
        return
      }
      this.btnloading = true
      var payload = { comment: this.comment, body: this.comment }
      request
        .post(this.addApi, payload)
        .then(({ data }) => {
          this.items.push(data)
          this.comment = ''
        })
        .finally(() => (this.btnloading = false))
    },
    confirmed_delete_comment() {
      request
        .delete(`${this.deleteApi}/${this.activeComment.id}`)
        .then(({ data }) => {
          let index = this.items.findIndex(
            cm => cm.id === this.activeComment.id
          )
          if (~index) {
            this.items.splice(index, 1)
            this.activeComment = null
          }
          this.$refs.delete_comment_dialog.closeDialog()
        })
        .finally(() => (this.btnloading = false))
    }
  }
}
