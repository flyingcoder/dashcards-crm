<template>
  <v-layout justify-center>
    <v-dialog v-model="open" persistent scrollable max-width="600px">
      <v-card class="addService__dialog">
        <div class="dialog__header">
          <h3 class="dialog__title">{{ title }}</h3>
          <v-btn small fab depressed @click="cancel" class="close__dialog">
            <v-icon dark>close</v-icon>
          </v-btn>
        </div>

        <v-card-text scrollable class="dialog__body">
          <v-layout wrap>
            <v-layout align-center justify-space-between class="service__field">
              <v-flex xs10>
                <v-combobox
                  label="Untitled Service"
                  class="service__input"
                  v-model.trim="name"
                  @keyup.enter="add_service"
                  solo
                  hide-details
                  color="#657186"
                  :items="recommendedServices"
                  @input.native="name = $event.srcElement.value"
                ></v-combobox>
              </v-flex>

              <v-flex xs2 class="text-xs-right">
                <v-btn
                  class="addService__btn"
                  :depressed="!name"
                  @click="add_service"
                >
                  <v-icon :disabled="!name" dark>add</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>

            <v-flex xs12>
              <v-layout
                align-center
                v-for="(service, index) of services"
                :key="index"
                class="service__field"
              >
                <v-flex xs10>
                  <v-text-field
                    label="Service Name"
                    class="service__input"
                    v-model.trim="service.name"
                    solo
                    hide-details
                    color="#657186"
                  ></v-text-field>
                </v-flex>

                <v-flex xs2 class="text-xs-right">
                  <v-btn
                    class="deleteService__btn"
                    @click="delete_service(index)"
                  >
                    <v-icon dark>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions class="service__actions">
          <v-btn
            class="service__actions_btn"
            :disabled="btnloading"
            @click="cancel"
            >Cancel</v-btn
          >
          <v-btn
            class="service__actions_btn"
            :disabled="is_disabled"
            :loading="btnloading"
            @click="save"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script src="./ServicesAddDialog.js"></script>
<style lang="scss" src="./ServicesAddDialog.scss"></style>
