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
        <v-flex xs12>
          <v-select
            class="dialog__selectfield"
            label="Select Template"
            :items="templates"
            item-text="name"
            item-value="id"
            v-model="selected_template"
            color="#667187"
            box
            hide-details
          ></v-select>
        </v-flex>
      </v-layout>
    </template>
  </custom-dialog>
</template>

<script src="./SelectTemplateDialog.js"></script>
<style lang="scss" scoped src="./SelectTemplateDialog.scss"></style>
