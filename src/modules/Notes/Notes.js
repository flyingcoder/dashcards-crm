import { api_to } from './api'
//Components
import TableHeader from '@/common/TableHeader.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'
import NotesDialog from './components/NotesDialog/NotesDialog'

export default {
  name: 'Notes',
  components: { TableHeader, NotesList, NoteForm, NotesDialog },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Notes', disabled: true, router_name: null }
    ],
    dialog: false,
    comment: null,
    title: null,
    description: null
  }),

  computed: {
    api_to() {
      return api_to
    }
  }
}
