<template>
    <div class="services">
        <services-add-dialog :dialog.sync="add_dialog" ref="add_dialog" title="Add New Service(s)"
                             @save="save_new_services_list($event)"
        />
        <services-edit-dialog :dialog.sync="edit_dialog" ref="edit_dialog" title="Edit Service"
                              :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item"
                              @save="update_item('update_services_list', $event)"
        />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Service"
                       text-content="Are you sure you want to delete this service? This will also delete projects and campaigns associated with this service."
                       @delete="delete_item('delete_service_list')"
        />
        <IconUploader ref="uploadModal" @uploaded="setIcon" />

        <VueTable :headers="headers" :items="items" :loading="loading" title="Services"
                  :permission="$_permissions.get('services')" :key="componentKey" :noMoreData="noMoreData"
                  :showSelect="false" @load-more="load_more_services" @delete-selected="open_bulk_delete_dialog($event)"
                  icon="mdi-alpha-s-box-outline" emptyText="No service yet"
        >
            <template slot="header-toolbar">
                <table-header @click="add_dialog = true"/>
            </template>
            <template v-slot:row-slot="{ item }">
                <td class="clickable-td">
                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-avatar :size="40" v-bind="attrs" v-on="on" @click="openIconModal(item)">
                                <v-icon v-if="!item.icon">mdi-image-plus</v-icon>
                                <v-img v-else :src="item.icon" />
                            </v-avatar>
                        </template>
                        <span>Change Icon</span>
                    </v-tooltip>
                </td>
                <td class="service__name text-cap">{{ item.name | ucwords }}</td>
                <td class="text-cap">
                    <Avatar :user="item.creator"/>
                </td>
                <td class="text-center">{{ item.campaigns_count }}</td>
                <td>{{ item.service_created_at | bzFromNow }}</td>
                <Actions :item="item" :hasView="false" :permissions="$_permissions.get('services')"
                         @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)"
                />
            </template>
            <template slot="empty-slot">
                <v-btn dark color="#3b589e" @click="add_dialog = true" depressed>Add Service</v-btn>
            </template>
        </VueTable>
    </div>
</template>
<script src="./Services-List.js"></script>
<style lang="scss" scoped src="./Services-List.scss"></style>