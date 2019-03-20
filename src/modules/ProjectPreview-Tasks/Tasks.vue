<template>
  <div class="tasks-tab">
    <TaskDialog
      :dialog.sync="add_task_dialog"
      ref="add_task_dialog"
      dialog-title="Add Task"
      :id="id"
      @save="create_new_task"
    />
    <div class="actions">
      <v-btn color="indigo" dark icon title="Add New Task" @click="add_task_dialog = true">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div class="cards">
      <tasks-card :tasks="tab_tasks" />
      <preview-card :id="id" :task="task" />
    </div>
  </div>
</template>

<script src="./Tasks.js"></script>
<style lang="scss" scoped src="./Tasks.scss"></style>