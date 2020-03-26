<template>
  <div class="clients-table">
    <clients-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      dialog-title="Add Client"
      @save="add_item('add_new_client', $event)"
    />

    <clients-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Client"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('update_client', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Client"
      text-content="Are you sure you want to delete this client?"
      @delete="delete_item('delete_client')"
    />

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Clients"
      text-content="Are you sure you want to delete these clients? This can't be undone."
      @delete="bulk_delete('bulk_delete_clients')"
    />

    <VueTable
      :items="items"
      :headers="headers"
      :showRowActions="true"
      icon="people_outline"
      :loading="loading"
      title="Clients"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="true"
      @load-more="load_more"
      @delete-selected="open_bulk_delete_dialog($event)"
    >
      <template v-slot:row-slot="{ item }">
        <td @click="navigate_to_view_profile(item.id)">
          <v-avatar color="teal" size="36">
            <v-img :src="item.image_url"></v-img>
          </v-avatar>
          {{ item.company_name }}
        </td>
        <td>{{ item.telephone | phoneDisplayForm }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.status }}</td>
        <Actions
          :item="item"
          :permissions="$_permissions.get('clients')"
          @delete="open_delete_dialog(item)"
          @edit="open_edit_dialog(item)"
          @view="navigate_to_view_profile(item.id)"
        ></Actions>
      </template>
      <template v-slot:empty-slot>
        <v-btn tile text outlined @click="add_dialog = true"
          ><v-icon left>add</v-icon> Add Client</v-btn
        >
      </template>
    </VueTable>
  </div>
</template>

<script src="./ClientsTable.js"></script>
<style lang="scss" scoped src="./ClientsTable.scss"></style>
