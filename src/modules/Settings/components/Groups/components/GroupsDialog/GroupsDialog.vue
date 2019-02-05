<template>
  <v-layout row justify-center>
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card class="groups-dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ title }}</span>
          <v-btn fab small class="close__dialog" @click="cancel">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="dialog__body">
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                class="dialog__textfield"
                solo
                hide-details
                color="#657186"
                v-model.trim="name"
                label="Name"
              />
            </v-flex>

            <v-flex xs12>
              <v-textarea
                class="dialog__textarea"
                solo
                hide-details
                color="#657186"
                label="Description"
                v-model.trim="description"
              />
            </v-flex>

            <v-flex xs12>
              <v-select
                class="dialog__selectfield"
                multiple
                solo
                chips
                :items="permission_items"
                color="#657186"
                label="Select Permission"
                item-text="name"
                item-value="id"
                v-model="selected_permission"
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
<script src="./GroupsDialog.js"></script>
<style lang="scss" scoped src="./GroupsDialog.scss"></style>
<style scoped src="./GroupsDialog.css"></style>
