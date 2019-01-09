<template>
	<v-flex xs12 class="timeline-card">
		<div class="timeline__content">
			<dash-card title="Timeline">
				<div class="timeline__inner_content" slot="content">

					<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>

					<h2 v-else-if="timeline_items.length === 0">No Data</h2>

					<v-timeline align-top dense v-else>
						<v-timeline-item v-for="item of timeline_items" :key="item.id" color="#1fb868" small>
							<v-layout class="timeline__item">
								<v-flex xs2 class="t__time">{{ get_calendar_time(item.created_at) }}</v-flex>
								<v-flex class="t__content">
									<h2 class="t__title">{{ item.description }}</h2>
									<p class="t__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</v-flex>
							</v-layout>
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
