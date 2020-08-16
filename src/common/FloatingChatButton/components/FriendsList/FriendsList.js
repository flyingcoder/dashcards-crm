import {mapGetters} from 'vuex'

export default {
    data: () => ({
        fabs: false
    }),

    computed: {
        ...mapGetters('onlineUsers', ['all_users']),
        ...mapGetters(['user']),
        online_users() {
            return this.all_users.filter(
                user => user.id !== this.user.id
            )
        }
    },

    methods: {
        open_chat_box(user) {
            this.$emit('open-chatbox', user)
        }
    }
}
