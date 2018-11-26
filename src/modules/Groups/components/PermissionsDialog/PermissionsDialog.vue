<template>
	<div class="permission-dialog-wrapper">

		<div class="dialog">

			<div class="header">
				<div class="title">Group Permission - Agent</div>
				<div class="close-icon" @click="close_dialog">✖</div>
			</div>

			<table class="table-wrapper">

				<table class="fixed-headers">
					<tr>
						<th>Category</th>
						<th>View Item</th>
						<th>Add</th>
						<th>Edit</th>
						<th>Delete</th>
						<th>Permission Level</th>
					</tr>
				</table>

				<custom-table
						hide-headers
						:rows-per-page-items="[50]"
						:items="items"
						hide-actions
						class="custom-table"
				>
					<template slot="custom-item" slot-scope="item">
						<td class="text-xs-left">{{item.item.category}}</td>
						<td class="text-xs-center">{{item.item.view_item}}</td>
						<td class="text-xs-center">{{item.item.add}}</td>
						<td class="text-xs-center">{{item.item.edit}}</td>
						<td class="text-xs-center">{{item.item.delete}}</td>
						<td class="text-xs-left" style="width: 130px">
									<v-select
											placeholder="Level"
											:items="[1, 2, 3, 4]"
											:value="item.item.level"
											class="level-select"
									/>
						</td>
					</template>
				</custom-table>

			</table>
		</div>

		<div class="backdrop"></div>

	</div>
</template>

<script>
	import CustomTable from '@/common/CustomTable/CustomTable.vue'
	export default {
		name: '',
		components: {CustomTable},

		props: {
			something: String //TODO add real props
		},

		data: () => ({
			items: [
				{ id: 1, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 2, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 3, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 4, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 5, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 6, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 7, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 8, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 9, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
				{ id: 10, category: 'cat', view_item: 'view', add: 'add', edit: 'edit', delete: 'delete', level: 1 },
			]
		}),

		methods: {
			close_dialog() {
				this.$emit('close-dialog')
			}
		},

	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.permission-dialog-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: flex-start;

		.dialog {
			width: 80%;
			height: auto;
			background: #EEEFF3;
			padding: 15px;
			border-radius: 15px;
			margin-top: 15px;
			z-index: 100;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #798496;

				.close-icon {
					background: white;
					border-radius: 15px;
					padding: 0 8px;
					font-size: 20px;
					box-shadow: 0 0 2px 0 rgba(0, 0, 0, .5);

					&:hover {
						cursor: pointer;
					}
				}
			}

			.table-wrapper {
				width: 100%;
				border-radius: 15px;
				margin-top: 20px;
				overflow: hidden;

				.fixed-headers {
					width: 100%;
					padding: 15px 0;
					background: #F8F9FB;
					border: 1px solid #DAE1E7;
					border-radius: 8px 8px 0 0;
					color: #858E9D;

					tr {
						display: grid;
						grid-template-columns: repeat(24, 1fr);

						th:nth-child(1) {
							text-align: left;
							margin-left: 5px;
							grid-column: span 4;
						}

						th:nth-child(2) {
							grid-column: span 4;
						}

						th:nth-child(3) {
							grid-column: span 3;
						}

						th:nth-child(4) {
							grid-column: span 4;
						}

						th:nth-child(5) {
							grid-column: span 4;
						}

						th:nth-child(6) {
							text-align: right;
							margin-right: 5px;
							grid-column: span 5;
						}
					}
				}

				.custom-table {
					max-height: 370px;
					overflow: auto;
				}

				@include styledScrollFor('.custom-table');


			}
		}

		.backdrop {
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(78, 19, 17, .3);
			z-index: 99;
		}
	}
</style>