<template>
	<div class="members-tab">

		<v-layout row>
			<v-flex xs12 class="text-xs-right">
				<v-btn fab small class="add__btn" @click="add_dialog = true">
				<v-icon>add</v-icon>
				</v-btn>
			</v-flex>
		</v-layout>

		<add-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				title="Add Member(s)"
				@save="add_item('add_members', $event, dynamic_api)"
				:all-members="items"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Member"
				text-content="Are you sure you want to delete this member?"
				@delete="delete_item('delete_member', dynamic_api)"
		/>

		<custom-table
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				hide-actions
				@items-selected="selected_ids = $event"
				@sorted="changeSort"
		>
			<template slot="toolbar">
				<v-toolbar flat class="table__toolbar">

					<v-toolbar-title class="table__toolbar-title">Members</v-toolbar-title>

					<v-spacer></v-spacer>

					<v-toolbar-items class="member__option">
						<v-btn fab flat small class="list__view">
							<v-icon>list</v-icon>
						</v-btn>
						<v-btn fab flat small class="grid__view">
							<v-icon>grid_on</v-icon>
						</v-btn>

						<v-menu class="sort__dropdown"
						        transition="slide-y-transition"
						        :nudge-left="116"
						        :nudge-bottom="2"
						        flat
						        offset-y
						>
							<v-btn fab flat small class="sort__option" slot="activator">
								<v-icon>more_horiz</v-icon>
							</v-btn>
							<v-list class="sort__list" flat>
								<v-list-tile class="sort__list_tile" v-for="(sortLists, index) in sortList" :key="index">
									<v-list-tile-title class="sort__list_item">{{ sortLists.title }}</v-list-tile-title>
								</v-list-tile>
							</v-list>
						</v-menu>

					</v-toolbar-items>
				</v-toolbar>
			</template>

			<template slot="custom-item" slot-scope="{item}">
				<td class="text-cap">{{ item.first_name + ' ' + item.last_name }}</td>
				<td class="email">{{ item.email }}</td>
				<td>{{ item.telephone }}</td>
				<td class="text-cap">{{ item.job_title }}</td>
				<td>{{ item.tasks.length }}</td>

				<td>
					<v-btn v-if="can_be_deleted(item)" fab small flat depressed @click="open_delete_dialog(item)">
						<img src="@/assets/icons/groups/delete.svg" alt="">
					</v-btn>
				</td>
			</template>

		</custom-table>
	</div>
</template>

<script src="./MembersTab.js">
</script>
<style lang="scss" scoped src="./MembersTab.scss">
</style>
