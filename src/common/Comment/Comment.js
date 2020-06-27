import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'

import Editor from '@/common/Editor/Editor.vue'
import DeleteDialog from '@/common/DeleteDialog.vue' 

export default {
    name: 'Comment',
    mixins: [global_utils],
    components: {
        Editor,
        DeleteDialog 
    },

    props: {
        id: Number,
        componentKey: Number,
        items: { type: Array, default: () => [] },
        fetchApi: { type: String, default: '' },
        deleteApi: { type: String, default: 'api/comments' },
        addApi: { type: String, default: 'api/comments' },
        uploadApi: { type: String, default: 'api/file/image-upload' },
        maxHeight: { type: Number, default: 400 }
    },

    data: () => ({
        comments: [],
        comment: '',
        btnloading: false,
        hover: false,
        activeComment: null,
        next_page_url : null,
        counterReset: 0
    }),
    mounted() {
        this.comments = this.items
        if (this.fetchApi !== '') {
            this.fetchComments()
        }
    },
    watch: {
        componentKey: {
            handler(val) {
                if (val && this.fetchApi !== '') {
                    this.fetchComments()
                }
            },
            deep: true,
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        isEmptyComment() {
            return !this.comment || this.comment === ''
        }
    },
    methods: {
        can_delete_comment(comment) {
            if (this.user.is_admin) return true
            if (comment.causer.id === this.user.id) return true
            return false
        },
        confirm_delete_comment(item) {
            this.activeComment = item
            this.$refs.delete_comment_dialog.showDialog()
        },
        addComment() {
            if (!this.comment || this.comment === '') {
                return
            }
            this.btnloading = true
            var payload = { comment: this.comment, body: this.comment }
            request
                .post(this.addApi, payload)
                .then(({ data }) => {
                    this.comments.push(data)
                    this.comment = ''
                    this.counterReset += 1
                })
                .finally(() => (this.btnloading = false))
        },
        confirmed_delete_comment() {
            request
                .delete(`${this.deleteApi}/${this.activeComment.id}`)
                .then(({ data }) => {
                    let index = this.comments.findIndex(
                        cm => cm.id === this.activeComment.id
                    )
                    if (~index) {
                        this.comments.splice(index, 1)
                        this.activeComment = null
                    }
                    this.$refs.delete_comment_dialog.closeDialog()
                })
                .finally(() => (this.btnloading = false))
        },
        fetchComments() {
            this.loading = true
            request.get(`${this.fetchApi}?page=1`)
                .then(({ data }) => {
                    this.comments = data.data
                    this.next_page_url = data.next_page_url
                })
                .finally(() => (this.loading = false))
        },
        fetchMoreComments() {
            request.get(`${this.next_page_url}`)
                .then(({ data }) => {
                    this.comments.push(...data.data)
                    this.next_page_url = data.next_page_url
                })
        }
    }
}