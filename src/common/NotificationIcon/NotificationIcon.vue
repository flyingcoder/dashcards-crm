<template>
  <v-menu
    class="chatlist__dropdown"
    transition="slide-y-transition"
    :nudge-left="115"
    :nudge-bottom="5"
    offset-y
    :close-on-content-click="false"
    v-model="dropdown_visible"
  >
    <div class="chat__button" :data-notify="count" slot="activator">
      <header-icon :image-src="imageSrc" :hovered-image-src="hoveredImageSrc" />
    </div>

    <template v-if="type === 'chat'">
      <ChatDropdown
        :notifications="notifications"
        @close="dropdown_visible = false"
      />
    </template>
  </v-menu>
</template>

<script src="./NotificationIcon.js">
</script>
<style lang="scss" scoped src="./NotificationIcon.scss">
</style>
