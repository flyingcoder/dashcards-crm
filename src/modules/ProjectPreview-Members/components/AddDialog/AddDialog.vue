<template>
  <v-layout justify-center>
    <v-dialog v-model="open" persistent scrollable max-width="600px">
      <v-card class="membertab-dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ title }}</span>
          <v-btn small fab @click="cancel" class="close__dialog">
            <v-icon dark>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-progress-linear
          slot="progress"
          color="blue"
          indeterminate
        ></v-progress-linear>
        <v-card-text class="dialog__body">
          <v-layout wrap>
            <v-flex xs12>
              <members-dropdown
                :members.sync="members.selected"
                :member-items="members.items"
                :is-loading="members.loading"
                @search="filter_members"
              />
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="dialog__actions">
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn :disable="disableSave" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script src="./AddDialog.js"></script>
<style lang="scss" scoped src="./AddDialog.scss"></style>
