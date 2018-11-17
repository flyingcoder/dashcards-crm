<template>
	<div class="project-overview-card">
		<dash-card title="Project Overview">
			<div class="content-wrapper" slot="content">
				<template v-if="loading">
					<v-progress-linear :indeterminate="true"></v-progress-linear>
					LOADING...
				</template>
				<template v-else>
					<div class="project" v-for="project of projects" :key="project.id">
						<project-row col1="PROJECT ID" :col2="project.id" />
						<project-row col1="Category" :col2="project.service_name" />
						<project-row col1="Client" :col2="project.client_name" />
						<project-row col1="Start Date" :col2="format_date(project.started_at)" />
						<project-row col1="End Date" :col2="format_date(project.end_at)" />
						<project-row col1="Project Time Spent" :col2="format_time(project.total_time)" />
						<project-row col1="Created On" :col2="format_date(project.created_at)" />
					</div>
				</template>
			</div>
		</dash-card>
	</div>
</template>

<script>
	import DashCard from '@/common/DashCard.vue'
	import ProjectRow from './ProjectRow.vue'
	import request from '@/services/axios_instance'
	import { format } from 'date-fns'

	export default {
		name: 'ProjectOverviewCard',
		components: {
			DashCard, ProjectRow
		},

		props: { id: [Number, String] },

		data: () => ({
			projects: [],
			loading: false
		}),

		created() {
			this.loading = true
			request.get('api/projects/' + this.id)
				.then(({data}) => this.projects.push(data))
				.finally(() => this.loading = false)
		},

		methods: {
			format_date(date) {
				return format(date, 'MMMM D, YYYY')
			},
			format_time(time) {
				let [hours, mins, secs] = time.split(':')
				return `${hours} HRS | ${mins} MINS | ${secs} SECS`
			}
		}

	}
</script>

<style lang="scss" scoped>
	.project-overview-card {

	}
</style>