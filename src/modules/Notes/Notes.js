import { api_to } from './api'
//Components
import TableHeader from '@/common/TableHeader.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'
import NotesDialog from './components/NotesDialog/NotesDialog'
import CollaboratorDialog from './components/CollaboratorDialog/CollaboratorDialog.vue'

export default {
  name: 'Notes',
  components: {
    TableHeader,
    NotesList,
    NoteForm,
    NotesDialog,
    CollaboratorDialog
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Notes', disabled: true, router_name: null }
    ],
    notes_dialog: false,
    coll_dialog: false,
    notes: [],
    loading: false,
    selected_note: null,
    collaborators: []
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
      })
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
    }
  }
}
