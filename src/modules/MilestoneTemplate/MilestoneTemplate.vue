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

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Templates"
      text-content="Are you sure you want to delete these template? This can't be undone."
      @delete="bulk_delete('bulk_delete_milestone_template')"
    />
        <VueTable
          :items="items"
          :headers="headers"
          :showRowActions="true"
          @load-more="load_more_on_table('get_milestone_templates')"
          @delete-selected="open_bulk_delete_dialog($event)"
          icon="widgets"
          title="Templates"
          :key="componentKey"
          :noMoreData="noMoreData"
          :showSelect="true"
          :loading="loading"
        >
        <template slot="header-toolbar">
          <table-header
          @click="add_dialog = true"
          />
        </template>
          <template v-slot:row-slot="{ item }">
            <td
              class="text-cap clickable-td"
              @click="navigate_to_milestone_page(item)"
            >
              {{ item.name | ucwords }}
            </td>
            <td class="text-cap">{{ item.status }}</td>
            <Actions
              :item="item"
              :permission="$_permissions.get('templates')"
              @delete="open_delete_dialog(item)"
              @edit="open_edit_dialog(item)"
              @view="navigate_to_milestone_page(item)"
            ></Actions>
          </template>
          <template v-slot:empty-slot>
            <v-btn dark color="#3b589e" @click="add_dialog = true"
              >Add Template</v-btn
            >
          </template>
        </VueTable>
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
