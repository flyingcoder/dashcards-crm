<template>
    <div class="teams-page">
        <v-progress-linear v-if="view === 'grid'" v-show="loading" :indeterminate="true"></v-progress-linear>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Subscriber" text-content="Are you sure you want to delete this subscriber?" @delete="delete_item('delete_team', $event)" />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Subscribers" text-content="Are you sure you want to delete these subscribers? This can't be undone." @delete="bulk_delete('bulk_delete_subscriber')" />
        <VueTable v-if="view === 'list'" :items="items" :headers="headers" :showRowActions="true" @load-more="load_more_users" :loading="loading" icon="widgets" title="Subscribers" :key="componentKey" :noMoreData="noMoreData" :showSelect="true" @delete-selected="open_bulk_delete_dialog($event)">
            <template slot="header-toolbar">
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
            <template v-slot:row-slot="{ item }">
                <td>
                    <Avatar :user="item"></Avatar>
                </td>
                <td>{{ item.email }}</td>
                <td>{{ item.company.name }}</td>
                <td>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-icon color="success" v-if="!item.deleted_at" v-on="on">mdi-account-check</v-icon>
                            <v-icon color="error" v-else v-on="on">mdi-account-cancel</v-icon>
                        </template>
                        <span v-if="!item.deleted_at">Active</span>
                        <span v-else>Deleted</span>
                    </v-tooltip>
                </td>
                <Actions :item="item" :permissions="$_permissions.get('hq_members')" :hasEdit="can_edit(item)" :hasDelete="can_delete(item)" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="navigate_to_view_profile(item)"></Actions>
            </template>
        </VueTable>
        <VueGrid v-else :items="items" @load-more="load_more_users" :key="componentKey" :noMoreData="noMoreData" @delete="open_delete_dialog" @edit="open_edit_dialog">
            <template slot="header-toolbar" class="icons">
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
        </VueGrid>
    </div>
</template>
<style lang="scss" src="./Subscribers.scss"></style>
<script src="./Subscribers.js"></script>