<template>
	<div class="blank-box-card">
		<dash-card title="Blank Box">
			<div class="content" slot="content"></div>
			<v-btn slot="footer" round color="indigo" dark>ADD NEW</v-btn>
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
			id: [Number, String]
		}
	}
</script>

<style lang="scss" scoped>
	.blank-box-card {
		.content {
			height: 400px;
			margin: 15px;
			border: 1px solid darkgrey;
		}
	}
</style>