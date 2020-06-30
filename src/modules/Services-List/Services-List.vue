<template>
    <div class="services">
        <services-add-dialog :dialog.sync="add_dialog" ref="add_dialog" title="Add New Service(s)" @save="save_new_services_list($event)" />
        <services-edit-dialog :dialog.sync="edit_dialog" ref="edit_dialog" title="Edit Service" :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item" @save="update_item('update_services_list', $event)" />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Service" text-content="Are you sure you want to delete this service?" @delete="delete_item('delete_service')" />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Services" text-content="Are you sure you want to delete these services? This can't be undone." @delete="bulk_delete('bulk_delete_services')" />
        <VueTable :headers="headers" :items="items" :loading="loading" title="Services" :permission="$_permissions.get('services')" :key="componentKey" :noMoreData="noMoreData" :showSelect="false" @load-more="load_more_services" @delete-selected="open_bulk_delete_dialog($event)" icon="mdi-diving-scuba-flag">
            <template slot="header-toolbar">
                <table-header @click="add_dialog = true" />
            </template>
            <template v-slot:row-slot="{ item }">
                <td>
                  <v-avatar>
                    <v-icon v-if="!item.icon">mdi-layers-triple-outline</v-icon>
                    <v-img v-else :src="item.icon"></v-img>
                  </v-avatar>
                </td>
                <td class="service__name text-cap">{{ item.name | ucwords }}</td>
                <td class="text-cap">
                    <Avatar :user="item.creator"></Avatar>
                </td>
                <td class="text-center">{{ item.campaigns_count}}</td>
                <td>{{ item.service_created_at | bzFromNow }}</td>
                <Actions :item="item" :hasView="false" :permissions="$_permissions.get('services')" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)"></Actions>
            </template>
            <template slot="empty-slot">
                <v-btn dark color="#3b589e" @click="add_dialog = true" depressed>Add Service</v-btn>
            </template>
        </VueTable>
    </div>
</template>
<script src="./Services-List.js"></script>
<style lang="scss" scoped src="./Services-List.scss"></style>