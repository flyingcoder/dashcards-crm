import {mapGetters} from "vuex";
import request from '@/services/axios_instance'

export const chat_utils = {
    data: () => ({
        group_channel: null,
        chat_notification_channel: null,
        app_channel: null,
        user_list: [],
        group_list: [],
        active_chat: null,
        messages: [],
        next_url: null,
        message_loading: false,
        sending: false,
        contact_list_loading: false,
        scrolling: false
    }),
    created() {
        //this.subscribeToChat()
    },
    computed: {
        ...mapGetters(['user']),
        onlineUsers() {
            return this.$store.getters['onlineUsers/all_users']
        },
        sortByOnlineStatus() {
            return this.sortByStatus(this.user_list)
        },
        mentionable_list() {
            if (!this.active_chat) return []
            if (this.active_chat.type)
                return this.active_chat.users.filter(item => {
                    return item.id !== this.user.id
                })
            return [this.active_chat.user]
        },
        is_group_creator() {
            if (!this.active_chat) return false
            return this.user.id === this.active_chat.data.group_creator
        },
        sorted_messages() {
            if (!this.messages.length) return []
            return this.messages.sort(function (a, b) {
                return a.id - b.id
            });
        }
    },
    methods: {
        subscribeToChat() {
            //this.chat_notification_channel = this.$pusher.subscribe(`presence-chat-notification.${this.user.id}`)
            /*this.chat_notification_channel.bind('App\\Events\\ChatNotification', ({message, sender, receiver}) => {
                console.log(message)
                // this.add_chat(message)
            })*/
            /*this.chat_notification_channel.bind('.App\\Events\\ChatNotification', payload => {
                console.log(payload)
                // this.add_chat(message)
            })*/
        },
        sortByStatus(users) {
            if (!users || users.length === 0) return []
            return users.slice().sort(function (userA, userB) {
                return userA.is_online - userB.is_online
            }).reverse()
        },
        get_conversation_list(cb) {
            this.contact_list_loading = true
            request.get(`api/chat/conversations/list?has_msg_count=true`)
                .then(({data}) => {
                    /*map online to list*/
                    this.user_list = data.user_list.map(each => {
                        let has = this.onlineUsers.findIndex(us => us.id === each.id)
                        each.is_online = !!(~has)
                        return each
                    });
                    this.group_list = data.group_list
                    if (typeof cb === 'function')
                        cb(data)
                })
                .finally(() => this.contact_list_loading = false)
        },
        open_conversation(conversation, fetch_message) {
            this.active_chat = conversation
            if (fetch_message)
                this.get_conversation_messages(conversation)
        },
        get_conversation_messages(conversation) {
            this.message_loading = true
            request.get(`api/chat/conversations/${conversation.id}/messages?page=1`)
                .then(({data}) => {
                    this.messages = data.data
                    this.next_url = data.next_page_url
                })
                .finally(() => {
                    this.message_loading = false
                    this.scrollToEnd('.messages-wrapper')
                })
        },
        get_previous_conversation_messages() {
            let el = this.$refs.chat_wrapper
            const height = el.scrollHeight + el.scrollTop
            this.message_loading = true
            this.scrolling = true
            request.get(this.next_url)
                .then(({data}) => {
                    this.messages.push(...data.data)
                    this.next_url = data.next_page_url
                    this.$nextTick(() => {
                        const scroll_pos = el.scrollHeight - el.scrollTop - height
                        el.scrollTo(0, scroll_pos)
                    })
                })
                .finally(() => {
                    this.scrolling = false
                    this.message_loading = false
                })
        },
        send_conversation_message(data, cb) {
            this.sending = true
            let formData = new FormData()
            formData.append('message', data.message)
            formData.append('conversation_id', this.active_chat.id)
            if (data.files.length > 0) {
                formData.append('file', data.files[0])
            }
            request.post(`api/chat/conversations/${this.active_chat.id}/messages`, formData)
                .then(({data}) => {
                    this.messages.push(data)
                    if (typeof cb === 'function')
                        cb(data)
                })
                .finally(() => {
                    this.scrollToEnd('.messages-wrapper')
                    this.sending = false
                    this.$event.$emit('btnsending_off', false)
                })
        },
        typing() {
            //todo actual typing notif on opposite side
            console.log('typing...')
        },
        scrollToEnd(element_class_name) {
            const container = this.$el.querySelector(element_class_name);
            if (container) container.scrollTop = container.scrollHeight;
        },
        scrollToElement(element_class_name) {
            setTimeout(() => {
                const el = this.$el.getElementsByClassName(element_class_name)[
                this.$el.getElementsByClassName(element_class_name).length - 1
                    ];
                if (el) el.scrollIntoView();
            }, 50);
        },
        on_scroll_top(event) {
            if (!this.next_url || this.scrolling) return
            const diff_from_top = event.target.scrollTop
            if (diff_from_top <= 50)
                this.get_previous_conversation_messages()
        }
    }
}