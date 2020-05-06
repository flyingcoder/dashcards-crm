import Empty from '@/common/Empty.vue'

export default {
  name: 'NoteForm',
  components: {
    Empty
  },
  props: {
    note: Object,
    loading: Boolean
  }
}
