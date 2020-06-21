<template>
    <div class="clients">
        <clients-dialog :dialog.sync="add_dialog" ref="add_dialog" dialogTitle="Add New Client" @save="add_item('add_new_client', $event)" />
        <clients-dialog :dialog.sync="edit_dialog" ref="edit_dialog" dialogTitle="Edit Client" :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item" @save="update_item('update_client', $event)" />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Client" text-content="Are you sure you want to delete this client?" @delete="delete_item('delete_client')" />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Clients" text-content="Are you sure you want to delete these clients? This can't be undone." @delete="bulk_delete('bulk_delete_clients')" />
        <!-- Table list view -->
        <VueTable v-if="view === `list`" :items="items" :headers="headers" :showRowActions="true" icon="people_outline" :loading="loading" title="Clients" :key="componentKey" :noMoreData="noMoreData" :showSelect="true" @load-more="load_more" @delete-selected="open_bulk_delete_dialog($event)">
            <template slot="header-toolbar">
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
            <template v-slot:row-slot="{ item }">
                <td class="clickable-td">
                    <Avatar :user="item"></Avatar>
                </td>
            	<td v-if="item.company">{{ item.company.name | ucwords }}</td>
                <td v-else></td>
                <td>{{ item.telephone ? item.telephone.formatInternational : '-' }}</td>
                <td v-if="item.company">{{ item.company.address | ucwords }}</td>
                <td v-else></td>
                <td>{{ item.props ? item.props.status : 'Active' }}</td>
                <Actions :item="item" :permissions="$_permissions.get('clients')" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="navigate_to_view_profile(item.id)"></Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="add_dialog = true">Add Client</v-btn>
            </template>
        </VueTable>
        <!-- Grid View  -->
        <VueGrid v-else title="Clients" :showTaskCount="false" :items="items" @load-more="load_more" :key="componentKey" :noMoreData="noMoreData" @delete="open_delete_dialog" @edit="open_edit_dialog">
            <template slot="header-toolbar" class="icons">
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
        </VueGrid>
    </div>
</template>
</template>
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>