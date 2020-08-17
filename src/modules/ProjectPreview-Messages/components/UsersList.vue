<template>
    <v-card outlined class="mx-auto users-list" flat>
        <v-toolbar flat color="#3b589e" height="45" dark>
            <v-icon large left>mdi-wechat</v-icon>
            <v-toolbar-title class="subtitle-2">{{ title }}</v-toolbar-title>
            <v-spacer/>
            <v-icon v-if="hasManageMembers" @click="$emit('open-manage-members')">mdi-account-switch</v-icon>
        </v-toolbar>
        <v-card-text class="pa-0">
            <template v-if="participants.length > 0">
                <v-list subheader dense>
                    <v-subheader>Members</v-subheader>
                    <v-list-item v-for="user of participants" :key="user.id">
                        <v-list-item-content>
                            <Avatar :user="user"/>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
            <empty v-else headline="No active conversation" icon="mdi-wechat"/>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn text disabled>Load More</v-btn>
            <v-spacer/>
        </v-card-actions>
    </v-card>
</template>
<script>

    export default {
        props: {
            participants: Array,
            hasManageMembers: {type: Boolean, default: false},
            title: {type: String, default: 'Team Chat'}
        },

    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .online {
        background-color: $green;
    }

    .offline {
        background-color: $gray;
    }

    .users-list {
        .sidebar__chatlist {
            margin: 10px;
            background-color: $white;
            border: 1px solid $tableBorderBlue;
            border-radius: 10px;
        }

        .user {
            padding: 10px;
            text-align: center;
            display: flex;
        }

        .user__img {
            height: 50px;
            width: 50px;
            max-width: 50px;
            border-radius: 50%;
            border: 1px solid $borderLightGray;
            position: relative;

            .status {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 15px;
                height: 15px;
                border: 2px solid $lightViolete;
                border-radius: 50%;
            }

            .dnd {
                background-color: $red;
            }
        }

        .chatlist-header {
            font-size: 20px;
            text-align: left;
            font-weight: 500;
            color: $textDark;
            text-transform: capitalize;
        }

        .user__name {
            margin-left: 10px;
            font-size: 12px;
            margin: auto 10px;
            text-align: left;
            font-weight: 500;
            color: $textDark;
            text-transform: capitalize;
        }

        @include styledScrollFor('.friend__list');

        .friend__list {
            overflow: auto;
            max-height: 500px;

            .friend {
                border-top: 1px solid $borderLightGray;
            }
        }

        .view__more {
            text-align: center;
            padding: 10px;
            border-top: 1px solid $borderLightGray;

            .view__more_btn {
                color: $tableDarkText;
            }
        }
    }
</style>