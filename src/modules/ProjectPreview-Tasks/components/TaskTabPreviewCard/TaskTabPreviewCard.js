import request from '@/services/axios_instance'
import {global_utils} from '@/global_utils/global_utils'
import moment from 'moment'
//Components
import HoursBox from '@/common/HoursBox/HoursBox.vue'
import Avatars from '@/common/Avatars.vue'
import Comment from '@/common/Comment/Comment.vue'
import Editor from "@/common/Editor/Editor.vue";

export default {
    name: 'TaskTabPreviewCard',
    mixins: [global_utils],
    components: {
        HoursBox,
        Avatars,
        Comment,
        VBoilerplate: {
            functional: true,
            render(h, {data, props, children}) {
                return h(
                    'v-skeleton-loader', {
                        ...data,
                        props: {
                            boilerplate: true,
                            elevation: 0,
                            ...props
                        }
                    },
                    children
                )
            }
        },
        Editor
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
        commenter: null,
        hover: false,
        activeComment: null,
        permissions: null,
        btnloading: false
    }),
    mounted() {
        this.$event.$on('task-is-updated', task => {
            if (this.activeId === task.id) {
                this.content = task
            }
        })
    },
    computed: {
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
        },
        dropdown_actions() {
            let actions = [
                {id: 1, text: 'Edit Task', value: 'edit', icon: 'mdi-file-document-edit-outline'},
                {id: 2, text: 'Delete Task', value: 'delete', icon: 'mdi-delete-alert-outline'}
            ]
            let status = this.content.status.toLowerCase()
            if (status !== 'completed') {
                actions.push({id: 3, text: 'Mark as Complete', value: 'mark-as-complete', icon: 'mdi-clipboard-check'})
            }
            if (status !== 'completed' && status !== 'urgent') {
                actions.push({
                    id: 4,
                    text: 'Mark as Urgent',
                    value: 'mark-as-urgent',
                    icon: 'mdi-clipboard-alert-outline'
                })
            } else if (status !== 'completed' && status === 'urgent') {
                actions.push({
                    id: 4,
                    text: 'Mark as Non-urgent',
                    value: 'mark-as-urgent',
                    icon: 'mdi-clipboard-alert-outline'
                })
            }
            return actions
        }
    },
    watch: {
        activeId: {
            handler(task_id) {
                if (task_id) {
                    this.loading = true
                    request.get(`api/task/${task_id}`)
                        .then(response => {
                            this.content = response.data
                            this.all_comments = response.data.comments
                        })
                        .finally(() => (this.loading = false))
                }
            },
            immediate: true
        }
    },

    methods: {
        dropdownAction(action) {
            this.$event.$emit(`task-${action}`, this.content)
        },
        can_delete_comment(comment) {
            if (this.user.is_admin) return true
            return comment.causer.id === this.user.id;
        },
        date_created(date) {
            return moment(date).format('MMMM DD, YYYY')
        },
        timerStarted() {
            this.$event.$emit('task-timer-started', this.activeId)
        },
        timerPaused() {
            this.$event.$emit('task-timer-paused', this.activeId)
        }
    }
}