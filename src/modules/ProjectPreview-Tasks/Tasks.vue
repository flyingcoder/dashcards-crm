<template>
  <div class="tasks-tab">
    <TaskDialog
      :dialog.sync="add_task_dialog"
      ref="add_task_dialog"
      dialog-title="Add Task"
      :id="id"
      @save="create_new_task"
    />

    <TaskDialog
      :id="id"
      :task="task"
      ref="edit_task_dialog"
      dialog-title="Edit Task"
      @save="edit_task"
      @close="closeEditDialog"
    />

    <DeleteDialog
      :open-dialog.sync="delete_dialog"
      title="Delete Task"
      text-content="Are you sure you want to delete this task?"
      @delete="delete_task"
    />

    <div class="actions">
      <v-btn
        color="indigo"
        dark
        icon
        title="Add New Task"
        @click="add_task_dialog = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div class="cards">
      <tasks-card :tasks="tab_tasks" />
      <preview-card
        v-if="task"
        :id="id"
        :task="task"
        @dropdown-action="handle_dropdown_action"
      />
    </div>
  </div>
</template>

<script src="./Tasks.js"></script>
<style lang="scss" scoped src="./Tasks.scss"></style>
