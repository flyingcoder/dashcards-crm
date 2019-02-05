<template>
  <v-layout row justify-center>
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card class="clients__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ title }}Add Client</span>
          <v-btn fab small class="close__dialog" @click="cancel">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="dialog__body">
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
                class="dialog__textfield"
                label="First Name"
                v-model.trim="first_name"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                class="dialog__textfield"
                label="Last Name"
                v-model.trim="last_name"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                class="dialog__textfield"
                label="Company Name"
                v-model.trim="company_name"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                class="dialog__textfield"
                label="Telephone"
                mask="phone"
                v-model.trim="telephone"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                class="dialog__email"
                label="Email"
                v-model.trim="email"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-select
                class="dialog__selectfield"
                label="Status"
                v-model.trim="status"
                :items="status_items"
                solo
                hide-details
                color="#657186"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm6 v-if="!isEditDialog">
              <v-text-field
                class="dialog__password"
                :append-icon="show_password ? 'visibility_off' : 'visibility'"
                :type="show_password ? 'text' : 'password'"
                label="Password"
                v-model.trim="password"
                @click:append="show_password = !show_password"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 v-if="!isEditDialog">
              <v-text-field
                class="dialog__password"
                :append-icon="
                  show_repeat_password ? 'visibility_off' : 'visibility'
                "
                :type="show_repeat_password ? 'text' : 'password'"
                label="Repeat Password"
                v-model.trim="repeat_password"
                @click:append="show_repeat_password = !show_repeat_password"
                solo
                hide-details
                color="#657186"
              ></v-text-field>
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

<script src="./ClientsDialog.js"></script>
<style lang="scss" scoped src="./ClientsDialog.scss"></style>
<style scoped src="./ClientsDialog.css"></style>
