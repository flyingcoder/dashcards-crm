<template>
    <v-card flat outlined class="mx-auto">
        <v-toolbar color="#3b589e" dark>
            <Avatar :user="user" />
            <v-spacer />
            <v-tooltip left>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click="$emit('add-new-chat-group')">
                        <v-icon>mdi-comment-plus</v-icon>
                    </v-btn>
                </template>
                <span>New Group Chat</span>
            </v-tooltip>
        </v-toolbar>

        <template v-if="loading">
            <v-skeleton-loader v-for="n in 5" :key="n" ref="skeleton" type="list-item-avatar-two-line" class="mx-auto" />
        </template>
        <section id="chat-list-wrapper" v-if="!loading" style="min-height:500px; max-height:500px; overflow-y: auto">
            <v-list dense>
                <v-list-item :class="is_active_conversation(group)" v-for="group in group_list" :key="group.id"
                             @click="open_conversation(group)"
>
                    <v-list-item-content>
                        <v-row no-gutters>
                            <Avatars style="display: block" :items="group.users" :count="1" />
                            <v-col>
                                <v-list-item-title class="ml-2 mt-4" v-text="group.data.group_name" />
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon color="success" class="has_message" title="New message"
                                v-show="group.message_count > 0"
                        >
                            mdi-email-alert-outline
                        </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-list dense>
                <v-list-item :class="is_active_conversation(user.conversation)" v-for="user in sortByOnlineStatus"
                             :key="user.conversation.id"
                             @click="open_conversation(user.conversation)"
                >
                    <v-list-item-content>
                        <v-row no-gutters>
                            <Avatar :user="user" icon-only />
                            <v-col>
                                <v-list-item-title v-text="user.fullname" />
                                <v-list-item-subtitle v-text="user.job_title" />
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon color="success" class="has_message" title="New message" v-show="user.message_count > 0">
                            mdi-email-alert-outline
                        </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </section>
    </v-card>
</template>

<script>
    import Avatars from "@/common/Avatars.vue";
    import {mapGetters} from "vuex";
    import _cloneDeep from 'lodash/cloneDeep'

    export default {
        name: "ChatList",
        components: {Avatars},
        props: {
            user_list: Array,
            group_list: Array,
            selected: Object,
            loading: {type: Boolean, default: false}
        },
        data: () => ({
            active_chat: null
        }),
        computed: {
            ...mapGetters(['user']),
            sortByOnlineStatus() {
                if (!this.user_list || this.user_list.length === 0) return []
                return _cloneDeep(this.user_list).slice().sort(function (userA, userB) {
                    return (userA.is_online === userB.is_online) ? 0 : (userA.is_online ? -1 : 1)
                })
            }
        },
        watch: {
            selected(val) {
                this.active_chat = val
            }
        },
        mounted() {
            this.$event.$on('new-chat-message-received', message => {
                this.add_message_count(message.conversation)
            })
        },
        methods: {
            open_conversation(conversation) {
                this.active_chat = conversation
                this.$emit('open-chat', conversation)
            },
            add_message_count(conversation) {
                if (!conversation) return

                if (conversation.type) {
                    let index = this.group_list.findIndex(item => item.id === conversation.id)
                    if (~index)
                        this.group_list[index].message_count += 1
                } else {
                    let index = this.user_list.findIndex(item => item.conversation.id === conversation.id)
                    if (~index)
                        this.user_list[index].message_count += 1
                }
            },
            is_active_conversation(conversation) {
                return this.active_chat && this.active_chat.id === conversation.id ? 'active' : ''
            }
        }
    }
</script>

<style scoped lang="scss">
    #chat-list-wrapper {
        .active {
            background-color: #e0e0e0;
        }
    }
</style>