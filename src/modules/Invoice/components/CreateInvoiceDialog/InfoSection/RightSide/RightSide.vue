<template>
  <v-layout column align-end wrap class="right__side">
    <div class="invoice__title">
      <v-text-field
        class="titlefield"
        color="#657186"
        solo
        hide-details
        flat
        placeholder="Add Invoice Title"
        v-model.trim="title"
      ></v-text-field>
    </div>
    <div class="field">
      <div class="field__label">Invoice ID</div>
      <v-text-field
        class="textfield"
        color="#657186"
        solo
        hide-details
        flat
        placeholder="#"
      ></v-text-field>
    </div>

    <div class="invoice__type field">
      <div class="field__label">Select Type</div>
      <v-select
        class="textfield"
        solo
        hide-details
        color="#657186"
        flat
        :items="['hourly', 'monthly']"
        v-model="type"
        placeholder="Select Invoice Type"
      ></v-select>
    </div>

    <div class="field">
      <div class="field__label">Select Project</div>
      <v-select
        class="textfield"
        solo
        hide-details
        color="#657186"
        flat
        :items="projects"
        :value="selected_project"
        @change="set_selected_project($event)"
        item-text="title"
        item-value="id"
        placeholder="Select Project"
      ></v-select>
    </div>

    <div class="invoice__dates">
      <div class="created__date">
        <div class="field__label">Invoice Date:</div>

        <date-picker
          class="textfield"
          solo
          hide-details
          color="#657186"
          flat
          placeholder="Select Date"
          :value="date"
          :max="due_date"
          @input="update_date({ date: $event, field: 'date' })"
        />
      </div>

      <div class="due__date">
        <div class="field__label">Due Date:</div>
        <date-picker
          class="textfield"
          solo
          hide-details
          color="#657186"
          flat
          placeholder="Select Date"
          :value="due_date"
          :min="date"
          @input="update_date({ date: $event, field: 'due_date' })"
        />
      </div>
    </div>
  </v-layout>
</template>

<script src="./RightSide.js">
</script>

<style lang="scss" scoped src="./RightSide.scss">
</style>

<style scoped src="./RightSide.css">
</style>
