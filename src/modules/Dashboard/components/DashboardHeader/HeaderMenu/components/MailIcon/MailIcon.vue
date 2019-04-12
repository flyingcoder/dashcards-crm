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
    <div class="chat__button" slot="activator">
      <HeaderIcon :image-src="mailIcon" :hovered-image-src="hoveredMailIcon" />
    </div>

    <MailDropdown />
  </v-menu>
</template>

<script>
import HeaderIcon from '@/common/HeaderIcon.vue'
import MailDropdown from './MailDropdown.vue'

export default {
  components: { HeaderIcon, MailDropdown },

  data: () => ({
    dropdownVisible: false
  }),

  computed: {
    mailIcon() {
      return require('@/assets/icons/header/email__default.png')
    },
    hoveredMailIcon() {
      return require('@/assets/icons/header/email.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';
@include headerIcons;
</style>
