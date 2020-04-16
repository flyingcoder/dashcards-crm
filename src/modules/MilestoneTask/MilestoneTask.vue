<template>
  <div class="milestone-task">
    <task-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      dialog-title="Add Task"
      @save="add_item('add_new_task', $event, dynamic_api)"
    />

    <task-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      dialog-title="Edit Task"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('edit_task', $event, dynamic_api)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Task"
      text-content="Are you sure you want to delete this task?"
      @delete="delete_item('delete_task', dynamic_api)"
    />

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Milestone Task"
      text-content="Are you sure you want to delete these milestone tasks? This can't be undone."
      @delete="bulk_delete_via_url(dynamic_bulk_delete_api)"
    />

    <v-layout>
      <v-flex xs12>
        <table-header :paths="paths" @click="add_dialog = true" />
        <v-progress-linear
          v-show="loading"
          :indeterminate="true"
        ></v-progress-linear>

        <VueTable
          :items="items"
          :headers="headers"
          :showRowActions="true"
          :loading="loading"
          title="Tasks"
          :key="componentKey"
          :noMoreData="noMoreData"
          @load-more="load_more"
          @delete-selected="open_bulk_delete_dialog($event)"
        >
          <template v-slot:row-slot="{ item }">
            <td class="text-xs-left text-cap">{{ item.title }}</td>
            <td class="text-xs-left textarea-cap">
              {{ short_description_text(item.description) }}
            </td>
            <td class="text-xs-left text-cap">{{ item.status }}</td>
            <td class="text-xs-left">{{ item.days }}</td>
            <Actions
              :item="item"
              :hasView="false"
              :permissions="$_permissions.get('hq_milestone_tasks')"
              @edit="open_edit_dialog(item)"
              @delete="open_delete_dialog(item)"
              @view="navigate_to_milestone_page(item)"
            ></Actions>
          </template>
          <template v-slot:empty-slot>
            <v-btn dark color="#3b589e" @click="add_dialog = true"
              ><v-icon left>add</v-icon> Add Task</v-btn
            >
          </template>
        </VueTable>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./MilestoneTask.js"></script>
<style lang="scss" scoped>
@import '~@/sass/variables';

@include pagePadding('.milestone-task');

.milestone-task {
  @include customTableRow; //css used for styling the last row of the table

  @include emptyTable('.empty-task');
}
</style>
