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
                <v-list-item v-for="group in group_list" :key="group.id" @click="open_conversation(group)">
                    <v-list-item-content>
                        <v-row no-gutters>
                            <Avatars style="display: block" :items="group.users" :count="1" />
                            <v-col>
                                <v-list-item-title class="ml-2 mt-4" v-text="group.data.group_name" />
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon color="success" class="has_message" title="New message" v-show="group.message_count > 0" >
                            mdi-email-alert-outline
                        </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-list dense>
                <v-list-item v-for="user in user_list" :key="user.conversation.id"
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
                        <v-icon color="success" class="has_message" title="New message" v-show="user.message_count > 0" >
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

    export default {
        name: "ChatList",
        components: {Avatars},
        props: {
            user_list: Array,
            group_list: Array,
            active: Object,
            loading: {type: Boolean, default: false}
        },
        computed: {
            ...mapGetters(['user'])
        },
        data: () => ({
            //
        }),
        methods: {
            open_conversation(conversation) {
                this.$emit('open-chat', conversation)
            }
        }
    }
</script>

<style scoped>

</style>