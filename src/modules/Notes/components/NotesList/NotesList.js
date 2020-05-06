export default {
  name: 'NotesList',
  props: {
    notes: Array,
    loading: Boolean,
    activeNote: Object,
    noMoreData: { type: Boolean, default: true }
  }
}
