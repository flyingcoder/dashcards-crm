import DashCard from '@/common/DashCard.vue'
import RichEditor from '@/common/RichEditor.vue'
import EmojiPicker from 'vue-emoji-picker'
import request from '@/services/axios_instance'
import moment from 'moment'

export default {
	name: 'TaskTabPreviewCard',
	components: {
		DashCard, RichEditor, EmojiPicker
	},
	props: {
		id: [Number, String],
		task: Object,
	},

	data: () => ({
		content: null,
		loading: false,
		all_comments: [],
    comment: '',
		search: '',
	}),

  computed: {
	  full_name() {
	      if(!this.content) return null
	      return this.content.assigned[0].first_name + '' + this.content.assigned[0].last_name
    },
  },

	directives: {
		focus: {
			inserted(el) {
				el.focus()
			},
		},
	},

	watch: {
		task(new_val) {
			this.loading = true
			request.get(`api/task/${this.task.id}`)
				.then(response => {
					this.content = response.data
					this.all_comments = response.data.comments
				})
				.finally(() => this.loading = false)
		}
	},

  methods: {

	  date_created(date) {
		  return moment(date).format('MMMM DD, YYYY')
	  },

    job_title() {
	      return this.content.assigned[0].job_title
    },

	  get_hours(time) { return time.split(':')[0] },
	  get_mins(time) { return time.split(':')[1] },
	  get_secs(time) { return time.split(':')[2] },

	  append(emoji) {
		  this.$refs.editor.$refs.richEditor.quill.focus()
		  const selection = this.$refs.editor.$refs.richEditor.quill.getSelection()
		  this.$refs.editor.$refs.richEditor.quill.insertText(selection.index, emoji)
	  },

	  add_new_comment() {
	  	if (!this.comment) return
		  request.post(`api/task/${this.task.id}/comments`, { body: this.comment })
			  .then(response => {
			  	this.comment = ''
				  this.all_comments.push(response.data)
			  })
	  }

  }
}