<template>
  <div class="second-row table-section">
    <div class="table-headers">
      <div class="column">Description</div>
      <div class="column">Rate</div>
      <div class="column">Hours</div>
      <div class="column">Amount</div>
    </div>

    <div class="table-body">
      <div class="active row" v-if="dialog.type !== 'view'">
        <v-text-field
          class="textfield"
          label="Descriptions"
          solo
          flat
          color="#657186"
          hide-details
          v-model.trim="active_row.descriptions"
        />
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Rate"
          solo
          flat
          color="#657186"
          hide-details
          v-model.trim.number="active_row.rate"
        />
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Hours"
          solo
          flat
          color="#657186"
          hide-details
          v-model.trim.number="active_row.hours"
        />
        <v-text-field
          class="textfield"
          label="Amount"
          solo
          flat
          color="#657186"
          hide-details
          :value="calculate_amount(active_row)"
          disabled
        />
        <v-btn
          class="action"
          color="#1fb868"
          outline
          icon
          :disabled="should_disable"
          @click="add_new_row"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </div>

      <div class="row" v-for="(row, index) of rows" :key="index">
        <v-text-field
          class="textfield"
          label="Descriptions"
          solo
          flat
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.descriptions"
          @input="row_updated('descriptions', $event, index)"
        />
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Rate"
          solo
          flat
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.rate"
          @input="row_updated('rate', $event, index)"
        />
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Hours"
          solo
          flat
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.hours"
          @input="row_updated('hours', $event, index)"
        />
        <v-text-field
          class="textfield"
          label="Amount"
          solo
          flat
          color="#657186"
          hide-details
          :value="row.amount"
          disabled
        />
        <v-btn
          v-if="dialog.type !== 'view'"
          class="action"
          color="#ff7f7c"
          outline
          icon
          @click="delete_row(index)"
        >
          <v-icon>delete</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./TableSection.js"></script>
<style lang="scss" scoped src="./TableSection.scss"></style>
<style scoped src="./TableSection.css"></style>
