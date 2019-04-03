<template>
  <custom-dialog
    :title="title"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template slot="content">
      <v-text-field
        class="dialog__textfield d-field"
        label="Add template name"
        v-model.trim="name"
        color="#667187"
        box
        hide-details
      ></v-text-field>
    </template>
  </custom-dialog>
</template>

<script src="./MilestoneTemplateDialog.js"></script>
<style lang="scss" scoped src="./MilestoneTemplateDialog.scss"></style>
