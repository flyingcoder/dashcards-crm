<template>
  <div class="notes">
    <table-header :paths="paths" @click="notes_dialog = true" />
    <NotesDialog :dialog.sync="notes_dialog" @save="save" />
    <CollaboratorDialog
      :dialog.sync="coll_dialog"
      :collaborators="collaborators"
      @save="save_collaborators"
    />

    <div class="notes-wrapper">
      <div class="notes-content">
        <notes-list
          :notes="notes"
          :loading="loading"
          @clicked="change_selected"
          @toggle-pin="toggle_pin"
        />
        <note-form
          :note="selected_note"
          :loading="loading"
          @collaborator="open_collaborators_dialog"
        />
      </div>
    </div>
  </div>
</template>
<script src="./Notes.js"></script>
<style lang="scss" scoped src="./Notes.scss"></style>
