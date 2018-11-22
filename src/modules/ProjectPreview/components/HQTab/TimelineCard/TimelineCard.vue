<template>
	<v-flex md6 xs12 class="timeline-card">
		<div class="timeline__content">
			<dash-card title="Timeline">
				<div class="content-wrapper" slot="content">
					<template v-if="loading">
						<v-progress-linear :indeterminate="true"></v-progress-linear>
						LOADING...
					</template>
					<template v-else>
						<div class="no-data" v-if="is_timeline_empty">
							<h2>No Data</h2>
						</div>
						<div class="timeline-items" v-else>

						</div>
					</template>
				</div>
			</dash-card>
		</div>
	</v-flex>
</template>

<script>
	import DashCard from '@/common/DashCard.vue'
	import request from '@/services/axios_instance'

	export default {
		name: 'TimelineCard',
		components: {
			DashCard
		},

		props: { id: [Number, String] },

		data: () => ({
			timeline_items: [],
			loading: false
		}),

		computed: {
			is_timeline_empty() {
				return !this.loading && this.timeline_items.length === 0
			}
		},

		created() {
			this.loading = true
			request.get('api/projects/' + this.id + '/timeline')
				.then(console.log)
				.finally(() => this.loading = false)
		},


	}
</script>

<style lang="scss" scoped>
	.timeline-card {
		.timeline__content{
			margin: 12px;
		}
		.no-data {
			text-align: center;
		}
	}
</style>