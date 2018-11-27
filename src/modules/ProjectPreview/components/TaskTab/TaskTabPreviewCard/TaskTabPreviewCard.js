import DashCard from '@/common/DashCard.vue'
import RichEditor from '@/common/RichEditor.vue'
import request from '@/services/axios_instance'
import moment from 'moment'

export default {
	name: 'TaskTabPreviewCard',
	components: {
		DashCard, RichEditor
	},
	props: {
		id: [Number, String],
		task: Object,
	},

	data: () => ({
		content: null,
		loading: false,
    comment: ''
	}),

  computed: {
	  full_name() {
	      if(!this.content) return null
	      return this.content.assigned[0].first_name + '' + this.content.assigned[0].last_name
    },
  },

	watch: {
		task(new_val) {
			this.loading = true
			request.get(`api/task/${this.task.id}`)
				.then(response => this.content = response.data)
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


  }
}