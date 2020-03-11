<template>
  <v-layout row justify-center v-if="active_task">
    <v-dialog 
    	fullscreen  
    	hide-overlay 
    	v-model="dialog"
    	transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="#3b589e">
          <v-toolbar-title>Task Preview</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
	          <v-btn icon dark @click="dialog = false">
	            <v-icon>close</v-icon>
	          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout row class="content-wrapper">
        	<preview-card
		        :id="active_task.id"
		        :active-id="active_task.id"
		        :key="componentKey"
		        @dropdown-action="handle_dropdown_action"
		      />
        </v-layout>
      </v-card>
    </v-dialog>

    <TaskDialog
	   v-if="active_task"
      :id="active_task.project_id"
      :task="active_task"
      ref="edit_task_dialog"
      dialog-title="Edit Task"
      @save="edit_task_save"
      @close="closeEditDialog"
    />

    <DeleteDialog
      ref="delete_task_dialog"
      :dialog.sync="delete_dialog"
      title="Delete Task"
      text-content="Are you sure you want to delete this task?"
      @delete="confirmed_delete_task"
    />

    <ConfirmDialog
		ref="confirm_mark_as_complete_dialog"
      	:open-dialog.sync='confirm_mark_as_complete_dialog'
      	title="Confirmation required!"
      	confirm-button-text="Yes"
      	text-content="Mark task as completed?"
     	@confirm="confirm_mark_as_complete_task"
    />
  </v-layout>
</template>

<script src="./TaskViewDialog.js"></script>
<style lang="scss" scoped src="./TaskViewDialog.scss"></style>