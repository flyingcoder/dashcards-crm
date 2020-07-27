<template>
    <div class="notes">
        <NotesDialog v-model="notes_dialog" @save="save" />
        <EditNotesDialog v-model="edit_note_dialog" :fieldsToEdit="note_to_edit" @update="updateNote" />
        <CollaboratorDialog :dialog.sync="coll_dialog" :collaborators="collaborators" @save="save_collaborators" />
        <DeleteDialog :open-dialog.sync="delete_note_dialog" title="Delete Note" :noteToDelete="note_to_delete" text-content="Are you sure you want to delete this note?" @delete="delete_note" />
        <div v-if="notes" class="notes-wrapper">
            <div class="notes-body">
                <notes-list :notes="items" :loading="loading" :active-note="selected_note" :noMoreData="noMoreData" @clicked="change_selected" @toggle-pin="toggle_pin" @view-more="fetch_more_notes">
                    <template slot="action-btn">
                        <div class="notes-action">
                            <table-header @click="notes_dialog = true" />
                        </div>
                    </template>
                </notes-list>
                <note-form :note="selected_note" :loading="loading" @collaborator="open_collaborators_dialog" @editNotes="open_edit_note_dialog" @deleteNotes="open_delete_note_dialog" />
            </div>
        </div>
    </div>
</template>
<script src="./Notes.js"></script>
<style lang="scss" scoped src="./Notes.scss"></style>