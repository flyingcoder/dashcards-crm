<template>
  <div class="edit-service">
    <CustomDialog
      title="Edit Service"
      ref="dialog"
      :open.sync="open"
      button2-text="Save"
      @button1="open = false"
      @button2="save"
    >
      <template slot="content">
        <v-layout wrap>
          <v-flex xs12>
            <v-combobox
              class="service__input"
              label="Service name"
              v-model.trim="name"
              @keyup.enter="add_service"
              solo
              hide-details
              color="#657186"
              :items="recommendedServices"
            ></v-combobox>
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>
  </div>
</template>

<script src="./ServicesEditDialog.js"></script>
