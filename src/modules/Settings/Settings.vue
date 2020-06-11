<template>
  <div class="settings">
    <v-tabs
      class="tabs"
      centered
      grow
      height="60px"
      v-model="active_tab"
      hide-slider
      :show-arrows="is_screen_medium_and_down"
    >
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script src="./Settings.js"></script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
@include styledMenuTabs('.settings');

.settings {
  .v-tabs{
    box-shadow: 0px 2px 1px rgba(0, 0, 0, .2);
  }
}
</style>
