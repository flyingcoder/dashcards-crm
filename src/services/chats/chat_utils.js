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

    computed: {
        ...mapGetters(['user']),
        onlineUsers() {
            return this.$store.getters['onlineUsers/all_users']
        },
        mentionable_list() {
            if (!this.active_chat) return []
            if (this.active_chat.type && this.active_chat.users)
                return this.active_chat.users.filter(item => {
                    return item.id !== this.user.id
                })
            return this.active_chat.user ? [this.active_chat.user] : []
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
        showNotification(message) {
            let user = this.$store.getters.user
            if (message.sender.id !== user.id) {
                let notification = new Notification(`New message from ${message.sender.first_name}`, {
                    icon: require('@/assets/logo/mini-blue.png'),
                    body: message.body
                })
                /*notification.onclick = function (event) {
                    this.$router.push({name: 'chat', params: {conversation_id: message.conversation.id}})
                }*/
            }
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
            this.mark_read_conversation(conversation)
            if (fetch_message)
                this.get_conversation_messages(conversation)

            this.$event.$emit('conversation-opened', conversation)
        },
        mark_read_conversation(conversation) {
            if (conversation) {
                request.post(`api/chat/conversations/${conversation.id}/mark-as-read`)
                    .then(({data}) => {
                        if (!conversation.type) {
                            let index = this.user_list.findIndex(item => item.conversation.id === conversation.id)
                            if (~index) {
                                this.user_list[index].message_count = 0
                            }
                        } else {
                            let index = this.group_list.findIndex(item => item.id === conversation.id)
                            if (~index) {
                                this.group_list[index].message_count = 0
                            }
                        }

                    })
            }
        },
        get_conversation_messages(conversation) {
            if (conversation) {
                this.messages = []
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
            }
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
        add_new_message(message) {
            if (!this.messages.some(msg => msg.id === message.id)) {
                this.messages.push(message)
            }
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