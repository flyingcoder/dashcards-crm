<template>
  <v-layout justify-center v-if="task">
    <v-dialog
      fullscreen 
      v-model="dialog"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="#3b589e">
          <v-toolbar-title>Task Preview : {{task.title | ucwords }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="close_dialog">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="content-wrapper py-1">
          <preview-card
            :id="task.id"
            :active-id="task.id"
            :key="componentKey"
            @dropdown-action="handle_dropdown_action"
          />

        </v-card-text>
      </v-card>
    </v-dialog>

<!--     <TaskDialog
      v-if="active_task"
      :id="active_task.project_id"
      :task="active_task"
      ref="edit_task_dialog"
      dialog-title="Edit Task"
      @save="edit_task_save"
      @close="closeEditDialog"
    ></TaskDialog>

    <DeleteDialog
      ref="delete_task_dialog"
      :dialog.sync="delete_task_dialog"
      title="Delete Task"
      text-content="Are you sure you want to delete this task?"
      @delete="confirmed_delete_task"
    ></DeleteDialog>

    <ConfirmDialog
      ref="confirm_mark_as_complete_dialog"
      :open-dialog.sync="confirm_mark_as_complete_dialog"
      title="Confirmation required!"
      confirm-button-text="Yes"
      text-content="Mark task as completed?"
      @confirm="confirm_mark_as_complete_task"
    ></ConfirmDialog> -->
  </v-layout>
</template>

<script src="./TaskViewDialog.js"></script>
<style lang="scss" scoped src="./TaskViewDialog.scss"></style>
