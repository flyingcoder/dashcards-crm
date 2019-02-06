//Components
import TableHeader from '@/common/TableHeader.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'

export default {
  name: 'Notes',
  components: { TableHeader, NotesList, NoteForm },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Notes', disabled: true, router_name: null }
    ]
  })
}
