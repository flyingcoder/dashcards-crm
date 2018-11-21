<template>
	<div class="dynamic-card">
		<dash-card :title="validate_title(box.title)">
			<template slot="actions">
				<div class="actions">
					<v-icon class="action">edit</v-icon>
					<v-icon class="action">zoom_out_map</v-icon>
					<v-icon class="action" @click="$emit('delete', box.id)">cancel</v-icon>
				</div>
			</template>
			<div class="content" slot="content"></div>
			<v-btn large slot="footer" round color="indigo" dark>ADD NEW</v-btn>
		</dash-card>
	</div>
</template>

<script>
	import  DashCard from '@/common/DashCard.vue'

	export default {
		name: 'BlankBoxCard',
		components: {
			DashCard
		},
		props: {
			id: [Number, String],
			box: Object
		},
		methods: {
			validate_title(title) {
				return title.length > 18 ? title.slice(0, 18) + '...' : title
			}
		}
	}
</script>
<style lang="scss" scoped>
	.dynamic-card {
		.actions {
			display: grid;
			justify-content: end;
			grid-auto-flow: column;
			grid-gap: 10px;
		}
		.content {
			height: 400px;
			margin: 15px;
			border: 1px solid darkgrey;
		}
	}
</style>