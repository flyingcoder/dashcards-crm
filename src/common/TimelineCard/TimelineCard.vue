<template>
	<v-flex xs12 class="timeline-card">
		<div class="timeline__content">
			<dash-card title="Timeline" @close="$emit('close')">
				<div class="timeline__inner_content" slot="content">

					<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>

					<h2 v-else-if="timeline_items.length === 0">No Data</h2>

					<v-timeline align-top dense v-else>
						<v-timeline-item v-for="item of timeline_items" :key="item.id" color="#1fb868" small>
							<div class="timeline__item">
								<div class="t__time">{{ get_calendar_time(item.created_at) }}</div>
									<h2 class="t__title">{{ item.description }}</h2>
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
