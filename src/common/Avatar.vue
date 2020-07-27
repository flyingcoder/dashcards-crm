<template>
    <v-menu
            v-if="user"
            v-model="menu"
            :close-on-content-click="false"
            offset-y
            :max-width="350"
    >
        <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip top>
                <template v-slot:activator="{ on: tooltip }">
                    <div v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                        <v-avatar color="grey" :size="size">
                            <v-img :src="user.image_url" class="hover" />
                        </v-avatar>
                        <v-icon
                                x-small
                                :color="is_online ? `success` : `grey`"
                                class="status"
                        >
                            mdi-circle
                        </v-icon>
                        <span class="ml-1" v-if="!iconOnly">{{ displayName | ucwords | truncate(20) }}</span>
                        <slot />
                    </div>
                </template>
                <span>{{ displayName | ucwords }}</span>
            </v-tooltip>
        </template>
        <v-card>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-row>
                            <v-col md="3">
                                <v-img :src="user.image_url" />
                            </v-col>
                            <v-col md="9">
                                <v-list-item-title :title="user.fullname" class="title">
                                    {{
                                    user.fullname | ucwords
                                    }}
                                </v-list-item-title>
                                <v-list-item-subtitle class="caption">
                                    <v-icon small left>email</v-icon>
                                    {{ user.email }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="caption" v-if="user.telephone">
                                    <v-icon small left>phone</v-icon>
                                    {{ user.telephone.formatInternational }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="body-2">
                                    <v-icon small left>person</v-icon>
                                    {{ user.job_title | ucwords }}
                                </v-list-item-subtitle>
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-card-actions>
                <v-btn @click="navigate_to_profile" text small class="caption">
                    <v-icon small left>person</v-icon>
                    {{ !self ? 'View Profile' : 'View Self Profile' }}
                </v-btn>
                <v-btn v-if="!self" @click="open_mailer" text small class="caption">
                    <v-icon small left>email</v-icon>
                    Email
                </v-btn>
                <v-btn v-if="!self" @click="navigate_to_chat" text small class="caption">
                    <v-icon small left>message</v-icon>
                    Chat
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: {
            user: {type: Object},
            size: {type: Number, default: 42},
            iconOnly: {type: Boolean, default: false},
            display: {type: String, default: ''}
        },
        data: () => ({
            menu: false
        }),
        computed: {
            displayName() {
                if (this.display === '') {
                    return this.user.fullname
                }
                return this.display
            },
            onlineUsers() {
                return this.$store.getters['onlineUsers/all_users']
            },
            is_online() {
                const is_online = this.onlineUsers.findIndex(ou => ou.id === this.user.id);
                return !!(~is_online)
            },
            self() {
                return this.$store.getters.user.id === this.user.id
            }
        },

        methods: {
            navigate_to_profile() {
                if (typeof this.user.user_roles === 'undefined') {
                    this.$router.push(`/dashboard/team/profile/${user.id}`)
                }
                let item = Object.values(this.user.user_roles)
                if (item[0].indexOf('client') >= 0 || item[0].indexOf('agent') >= 0) {
                    this.$router.push(`/dashboard/clients/profile/${this.user.id}`)
                } else {
                    this.$router.push(`/dashboard/team/profile/${this.user.id}`)
                }
            },
            navigate_to_chat() {
                this.$router.push(`/dashboard/chat/${this.user.id}`)
            },
            open_mailer() {
                if (this.user)
                    this.$event.$emit('open_emailer', this.user)
            }
        }
    }
</script>
<style scoped>
    >>> .hover {
        cursor: pointer;
    }

    >>> .status {
        position: relative;
        bottom: -15px;
        left: -15px;
        border: 2px solid #fff;
        border-radius: 50%;
        background: #fff;
    }
</style>
