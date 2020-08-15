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
        <template v-slot:activator="{ on }"/>
        <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <div class="chat__button" :data-notify="chat_counts"
                         v-bind="attrs"
                         v-on="{ ...tooltip, ...menu }"
                    >
                        <HeaderIcon :image-src="chatIcon" :hovered-image-src="hoveredChatIcon"/>
                    </div>
                </template>
                <span>Messages</span>
            </v-tooltip>
        </template>
        <ChatDropdown @close="dropdownVisible = false"/>
    </v-menu>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    // Components
    import HeaderIcon from '@/common/HeaderIcon.vue'
    import ChatDropdown from './ChatDropdown.vue'

    export default {
        components: {HeaderIcon, ChatDropdown},

        data: () => ({
            dropdownVisible: false
        }),
        created() {
            this.fetch_chat()
        },
        computed: {
            ...mapGetters('headerIcons', ['chat']),
            ...mapGetters('chatNotifications', ['chat_counts']),
            chatIcon() {
                return require('@/assets/icons/header/chat__default.png')
            },
            hoveredChatIcon() {
                return require('@/assets/icons/header/chat.png')
            }
        },
        methods: {
            ...mapActions('chatNotifications', ['fetch_chat'])
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/variables';

    @include headerIcons;
</style>
