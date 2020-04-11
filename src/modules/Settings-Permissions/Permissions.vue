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

    <VueTable
      :items="items"
      :headers="headers"
      :showRowActions="true"
      @load-more="load_more_users"
      icon="widgets"
      title="Permissions"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="false"
      :loading="loading"
      :hasFooter="false"
    >
      <template v-slot:header>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col md="3" sm="12">
            <v-select
              solo
              label="Select Group"
              :items="groups"
              v-model="selected_group"
            ></v-select>
          </v-col>
        </v-row>
      </template>
      <template v-slot:row-slot="{ item }">
        <td>{{ item.name | removeSlug }}</td>
        <td>{{ item.description }}</td>
        <td>{{ capability_column(item.slug) }}</td>
        <Actions
          :item="item"
          :hasDelete="false"
          :hasView="false"
          :permissions="$_permissions.get('permissions')"
          @edit="open_edit_dialog(item)"
        ></Actions>
      </template>
    </VueTable>
  </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>
