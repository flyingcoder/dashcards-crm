<template>
  <div class="task-dialog">
    <custom-dialog
      ref="dialog"
      :open.sync="computedDialog"
      :title="dialogTitle"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12 md12>
            <v-select
              v-model="milestones.selected"
              :items="milestones.items"
              item-text="title"
              item-value="id"
              label="Milestone"
              placeholder="Select Milestone"
            ></v-select>
          </v-flex>

          <v-flex xs12 md12>
            <v-text-field
              class="dialog__textfield"
              label="Add task title"
              v-model.trim="title"
              solo
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <date-picker
              class="dialog__date"
              label="Start Date"
              prepend-icon="event"
              readonly
              v-model="start_date"
              :max="end_date"
            />
          </v-flex>

          <v-flex xs12 md6>
            <date-picker
              class="dialog__date"
              label="End Date"
              prepend-icon="event"
              readonly
              v-model="end_date"
              :min="start_date"
            />
          </v-flex>

          <v-flex xs12>
            <members-dropdown
              :members.sync="members.selected"
              :member-items="members.items"
              :is-loading="members.loading"
              @search="filter_dropdown_items('members', $event)"
              class="task-member"
            />
          </v-flex>

          <v-flex xs12>
            <rich-editor
              placeholder="Description"
              v-model="description"
              class="task-description"
            />
          </v-flex>
        </v-layout>
      </template>

      <template slot="button2">
        <v-btn @click="save">Save</v-btn>
      </template>
    </custom-dialog>
  </div>
</template>

<script src="./TaskDialog.js"></script>
<style lang="scss" scoped src="./TaskDialog.scss"></style>
