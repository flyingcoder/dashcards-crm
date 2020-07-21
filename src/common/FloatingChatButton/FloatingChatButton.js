import {mapActions, mapGetters} from 'vuex'
import {global_utils} from '@/global_utils/global_utils'
//Components
import FriendsList from './components/FriendsList/FriendsList.vue'
import ChatBox from '@/common/ChatBox/ChatBox.vue'

export default {
    mixins: [global_utils],

    components: {
        FriendsList,
        ChatBox
    },

    data: () => ({
        showMessage: false
    }),

    computed: {
        ...mapGetters('chat', ['active_conv', 'latest_active_id']),
        should_show() {
            return this.$store.getters.show_floating_button
        }
    },

    watch: {
        latest_active_id(id) {
            if (!id) return
            this.$nextTick(() => {
                let element = document.querySelector(`#chat_box${id}`)
                this.scrollToBottom(element)
            })
        }
    },

    methods: {
        ...mapActions('chat', ['open_conversation'])
    }
}
