<template>
    <v-menu offset-y class="user-dropdown" transition="slide-y-transition" :nudge-width="10" :nudge-bottom="10" :nudge-left="70" bottom>
        <template v-slot:activator="{ on }">
            <div class="dropdown" v-on="on">
            <v-badge
                avatar
                bordered
                overlap
                bottom
                class="b-badge"
                icon="expand_more"
            >
                <v-avatar v-if="user.image_url" class="user-icon responsive-img" :size="avatarSize">
                    <img :src="user.image_url" alt="user" />
                </v-avatar>
                <v-avatar v-else color="red" :size="avatarSize" class="user-icon responsive-img">
                    <span class="white--text">
                        {{ user.first_name.charAt(0) + user.last_name.charAt(0) }}
                    </span>
                </v-avatar>
            </v-badge>
            </div>
        </template>
        <v-list dense class="dropdown-content">
            <v-list-item class="dropdown-img">
                <v-row no-gutters>
                    <v-col cols="12" class="text-center">
                        <img class="user-img" :src="user.image_url" />
                    </v-col>
                    <v-col cols="12">
                        <div class="hero-name">
                            <h3>{{ user.fullname }}</h3>
                            <h6 class="overline">{{ user.job_title }}</h6>
                            <small>{{ user.company.name }}</small>
                        </div>
                    </v-col>
                </v-row>
            </v-list-item>
            <v-list-item class="h__list" v-for="(item, index) in items" :key="index" @click="handle_action(item.action)">
                <v-list-item-icon class="h__icons">
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'Dropdown',
    data: () => ({
        avatarSize: '40px',
        items: [{
                id: 1,
                title: 'Profile',
                icon: 'mdi-account-cog-outline', //require('@/assets/icons/header/user/profile.svg'),
                action: 'navigate_to_profile'
            },
            {
                id: 2,
                title: 'Settings',
                icon: 'mdi-cogs', //require('@/assets/icons/header/user/settings.svg'),
                action: 'navigate_to_settings'
            },
            {
                id: 3,
                title: 'Help',
                icon: 'mdi-help-circle-outline' //require('@/assets/icons/header/user/help.svg')
            },
            {
                id: 4,
                title: 'Logout',
                icon: 'mdi-power', //require('@/assets/icons/header/user/logout.svg'),
                action: 'logout'
            }
        ]
    }),

    computed: {
        user() {
            return this.$store.getters.user
        },
        can_settings() {
            return this.user.is_admin || this.user.is_manager
        }
    },
    mounted() {
        if (!this.can_settings) {
            this.items = this.items.filter(i => { return i.id !== 2 })
        }
    },
    methods: {
        ...mapMutations('memberProfile', ['set_user_id']),
        ...mapActions('memberProfile', ['get_single_member']),
        handle_action(action) {
            this[action]() //i.e the action is logout will call this.logout()
        },

        logout() {
            this.$auth.logout(
                response => {
                    window.location.reload()
                },
                error => {
                    console.log('error', error)
                }
            )
        },

        navigate_to_settings() {
            this.$router.push({ name: 'settings' })
        },

        navigate_to_profile() {
            if (this.user.role === 'client') {
                this.$router.push(`/dashboard/clients/profile/${this.user.id}`)
            } else {
                this.$router.push(`/dashboard/team/profile/${this.user.id}`)
                this.set_user_id(this.user.id)
                this.get_single_member(this.user.id)
            }
            //location.reload();
        }
    }
}
</script>
<style lang="scss">
@import "~@/sass/_variables";
.dropdown {
    width: 55px;
    cursor: pointer;
    
    .b-badge .v-badge__badge{
        background-color: $blue !important;
    }
}
.h__list.v-list-item {
    display: flex;
    align-items: center;
    min-height: auto;
    padding: 0.5em 1em;
}
.dropdown-content.v-list{
    width: 180px;
    .v-list-item__title{
        color: $textDark !important;
    }
}
.v-list-item__icon.h__icons{
    margin-top: 0;
    margin-bottom: 0;
    img {
        width: 25px;
        height: 25px;
    }
}
.dropdown-img {
    
    img.user-img {
        width: 50px;
    }

    .hero-name {
        text-align: center;
        padding-bottom: 10px;
        font-size: 16px;
        color: $textDark;
    }
}

@media only screen and (max-width: 480px) {
}
</style>