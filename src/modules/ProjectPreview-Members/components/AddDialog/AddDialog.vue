<template>
  <v-layout justify-center>
  <custom-dialog :title="title" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save" :mainBtnDisabled="disableSave">
    <template slot="content">
      <members-dropdown
        :members.sync="members.selected"
        :member-items="members.items"
        :is-loading="members.loading"
        @search="filter_members"
      />
    </template>
  </custom-dialog>
  </v-layout>
</template>
<script src="./AddDialog.js"></script>
<style lang="scss" scoped src="./AddDialog.scss"></style>
