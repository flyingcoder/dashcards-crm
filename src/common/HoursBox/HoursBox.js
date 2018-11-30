import request from '@/services/axios_instance'

export default {
	name: 'HoursBox',

	props: {
		content: Object
	},

	data: () => ({
		timer_started: false,
		time_running: null,
		interval: null,
		timer_status: null
	}),

	computed: {
		task_belongs_to_logged_user() {
			return this.content.assigned[0].id === this.$auth.logged_user().id
		},
	},

	created() {
		this.time_running = this.content.total_time
		this.timer_status = this.content.timer_status
		if (this.content.timer_status === 'ongoing') {
			this.start_timer()
		}
	},

	beforeDestroy() {
		clearInterval(this.interval)
	},

	methods: {
		get_hours() { return this.time_running.split(':')[0] },
		get_mins() { return this.time_running.split(':')[1] },
		get_secs() { return this.time_running.split(':')[2] },

		handle_timer() {
			if (this.timer_started) //the user clicked pause
				this.pause_timer()
			else {
				this.start_timer()
				let api = 'api/timer/start'
				if (this.timer_status === 'pause')
					api = 'api/timer/back'
				request.post(api, {type: 'task', id: this.content.id})
				this.timer_status = 'ongoing'
			}
		},

		start_timer() {
			this.timer_started = true
			this.interval = setInterval(() => {
				let hours = this.get_hours()
				let mins = this.get_mins()
				let secs = this.get_secs()

				if (secs >= 59 && mins >= 59) {
					hours++
					mins = secs = '00'
				}else if (secs >= 59) {
					mins++
					secs = '00'
				}else {
					secs++
				}
				this.set_time_running(hours, mins, secs)
			}, 1000)
		},

		pause_timer() {
			clearInterval(this.interval)
			request.post('api/timer/pause', { type: 'task', id: this.content.id })
			this.timer_status = 'pause'
			this.timer_started = false
		},

		set_time_running(hours, mins, secs) {
			if (hours.toString().length === 1)
				hours = '0' + hours
			if (mins.toString().length === 1)
				mins = '0' + mins
			if (secs.toString().length === 1)
				secs = '0' + secs

			this.time_running = `${hours}:${mins}:${secs}`
		}

	}

}