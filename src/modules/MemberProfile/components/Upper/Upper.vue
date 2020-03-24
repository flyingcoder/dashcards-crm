<template>
  <div class="profile-upper">
    <div class="background">
      <v-icon class="camera" v-if="can_edit">camera_alt</v-icon>
      <v-icon class="settings" v-if="can_edit" @click="open_edit_dialog(user)"
        >settings</v-icon
      >
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

    <AddPicture />
    <UserInfo />
  </div>
</template>

<style lang="scss" scoped src="./Upper.scss"></style>

<script src="./Upper.js"></script>
