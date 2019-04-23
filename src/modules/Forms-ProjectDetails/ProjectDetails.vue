<template>
  <div class="project-details">
    <TableHeader :paths="paths" @click="addNewQuestion" />
    <CustomDialog title="Select service" v-model="serviceDialog">
      <template #cancel-icon>
        <span></span>
      </template>
      <template #content>
        <v-select
          v-model="service.selected"
          :items="service.items"
          :loading="service.loading"
          item-text="name"
          item-value="id"
          label="Select Service"
        ></v-select>
      </template>
      <template #entire-actions>
        <v-btn :disabled="!service.selected" @click="save">Save</v-btn>
      </template>
    </CustomDialog>

    <div class="question-fields">
      <QuestionsFields
        :service-id="service.selected"
        v-if="!serviceDialog"
        :sections="dynamicSections"
      />
    </div>
  </div>
</template>

<script src="./ProjectDetails.js"></script>
<style lang="scss" scoped src="./ProjectDetails.scss"></style>
