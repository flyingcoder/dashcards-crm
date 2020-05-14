<template>
    <div class="notes">
        <table-header :paths="paths" @click="notes_dialog = true" />
        <NotesDialog v-model="notes_dialog" @save="save" />
        <EditNotesDialog v-model="edit_note_dialog" :fieldsToEdit="note_to_edit" @update="updateNote" />
        <CollaboratorDialog :dialog.sync="coll_dialog" :collaborators="collaborators" @save="save_collaborators" />
        <DeleteDialog :open-dialog.sync="delete_note_dialog" title="Delete Note" :noteToDelete="note_to_delete" text-content="Are you sure you want to delete this note?" @delete="delete_note" />
        <div v-if="notes" class="notes-wrapper">
            <div class="notes-content">
                <notes-list :notes="items" :loading="loading" :active-note="selected_note" :noMoreData="noMoreData" @clicked="change_selected" @toggle-pin="toggle_pin" @view-more="fetch_more_notes" />
                <note-form :note="selected_note" :loading="loading" @collaborator="open_collaborators_dialog" @editNotes="open_edit_note_dialog" @deleteNotes="open_delete_note_dialog" />
            </div>
        </div>
        <div class="empty-notes" v-else>
            <div class="empty-content">
                <div class="empty-svg">
                    <svg viewBox="0 0 250 250">
                        <path d="M58 59l149 0 0 -7c0,-4 -2,-7 -4,-10 -3,-2 -7,-4 -11,-4l-163 0c-4,0 -7,2 -10,4 -2,3 -4,6 -4,10l0 111c0,4 2,8 4,10 3,3 6,5 10,5l1 0 0 -91c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm13 59c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l138 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-138 0zm0 35c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l87 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-87 0zm0 31c-3,0 -6,-3 -6,-7 0,-3 3,-6 6,-6l138 0c3,0 6,3 6,6 0,4 -3,7 -6,7l-138 0zm149 -125l1 0c7,0 14,3 19,8 5,5 8,12 8,20l0 111c0,7 -3,14 -8,19 -5,5 -12,8 -19,8l-163 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -7 -1 0c-7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-20l0 -111c0,-7 3,-14 8,-19 5,-5 12,-8 19,-8l163 0c8,0 15,3 20,8 5,5 8,12 8,19l0 7zm1 13l-163 0c-4,0 -8,2 -11,5 -2,2 -4,6 -4,10l0 111c0,4 2,7 4,10 3,2 7,4 11,4l163 0c4,0 7,-2 10,-4 2,-3 4,-6 4,-10l0 -111c0,-4 -2,-8 -4,-10 -3,-3 -6,-5 -10,-5z" />
                    </svg>
                </div>
                <div class="empty-btn">
                    <v-btn large dark color="#3b589e" @click="notes_dialog = true">Add Notes</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Notes.js"></script>
<style lang="scss" scoped src="./Notes.scss"></style>