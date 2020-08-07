<template>
    <div class="groups">
        <groups-dialog
                :dialog.sync="add_dialog"
                ref="add_dialog"
                title="Add Group"
                @save="add_item('add_new_group', $event)"
        />

        <groups-dialog
                :dialog.sync="edit_dialog"
                ref="edit_dialog"
                title="Edit Group"
                :is-edit-dialog="edit_dialog"
                :fields-to-edit="edit_item"
                @save="update_item('update_group', $event)"
        />

        <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Group"
                text-content="Are you sure you want to delete this group?"
                @delete="delete_item('delete_group')"
        />

        <PermissionsDialog
                :dialog.sync="permissionDialog"
                ref="permissionDialog"
                title="Permission Table Dialog"
                :fields-to-edit="edit_item"
                @save="update_permissions($event)"
        />

        <v-layout>
            <v-flex xs12>
                <v-card>
                    <VueTable
                            :items="indexes_items"
                            :headers="headers"
                            :showRowActions="true"
                            title="User Groups"
                            :key="componentKey"
                            :noMoreData="noMoreData"
                            :showSelect="false"
                            :hasFooter="false"
                            :loading="loading"
                    >
                        <template slot="header-toolbar">
                            <table-header
                                    @click="add_dialog = true"
                            />
                        </template>
                        <template v-slot:row-slot="{ item }">
                            <td class="text-cap">{{ item.name }}</td>
                            <td>{{ item.description }}</td>
                            <Actions
                                    :item="item"
                                    :hasView="false"
                                    :hasEdit="item.company_id > 0"
                                    :hasDelete="allowedDelete(item)"
                                    editIcon="vpn_key"
                                    :permissions="$_permissions.get('settings_group')"
                                    @delete="open_delete_dialog(item)"
                                    @edit="open_permission_dialog(item)"
                            />
                        </template>
                    </VueTable>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./Groups.js"></script>
<style lang="scss" scoped src="./Groups.scss"></style>
