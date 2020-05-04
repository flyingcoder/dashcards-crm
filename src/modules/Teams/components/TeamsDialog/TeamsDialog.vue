<template>
  <custom-dialog
    :title="title"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
  >
    <template slot="content">
      <v-progress-linear
        v-if="loading"
        slot="progress"
        color="blue"
        indeterminate
      ></v-progress-linear>

      <v-layout wrap v-show="!loading">
        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('first_name')"
            :error="$v.first_name.$error"
            label="First Name"
            v-model.trim="first_name"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('last_name')"
            :error="$v.last_name.$error"
            label="Last Name"
            v-model.trim="last_name"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-select
            class="dialog__selectfield d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('group_name')"
            :error="$v.group_name.$error"
            label="Group Name"
            v-model.trim="group_name"
            :items="group_items"
            item-text="name"
            item-value="id"
            append-outer-icon="mdi-account-multiple-plus"
            @click:append-outer="$emit('add-new-group')"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('job_title')"
            :error="$v.job_title.$error"
            label="Job Title"
            v-model.trim="job_title"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12>
          <v-text-field
            class="dialog__email d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('email')"
            :error="$v.email.$error"
            label="Email"
            :disabled="isEditDialog"
            v-model.trim="email"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12>
          <!--  <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            @blur="on_blur_field('contact_number')"
            :error="$v.contact_number.$error"
            label="Contact Number"
            mask="phone"
            v-model.trim="contact_number"
          ></v-text-field> -->
          <vue-phone-number-input
            class="dialog__textfield d-field"
            v-model="contact_number"
            size="lg"
            required
            clearable
            :default-country-code="defaultCountryCode"
            @phone-number-blur="telephone_on_blur"
            @update="showUpdate"
          ></vue-phone-number-input>
        </v-flex>

        <v-flex xs12 sm12 v-if="!isEditDialog">
          <v-checkbox
            v-model="show_create_password"
            :label="show_create_password_label"
            hide-details
            class="shrink mx-2 my-1"
          ></v-checkbox>
        </v-flex>

        <v-flex xs12 sm6 v-if="!isEditDialog && show_create_password">
          <v-text-field
            class="dialog__password d-field"
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

        <v-flex xs12 sm6 v-if="!isEditDialog && show_create_password">
          <v-text-field
            class="dialog__password d-field"
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
        <!-- <small>Password is at least 6 character with numbers and letters</small
        ><br /> -->
        <small>Above fields are required</small>
      </div>

      <v-layout wrap v-show="!loading">
        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            label="Location"
            v-model.trim="address"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            class="dialog__textfield d-field"
            color="#667187"
            filled
            hide-details
            label="Rate / Hour"
            suffix="$"
            @blur="on_blur_field('rate')"
            :error="$v.rate.$error"
            v-model.trim="rate"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </template>

    <template slot="button2">
      <v-btn :disabled="$v.$invalid" :loading="btnloading" @click="save"
        >Save</v-btn
      >
    </template>
  </custom-dialog>
</template>

<script src="./TeamsDialog.js"></script>
<style lang="scss" scoped src="./TeamsDialog.scss"></style>
