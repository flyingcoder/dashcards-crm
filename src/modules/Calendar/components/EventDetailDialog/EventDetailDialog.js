import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import makeRequestTo from '@/services/makeRequestTo'
import * as apiTo from '@/modules/Calendar/api'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
import Avatars from '@/common/Avatars.vue'
import RichEditor from '@/common/RichEditor.vue'
import Comment from '@/common/Comment/Comment.vue'

export default {
  name: 'EventDetailDialog',
  components : {
    TextField,
    Avatars,
    RichEditor,
    Comment
  },
  props: {
    event : Object
  },
  data: () => ({
    dialog: false,
    btnloading: false,
    all_comments: [],
    dropdown_actions: [
      { id: 1, text: 'Edit', value: 'edit' },
      { id: 2, text: 'Delete', value: 'delete' }
    ],
    commenter: null,
    hover: false,
    activeComment: null,
  }),
  created(){
    this.$event.$on('close-all-dialog', () => {
      this.clear_and_close()
    })
  },
  computed : {
    dialogTitle (){
      return this.event.title
    },
    event_date() {
      return moment(this.event.start).format('MMMM D YYYY')
    },
    event_time() {
      return moment(this.event.start).format('h:mm A')
    },
    user() {
      return this.$store.getters.user
    },
    permission() {
      return this.$_permissions.get('message')
    },
    can_view_comment() {
      if (this.user.is_admin) return true
      return this.permission && this.permission.view
    },
    can_edit_comment() {
      if (this.user.is_admin) return true
      return this.permission && this.permission.update
    },
    addCommentApi(){
      return `api/events/${this.event.id}/comments`
    },
    deleteCommentApi(){
      return `api/events/${this.event.id}/comments`
    },
  },
  methods: {
    getComments(){
      this.all_comments = []
      makeRequestTo.eventComments(this.event.id)
      .then(({ data }) => {
        this.all_comments = data
      })
    },
  	openDialog() {
  		this.dialog = true

      setTimeout(() => {
        this.getComments()
      }, 1)
  	},
    clear_and_close() {
      this.dialog = false
    }
  }
}