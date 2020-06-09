<template>
  <div class="services">

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

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Services"
      text-content="Are you sure you want to delete these services? This can't be undone."
      @delete="bulk_delete('bulk_delete_services')"
    />

    <VueTable
      :headers="headers"
      :items="items"
      :loading="loading"
      title="Services"
      :permission="$_permissions.get('services')"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="true"
      @load-more="load_more_services"
      @delete-selected="open_bulk_delete_dialog($event)"
    >
    <template slot="header-toolbar">
      <table-header
      @click="add_dialog = true"
      />
    </template>
      <template v-slot:row-slot="{ item }">
        <td class="service__name text-cap">{{ item.service_name }}</td>
        <td class="text-cap">
          <v-avatar size="40" color="teal">
            <v-img :src="item.image_url" :title="item.name">
              <template v-slot:placeholder>
                <span class="white--text headline">U</span>
              </template>
            </v-img>
          </v-avatar>
          {{ item.name }}
        </td>
        <td>{{ item.service_created_at | bzFromNow }}</td>
        <Actions
          :item="item"
          :hasView="false"
          :permissions="$_permissions.get('services')"
          @delete="open_delete_dialog(item)"
          @edit="open_edit_dialog(item)"
        ></Actions>
      </template>
      <template slot="empty-slot">
        <v-btn dark color="#3b589e" @click="add_dialog = true"
          >Add Service</v-btn
        >
      </template>
    </VueTable>
  </div>
</template>
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>
