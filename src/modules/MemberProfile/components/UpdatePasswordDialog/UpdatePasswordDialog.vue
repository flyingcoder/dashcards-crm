<template>
  <custom-dialog
    :title="title"
    ref="dialog"
    :open.sync="opendialog"
    button2-text="Save"
    @button1="clear_and_close"
  >
    <template slot="content">
      <v-progress-linear
        v-if="loading"
        slot="progress"
        color="blue"
        indeterminate
      ></v-progress-linear>

  		<label class="mr-1" v-if="required_current_password">Current Password</label>
      	<v-flex xs12 sm12  v-if="required_current_password">
          <v-text-field
            class="dialog__password d-field"
            color="#667187"
            filled
            hide-details
            :disabled="disabled_all"
            @blur="on_blur_field('current_password')"
            :error="$v.current_password.$error"
            :append-icon="show_current_password ? 'visibility_off' : 'visibility'"
            label="Current Password"
            :type="show_current_password ? 'text' : 'password'"
            v-model.trim="current_password"
            @click:append="show_current_password = !show_current_password"
          ></v-text-field>
        </v-flex>

    	<label class="mr-1">New Password</label>
        <v-flex xs12 sm12 >
          <v-text-field
            class="dialog__password d-field"
            color="#667187"
            filled
            hide-details
            :disabled="disabled_all"
            @blur="on_blur_field('password')"
            :error="$v.password.$error"
            :append-icon="show_password ? 'visibility_off' : 'visibility'"
            label="Password"
            :type="show_password ? 'text' : 'password'"
            v-model.trim="password"
            @click:append="show_password = !show_password"
          ></v-text-field>
        </v-flex>

    	<label class="mr-1">Confirm Password</label>
        <v-flex xs12 sm12 >
          <v-text-field
            class="dialog__password d-field"
            color="#667187"
            filled
            hide-details
            :disabled="disabled_all"
            @blur="on_blur_field('repeat_password')"
            :error="$v.repeat_password.$error"
            :append-icon="show_repeat_password ? 'visibility_off' : 'visibility'"
            label="Repeat Password"
            :type="show_repeat_password ? 'text' : 'password'"
            v-model.trim="repeat_password"
            @click:append="show_repeat_password = !show_repeat_password"
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

<script src="./UpdatePasswordDialog.js"></script>
<style lang="scss" scoped src="./UpdatePasswordDialog.scss"></style>
<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
