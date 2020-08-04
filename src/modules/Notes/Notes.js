import {api_to} from './api'
import {list_functionality} from '@/services/list-functionality/list-functionality'
//Components
import TableHeader from '@/common/TableHeader.vue'
import NotesList from './components/NotesList/NotesList.vue'
import NoteForm from './components/NoteForm/NoteForm.vue'
import NotesDialog from './components/NotesDialog/NotesDialog'
import EditNotesDialog from './components/NotesDialog/EditNotesDialog'
import DeleteDialog from '@/common/DeleteDialog.vue'
import CollaboratorDialog from './components/CollaboratorDialog/CollaboratorDialog.vue'
import {cloneDeep} from 'lodash'

export default {
    name: 'Notes',
    mixins: [list_functionality],
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
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Notes', disabled: true, route: null}
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
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.fetch_notes()
    },
    methods: {
        fetch_notes() {
            this.fill_table_via_url('api/note', true, response => {
                this.select_first_note()
            })
        },
        fetch_more_notes() {
            this.load_more_via_url(`api/note`)
        },
        save(payload) {
            api_to
                .add_new_note(payload)
                .then(({data}) => {
                    this.items.unshift(data)
                    this.$event.$emit('open_snackbar', 'Note Added Successfully')
                    this.notes_dialog = false
                    this.select_first_note()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },

        updateNote(payload) {
            if (payload) {
                api_to
                    .updateNote(payload)
                    .then(this.update_notes)
                    .finally(() => {
                        this.$event.$emit('btnloading_off', false)
                    })
            }
        },
        update_notes({data}) {
            if (this.note_to_edit) {
                let index = this.items.findIndex(note => note.id === this.note_to_edit.id)
                if (~index) {
                    this.items[index].title = data.title
                    this.items[index].content = data.content
                    this.$event.$emit('open_snackbar', 'Note updated successfully!')
                }
            }
            this.edit_note_dialog = false
        },

        save_collaborators(payload) {
            api_to
                .save_collaborators(payload, this.selected_note.id)
                .then(this.update_collaborators)
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },

        select_first_note() {
            if (this.items.length > 0) {
                this.selected_note = this.items[0]
            } else {
                this.selected_note = null
            }
        },

        change_selected(note) {
            this.selected_note = note
            this.note_to_edit = note
            this.note_to_delete = note
        },

        open_collaborators_dialog(collaborators) {
            this.collaborators = collaborators
            this.coll_dialog = true
        },

        open_edit_note_dialog(note) {
            this.note_to_edit = cloneDeep(note)
            this.edit_note_dialog = true
        },

        update_collaborators({data}) {
            const index = this.items.findIndex(
                note => note.id === this.selected_note.id
            )
            if (~index) {
                this.items[index].collaborators = data
                this.$event.$emit(
                    'open_snackbar',
                    'Collaborators updated successfully!'
                )
            }
        },
        toggle_pin({note, index}) {
            if (this.pin_api) return
            this.pin_api = true
            const text = note.pivot.is_pinned ? 'Unpinned' : 'Pinned'
            api_to
                .toggle_pin(note)
                .then(({data}) =>
                    this.$set(this.items[index].pivot, 'is_pinned', data)
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
                .then(({data}) => {
                    const index = this.items.findIndex(
                        note => note.id === this.note_to_delete.id
                    )
                    if (~index) {
                        this.items.splice(index, 1)
                        this.select_first_note()
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