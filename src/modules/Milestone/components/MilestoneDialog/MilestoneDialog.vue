<template>
  <div class="milestone-dialog">
    <v-layout row justify-center>
      <v-dialog v-model="open" persistent max-width="600px">
        <v-card class="milestone__dialog">
          <v-card-title class="dialog__header">
            <span class="dialog__title">{{ dialogTitle }}</span>
            <v-btn fab small class="close__dialog" @click="cancel">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="dialog__body">
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    class="dialog__textfield"
                    label="Milestone Title"
                    v-model.trim="title"
                    box
                    hide-details
                    color="blue"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-select
                    class="dialog__selectfield"
                    label="Status"
                    v-model.trim="status"
                    :items="['Active', 'Inactive']"
                    box
                    hide-details
                    color="blue"
                  ></v-select>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field
                    class="dialog__textfield"
                    label="Days"
                    v-model.number="days"
                    type="number"
                    box
                    hide-details
                    color="blue"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions class="dialog__actions">
            <v-btn @click="cancel">Cancel</v-btn>
            <v-btn @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script src="./MilestoneDialog.js"></script>
<style lang="scss" scoped src="./MilestoneDialog.scss"></style>
<style scoped src="./MilestoneDialog.css"></style>
