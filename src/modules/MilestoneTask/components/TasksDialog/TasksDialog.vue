<template>
  <div class="tasks-dialog">
    <v-layout row justify-center>
      <v-dialog v-model="open" persistent max-width="600px">
        <v-card class="task__dialog">
          <v-card-title class="dialog__header">
            <span class="dialog__title">{{ dialogTitle }}</span>
            <v-btn small fab @click="cancel" class="close__dialog">
              <v-icon dark>close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="dialog__body">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  class="dialog__textfield"
                  label="Add task title"
                  v-model.trim="title"
                  color="#667187"
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>

              <v-flex xs6>
                <v-select
                  class="dialog__selectfield"
                  label="Select Group"
                  v-model.trim="selected_group"
                  :items="group_items"
                  item-text="name"
                  item-value="id"
                  color="#667187"
                  solo
                  hide-details
                ></v-select>
              </v-flex>

              <v-flex xs6>
                <v-text-field
                  class="dialog__textfield"
                  label="Add days"
                  v-model.number="days"
                  type="number"
                  min="0"
                  color="#667187"
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-textarea
                  class="dialog__textarea"
                  label="Add task description"
                  v-model.trim="description"
                  color="#667187"
                  solo
                  hide-details
                ></v-textarea>
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
  </div>
</template>

<script src="./TasksDialog.js">
</script>
<style lang="scss" scoped src="./TasksDialog.scss">
</style>
<style scoped src="./TasksDialog.css">
</style>
