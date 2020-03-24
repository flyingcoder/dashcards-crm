import { api_to } from './api'
//Components
import TableHeader from '@/common/TableHeader.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'
import NotesDialog from './components/NotesDialog/NotesDialog'
import EditNotesDialog from './components/NotesDialog/EditNotesDialog'
import DeleteDialog from '@/common/DeleteDialog.vue'
import CollaboratorDialog from './components/CollaboratorDialog/CollaboratorDialog.vue'
import { cloneDeep } from 'lodash'

export default {
  name: 'Notes',
  components: {
    TableHeader,
    NotesList,
    NoteForm,
    NotesDialog,
    EditNotesDialog,
    CollaboratorDialog,
    DeleteDialog
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Notes', disabled: true, router_name: null }
    ],
    notes_dialog: false,
    edit_note_dialog: false,
    delete_note_dialog: false,
    coll_dialog: false,
    notes: [],
    loading: false,
    selected_note: null,
    collaborators: [],
    pin_api: false,
    note_to_edit: null,
    note_to_delete: null
  }),

  created() {
    this.fetch_notes()
  },

  methods: {
    fetch_notes() {
      this.loading = true
      api_to
        .get_notes()
        .then(({ data }) => {
          this.notes = data.data
          this.select_first_note(data.data)
        })
        .finally(() => (this.loading = false))
    },

    save(payload) {
      api_to.add_new_note(payload).then(({ data }) => {
        this.notes.push(data)
        this.$event.$emit('open_snackbar', 'Note Added Successfully')
        this.notes_dialog = false
      })
    },

    updateNote(payload) {
      if (payload) {
        api_to.updateNote(payload).then(this.update_notes)
      }
    },
    update_notes({ data }) {
      const index = this.notes.findIndex(
        note => note.id === this.selected_note.id
      )
      if (~index) {
        this.notes[index].title = data.title
        this.notes[index].content = data.content
        this.$event.$emit('open_snackbar', 'Note updated successfully!')
      }
      this.edit_note_dialog = false
    },

    save_collaborators(payload) {
      api_to
        .save_collaborators(payload, this.selected_note.id)
        .then(this.update_collaborators)
    },

    select_first_note(notes) {
      if (notes.length) {
        this.selected_note = notes[0]
      }
    },

    change_selected(note) {
      this.selected_note = note
    },

    open_collaborators_dialog(collaborators) {
      this.collaborators = collaborators
      this.coll_dialog = true
    },

    open_edit_note_dialog(note) {
      this.note_to_edit = cloneDeep(note)
      this.edit_note_dialog = true
    },

    update_collaborators({ data }) {
      const index = this.notes.findIndex(
        note => note.id === this.selected_note.id
      )
      if (~index) {
        this.notes[index].collaborators = data
        this.$event.$emit(
          'open_snackbar',
          'Collaborators updated successfully!'
        )
      }
    },
    toggle_pin({ note, index }) {
      if (this.pin_api) return
      this.pin_api = true
      const text = note.pivot.is_pinned ? 'Unpinned' : 'Pinned'
      api_to
        .toggle_pin(note)
        .then(({ data }) =>
          this.$set(this.notes[index].pivot, 'is_pinned', data)
        )
        .finally(() => {
          this.pin_api = false
          this.$event.$emit('open_snackbar', `${text} successfully!`)
        })
    },

    open_delete_note_dialog(note) {
      this.note_to_delete = cloneDeep(note)
      this.delete_note_dialog = true
    },

    delete_note() {
      api_to
        .deleteNote(this.note_to_delete)
        .then(({ data }) => {
          const index = this.notes.findIndex(
            note => note.id === this.note_to_delete.id
          )
          if (~index) {
            this.notes.splice(index, 1)
            this.$event.$emit(
              'open_snackbar',
              data.message ? data.message : data.error,
              data.message ? 'success' : 'error'
            )
          }
        })
        .finally(() => {
          this.delete_note_dialog = false
          this.note_to_delete = null
        })
    }
  }
}
