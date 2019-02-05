<template>
  <transition name="fade">
    <div class="custom-loader" v-show="should_show">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="72"
      ></v-progress-circular>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    should_show() {
      return this.$store.getters.custom_loader
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-loader {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(224, 224, 189, 0.57);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 1;
}
</style>
