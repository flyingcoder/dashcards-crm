<template>
	<div class="breadcrumb-wrapper">
		<v-breadcrumbs :items="paths">

			<v-icon slot="divider">chevron_right</v-icon>

			<template slot="item" slot-scope="{item}">
				<v-breadcrumbs-item class="page__title" :disabled="item.disabled">
	        <span @click="navigate_from_breadcrumb(item.router_name)">
	          {{ item.text }}
	        </span>
				</v-breadcrumbs-item>
			</template>

		</v-breadcrumbs>
	</div>
</template>

<script>
	export default {
		name: 'Breadcrumb',
		props: {
			paths: { type: Array, default: () => [] }
		},

		methods: {
			navigate_from_breadcrumb(router_name) {
				router_name && this.$router.push({ name: router_name })
			}

		}

	}
</script>

<style lang="scss" scoped>
	.breadcrumb-wrapper{
		//TODO add styling for breadcrumb
	}
</style>