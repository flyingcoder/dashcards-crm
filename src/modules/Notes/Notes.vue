<template>
  <div class="notes">
    <table-header :paths="paths" @click="dialog = true" />

    <NotesDialog :dialog.sync="dialog" @save="api_to.add_new_note" />

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
