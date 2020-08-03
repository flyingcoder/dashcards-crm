<template>
    <div class="members-tab">
        <v-progress-linear v-if="view === 'grid'" v-show="loading" :indeterminate="true" />
        <add-dialog :dialog.sync="add_dialog" :id="id" ref="add_dialog" title="Add Member(s)"
                    @save="add_item('add_members', $event, dynamic_api)" :current="items"
        />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Remove Member" deleteButtonText="Remove"
                       text-content="Are you sure you want to remove this member?"
                       @delete="delete_item('delete_member', dynamic_api)"
        />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Remove members" deleteButtonText="Remove Selected"
                       text-content="Are you sure you want to remove these members from project?"
                       @delete="bulk_remove_members"
        />
        <VueTable v-if="view === 'list'" :items="items" :headers="headers" :showRowActions="true" :title="tableTitle"
                  :loading="loading" :key="componentKey" :noMoreData="noMoreData" @load-more="load_more_members"
                  @delete-selected="open_bulk_delete_dialog($event)"
        >
            <template slot="header-toolbar">
                <table-header :noListButton="false" :noButton="!can_add" :noGridButton="false" @click="add_dialog = true"
                              @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')"
                />
               <!-- <div class="members-tab-action">
                    <v-icon fab class="mr-1" @click="add_dialog = true">add_circle_outline</v-icon>
                    <v-icon fab class="mr-1" @click="setPreferredView('list')">list</v-icon>
                    <v-icon fab class="mr-1" @click="setPreferredView('grid')">mdi-view-dashboard</v-icon>
                </div>-->
            </template>
            <template v-slot:row-slot="{ item }">
                <td class="text-cap clickable-td" @click="navigate_to_view_profile(item)">
                    <Avatar :user="item" />
                </td>
                <td class="email">{{ item.email }}</td>
                <td>{{ item.telephone ? item.telephone.formatInternational : '' }}</td>
                <td class="text-cap">{{ item.job_title | ucwords }}</td>
                <td>{{ item.tasks.length }}</td>
                <Actions :item="item" :hasEdit="false" :hasDelete="can_add" :permissions="$_permissions.get('hq_members')"
                         @delete="open_delete_dialog(item)" @view="navigate_to_view_profile(item)"
                />
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="add_dialog = true">Add {{ type |ucwords }} Member</v-btn>
            </template>
        </VueTable>
        <VueGrid v-else :items="items" @load-more="load_more_members" :key="componentKey"
                 :permissions="$_permissions.get('hq_members')" :noMoreData="noMoreData" @delete="open_delete_dialog"
                 @edit="open_edit_dialog" :hasFooter="false" :showProjectCount="false"
        >
            <template slot="header-toolbar" class="icons">
                <table-header :noListButton="false" :noButton="!can_add" :noGridButton="false" @click="add_dialog = true"
                              @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')"
                />
            </template>
        </VueGrid>
    </div>
</template>
<script src="./Members.js"></script>
<style lang="scss" scoped src="./Members.scss"></style>