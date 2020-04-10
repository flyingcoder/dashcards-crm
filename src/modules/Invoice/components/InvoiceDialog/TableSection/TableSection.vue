<template>
  <v-row no-gutters>
    <v-row class="table-headers mb-1">
      <v-col md="5" class="text-left">Description<span class="required">*</span></v-col>
      <v-col md="2" class="text-center">Rate<span class="required">*</span></v-col>
      <v-col md="2" class="text-center">Hours<span class="required">*</span></v-col>
      <v-col md="2" class="text-center">Amount</v-col>
      <v-col md="1" ><v-icon class="green--text">mdi-check-circle</v-icon></v-col>
    </v-row>
    <v-row v-for="(row, index) of rows" :key="index">
      <v-col md="5">
        <v-text-field
          class="textfield"
          label="Descriptions"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.descriptions"
          @input="row_updated('descriptions', $event, index)"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Rate"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.rate"
          @input="row_updated('rate', $event, index)"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Hours"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          :disabled="dialog.type === 'view'"
          :value="row.hours"
          @input="row_updated('hours', $event, index)"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          label="Amount"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          :value="row.amount"
          disabled
        />
      </v-col>
      <v-col md="1">
        <v-spacer></v-spacer>
        
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-if="dialog.type !== 'view'"
              class="action"
              color="#ff7f7c"
              outlined
              icon
              v-on="on"
              @click="delete_row(index)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </template>
          <span>Remove From Items</span>
        </v-tooltip>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

    <v-row class="active" v-if="dialog.type !== 'view'">
      <v-col md="5">
        <v-text-field
          class="textfield"
          label="Descriptions"
          solo
          flat
          outlined
          dense
          tile
          color="#657186"
          hide-details
          v-model.trim="active_row.descriptions"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Rate"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          v-model.trim.number="active_row.rate"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          min="0"
          type="number"
          label="Hours"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          v-model.trim.number="active_row.hours"
        />
      </v-col>
      <v-col md="2">
        <v-text-field
          class="textfield"
          label="Amount"
          solo
          flat
          outlined
          dense
          color="#657186"
          hide-details
          :value="calculate_amount(active_row)"
          disabled
        />
      </v-col>
      <v-col md="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn 
              v-on="on"
              class="action"
              color="#1fb868"
              outlined
              icon
              :disabled="should_disable"
              @click="add_new_row"
            >
              <v-icon>save</v-icon>
            </v-btn>
          </template>
          <span>Add to Items</span>
        </v-tooltip>
      </v-col>
    </v-row>
    
    <v-divider></v-divider>

    
  </v-row>
</template>

<script src="./TableSection.js"></script>
<style lang="scss" scoped src="./TableSection.scss"></style>
<!-- <style scoped src="./TableSection.css"></style> -->
<style scoped>
>>> .table-headers .col {
  background: #e8f1fa;
}
>>> .required { color: red; }
</style>
