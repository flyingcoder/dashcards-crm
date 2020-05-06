<template>
  <div class="notes-list">
    <div class="note-header">
      Notes
    </div>

    <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>

    <div class="notes-body" v-else>
      <div
        :class="['note', { active: activeNote && activeNote.id === note.id }]"
        v-for="(note, index) of notes"
        :key="note.id"
        @click="$emit('clicked', note)"
      >
        <div class="note-name">
          <span>{{ note.title }}</span>
          <v-icon
            :class="['notify', { active: note.pivot.is_pinned }]"
            @click="$emit('toggle-pin', { note, index })"
          >
            notifications
          </v-icon>
        </div>
        <div class="note-desc">
          <p :inner-html.prop="note.content | truncate(30)"></p>
        </div>
      </div>
    </div>

    <div class="view__more">
      <v-btn
        text
        normal
        :disabled="noMoreData"
        @click="$emit('view-more')"
        class="view__more_btn"
        >VIEW MORE</v-btn
      >
    </div>
  </div>
</template>
<script src="./NotesList.js"></script>
<style lang="scss" scoped src="./NotesList.scss"></style>
