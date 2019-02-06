<template>
  <div class="milestones__tab">
    <milestone-tab-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      dialog-title="Add Milestone"
      @save="add_new_milestone"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Milestone"
      text-content="Are you sure you want to delete this milestone?"
      @delete="delete_milestone"
    />

    <milestone-tab-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      dialog-title="Edit Milestone"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_milestone"
    />

    <select-template-dialog
      :open.sync="select_template_dialog"
      @save="add_template"
      dialog-title="Add Milestone Template"
    />

    <add-task-dialog
      :dialog.sync="add_task_dialog"
      ref="add_task_dialog"
      dialog-title="Add Task"
      :milestone-start-date="add_task_start_date"
      :id="id"
      @save="add_new_task"
    />

    <add-task-dialog
      :dialog.sync="edit_task_dialog"
      ref="edit_task_dialog"
      dialog-title="Edit Task"
      :is-edit-dialog="edit_task_dialog"
      :fields-to-edit="edit_task_item"
      :id="id"
      @save="update_task"
    />

    <v-progress-linear
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <v-layout row justify-end>
      <v-speed-dial
        class="add-btn"
        v-model="is_open_speed_dial"
        direction="bottom"
        right
        transition="slide-y-transition"
      >
        <v-btn
          slot="activator"
          v-model="is_open_speed_dial"
          color="#3b589e"
          dark
          fab
          small
        >
          <v-icon>add</v-icon>
          <v-icon>close</v-icon>
        </v-btn>

        <div class="speed__dial_item" @click="add_dialog = true">
          Add Milestone
          <v-btn slot="activator" color="#3b589e" dark small fab>
            <v-icon>add</v-icon>
          </v-btn>
        </div>

        <div class="speed__dial_item" @click="open_select_template_dialog">
          Select Template
          <v-btn
            slot="activator"
            :disabled="boxes.length > 0"
            color="#3b589e"
            small
            fab
          >
            <v-icon color="white">touch_app</v-icon>
          </v-btn>
        </div>
      </v-speed-dial>
    </v-layout>

    <v-layout row wrap class="boxes__wrapper">
      <v-flex
        md6
        xs12
        class="milestone__box"
        v-for="(box, index) of boxes"
        :key="box.id"
      >
        <div class="milestone__dynamic_box">
          <dynamic-box
            :id="id"
            :box="box"
            @edit="open_edit_dialog"
            @delete="open_delete_confirmation"
            @edit-task="edit_task"
            @remove-task="remove_task(index, $event)"
            @add-task="open_add_task_dialog"
          />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./MilestonesTab.js">
</script>
<style lang="scss" scoped src="./MilestonesTab.scss">
</style>
