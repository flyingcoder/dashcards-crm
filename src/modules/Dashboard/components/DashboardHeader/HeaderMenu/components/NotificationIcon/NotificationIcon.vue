<template>
    <v-menu
            class="chatlist__dropdown"
            transition="slide-y-transition"
            :nudge-left="115"
            :nudge-bottom="5"
            offset-y
            :close-on-content-click="false"
            v-model="dropdownVisible"
    >
        <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <div class="chat__button" v-bind="attrs" :data-notify="unread_notification_counts"
                         v-on="{ ...tooltip, ...menu }"
                    >
                        <HeaderIcon :image-src="notificationIcon"
                                    :hovered-image-src="hoveredNotificationIcon"
                        />
                    </div>
                </template>
                <span>Notifications</span>
            </v-tooltip>
        </template>
        <NotificationDropdown :visible="init" @close="dropdownVisible = false"
                              @notification-clicked="dropdownVisible = false"/>
    </v-menu>
</template>

<script>
    import HeaderIcon from '@/common/HeaderIcon.vue'
    import NotificationDropdown from './NotificationDropdown/NotificationDropdown.vue'
    import {mapActions} from "vuex";

    export default {
        components: {HeaderIcon, NotificationDropdown},

        data: () => ({
            dropdownVisible: false,
            init: 1
        }),
        created() {
            this.fetch_notification()
        },
        computed: {
            notificationIcon() {
                return require('@/assets/icons/header/not_def.png')
            },
            hoveredNotificationIcon() {
                return require('@/assets/icons/header/not.png')
            },
            unread_notification_counts() {
                return this.$store.getters['chatNotifications/notification_counts']
            }
        },
        methods: {
            ...mapActions('chatNotifications', ['fetch_notification'])
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/variables';

    @include headerIcons;
</style>
