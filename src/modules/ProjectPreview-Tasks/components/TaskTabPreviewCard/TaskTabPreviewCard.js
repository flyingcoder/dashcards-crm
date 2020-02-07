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
    isRequestInProgress: false,
    content: null,
    loading: false,
    all_comments: [],
    comment: '',
    dropdown_actions: [
      { id: 1, text: 'Edit', value: 'edit' },
      { id: 2, text: 'Delete', value: 'delete' }
    ]
  }),

  computed: {
    full_name() {
      if (!this.content || !this.content.assignee.length) return "No user assigned!"
      return (
        this.content.assignee[0].first_name +
        ' ' +
        this.content.assignee[0].last_name
      )
    },
    assignee_url() {
      if (!this.content || !this.content.assignee.length) return null
      return this.content.assignee[0].image_url
    },
    job_title() {
      if (!this.content || !this.content.assignee.length) return null

      return this.content.assignee[0].job_title
    }
  },

  watch: {
    task: {
      handler(newTask) {
        this.loading = true
        request
          .get(`api/task/${newTask.id}`)
          .then(response => {
            this.content = response.data
            this.all_comments = response.data.comments
          })
          .finally(() => (this.loading = false))
      },
      immediate: true
    }
  },

  methods: {
    date_created(date) {
      return moment(date).format('MMMM DD, YYYY')
    },

    add_new_comment() {
      if (!this.comment || this.isRequestInProgress) return
      this.isRequestInProgress = true
      request
        .post(`api/task/${this.task.id}/comments`, { body: this.comment })
        .then(response => {
          this.comment = ''
          this.all_comments.push(response.data)
        })
        .finally(() => (this.isRequestInProgress = false))
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
