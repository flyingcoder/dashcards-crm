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
	ul.v-breadcrumbs.theme--light{
		li.page__title {
			font-size: 26px;
			font-weight: 500;
			&:first-child a.v-breadcrumbs__item span{
				color: #bcc2ce;
			}
			&:last-child a.v-breadcrumbs__item span{
				color: #667280;
			}
		}
		li.v-breadcrumbs__divider{
			i{
				font-size: 50px;
				color: #bcc2ce;
			}
		}
	}
}
	
// Tablet View
@media only screen and (max-width: 768px) and (min-width: 481px){
	.breadcrumb-wrapper{
	//TODO add styling for breadcrumb
		ul.v-breadcrumbs.theme--light{
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
		ul.v-breadcrumbs.theme--light{
			li.page__title {
				font-size: 14px;
			}
			li .v-icon{
				font-size: 20px;
			}
		}
	}
}
</style>

<style scoped>
>>> li.v-breadcrumbs__divider{
	padding: 0;
}
</style>