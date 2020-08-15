<template>
    <v-card outlined flat>
        <v-toolbar color="#3b589e" dark v-if="conversation">
            <template v-if="conversation.type">
                <Avatars :items="conversation.users" :count="3" />
                <v-toolbar-title class="ml-2">{{ conversation.data.group_name }}</v-toolbar-title>
            </template>
            <template v-else>
                <Avatar :user="conversation.user" />
            </template>
            <v-spacer />
            <v-btn class="mr-1" icon v-if="conversation.type && is_group_creator">
                <v-icon @click="$emit('manage-chat-members')">mdi-account-multiple-plus-outline</v-icon>
            </v-btn>
        </v-toolbar>
        <v-toolbar flat v-else />
        <section id="chat-box-wrapper" v-if="conversation">
            <v-card-text ref="chat_wrapper" class="messages-wrapper"
                         :style="`height:${messageHeight}px;overflow-y:auto;`"
                         @scroll="on_scroll_top"
            >
                <v-progress-linear color="primary" class="mb-1" indeterminate reverse v-show="scrolling" />
                <empty style="height: 100%;" headline="No Message yet" icon="mdi-chat" v-if="messages.length === 0" />
                <template v-else>
                    <Message v-for="message in sorted_messages" :message="message" :key="message.id" />
                </template>
            </v-card-text>
            <v-divider />
            <v-card-actions id="chat-input-wrapper">
                <ChatField class="mt-2"
                           :mentionables="mentionable_list"
                           @typing="typing"
                           @send-message="send_conversation_message"
                />
            </v-card-actions>
        </section>
        <empty v-else :style="`height:${no_active_convo_height}px;`" headline="No active conversation" icon="mdi-chat" />
    </v-card>
</template>

<script>
    import ChatField from "@/common/ChatBox/ChatField.vue";
    import {chat_utils} from "@/services/chats/chat_utils";
    import Avatars from "@/common/Avatars.vue";
    import Message from "../Message/Message.vue";

    export default {
        name: "ChatBox",
        mixins: [chat_utils],
        components: {
            Avatars,
            ChatField,
            Message
        },
        props: {
            messageHeight: {type: Number, default: 500},
            conversation: Object
        },
        computed: {
            no_active_convo_height() {
                return this.messages.length === 0 ? this.messageHeight + this.chat_input_height : 0
            },
            chat_input_height() {
                return document.getElementById('chat-input-wrapper')
                    ? document.getElementById('chat-input-wrapper').offsetHeight
                    : 0
            }
        },
        watch: {
            conversation: {
                handler(val) {
                    if (val) {
                        this.active_chat = val
                        this.get_conversation_messages(val)
                    }
                },
                immediate: true,
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>