//Components
import TableHeader from '@/common/TableHeader.vue'
import RichEditor from '@/common/RichEditor.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'

export default {
  name: 'Notes',
  components: { TableHeader, NotesList, NoteForm, CustomDialog, RichEditor },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Notes', disabled: true, router_name: null }
    ],
    dialog: false,
    comment: null,
    title: null,
    description: null
  })
}
