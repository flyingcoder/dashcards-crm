<template>
	<div class="dynamic-card">
		<dash-card :title="validate_title(box.title)">
			<template slot="actions">
				<v-flex xs4 class="actions text-xs-right">
					<v-btn fab flat small class="action">
						<v-icon  @click="$emit('edit', box)">edit</v-icon>
					</v-btn>
					<v-btn fab flat small class="action">
						<v-icon @click="$emit('delete', box.id)">close</v-icon>
					</v-btn>
				</v-flex>
			</template>
			<div class="content" slot="content">
				<div class="task" v-for="task of box.tasks" :key="task.id">
					{{ task.title }} 󠁿󠁿󠁿<span class="remove-icon">🗙</span>
				</div>
			</div>
			<v-btn large slot="footer" round class="add__new_btn" color="#3b589e" dark>
				ADD NEW
			</v-btn>
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
@import '~@/sass/_variables';

	.dynamic-card {
		.action{
			background-color: $tableBlueBg;
			border: 1px solid $tableBorderBlue;
			.v-btn__content .v-icon{
				color: $tableTitleBlue;
			}
		}

		@include styledScrollFor('.content');

		.content {
			height: 400px;
			border: 1px solid $tableBorderBlue;
			padding: 0;
			overflow: auto;

			.task {
				padding: 15px;
				background: gainsboro;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid brown;

				.remove-icon {
					cursor: pointer;
					font-size: 1.3em;
					color: #a06060;
				}

			}

		}
		.add__new_btn{
			font-size: 12px;
		}
	}
	@media only screen and (max-width: 480px){
		.dynamic-card {
			.actions{
				.v-btn--floating.v-btn--small {
					height: 30px;
					width: 30px;
				}
				.v-btn{
					margin:6px;
				}
			}
			.content {
				height: 400px;
				border: 1px solid $tableBorderBlue;
			}
			.add__new_btn{
				font-size: 12px;
			}
		}
	}
</style>