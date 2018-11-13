<template>
	<div class="projects">

		<table-header :paths="paths" @click="add_dialog = true"/>
		<add-project-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				title="Add New Project"
				@save="add_item('add_new_project', $event)"
		/>

		<custom-table
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				:has-header-icon="true"
				hide-actions
				@items-selected="selected_ids = $event"
				toolbar-title="Projects"
				@sorted="changeSort"
		>

			<template slot="custom-item" slot-scope="item">
				<td>{{ item.item.service_name }}</td>
				<td>{{ item.item.client_name }}</td>
				<td>{{ item.item.manager_name }}
				<td>{{ item.item.started_at }}
				<td>{{ item.item.progress }}
				<td>{{ item.item.total_time }}
				<td>{{ item.item.status }}
				</td>

			<td>{{ item.item.service_created_at }}
			</td>

			<td class="text-xs-center">

				<v-btn fab small color="blue" depressed
						@click="open_edit_dialog(item.item)"
				>
					<img src="@/assets/icons/groups/edit.svg" alt="">
				</v-btn>

				<v-btn fab small color="blue" depressed
						@click="open_delete_dialog(item.item)"
				>
					<img src="@/assets/icons/groups/delete.svg" alt="">
				</v-btn>

			</td>
		</template>

		<template slot="table-actions">

			<div class="bulk-delete">
				<v-btn color="indigo" dark outline :disabled="!show_delete_selected">
					Delete Selected
				</v-btn>
			</div>

			<div class="rows-per-page-dropdown">
				Rows per page:
				<v-select :items="rows_per_page_items"
						menu-props="auto"
						v-model="rows_per_page"
				></v-select>
			</div>

			<div class="pagination">
				<div class="text-xs-center pt-2">
					<v-pagination :length="total_items"
								:total-visible="5"
								v-model="page"
					></v-pagination>
				</div>
			</div>

			<div class="pagination">
				<div class="text-xs-center pt-2">
					<v-pagination :length="total_items" :total-visible="5"
									v-model="page"></v-pagination>
				</div>
			</div>
		</template>

	</custom-table>

	</div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" scoped src="./Projects.scss"></style>