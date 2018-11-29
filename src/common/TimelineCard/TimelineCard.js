import request from '@/services/axios_instance'
import moment from 'moment'
//Components
import DashCard from '@/common/DashCard.vue'

export default {
	name: 'TimelineCard',

	components: {
		DashCard
	},

	data: () => ({
		timeline_items: []
	}),

	created() {
		request.get('api/activities')
			.then(response => this.timeline_items = response.data)
	},

	methods: {
		get_calendar_time(time) {
			let string = moment(time).calendar().split('at')
			return string.join('')
		}
	}

}