<template>
    <div class="chat">
        <v-card flat class="chat-container">
            <v-card-text no-gutters>
                <v-row>
                    <v-col cols="4">
                        <ChatList :loading="contact_list_loading"
                                  :user_list="user_conversations"
                                  :group_list="group_conversations"
                                  :selected="active_chat"
                                  @open-chat="open_conversation"
                                  @add-new-chat-group="$refs.create_group_chat.open_dialog()"
                        />
                    </v-col>
                    <v-col>
                        <ChatBox :conversation="active_chat"
                                 :message-height="chat_message_height"
                                 @manage-chat-members="open_manage_members_dialog"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <!--Components-->
        <GroupChatDialog ref="create_group_chat"
                         :user-list="user_conversations"
                         @new-chat-group-created="new_groupchat_added"
        />
        <ManageMembersDialog ref="manage_group_members_dialog"
                             :user-list="user_conversations"
                             :conversation="active_chat"
                             @conversation-updated="conversation_updated"
        />
    </div>
</template>

<script>
    import {chat_utils} from "@/services/chats/chat_utils";
    import ChatList from "./components/ChatBox/ChatList.vue";
    import ChatBox from "./components/ChatBox/ChatBox.vue";
    import GroupChatDialog from './components/GroupChatDialog/GroupChatDialog.vue'
    import ManageMembersDialog from './components/ManageMembersDialog/ManageMembersDialog.vue'
    import {mapGetters, mapMutations} from "vuex";

    export default {
        components: {
            ChatBox, ChatList,
            GroupChatDialog,
            ManageMembersDialog
        },
        mixins: [chat_utils],
        name: "Chat",
        created() {
            if (this.$route && this.$route.params.conversation_id) {
                this.set_active_base_on_param(this.$route.params.conversation_id)
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.set_active_base_on_param(to.params.conversation_id)
            //next()
        },
        data: () => ({
            chatHeight: 500
        }),
        computed: {
            ...mapGetters('onlineUsers', ['user_conversations', 'group_conversations']),
            list_height() {
                return document.getElementById('chat-list-wrapper')
                    ? document.getElementById('chat-list-wrapper').offsetHeight
                    : this.chatHeight
            },
            chat_message_height() {
                return this.list_height - this.chat_input_height
            },
            chat_input_height() {
                return document.getElementById('chat-input-wrapper')
                    ? document.getElementById('chat-input-wrapper').offsetHeight
                    : 0
            },
        },
        methods: {
            ...mapMutations('onlineUsers', ['add_group_conversations', 'update_group_conversations']),
            set_active_base_on_param(conversation_id) {
                let index1 = this.user_conversations.findIndex(i => i.conversation.id === conversation_id)
                if (~index1) {
                    this.active_chat = this.user_conversations[index1].conversation
                    this.open_conversation(this.user_conversations[index1].conversation)
                }
                let index2 = this.group_conversations.findIndex(i => i.id === conversation_id)
                if (~index2) {
                    this.active_chat = this.group_conversations[index1]
                    this.open_conversation(this.group_conversations[index1])
                }
            },
            open_manage_members_dialog() {
                this.$refs.manage_group_members_dialog.open_dialog()
            },
            new_groupchat_added(new_conversation) {
                this.active_chat = new_conversation
                this.add_group_conversations(new_conversation)
            },
            conversation_updated(updated_conversation) {
                this.active_chat = updated_conversation
                this.update_group_conversations(updated_conversation)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/sass/_variables';

    @include pagePadding('.chat');
    .chat {
        .chat-container {
            border-radius: 10px;
        }
    }
</style>