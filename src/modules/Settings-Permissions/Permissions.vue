<template>
    <div class="permissions-table">
        <permissions-dialog :dialog.sync="add_dialog" ref="add_dialog" title="Add Permission"
                            @save="add_item('add_new_permission', $event)"
        />
        <permissions-dialog :dialog.sync="edit_dialog" ref="edit_dialog" title="Edit Permission"
                            :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item"
                            @save="update_item('update_permission', $event)"
        />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Permission"
                       text-content="Are you sure you want to delete this permission?"
                       @delete="delete_item('delete_permission')"
        />
        <VueTable :items="items" :headers="headers" :showRowActions="true" icon="widgets" title="Permissions"
                  :key="componentKey" :noMoreData="noMoreData" :showSelect="false" :loading="loading"
                  :hasFooter="false"
        >
            <template v-slot:header-toolbar>
                <v-select solo flat outlined dense hide-details class="col-md-3 permissions-selection"
                          label="Select Group" :items="groups" v-model="selected_group"
                />
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ snakeCaseToNormal(item.name) | removeSlug | ucwords }}</td>
                <td>{{ item.description }}</td>
                <td>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon :color="getCapability(item, 1)" v-bind="attrs" v-on="on" class="mx-2">
                                mdi-account-check-outline
                            </v-icon>
                        </template>
                        <span>Can view</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon :color="getCapability(item, 2)" v-bind="attrs" v-on="on" class="mx-2">
                                mdi-account-multiple-plus-outline
                            </v-icon>
                        </template>
                        <span>Can create</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon :color="getCapability(item, 3)" v-bind="attrs" v-on="on" class="mx-2">
                                mdi-account-edit-outline
                            </v-icon>
                        </template>
                        <span>Can update</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon :color="getCapability(item, 4)" v-bind="attrs" v-on="on" class="mx-2">
                                mdi-account-multiple-remove-outline
                            </v-icon>
                        </template>
                        <span>Can delete</span>
                    </v-tooltip>
                </td>
                <Actions :item="item" :hasDelete="false" :hasView="false"
                         :permissions="$_permissions.get('permissions')" @edit="open_edit_dialog(item)"
                />
            </template>
        </VueTable>
    </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>