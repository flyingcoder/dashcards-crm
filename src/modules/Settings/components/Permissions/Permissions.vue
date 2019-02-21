<template>
  <div class="permissions-table">
    <permissions-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      title="Add Permission"
      @save="add_item('add_new_permission', $event)"
    />

    <permissions-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Permission"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('update_permission', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Permission"
      text-content="Are you sure you want to delete this permission?"
      @delete="delete_item('delete_permission')"
    />

    <table-header :paths="paths" @click="add_dialog = true" />

    <custom-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort="sort"
      :has-checkbox="true"
      hide-actions
      toolbar-title="Permissions"
      no-row-view
      :permission="$_permissions.get('permissions')"
      @items-selected="selected_ids = $event"
      @sorted="changeSort"
      @edit="open_edit_dialog"
      @delete="open_delete_dialog"
    >
      <template slot="custom-item" slot-scope="{ item }">
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ capability_column(item.slug) }}</td>
      </template>

      <template slot="row-actions" slot-scope="{ item }">
        <span v-if="!item.company_id"></span>
      </template>

      <template slot="table-actions">
        <div class="actions-wrapper">
          <div class="bulk-delete">
            <v-btn
              color="#3b589e"
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
              color="#3b589e"
            ></v-select>
          </div>

          <div class="pagination">
            <div class="text-xs-center pt-2">
              <v-pagination
                :length="total_items"
                :total-visible="5"
                v-model="page"
                color="#3b589e"
              ></v-pagination>
            </div>
          </div>
        </div>
      </template>
    </custom-table>
  </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>
