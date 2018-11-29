<template>
	<div class="timeline-card">
		<dash-card title="Timeline">
			<div class="content" :style="{ width: '500px' }" slot="content">
				<v-timeline align-top dense>

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
</template>

<script src="./TimelineCard.js"></script>
<style lang="scss" scoped src="./TimelineCard.scss"></style>