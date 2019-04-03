<template>
  <custom-dialog
        :title="dialogTitle"
        ref="dialog"
        :open.sync="open"
        button2-text="Save"
        @button1="cancel"
        @button2="save"
  >
    <template slot="content">
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            class="dialog__textfield d-field"
            label="Add task title"
            v-model.trim="title"
            color="#667187"
            box
            hide-details
          ></v-text-field>
        </v-flex>

        <v-flex xs6>
          <v-select
            class="dialog__selectfield d-field"
            label="Select Group"
            v-model.trim="selected_group"
            :items="group_items"
            item-text="name"
            item-value="id"
            color="#667187"
            box
            hide-details
          ></v-select>
        </v-flex>

        <v-flex xs6>
          <v-text-field
            class="dialog__textfield d-field"
            label="Add days"
            v-model.number="days"
            type="number"
            min="0"
            color="#667187"
            box
            hide-details
          ></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-textarea
            class="dialog__textarea d-field"
            label="Add task description"
            v-model.trim="description"
            color="#667187"
            box
            hide-details
          ></v-textarea>
        </v-flex>
      </v-layout>
    </template>
  </custom-dialog>
</template>

<script src="./TasksDialog.js"></script>
<style lang="scss" scoped src="./TasksDialog.scss"></style>
