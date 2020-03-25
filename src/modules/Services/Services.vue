<template>
  <div class="services">
    <table-header :paths="paths" @click="add_dialog = true" />

    <services-add-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      title="Add New Service(s)"
      @save="add_item('add_new_services', $event)"
    />

    <services-edit-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Service"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('update_service', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Service"
      text-content="Are you sure you want to delete this service?"
      @delete="delete_item('delete_service')"
    />

    <VueTable
      :headers="headers"
      :items="items"
      :loading="loading"
      title="Services"
      :permission="$_permissions.get('services')"
      @items-selected="selected_ids = $event"
      @load-more="load_more_services"
      :key="componentKey"
      :noMoreData="noMoreData"
    >
      <template v-slot:row-slot="{ item }">
        <tr :key="item.id">
          <td class="service__name text-cap">{{ item.service_name }}</td>
          <td class="text-cap">{{ item.name }}</td>
          <td>{{ item.service_created_at }}</td>
          <Actions
            :item="item"
            :hasView="false"
            :permissions="$_permissions.get('services')"
            @delete="open_delete_dialog(item)"
            @edit="open_edit_dialog(item)"
          ></Actions>
        </tr>
      </template>
      <template slot="empty-slot">
        <v-btn tile text outlined @click="add_dialog = true"
          ><v-icon left>add</v-icon> Add Service</v-btn
        >
      </template>
    </VueTable>
  </div>
</template>
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>
