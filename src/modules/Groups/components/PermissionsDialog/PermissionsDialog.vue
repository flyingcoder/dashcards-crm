<template>
	<div class="permission-dialog-wrapper">

		<div class="dialog">

			<div class="header">
				<div class="title">Group Permission - Agent</div>
				<div class="close-icon" @click="close_dialog">✖</div>
			</div>

			<v-progress-linear v-if="loading"></v-progress-linear>

			<table class="table-wrapper" v-else>

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

<script src="./PermissionsDialog.js">
</script>
<style lang="scss" scoped src="./PermissionsDialog.scss">
</style>
