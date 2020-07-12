<template>
    <v-card outlined class="mx-auto users-list" :width="240">
        <v-toolbar flat color="#3b589e" height="45" dark>
            <v-icon large left>mdi-wechat</v-icon>
            <v-toolbar-title class="subtitle">Team</v-toolbar-title>
            <v-spacer/>
        </v-toolbar>
        <v-card-text class="pa-0">
            <!-- <v-divider></v-divider> -->
            <v-list subheader dense>
                <v-list-item v-for="user of users" :key="user.id">
                    <v-list-item-content>
                        <Avatar :user="user"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn text disabled>Load More</v-btn>
            <v-spacer/>
        </v-card-actions>
    </v-card>
</template>
<script>
    import {getMembers} from '../api'

    export default {
        props: {
            id: [Number, String]
        },

        data: () => ({
            users: []
        }),

        computed: {
            loggedUser() {
                return this.$store.getters.user
            }
        },

        created() {
            getMembers(this.id)
                .then(({data}) => (this.users = data.data))
        }
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