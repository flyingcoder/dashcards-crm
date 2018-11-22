<template>
	<div class="task-tab-preview-card" v-if="task">
		<dash-card title="Preview Task">
			<div class="actions" slot="actions">
					<v-icon class="action">cancel</v-icon>
			</div>
			<div class="content" slot="content">
				<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
				<template v-else>
					<div class="header">
						Header
					</div>
					<div class="sub-header">
						Sub Header
					</div>
					<div class="text-content">
						<div class="text">Text</div>
						<div class="comments">Comments</div>
					</div>
					<div class="comment-editor">
						Editor
					</div>
				</template>
			</div>
		</dash-card>
	</div>
</template>

<script>
	import DashCard from '@/common/DashCard.vue'
	import request from '@/services/axios_instance'

	export default {
		name: 'TaskTabPreviewCard',
		components: {
			DashCard
		},
		props: {
			id: [Number, String],
			task: Object,
		},

		data: () => ({
			content: null,
			loading: false
		}),

		watch: {
			task(new_val) {
				this.loading = true
				request.get(`api/task/${this.task.id}`)
					.then(response => this.content = response.data)
					.finally(() => this.loading = false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.task-tab-preview-card {
		.actions {
			display: grid;
			justify-content: end;
			align-items: center;
		}

		.content {
			border: 1px solid grey;
			display: grid;
			grid-template-rows: 50px 50px 700px 200px;
			padding: 0;
		}

		@include styledScrollFor('text.content');

		.text-content {
			overflow: auto;
		}
	}
</style>