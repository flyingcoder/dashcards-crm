<template>
  <v-layout justify-center>
    <CustomDialog
      :title="title"
      ref="dialog"
      :open.sync="open"
      button2-text="Save"
      @button1="open = false"
    >
      <template slot="content">
        <v-layout wrap justify-center v-show="!loading">
          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('first_name')"
              :error="$v.first_name.$error"
              label="First Name"
              v-model.trim="first_name"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('last_name')"
              :error="$v.last_name.$error"
              label="Last Name"
              v-model.trim="last_name"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-select
              class="dialog__selectfield"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('group_name')"
              :error="$v.group_name.$error"
              label="Group Name"
              v-model.trim="group_name"
              :items="group_items"
              item-text="name"
              item-value="id"
            ></v-select>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('job_title')"
              :error="$v.job_title.$error"
              label="Job Title"
              v-model.trim="job_title"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__email"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('email')"
              :error="$v.email.$error"
              label="Email"
              v-model.trim="email"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              class="dialog__textfield"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('contact_number')"
              :error="$v.contact_number.$error"
              label="Contact Number"
              mask="phone"
              v-model.trim="contact_number"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 v-if="!isEditDialog">
            <v-text-field
              class="dialog__password"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('password')"
              :error="$v.password.$error"
              :append-icon="show_password ? 'visibility_off' : 'visibility'"
              label="Password"
              :type="show_password ? 'text' : 'password'"
              v-model.trim="password"
              @click:append="show_password = !show_password"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 v-if="!isEditDialog">
            <v-text-field
              class="dialog__password"
              color="#667187"
              solo
              hide-details
              @blur="on_blur_field('repeat_password')"
              :error="$v.repeat_password.$error"
              :append-icon="
                show_repeat_password ? 'visibility_off' : 'visibility'
              "
              label="Repeat Password"
              :type="show_repeat_password ? 'text' : 'password'"
              v-model.trim="repeat_password"
              @click:append="show_repeat_password = !show_repeat_password"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="dialog-description">
          <small
            >Password is at least 6 character with numbers and letters</small
          ><br />
          <small>All fields are required</small>
        </div>
      </template>

      <template slot="button2">
        <div class="dialog__actions">
          <v-btn :disabled="$v.$invalid" @click="save">Save</v-btn>
        </div>
      </template>
    </CustomDialog>
  </v-layout>
</template>

<script src="./StaffDialog.js"></script>
<style lang="scss" scoped src="./StaffDialog.scss"></style>
