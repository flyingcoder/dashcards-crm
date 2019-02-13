<template>
  <div class="milestone-template">
    <milestone-template-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      title="Add Milestone Template"
      @save="add_item('add_new_milestone_template', $event)"
    />

    <milestone-template-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Milestone Template"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('edit_milestone_template', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Template"
      text-content="Are you sure you want to delete this template?"
      @delete="delete_item('delete_milestone_template')"
    />

    <v-layout row>
      <v-flex xs12>
        <table-header :paths="paths" @click="add_dialog = true" />

        <custom-table
          v-if="items.length || loading"
          :headers="headers"
          :items="items"
          :loading="loading"
          :sort="sort"
          :has-checkbox="true"
          hide-actions
          toolbar-title="Milestone Templates"
          :permission="$_permissions.get('templates')"
          @items-selected="selected_ids = $event"
          @sorted="changeSort"
          @edit="open_edit_dialog"
          @delete="open_delete_dialog"
          @view="navigate_to_milestone_page"
        >
          <template slot="custom-item" slot-scope="item">
            <!-- Table Items -->
            <td class="text-cap" @click="navigate_to_milestone_page(item.item)">
              {{ item.item.name }}
            </td>
            <td class="text-cap">{{ item.item.status }}</td>
          </template>

          <template slot="table-actions">
            <div class="actions-wrapper">
              <div class="bulk-delete">
                <v-btn
                  color="indigo"
                  dark
                  outline
                  :disabled="!show_delete_selected"
                >
                  Delete Selected
                </v-btn>
              </div>

              <div class="rows-per-page-dropdown">
                Rows per page:
                <v-select
                  :items="rows_per_page_items"
                  menu-props="auto"
                  v-model="rows_per_page"
                ></v-select>
              </div>

              <div class="pagination" v-if="should_show_pagination">
                <div class="text-xs-center pt-2">
                  <v-pagination
                    :length="total_items"
                    :total-visible="5"
                    v-model="page"
                  ></v-pagination>
                </div>
              </div>
            </div>
          </template>
        </custom-table>

        <div class="empty-template" v-else>
          <div class="empty-content">
            <div class="empty-svg">
              <svg viewBox="0 0 250 250">
                <path
                  d="M58 59l149 0 0 -7c0,-4 -2,-7 -4,-10 -3,-2 -7,-4 -11,-4l-163 0c-4,0 -7,2 -10,4 -2,3 -4,6 -4,10l0 111c0,4 2,8 4,10 3,3 6,5 10,5l1 0 0 -91c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm13 59c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l138 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-138 0zm0 35c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l87 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-87 0zm0 31c-3,0 -6,-3 -6,-7 0,-3 3,-6 6,-6l138 0c3,0 6,3 6,6 0,4 -3,7 -6,7l-138 0zm149 -125l1 0c7,0 14,3 19,8 5,5 8,12 8,20l0 111c0,7 -3,14 -8,19 -5,5 -12,8 -19,8l-163 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -7 -1 0c-7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-20l0 -111c0,-7 3,-14 8,-19 5,-5 12,-8 19,-8l163 0c8,0 15,3 20,8 5,5 8,12 8,19l0 7zm1 13l-163 0c-4,0 -8,2 -11,5 -2,2 -4,6 -4,10l0 111c0,4 2,7 4,10 3,2 7,4 11,4l163 0c4,0 7,-2 10,-4 2,-3 4,-6 4,-10l0 -111c0,-4 -2,-8 -4,-10 -3,-3 -6,-5 -10,-5z"
                />
              </svg>
            </div>
            <div class="empty-btn">
              <v-btn large dark color="#3b589e" @click="add_dialog = true"
                >Add Template</v-btn
              >
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./MilestoneTemplate.js"></script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.milestone-template');

.milestone-template {
  @include customTableRow; //css used for styling the last row of the table

  @include firstColumnHover;

  @include emptyTable('.empty-template');
}
</style>
