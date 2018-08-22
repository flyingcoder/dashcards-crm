<template>
  <div class="content clients">
    <div class="row">

      <div class="breadcrumbs">
          <v-breadcrumbs>
              <v-icon slot="divider">chevron_right</v-icon>

              <v-breadcrumbs-item class="page__title"
                  v-for="path in paths"
                  :disabled="path.disabled"
                  :key="path.text"
              >
                  {{ path.text }}
              </v-breadcrumbs-item>
          </v-breadcrumbs>
      </div>

      <div class="page__options">
          <v-dialog v-model="dialog" max-width="500px">
              <v-btn slot="activator" class="add__btn">New Client</v-btn>
              <v-card>

              <v-card-title>
                  <span class="headline">{{ form_title }}</span>
              </v-card-title>

              <v-card-text>
                  <v-container grid-list-md>
                      <v-layout wrap>
                        <custom-field
                          className="signup__field"
                          v-model.trim="first_name.text"
                          :valid="first_name.is_valid"
                          input-type="text"
                          placeholder="First Name"
                          @blur="validate_field('first_name')"
                          @focus="first_name.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="last_name.text"
                          :valid="last_name.is_valid"
                          input-type="text"
                          placeholder="Last Name"
                          @blur="validate_field('last_name')"
                          @focus="last_name.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="company_name.text"
                          :valid="company_name.is_valid"
                          input-type="text"
                          placeholder="Company Name"
                          @blur="validate_field('company_name')"
                          @focus="company_name.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="telephone.text"
                          :valid="telephone.is_valid"
                          input-type="text"
                          placeholder="Telephone"
                          @blur="validate_field('telephone')"
                          @focus="telephone.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="email.text"
                          :valid="email.is_valid"
                          input-type="email"
                          placeholder="Email"
                          @blur="validate_field('email')"
                          @focus="email.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="status.text"
                          :valid="email.is_valid"
                          input-type="text"
                          placeholder="Status"
                          @blur="validate_field('status')"
                          @focus="status.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="password.text"
                          :valid="password.is_valid"
                          :input-type="input_type"
                          placeholder="Password"
                          @blur="validate_field('password')"
                          @focus="password.is_valid = true"
                        ></custom-field>

                        <custom-field
                          className="signup__field"
                          v-model.trim="repeat_password.text"
                          :valid="repeat_password.is_valid"
                          :input-type="input_type"
                          placeholder="Repeat Password"
                          @blur="validate_field('repeat_password')"
                          @focus="repeat_password.is_valid = true"
                        ></custom-field>

                      </v-layout>
                  </v-container>
              </v-card-text>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="cancel__btn" flat @click.native="close">Cancel</v-btn>
                  <v-btn class="save__btn" flat @click.native="save">Save</v-btn>
              </v-card-actions>
              </v-card>
          </v-dialog>
      </div>

    </div>

    <div class="content__wrapper">
      <div class="row buzz__tables">

        <v-toolbar flat color="white">
            <v-toolbar-title>Clients</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
        </v-toolbar>

        <custom-table
                :headers="headers"
                :items="clients"
                :has-checkbox="true"
                :has-header-icon="true"
          >

          <template slot="custom-item" slot-scope="item">

            <td class="text-xs-left"> <!--TODO fill image with dynamic data from backend-->
                <div class="user__image">
                    <img :src="require('@/assets/temp/user.png')" /> &nbsp;
                </div>
                <div class="user__name">
                    {{ item.item.first_name }}
                    {{ item.item.last_name }}
                </div>
            </td>

            <td class="text-xs-left pl-5">{{ item.item.telephone }}</td>
            <td class="text-xs-left pl-5">{{ item.item.email }}</td>
            <td class="text-xs-left pl-5">{{ item.item.status }}</td>

            <td class="text-xs-center">
              <v-btn fab small color="blue" depressed
                    :disabled="!table_action_disabled">
                <img src="@/assets/icons/groups/edit.svg" alt="">
              </v-btn>
              <v-btn fab small color="blue" depressed
                    :disabled="!table_action_disabled">
                <img src="@/assets/icons/groups/delete.svg" alt="">
              </v-btn>
            </td>
          </template>

        </custom-table>

        <div class="table__pagination text-xs-center">
          <v-pagination
          class="buzz__pagination"
          v-model="page"
          :length="4"
          circle
          ></v-pagination>
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>