<template>
  <div class="services">

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
              <v-btn slot="activator" class="add__btn">New Service</v-btn>
              <v-card>

              <v-card-title>
                  <span class="headline">{{ form_title }}</span>
              </v-card-title>

              <v-card-text>
                  <v-container grid-list-md>
                      <v-layout wrap>

                          <custom-field
                            className="signup__field"
                            v-model.trim="name.text"
                            :valid="name.is_valid"
                            input-type="text"
                            placeholder="Service Name"
                            @blur="validate_field('name')"
                            @focus="name.is_valid = true"
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
                    <v-toolbar-title>Services</v-toolbar-title>
                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                </v-toolbar>

      <!-- <custom-table
              v-model="selected"
              :headers="headers"
              :items="services"
              :total-items="total_items"
              :loading="loading"
              select-all
              :has-checkbox="true"
              :table-action-disabled.sync="table_action_disabled"
      > -->
      <custom-table
                          :headers="headers"
                          :items="services"
                          :has-checkbox="true"
                          :has-header-icon="true"
                  >

        <template slot="custom-item" slot-scope="item">
          <td class="text-xs-left pl-5">{{ item.item.name }}</td>

          <td class="text-xs-left pl-5">{{ item.item.name }}</td>

          <td class="text-xs-left pl-5">{{ item.item.company }}</td>

          <td class="text-xs-left pl-5">{{ item.item.date_created }}</td>

          <td class="text-xs-center">
            <v-btn fab small color="blue" depressed
                  :disabled="!table_action_disabled"
                  @click="editItem(item.item)"
                  >
              <img src="@/assets/icons/groups/edit.svg" alt="">
            </v-btn>
            <v-btn fab small color="blue" depressed
                  :disabled="!table_action_disabled"
                  @click="deleteItem(item.item)"
                  >
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
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>