<template>
    <div class="message__body team-messages">
        <v-system-bar lights-out :height="40" v-if="can_manage_members">
            <v-spacer></v-spacer>
            <v-btn text small @click="open_manage_member_dialog">Manage Members <v-icon right>settings</v-icon>
            </v-btn>
        </v-system-bar>
        <div class="messages" ref="messages-container">
            <v-row no-gutters class="pa-3" v-if="can_send_message">
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn text v-if="noMoreData === false && !loading" class="view__more_btn overline" @click="load_previous">Load Previous Messages</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
            <v-row no-gutters v-if="items.length && can_send_message">
                <v-col md="12" class="px-3 py-2" style="min-height: 350px;">
                    <Message v-for="message in messages(items)" :message="message" :key="message.id"></Message>
                </v-col>
            </v-row>
            <div class="no-messages" v-else-if="!can_send_message">
                <Empty icon="mdi-cellphone-off" headline="Client messages unavailable! "></Empty>
            </div>
            <div class="no-messages" v-else>
                <Empty icon="mdi-cellphone-message-off" headline="No messages yet"></Empty>
            </div>
        </div>
        <div class="write px-3">
            <ChatField v-if="can_send_message" class="mt-2" :mentionables="mentionables" @typing="" @send-message="sendMessage"></ChatField>
        </div>
        <ManageClientChatMember ref="manage_group_members_dialog" :conversation="activeChat"></ManageClientChatMember>
    </div>
</template>
<script>
import * as apiTo from './api'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import _cloneDeep from 'lodash/cloneDeep'

// Components 
import ManageClientChatMember from '@/modules/ProjectPreview-Messages/components/ManageClientChatMember.vue'
import ChatField from '@/common/ChatBox/ChatField.vue'
import Message from '@/modules/Chat/components/Message/Message.vue'

export default {
    name: 'ClientMessages',
    mixins: [global_utils, list_functionality],
    props: {
        id: [Number, String]
    },
    components: { 
        ManageClientChatMember,
        ChatField,
        Message
    },

    data: () => ({
        loading: false,
        message: null,
        can_message: false,
        activeChat: null
    }),

    computed: {
        loggedUser() {
            return this.$store.getters.user
        },
        can_manage_members() {
            if (this.loggedUser.is_admin) return true
            var role = Object.values(this.loggedUser.user_roles)[0]
            return ~role.indexOf('manager') ? true : false
        },
        can_send_message() {
            return this.can_message
        },
        mentionables() {
            if (!this.activeChat) {
                return []
            }
            return this.activeChat.members
        },
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, router_name: 'default-content' },
                { text: this.type, disabled: true, router_name: null },
                { text: 'Client Message', disabled: true, router_name: null }
            ]
        }
    },

    created() {
        this.getConvoDetails(this.id)
    },
    mounted() {
        this.loading = true
        this.$event.$emit('path-change', this.paths)
        this.$pusher.authenticate()
        this.subscribePusher()
    },
    beforeDestroy() {
        this.$pusher.unsubscribe(`private-project.client-message.${this.id}`)
    },
    methods: {
        open_manage_member_dialog() {
            this.$refs.manage_group_members_dialog.open_dialog()
        },
        getConvoDetails(id) {
            apiTo
                .get_client_convo_details(id)
                .then(({ data }) => {
                    this.activeChat = data
                })
                .finally(() => {
                    this.loading = false
                })
        },
        scrollToBottomDiv() {
            setTimeout(() => {
                const wrapper = this.$refs['messages-container']
                if (wrapper) {
                    wrapper.scrollTop = wrapper.scrollHeight
                }
            }, 1)
        },
        load_previous() {
            this.load_more_via_url(`api/projects/${this.id}/messages?type=client`)
        },
        add_new_message(message) {
            if (!this.items.some(msg => msg.id === message.id)) {
                this.items.unshift(message)
            }
        },
        user_can_message(can) {
            this.can_message = can
            if (can) {
                this.fill_table_via_url(`api/projects/${this.id}/messages?type=client`)
                setTimeout(() => {
                    this.scrollToBottomDiv()
                }, 1)
                console.log('Client chat connected')
                // this.$event.$emit('open_snackbar', 'Client chat connected')
            } else console.log('Client chat unavailable for you.')
        },
        subscribePusher() {
            const client_message_channel = this.$pusher.subscribe(
                `private-project.client-message.${this.id}`
            )
            client_message_channel.bind('ProjectClientMessage', data => {
                if (data.type === 'client') this.add_new_message(data.message)
            })
            client_message_channel.bind('pusher:subscription_succeeded', () =>
                this.user_can_message(true)
            )
            client_message_channel.bind('pusher:subscription_error', status =>
                this.user_can_message(false)
            )
        },
        sendMessage(data) {
            let formData = new FormData()
            formData.append('message', data.message)
            formData.append('type', 'client')
            formData.append('from_id', this.loggedUser.id)

            if (data.files.length > 0) {
                formData.append('file', data.files[0])
            }

            apiTo
                .send_message(this.id, formData)
                .then(({ data }) => {
                    this.add_new_message(data)
                })
                .finally(() => {
                    this.scrollToBottomDiv()
                    this.$event.$emit('btnsending_off', false)
                })
        },
        messages(items) {
            return _cloneDeep(items).reverse()
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.message__body {
    border: 1px solid $borderLightGray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    @include styledScrollFor('.messages'); //style the scroll

    .messages {
        background-color: $white;
        overflow: auto;
        max-height: 462px;
        border-bottom: 1px solid $borderLightGray;
    }

    .write {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        background-color: $white;

        .write__actions {
            .action {
                margin: 5px 7px;
                color: $lightGray-2;
                cursor: pointer;

                &:hover {
                    color: $blue;
                }
            }
        }

        .avatar-wrapper {
            padding: 3px;

            .sender-avatar {
                width: 40px;
            }
        }
    }

    .view__more {
        text-align: center;
        padding: 10px;
        border-top: 1px solid $borderLightGray;
        background-color: $white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        .view__more_btn {
            color: $tableDarkText;
        }
    }

    .no-messages {
        padding: 20px;
        text-align: center;
    }
}
</style>