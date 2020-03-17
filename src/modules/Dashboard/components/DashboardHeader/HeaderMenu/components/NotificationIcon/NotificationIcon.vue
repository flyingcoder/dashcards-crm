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
      <div class="chat__button">
        <HeaderIcon
          :image-src="notificationIcon"
          :hovered-image-src="hoveredNotificationIcon"
        />
      </div>
    </template>

    <NotificationDropdown
      :visible="dropdownVisible"
      @notification-clicked="dropdownVisible = false"
    />
  </v-menu>
</template>

<script>
import HeaderIcon from '@/common/HeaderIcon.vue'
import NotificationDropdown from './NotificationDropdown/NotificationDropdown.vue'

export default {
  components: { HeaderIcon, NotificationDropdown },

  data: () => ({
    dropdownVisible: false
  }),

  computed: {
    notificationIcon() {
      return require('@/assets/icons/header/notification__default.png')
    },
    hoveredNotificationIcon() {
      return require('@/assets/icons/header/notification.png')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/variables';
@include headerIcons;
</style>
