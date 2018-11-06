<template functional>
	<div class="table-header">
		<components :is="injections.components.Breadcrumb" :paths="props.paths"/>

		<div class='newAdd__btn' v-on="listeners">
			<v-icon class="addIcon__btn">add_icon</v-icon>
			<div class="addText__btn"><span>Add New</span></div>
		</div>
	</div>
</template>

<script>
	import Breadcrumb from '@/common/Breadcrumb.vue'

	export default {
		name: 'TableHeader',
		functional: true,
		props: {
			paths: Array
		},
		inject: {
			components: {
				default: {
					Breadcrumb
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.table-header {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		align-items: center;

		@include addNewButtonStyle;
	}
</style>