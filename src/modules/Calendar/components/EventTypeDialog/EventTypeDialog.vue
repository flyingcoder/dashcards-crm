<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="600px" persistent>
      <v-card class="custom__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ dialogTitle }}</span>
          <v-spacer></v-spacer>
          <v-btn
            fab
            small
            depressed
            class="close__dialog"
            @click="clear_and_close"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text style="height: 350px;">
          <v-row>
            <v-col md="12" xs="12">
              <label>Event Type Name</label>
              <TextField
                :value.sync="name"
                label="Event Type Name"
                color="#657186"
                filled
              ></TextField>
            </v-col>
            <v-col md="12" xs="12">
              <label>Event Theme</label>
              <v-row no-gutters>
                <v-col md="12">
                  <v-radio-group v-model="theme" row>
                    <v-radio
                      v-for="(color, index) in colors"
                      :key="index"
                      :label="color"
                      :color="color"
                      :value="color"
                      hide-details
                    >
                      <template v-slot:label>
                        <span :class="color + `--text`">{{
                          color | capitalizeFirst
                        }}</span>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="12">
              <v-checkbox
                v-model="is_private"
                label="Private Event Type (If private, it will be only available for you)"
                color="blue"
                :value="false"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-btn @click="clear_and_close" class="dialog__actions_btn"
            >Cancel</v-btn
          >
          <v-btn
            class="dialog__actions_btn"
            :loading="btnloading"
            :disabled="disabled"
            @click="save"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./EventTypeDialog.js"></script>
<style lang="scss" scoped src="./EventTypeDialog.scss"></style>
<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
