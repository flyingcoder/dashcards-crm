import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
import moment from 'moment'
//Components
import DashCard from '@/common/DashCard.vue'
import RichEditor from '@/common/RichEditor.vue'
import EmojiPicker from '@/common/EmojiPicker/EmojiPicker.vue'
import HoursBox from '@/common/HoursBox/HoursBox.vue'

export default {
  mixins: [global_utils],
  components: {
    DashCard,
    RichEditor,
    HoursBox,
    EmojiPicker
  },
  props: {
    id: [Number, String],
    task: Object
  },

  data: () => ({
    content: null,
    loading: false,
    all_comments: [],
    comment: ''
  }),

  computed: {
    full_name() {
      if (!this.content) return null
      return (
        this.content.assigned[0].first_name +
        '' +
        this.content.assigned[0].last_name
      )
    }
  },

  watch: {
    task() {
      this.loading = true
      request
        .get(`api/task/${this.task.id}`)
        .then(response => {
          this.content = response.data
          this.all_comments = response.data.comments
        })
        .finally(() => (this.loading = false))
    }
  },

  methods: {
    date_created(date) {
      return moment(date).format('MMMM DD, YYYY')
    },

    job_title() {
      return this.content.assigned[0].job_title
    },

    add_new_comment() {
      if (!this.comment) return
      request
        .post(`api/task/${this.task.id}/comments`, { body: this.comment })
        .then(response => {
          this.comment = ''
          this.all_comments.push(response.data)
        })
    },

    emoji_added(emoji) {
      this.$refs.editor.$refs.richEditor.quill.focus()
      const selection = this.$refs.editor.$refs.richEditor.quill.getSelection()
      this.$refs.editor.$refs.richEditor.quill.insertText(
        selection.index,
        emoji
      )
    }
  }
}
