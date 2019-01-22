<template>
	<v-flex xs12 class="tasks-card">
		<div class="tasks__content">
			<dash-card title="Tasks"
			           :view-more-link="viewMoreLink"
			           class="task__content"
			           @close="$emit('close')"
			>
				<div class="content-wrapper" slot="content">
						<div class="tasks-items">
							<tasks-content :id="id" />
						</div>
				</div>
			</dash-card>
		</div>
	</v-flex>
</template>

<script>
import DashCard from '@/common/DashCard.vue'
import TasksContent from './TasksContent.vue'

export default {
  name: 'TasksCard',
  components: {
    DashCard,
    TasksContent
  },

  props: { id: [Number, String], viewMoreLink: Object }
}
</script>

<style lang="scss" scoped>
.tasks-card {
}
</style>
