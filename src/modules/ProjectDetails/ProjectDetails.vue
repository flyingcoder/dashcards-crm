<template>
  <div class="project-details">
    <TableHeader :paths="paths" :noButton="true" />
    <CustomDialog
      title="Select service"
      v-model="serviceDialog"
      @button1="serviceDialog = false"
    >
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
      <template #button2>
        <v-btn :disabled="!service.selected" @click="save">Save</v-btn>
      </template>
    </CustomDialog>
  </div>
</template>

<script src="./ProjectDetails.js"></script>
<style lang="scss" scoped src="./ProjectDetails.scss"></style>
