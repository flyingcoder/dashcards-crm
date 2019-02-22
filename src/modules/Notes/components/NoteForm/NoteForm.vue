<template>
  <div class="no-data" v-if="!loading && !note">
    No notes yet
  </div>
	<v-progress-linear v-else-if="loading" :indeterminate="true"></v-progress-linear>
  <div class="note-form" v-else>
    <div class="note-title">
      <v-text-field
        solo
        hide-details
        color="#657186"
        flat
        placeholder="Note title 1"
        class="title"
        readonly
        :value="note.title"
      >
      </v-text-field>
      <v-btn
        flat
        class="add-btn"
        @click="$emit('collaborator', note.collaborators)"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div class="note-content">
      <v-textarea
        solo
        hide-details
        color="#657186"
        flat
        placeholder="Note description ..."
        class="note-text"
        readonly
        v-html="note.content"
      >
      </v-textarea>
    </div>
  </div>
</template>
<script src="./NoteForm.js"></script>
<style lang="scss" scoped src="./NoteForm.scss"></style>
<style scoped src="./NoteForm.css"></style>
