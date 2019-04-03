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
      <v-layout wrap class="milestone__dialog">
        <v-flex xs12>
          <v-text-field
            class="dialog__textfield d-field"
            label="Milestone Title"
            v-model.trim="title"
            box
            hide-details
            color="blue"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-select
            class="dialog__selectfield d-field"
            label="Status"
            v-model.trim="status"
            :items="['Active', 'Inactive']"
            box
            hide-details
            color="blue"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            label="Days"
            v-model.number="days"
            type="number"
            box
            hide-details
            color="blue"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </template>
  </custom-dialog>
</template>

<script src="./MilestoneDialog.js"></script>
<style lang="scss" scoped src="./MilestoneDialog.scss"></style>
