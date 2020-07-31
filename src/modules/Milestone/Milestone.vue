<template>
    <div class="milestone">
        <milestone-dialog
                :dialog.sync="add_dialog"
                ref="add_dialog"
                dialogTitle="Add Milestone"
                @save="add_item('add_new_milestone', $event, dynamic_api)"
        />

        <milestone-dialog
                :dialog.sync="edit_dialog"
                ref="edit_dialog"
                dialogTitle="Edit Milestone"
                :is-edit-dialog="edit_dialog"
                :fields-to-edit="edit_item"
                @save="update_item('edit_milestone', $event, dynamic_api)"
        />
        <delete-dialog
                :open-dialog.sync="bulk_delete_dialog"
                title="Delete Milestone"
                text-content="This will also deletes all tasks associated with this milestones. <br>Are you sure you want to delete this milestones?"
                @delete="bulk_delete_via_url(dynamic_bulk_delete_api)"
        />

        <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Milestone"
                text-content="This will also deletes all tasks associated with this milestone. <br>Are you sure you want to delete this milestone?"
                @delete="delete_item('delete_milestone', dynamic_api)"
        />

        <v-layout>
            <v-flex xs12>
                <VueTable
                        :items="items"
                        :headers="headers"
                        :showRowActions="true"
                        :title="template_name"
                        :key="componentKey"
                        :loading="loading"
                        :noMoreData="noMoreData"
                        @load-more="load_more"
                        @delete-selected="open_bulk_delete_dialog($event)"
                >
                    <template slot="header-toolbar">
                        <table-header @click="add_dialog = true" />
                    </template>

                    <template v-slot:row-slot="{ item }">
                        <td class="text-xs-left text-cap clickable-td" @click="navigate_to_milestone_page(item)">
                            {{ item.title | ucwords }}
                        </td>
                        <td class="text-xs-left text-cap">{{ item.tasks_count }}</td>
                        <td class="text-xs-left text-cap">{{ item.status }}</td>
                        <td class="text-xs-left">{{ (item.days === 0 || !item.days) ? 'Not set' : item.days }}</td>
                        <Actions
                                :item="item"
                                :permissions="$_permissions.get('hq_milestones')"
                                @edit="open_edit_dialog(item)"
                                @delete="open_delete_dialog(item)"
                                @view="navigate_to_milestone_page(item)"
                        />
                    </template>
                    <template v-slot:empty-slot>
                        <v-btn dark color="#3b589e" @click="add_dialog = true">
                            <v-icon left>mdi-plus-circle-outline</v-icon>
                            Add Milestone
                        </v-btn>
                    </template>
                </VueTable>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./Milestone.js"></script>

<style lang="scss" scoped>
    @import '~@/sass/variables';

    @include pagePadding('.milestone');

    .milestone {
        @include customTableRow; //css used for styling the last row of the table
        @include firstColumnHover;
        @include emptyTable('.empty-milestone');
    }
</style>
