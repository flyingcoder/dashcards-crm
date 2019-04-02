<template>
    <custom-dialog
      title="Add New Client"
      ref="dialog"
      :open.sync="dialog"
      button2-text="Save"
      @button1="cancel"
      @button2="save"
    >
      <template slot="content">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield d-field"
              label="First Name"
              v-model.trim="first_name"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield d-field"
              label="Last Name"
              v-model.trim="last_name"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield d-field"
              label="Company Name"
              v-model.trim="company_name"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield d-field"
              label="Telephone"
              mask="phone"
              v-model.trim="telephone"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__email d-field"
              label="Email"
              v-model.trim="email"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-select
              class="dialog__selectfield d-field"
              label="Status"
              v-model.trim="status"
              :items="status_items"
              box
              hide-details
              color="#657186"
            ></v-select>
          </v-flex>

          <v-flex xs12 sm6 v-if="!isEditDialog">
            <v-text-field
              class="dialog__password d-field"
              :append-icon="show_password ? 'visibility_off' : 'visibility'"
              :type="show_password ? 'text' : 'password'"
              label="Password"
              v-model.trim="password"
              @click:append="show_password = !show_password"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 v-if="!isEditDialog">
            <v-text-field
              class="dialog__password d-field"
              :append-icon="
                show_repeat_password ? 'visibility_off' : 'visibility'
              "
              :type="show_repeat_password ? 'text' : 'password'"
              label="Repeat Password"
              v-model.trim="repeat_password"
              @click:append="show_repeat_password = !show_repeat_password"
              box
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </template>
    </custom-dialog>
    <!-- <v-dialog v-model="open" persistent max-width="600px">
      <v-card class="clients__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ title }}Add Client</span>
          <v-btn fab small class="close__dialog" @click="cancel">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="dialog__body">
          <v-layout wrap>
            
          </v-layout>
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
</template>

<script src="./ClientsDialog.js"></script>
<style lang="scss" scoped src="./ClientsDialog.scss"></style>
