<template>
    <div class="message__tab">
        <v-row>
            <v-col md="3">
                <UsersList :has-manage-members="manageable"
                           :participants="participants"
                           :title="user_list_title"
                           @open-manage-members="manage_participants"
                />
            </v-col>
            <v-col md="9">
                <v-tabs class="tabs" centered grow hide-slider height="45" :show-arrows="is_screen_medium_and_down"
                        v-model="active_chat_index"
                >
                    <v-tab v-for="tab in chat_tabs" :key="tab.id" :disabled="tab.is_disabled" exact>
                        {{ tab.name }}
                    </v-tab>
                </v-tabs>
                <ChatBox :conversation="active_chat" :has-toolbar="false" />
            </v-col>
        </v-row>
        <ManageClientChatMember ref="manage_group_members_dialog" :conversation="active_chat" />
    </div>
</template>

<script>
    import UsersList from "./components/UsersList.vue";
    import ChatBox from "../Chat/components/ChatBox/ChatBox.vue";
    import {is_screen_utils} from "@/global_utils/is_screen_utils";
    import request from "@/services/axios_instance";
    import {mapGetters} from "vuex";
    import ManageClientChatMember from "./components/ManageClientChatMember.vue";

    export default {
        name: "Messages",
        mixins: [is_screen_utils],
        components: {
            ChatBox,
            UsersList,
            ManageClientChatMember
        },
        props: {
            id: [String, Number]
        },
        data: () => ({
            client_conversation: null,
            team_conversation: null,
            active_chat_index: 0
        }),
        created() {
            this.getConversations()
        },
        computed: {
            ...mapGetters(['user']),
            manageable(){
                return this.active_chat && this.active_chat.type === 'client'
            },
            active_chat() {
                return this.active_chat_index === 1 ? this.team_conversation : this.client_conversation
            },
            user_list_title() {
                if (!this.active_chat) return ''
                return this.active_chat.type === 'client' ? 'Client Group Chat' : 'Team Group Chat'
            },
            participants() {
                if (!this.active_chat)
                    return []
                return this.active_chat.users
            },
            is_client_tab_disabled() {
                if (this.user.is_admin) return false
                if (!this.client_conversation) return true
                let index = this.client_conversation.users.findIndex(i => i.id === this.user.id)
                return !~index
            },
            is_team_tab_disabled() {
                if (this.user.is_admin) return false
                if (!this.team_conversation) return true
                let index = this.team_conversation.users.findIndex(i => i.id === this.user.id)
                return !~index
            },
            chat_tabs() {
                let type = this.$route.params.type || 'project';
                return [
                    {
                        name: 'Client Messages',
                        route: `/dashboard/${type}/preview/${this.id}/messages`,
                        conversation_id: this.client_conversation,
                        is_disabled: this.is_client_tab_disabled
                    },
                    {
                        name: 'Team Messages',
                        route: `/dashboard/${type}/preview/${this.id}/messages/team-messages`,
                        conversation_id: this.team_conversation,
                        is_disabled: this.is_team_tab_disabled
                    }
                ]
            }
        },
        methods: {
            getConversations() {
                request.get(`api/chat/conversations/project/${this.id}`)
                    .then(({data}) => {
                        this.client_conversation = data.client_conversation
                        this.team_conversation = data.team_conversation
                    })
                .finally(() =>{
                    if (this.user.is_admin || this.user.is_manager || this.user.is_client) {
                        this.active_chat_index = 0
                    } else {
                        this.active_chat_index = 1
                    }
                })
            },
            manage_participants() {
                if (this.active_chat)
                    this.$refs.manage_group_members_dialog.open_dialog()
            }
        }
    }
</script>

<style lang="scss" scoped src="./Messages.scss"></style>