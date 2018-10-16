<template>
	<div class="breadcrumb-wrapper">
		<v-breadcrumbs>
			<v-icon slot="divider">chevron_right</v-icon>

			<v-breadcrumbs-item
					class="page__title"
					v-for="path in paths"
					:disabled="path.disabled"
					:key="path.text"
			>
      <span
		      @click="navigate_from_breadcrumb(path.router_name)">
          {{ path.text }}
      </span>
			</v-breadcrumbs-item>
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