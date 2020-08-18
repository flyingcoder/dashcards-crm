import { mapGetters, mapMutations, mapActions } from 'vuex'
import { api_to } from './api'
import _cloneDeep from 'lodash/cloneDeep'

//Components
import TableHeader from '@/common/TableHeader.vue'
import Message from './components/Message/Message.vue'
import GroupChatDialog from './components/GroupChatDialog/GroupChatDialog.vue' 
import ManageMembersDialog from './components/ManageMembersDialog/ManageMembersDialog.vue'
import ChatField from '@/common/ChatBox/ChatField.vue'
import Avatars from '@/common/Avatars.vue'
import {chat_utils} from "@/services/chats/chat_utils";

export default {
    name: 'Chat',
    mixins:[chat_utils],
    components: {
        TableHeader,
        Message, 
        GroupChatDialog,
        ManageMembersDialog,
        ChatField,
        Avatars
    },

    data: () => ({
        activeChat: null,
        message: null,
        group_icon: 'M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z',
        paths: [
            { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            { text: 'Chat', disabled: true, route: null }
        ],
        all_users: [],
        all_messages: [],
        all_groups: [],
        page: 1,
        pagination: {
            current: 1,
            total: 0
        },
        cardLoading: false,
        userLoading: false,
        current_members: [],
        target: null,
        view__more_loading: false
    }),
    computed: {
        ...mapGetters('chat', ['unread_messages', 'all_conversations']),
        loggeduser() {
            return this.$store.getters.user
        },
        has_more_message() {
            return this.pagination.current < this.pagination.total
        },
        onlineUsers() {
            return this.$store.getters['onlineUsers/all_users']
        },
        mentionables() {
            if (!this.activeChat) {
                return []
            }
            if (this.activeChat.type === `group`) {
                return this.activeChat.members
            }
            return [this.activeChat]
        }
    },
    created() {
        if (typeof this.$route.params.target !== 'undefined') {
            this.target = parseInt(this.$route.params.target)
        }
        this.subscribePusher()
        this.get_conversation_list()
    },

    mounted() {
        this.$store.commit('set_floating_button', false)
        this.$event.$emit('path-change', this.paths)
    },

    beforeDestroy() {
        this.$store.commit('set_floating_button', true)
    },

    methods: {
        ...mapMutations('onlineUsers', ['set_all_users']),
        ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),
        creator(id) {
            let index = this.activeChat.members.findIndex(i => i.id === id);
            if (~index) {
                return this.activeChat.members[index].fullname
            }
            return ''
        },
        subscribePusher() {
            this.$pusher.authenticate()
            const chat_channel = this.$pusher.subscribe(
                `private-chat.new-message.${this.loggeduser.id}`
            )
            chat_channel.bind( `App\\Events\\PrivateChatSent`, ({ message, sender, receiver }) => {
                    const conv = this.all_messages.find(
                        convs => convs.conversation_id === message.conversation_id
                    )
                    if (conv && receiver.id === this.loggeduser.id) {
                        let messageObj = Object.assign(message, {sender: sender});
                        this.add_new_message(messageObj)
                        this.scrollToBottom()
                    } else {
                        const user_index = this.all_users.findIndex(
                            user => user.id === sender.id
                        )
                        if (~user_index) {
                            this.all_users[user_index].message_count += 1
                        }
                    }
                }
            )
        },
        subscribeToGroupChat(id) {
            const group_channel = this.$pusher.subscribe(`mc-chat-conversation.${id}`)
            this.group_chat_channel(group_channel)
        },
        get_groupchat_list() {
            this.userLoading = true
            api_to
                .get_groupchat_list()
                .then(({ data }) => {
                    this.all_groups = data
                    setTimeout(
                        () =>
                        this.all_groups.forEach(group =>
                            this.subscribeToGroupChat(group.id)
                        ),
                        1
                    )
                })
                .finally(() => (this.userLoading = false))
        },
        get_messages() {
            this.cardLoading = true
            api_to
                .get_messages(this.activeChat.id)
                .then(({ data }) => {
                    this.all_messages = data.data.reverse()
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                })
                .finally(() => {
                    this.scrollToBottom()
                    this.cardLoading = false
                })
        },
        get_previous_message() {
            this.view__more_loading = true
            if (this.activeChat.type === `group`) {
                var req = api_to.get_group_more_messages(
                    this.activeChat.id,
                    this.pagination.current
                )
            } else {
                var req = api_to.get_more_messages(
                    this.activeChat.id,
                    this.pagination.current
                )
            }
            req
                .then(({ data }) => {
                    data.data.forEach(item => {
                        this.all_messages.unshift(item)
                    })
                    this.pagination.current = data.current_page
                })
                .finally(() => {
                    this.view__more_loading = false
                })
        },
        copyOf(items) {
            return _cloneDeep(items)
        },
        get_group_messages() {
            this.cardLoading = true
            api_to
                .get_group_messages(this.activeChat.id)
                .then(({ data }) => {
                    this.all_messages = data.data.reverse()
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                })
                .finally(() => {
                    this.scrollToBottom()
                    this.cardLoading = false
                })
        },
        chat_channel(channel) {

        },
        group_chat_channel(channel) {
            channel.bind(`App\\Events\\GroupChatSent`, data => {
                console.log(data)
                if (this.activeChat && this.activeChat.id === data.conversation_id) {
                    this.add_new_message(data)
                    this.scrollToBottom()
                } else {
                    const grpIndx = this.all_groups.findIndex(
                        grp => grp.id === data.conversation_id
                    )
                    if (~grpIndx) {
                        this.all_groups[grpIndx].message_count += 1
                    }
                }
            })
        },
        go_to_profile(user) {
            if (user.role === 'client') {
                this.$router.push(`/dashboard/clients/profile/${user.id}`)
            } else {
                this.$router.push(`/dashboard/team/profile/${user.id}`)
            }
        },
        sendMessage(data) {
            if (!data) {
                this.$event.$emit('btnsending_off', false)
                return
            }
            if (this.activeChat.type === 'group') {
                this.sendGroupMessage(data)
            } else {
                this.sendPrivateMessage(data)
            }
        },
        sendGroupMessage(data) {
            let formData = new FormData()
            formData.append('message', data.message)
            formData.append('type', 'group')
            formData.append('from_id', this.loggeduser.id)
            formData.append('convo_id', this.activeChat.id)

            if (data.files.length > 0) {
                formData.append('file', data.files[0])
            }

            api_to
                .send_group_message(formData)
                .then(({ data }) => {
                    this.add_new_message(data)
                })
                .finally(() => {
                    this.scrollToBottom()
                    this.$event.$emit('btnsending_off', false)
                })
        },
        sendPrivateMessage(data) {
            let formData = new FormData()
            formData.append('message', data.message)
            formData.append('type', 'private')
            formData.append('from_id', this.loggeduser.id)
            formData.append('to_id', this.activeChat.id)

            if (data.files.length > 0) {
                formData.append('file', data.files[0])
            }

            api_to
                .send_message(formData)
                .then(({ data }) => {
                    this.add_new_message(data)
                })
                .finally(() => {
                    this.scrollToBottom()
                    this.$event.$emit('btnsending_off', false)
                })
        },
        add_new_message(message) {
            if (!this.all_messages.some(msg => msg.id === message.id)) {
                this.all_messages.push(message)
            }
        },
        scrollToBottom() {
            setTimeout(() => {
                const wrapper = document.getElementById('messageContainer')
                if (wrapper) {
                    wrapper.scrollTop = wrapper.scrollHeight
                }
            }, 1)
        },
        new_groupchat_added(item) {
            this.all_groups.unshift(item)
        },
        is_owner(user) {
            if (user.id === this.loggeduser.id) {
                return false //dont remove self
            }
            if (this.activeChat.data.group_creator.id === this.loggeduser.id) {
                return true
            }
            return false
        },
        handleTyping() {
            console.log('typing')
        }
    }
}