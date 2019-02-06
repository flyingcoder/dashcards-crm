<template>
  <v-layout row justify-center>
    <v-dialog v-model="open" persistent scrollable max-width="600px">
      <v-card class="template-dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ dialogTitle }}</span>
          <v-btn small fab @click="cancel" class="close__dialog">
            <v-icon dark>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="dialog__body">
          <v-layout row wrap>
            <v-flex xs12>
              <v-select
                class="dialog__selectfield"
                label="Select Template"
                :items="templates"
                item-text="name"
                item-value="id"
                v-model="selected_template"
                color="#667187"
                solo
                hide-details
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script src="./SelectTemplateDialog.js">
</script>
<style scoped src="./SelectTemplateDialog.css">
</style>
<style lang="scss" scoped src="./SelectTemplateDialog.scss">
</style>
