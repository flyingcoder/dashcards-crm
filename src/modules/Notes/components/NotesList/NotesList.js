import Empty from '@/common/Empty'

export default {
    name: 'NotesList',
    components: {
    	Empty
    },
    props: {
        notes: Array,
        loading: Boolean,
        activeNote: Object,
        noMoreData: { type: Boolean, default: true }
    }
}