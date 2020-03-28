<template>
  <div class="profile-upper">
    <div class="background">
      <v-icon class="camera" v-if="can_edit">camera_alt</v-icon>
      <v-menu bottom left v-if="can_edit">
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on" class="settings">
            <v-icon large>settings</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="can_edit"  @click="open_edit_dialog(user)">
            <v-list-item-title><v-icon left>mdi-account</v-icon> Edit Profile</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="can_edit" @click="open_update_password_dialog(user)">
            <v-list-item-title><v-icon left>lock</v-icon> Update Password</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="icons" v-if="user">
      <div class="user-img" @click="image_clicked">
        <img :src="user.image_url" alt="User" width="100%" height="auto" />
      </div>
    </div>

    <teams-dialog
      ref="edit_dialog"
      title="Edit Member"
      :dialog.sync="edit_dialog"
      :fields-to-edit="edit_item"
      :is-edit-dialog="edit_dialog"
      @save="update_user_profile($event)"
    />

    <UpdatePasswordDialog
      title="Update Password"
      ref="update_password_dialog"
      :fieldsToEdit="edit_item"
    ></UpdatePasswordDialog>
    
    <AddPicture ></AddPicture>
    
    <UserInfo ></UserInfo>
  </div>
</template>

<style lang="scss" scoped src="./Upper.scss"></style>

<script src="./Upper.js"></script>
