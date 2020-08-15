<template>
    <v-card class="pa-1" width="350" flat>
        <v-toolbar flat>
            <v-icon left> mdi-message</v-icon>
            <v-toolbar-title>Messages ({{ total_counts || 0 }})</v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-1" small icon v-on="on" :to="{ name: 'chat' }">
                        <v-icon>mdi-chat</v-icon>
                    </v-btn>
                </template>
                <span>See all in Chat</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-1" small icon v-on="on" @click="markAllAsReadChat">
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-btn>
                </template>
                <span>Mark All As Read</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-1" small icon v-on="on" @click="$emit('close')">
                        <v-icon>close</v-icon>
                    </v-btn>
                </template>
                <span>Close</span>
            </v-tooltip>
        </v-toolbar>

        <v-card-text class="pa-0" style="max-height: 300px; overflow-x:hidden;overflow-y:auto;">
            <v-list dense class="pa-0">
                <v-list-item v-if="chats.length === 0" class="new__message">
                    <v-list-item-content>
                        <empty headline="No Messages" icon="mdi-chat-alert-outline" />
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :class="{unread:is_unread(message)}" v-else v-for="message of chats"
                             :key="message.id"
                             @click="open_chat_box(message)"
                >
                    <v-list-item-avatar>
                        <v-icon v-if="is_group_chat(message)" large>mdi-account-group-outline</v-icon>
                        <v-img v-else-if="message.user.image_url" :src="message.user.image_url" />
                        <v-icon v-else large>mdi-image-size-select-actual</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span v-if="is_group_chat(message)">{{ message.conversation.data.group_name | ucwords }}</span>
                            <span v-else>{{ message.user.fullname | ucwords }}</span>
                            <v-icon size="10" right v-if="!is_group_chat(message)"
                                    :color=" is_user_online(message.sender.id) ? `success` : `gray`"
                            >
                                mdi-circle
                            </v-icon>
                        </v-list-item-title>
                        <v-list-item-subtitle v-if="!is_group_chat(message)">
                            <span v-if="is_self_sender(message)">You: </span>
                            {{ message.body }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-else>
                            <span v-if="is_self_sender(message)">You : </span>
                            <span v-else> {{ message.sender.first_name }} : </span>
                            {{ message.body }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <small class=" caption ">{{ message.created_at | from_now }}</small>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn text :loading="false" :disabled="!hasMoreChat" @click="fetchMoreChat">
                Load More
            </v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {global_utils} from '@/global_utils/global_utils'

    export default {
        mixins: [global_utils],
        computed: {
            ...mapGetters('onlineUsers', ['all_users']),
            ...mapGetters('headerIcons', ['chat']),
            loggedUser() {
                return this.$store.getters.user
            },
            onlineUsers() {
                return this.all_users.filter(i => this.loggedUser.id !== i.id)
            },
            chats() {
                return this.$store.getters['chatNotifications/chat']
            },
            total_counts() {
                return this.$store.getters['chatNotifications/chat_counts']
            },
            hasMoreChat() {
                return this.$store.getters['chatNotifications/has_more_chat']
            }
        },
        data: () => ({
            notificationsFetched: false
        }),

        methods: {
            ...mapActions('chatNotifications', ['fetch_more_chat']),
            fetchMoreChat() {
                this.notificationsFetched = true
                this.fetch_more_chat()
                    .then(() => {
                        this.notificationsFetched = false
                    })
            },
            open_chat_box(notification) {
                this.$store.dispatch('chatNotifications/mark_as_read_chat', notification.id)
                    .then(() => {
                        let sender = notification.sender
                        let is_online = this.is_user_online(sender.id)
                        if (is_online && this.$route.name !== 'chat') {
                            this.$store.dispatch('chat/open_conversation', {
                                id: sender.id,
                                is_online: is_online,
                                name: `${sender.first_name}, ${sender.last_name}`
                            })
                            this.$emit('close')
                        } else {
                            this.go_to_chat(notification.conversation_id)
                        }
                    })
            },
            is_user_online(id) {
                const user = this.all_users.find(user => user.id === id)
                if (!user) return false
                return user.is_online
            },
            go_to_chat(id) {
                this.$router.push({name: 'chat', params: {target: id}})
                this.$emit('close')
            },
            is_unread(message) {
                if (message.hasOwnProperty('notification') && message.notification)
                    return !!message.notification.updated_at
                return message.sender.id !== this.loggedUser.id
            },
            is_group_chat(message) {
                return message.conversation.type && ['group', 'team', 'client'].includes(message.conversation.type)
            },
            is_self_sender(message) {
                return message.sender.id === this.loggedUser.id
            },
            markAllAsReadChat() {
                this.notificationsFetched = true
                this.$store.dispatch('chatNotifications/mark_all_as_read', 'chat')
                    .then(() => {
                        this.notificationsFetched = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/variables';

    .chat__inbox {
        background-color: $lightBlue-2;
        padding: 10px 0;
        width: 300px;
        margin-top: 15px;

        &:after {
            content: '';
            position: absolute;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 15px solid $lightBlue-2;
            border-top: 15px solid transparent;
            right: 50%;
            top: 0;
            margin-top: -15px;
            z-index: 10;
        }

        .inbox__title {
            padding: 5px;
            color: $titleDarkBlue;
            font-weight: 500;
            border-bottom: 1px solid $borderGray;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        @include styledScrollFor('.msg__notif');

        .msg__notif {
            max-height: 300px;
            overflow: auto;

            .user {
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom: 1px solid $borderGray;
                padding: 5px;

                &:hover {
                    background-color: $lightBlue-2;
                }

                @include userImgWithStatus('.user__img');

                .user__img {
                    height: 40px;
                    width: 40px;
                    min-width: 40px;
                }

                .user__detail {
                    margin-left: 10px;
                    cursor: pointer;

                    .user__name {
                        width: 220px;
                        overflow: hidden;
                        display: inline-block;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 14px;
                        color: $titleDarkBlue;
                    }

                    .user__msg {
                        width: 220px;
                        overflow: hidden;
                        display: inline-block;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: $titleDarkBlue;
                        font-size: 12px;
                    }
                }
            }

            .new__message {
                background-color: $blue-2;
            }
        }
    }
</style>
