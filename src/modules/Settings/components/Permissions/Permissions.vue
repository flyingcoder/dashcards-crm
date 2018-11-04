<template>
  <div class="permissions-table">

    <v-layout row justify-space-between>

      <v-flex xs12>
          <breadcrumb :paths="paths" />
      </v-flex>

      <v-flex>
        <div class="page__options">
          <div class='newAdd__btn'>
            <v-icon class="addIcon__btn">add_icon</v-icon>
            <div class="addText__btn"><span>Add New</span></div>
          </div>
        </div>
      </v-flex>
      
    </v-layout>

    <div class="content__wrapper">
      <div class="row buzz__tables">
        <div class="buzz__tablesTwo">
          <v-toolbar flat class="table__toolbar">
            <v-toolbar-title class="table__toolbar-title" padding="0">Permissions</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

	        <custom-table
			        :headers="headers"
			        :items="items"
			        :loading="loading"
			        :sort="sort"
			        :has-checkbox="true"
			        :has-header-icon="true"
			        hide-actions
			        @items-selected="selected_ids = $event"
			        @sorted="changeSort"
	        >

		        <template slot="custom-item" slot-scope="item">
			        <td class="text-xs-left pl-5">{{ item.item.name }}</td>

			        <td class="text-xs-left pl-5">{{ item.item.description }}</td>

			        <td class="text-xs-left pl-5">{{ item.item.capability }}</td>

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

			        <div class="actions-wrapper">

				        <div class="bulk-delete">
					        <v-btn color="indigo" dark outline :disabled="!show_delete_selected">
						        Delete Selected
					        </v-btn>
				        </div>

				        <div class="rows-per-page-dropdown">
					        Rows per page: <v-select :items="rows_per_page_items" menu-props="auto" v-model="rows_per_page"></v-select>
				        </div>

				        <div class="pagination">
					        <div class="text-xs-center pt-2">
						        <v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
					        </div>
				        </div>

			        </div>
		        </template>

	        </custom-table>

        </div>
      </div>
    </div>

  </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>