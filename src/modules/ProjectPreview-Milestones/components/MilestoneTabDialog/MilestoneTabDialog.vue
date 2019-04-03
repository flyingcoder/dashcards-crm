<template>
  <custom-dialog
    :title="dialogTitle"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template #content>
      <v-layout wrap>
        <v-flex xs12 sm12>
          <v-text-field
            class="dialog__textfield d-field"
            box
            hide-details
            color="#657186"
            label="Add milestone title"
            v-model.trim="title"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <date-picker
            class="dialog__datepicker d-field"
            box
            hide-details
            color="#657186"
            label="Start Date"
            prepend-icon="event"
            readonly
            :value="start_date"
            @input="start_date_changed"
            :max="end_date"
          />
        </v-flex>

        <v-flex xs12 sm6>
          <date-picker
            class="dialog__datepicker d-field"
            box
            hide-details
            color="#657186"
            label="End Date"
            prepend-icon="event"
            readonly
            :value="end_date"
            @input="end_date_changed"
            :min="start_date"
          />
        </v-flex>

        <v-flex xs12>
          <v-text-field
            class="dialog__textfield d-field"
            box
            hide-details
            color="#657186"
            label="Add days"
            v-model.number="days"
            min="0"
            type="number"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </template>
  </custom-dialog>
</template>

<script src="./MilestoneTabDialog.js"></script>
<style lang="scss" scoped src="./MilestoneTabDialog.scss"></style>
