import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
import moment from 'moment'

//Components
import DashCard from '@/common/DashCard.vue'
import RichEditor from '@/common/RichEditor.vue'
import EmojiPicker from '@/common/EmojiPicker/EmojiPicker.vue'
import HoursBox from '@/common/HoursBox/HoursBox.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Avatars from '@/common/Avatars.vue'
import Comment from '@/common/Comment/Comment.vue'

export default {
    name: 'TaskTabPreviewCard',
    mixins: [global_utils],
    components: {
        DashCard,
        RichEditor,
        HoursBox,
        EmojiPicker,
        DeleteDialog,
        Avatars,
        Comment,
        VBoilerplate: {
            functional: true,

            render(h, { data, props, children }) {
                return h(
                    'v-skeleton-loader', {
                        ...data,
                        props: {
                            boilerplate: true,
                            elevation: 2,
                            ...props
                        }
                    },
                    children
                )
            }
        }
    },
    props: {
        activeId: [Number, String],
        id: [Number, String]
    },

    data: () => ({
        isRequestInProgress: false,
        content: null,
        loading: false,
        all_comments: [],
        comment: '',
        dropdown_actions: [
            { id: 1, text: 'Edit', value: 'edit', icon: 'mdi-file-document-edit-outline' },
            { id: 2, text: 'Delete', value: 'delete', icon: 'mdi-delete-alert-outline' }
        ],
        commenter: null,
        hover: false,
        activeComment: null,
        permissions: null,
        btnloading: false
    }),
    created() {
        this.commenter = this.$store.getters.user
        this.$event.$on('task-is-updated', task => {
            if (this.activeId === task.id) {
                this.content = task
            }
        })
    },
    computed: {
        full_name() {
            if (!this.content || !this.content.assignee.length) return 'Unassigned'
            return (
                this.content.assignee[0].first_name +
                ' ' +
                this.content.assignee[0].last_name
            )
        },
        assignee_url() {
            if (!this.content || !this.content.assignee.length) return null
            return this.content.assignee[0].image_url
        },
        job_title() {
            if (!this.content || !this.content.assignee.length) return null

            return this.content.assignee[0].job_title
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
        addApi() {
            return `api/task/${this.activeId}/comments`
        },
        delApi() {
            return `api/comments`
        },
        uploadApi() {
            return `api/projects/${this.id}/file`
        }
    },
    watch: {
        activeId: {
            handler(task_id) {
                this.loading = true
                request
                    .get(`api/task/${task_id}`)
                    .then(response => {
                        this.content = response.data
                        this.all_comments = response.data.comments
                        this.set_mark_complete_action(response.data)
                    })
                    .finally(() => (this.loading = false))

                //if(this.content.project_id != this.id)
                //  this.loading = true
            },
            immediate: true
        },
        'content.status': {
            handler() {
                this.set_mark_complete_action(this.content)
            }
        }
    },

    methods: {
        dropdownAction(action) {
            this.$event.$emit(`task-${action}`, this.content)
        },
        can_delete_comment(comment) {
            if (this.user.is_admin) return true
            if (comment.causer.id === this.user.id) return true
            return false
        },
        date_created(date) {
            return moment(date).format('MMMM DD, YYYY')
        },

        add_new_comment() {
            this.btnloading = true
            if (!this.comment || this.isRequestInProgress) return
            this.isRequestInProgress = true
            request
                .post(`api/task/${this.activeId}/comments`, { body: this.comment })
                .then(response => {
                    this.comment = ''
                    this.all_comments.push(response.data)
                })
                .finally(() => {
                    this.btnloading = false
                    this.isRequestInProgress = false
                })
        },

        emoji_added(emoji) {
            this.$refs.editor.$refs.richEditor.quill.focus()
            const selection = this.$refs.editor.$refs.richEditor.quill.getSelection()
            this.$refs.editor.$refs.richEditor.quill.insertText(
                selection.index,
                emoji
            )
        },
        set_mark_complete_action(item) {
            var xtra_action = {
                id: 3,
                text: 'Mark as Complete',
                value: 'mark-as-complete',
                icon: 'mdi-clipboard-check'
            }
            var index = this.dropdown_actions.findIndex(function(item) {
                return item.id === 3
            })
            if (~index) {
                if (item.status.toLowerCase() === 'completed') {
                    this.dropdown_actions.splice(index, 1)
                }
            } else {
                if (item.status.toLowerCase() !== 'completed') {
                    this.dropdown_actions.push(xtra_action)
                }
            }
        },
        timerStarted(){
          this.$event.$emit('task-timer-started', this.activeId)
        },
        timerPaused(){
          this.$event.$emit('task-timer-paused', this.activeId)
        }
    }
}