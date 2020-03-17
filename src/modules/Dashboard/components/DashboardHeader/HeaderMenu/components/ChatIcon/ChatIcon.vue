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
    <template v-slot:activator="{ on }">
      <div class="chat__button" :data-notify="chat" slot="activator">
        <HeaderIcon :image-src="chatIcon" :hovered-image-src="hoveredChatIcon" />
      </div>
    </template>

    <ChatDropdown />
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
// Components
import HeaderIcon from '@/common/HeaderIcon.vue'
import ChatDropdown from './ChatDropdown.vue'

export default {
  components: { HeaderIcon, ChatDropdown },

  data: () => ({
    dropdownVisible: false
  }),

  computed: {
    ...mapGetters('headerIcons', ['chat']),
    chatIcon() {
      return require('@/assets/icons/header/chat__default.png')
    },
    hoveredChatIcon() {
      return require('@/assets/icons/header/chat.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';
@include headerIcons;
</style>
