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
		/deep/ ul{
			li.page__title {
				font-size: 26px;
				font-weight: 500;
				&:first-child a{
					color: #bcc2ce;
				}
				&:nth-last-child(1) a{
					color: #667280;
				}
			}
			li.v-breadcrumbs__divider{
				padding: 0;
			}
			li .v-icon{
				font-size: 50px;
				color: #bcc2ce;
			}
		}
	}
	
	// Tablet View
	@media only screen and (max-width: 768px) and (min-width: 481px){
		.breadcrumb-wrapper{
		//TODO add styling for breadcrumb
			/deep/ ul{
				li.page__title {
					font-size: 20px;
				}
				li .v-icon{
					font-size: 30px;
				}
			}
		}
	}

	// Mobile View
	@media only screen and (max-width: 480px){
		.breadcrumb-wrapper{
		//TODO add styling for breadcrumb
			/deep/ ul{
				li.page__title {
					font-size: 12px;
				}
				li .v-icon{
					font-size: 20px;
				}
			}
		}
	}
</style>