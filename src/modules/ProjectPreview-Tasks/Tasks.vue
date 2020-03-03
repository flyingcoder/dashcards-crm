<template>
  <div class="tasks-tab">
    <v-progress-linear
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <TaskDialog
      :dialog.sync="add_task_dialog"
      ref="add_task_dialog"
      dialog-title="Add Task"
      :id="id"
      @save="create_new_task"
      @close="add_task_dialog = false"
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

    <ConfirmDialog
      :open-dialog.sync='confirm_mark_as_complete_dialog'
      title="Confirmation required!"
      confirm-button-text="Yes"
      text-content="Mark task as completed?"
      @confirm="confirm_mark_as_complete_task"
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
      <tasks-card :id="id" />
      <preview-card
        v-if="active_task_id"
        :id="id"
        :active-id="active_task_id"
        @dropdown-action="handle_dropdown_action"
      />
    </div>
    <div class="empty-task" v-show="false" >
      <div class="empty-content">
        <div class="empty-svg">
            <svg enable-background="new 0 0 431.998 431.998" version="1.1" viewBox="0 0 432 432" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <rect x="80.102" y="192" width="192" height="16"/><polygon points="80.102 240 80.102 256 235.82 256 251.82 240"/><polygon points="80.102 288 80.102 304 187.81 304 203.81 288"/><rect x="80.102" y="336" width="80" height="16"/><path d="m411.21 171.11-22.628-22.626c-6.245-6.245-16.382-6.246-22.627-1e-3 -57.747 57.747-115.65 115.65-173.86 173.85v45.662c38.518 0 28.774 0.018 44.915-0.068 8.351-8.351 45.207-45.206 83.085-83.083v115.15c0 8.836-7.163 16-16 16h-256c-8.837 0-16-7.164-16-16v-288c0-8.837 7.163-16 16-16h32.003v32.001h192v-32l32-1e-3c8.837 0 16 7.163 16 16v59.426l16-16.111v-43.315c0-17.674-14.327-32-32-32h-34.764c-5.138-14.522-17.041-25.849-31.944-30.134-7.367-2.118-13.037-7.788-15.156-15.155-5.765-20.046-24.238-34.709-46.137-34.709-21.898 0-40.37 14.663-46.134 34.706-2.122 7.376-7.806 13.039-15.181 15.164-14.897 4.293-26.81 15.608-31.942 30.128h-34.743c-17.673 0-32 14.326-32 32v288c0 17.673 14.327 32 32 32h256c17.673 0 32-14.327 32-32v-131.15c34.399-34.398 66.437-66.437 75.11-75.111 6.245-6.246 6.245-16.383 1e-3 -22.628zm-315.11-75.364c0.11-14.066 9.614-26.606 23.112-30.496 12.71-3.662 22.478-13.426 26.128-26.116 3.917-13.62 16.565-23.13 30.758-23.13 14.194 0 26.842 9.51 30.758 23.13 3.652 12.698 13.413 22.459 26.111 26.11 13.618 3.918 23.13 16.566 23.13 30.759v16h-160v-16.257zm134.25 256.22c-4.149 0.023-5.848 0.03-11.589 0.032l-10.661-10.661v-12.375l10.778-10.778 22.627 22.627-11.155 11.155zm22.468-22.468-22.627-22.627 101.82-101.82 22.627 22.628-101.82 101.82zm113.14-113.14-22.627-22.627 11.314-11.314 22.628 22.627-11.315 11.314zm22.628-22.626-22.628-22.628 11.314-11.313 22.628 22.627-11.314 11.314z"/><circle cx="176.34" cy="48" r="12"/>
            </svg>
        </div>
        <div class="empty-btn">
          <v-btn large dark color="#3b589e" @click="add_task_dialog = true"
            >Add Task
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Tasks.js"></script>
<style lang="scss" scoped src="./Tasks.scss"></style>
