<template>
	<v-flex md6 xs12 class="timeline-card">
		<div class="timeline__content">
			<dash-card title="Timeline">
				<div class="content" slot="content">

					<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>

					<h2 v-else-if="timeline_items.length === 0">No Data</h2>

					<v-timeline align-top dense v-else>
						<v-timeline-item v-for="item of timeline_items" :key="item.id" color="teal lighten-3" small>
							<div class="timeline-item">
								<div class="t__time">{{ get_calendar_time(item.created_at) }}</div>
								<div class="t__title"><h2>{{ item.description }}</h2></div>
								<div class="t__content">Content</div>
							</div>
						</v-timeline-item>
					</v-timeline>

				</div>
			</dash-card>
		</div>
	</v-flex>
</template>

<script src="./TimelineCard.js">
</script>
<style lang="scss" scoped src="./TimelineCard.scss">
</style>
