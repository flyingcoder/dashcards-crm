<template>
  <div class="notes">
    <table-header :paths="paths" @click="dialog = true" />

    <CustomDialog
      title="Add Notes"
      :open.sync="dialog"
      button2-text="Save"
      @button1="dialog = false"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12>
            <v-text-field
              v-model.trim="title"
              label="Add Title"
              class="project__title mb-2"
              solo
              hide-details
            >
            </v-text-field>
          </v-flex>

          <v-flex xs12 class="mb-2">
            <v-textarea
              v-model.trim="comment"
              solo
              label="Add Comment"
              hide-details
            ></v-textarea>
          </v-flex>

          <v-flex xs12>
            <rich-editor
              placeholder="Description"
              v-model.trim="description"
              class="task-description"
            />
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>

    <div class="notes-wrapper">
      <div class="notes-content">
        <notes-list />
        <note-form />
      </div>
    </div>
  </div>
</template>
<script src="./Notes.js"></script>
<style lang="scss" scoped src="./Notes.scss"></style>
