<template>
  <custom-dialog
    :title="title"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template #content>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            class="dialog__textfield d-field"
            box
            hide-details
            color="#657186"
            v-model.trim="name"
            label="Name"
          />
        </v-flex>

        <v-flex xs12>
          <v-select
            class="dialog__selectfield d-field"
            box
            hide-details
            color="#657186"
            label="Copy Permission"
            v-model.trim="selected_group"
            :items="group_items"
            item-text="name"
            item-value="id"
          />
        </v-flex>

        <v-flex xs12>
          <v-textarea
            class="dialog__textarea d-field"
            box
            hide-details
            color="#657186"
            label="Description"
            v-model.trim="description"
          />
        </v-flex>
      </v-layout>
    </template>
  </custom-dialog>
</template>
<script src="./GroupsDialog.js"></script>
<style lang="scss" scoped src="./GroupsDialog.scss"></style>
