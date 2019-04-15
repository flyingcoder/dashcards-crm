<template>
  <div class="settings">
    <v-tabs
      class="tabs"
      centered
      grow
      height="60px"
      v-model="active_tab"
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
.settings {
  .tabs {
    box-shadow: 0px -2px 1px #e4d0d0;
    .v-tabs__item--active {
      background: #3b589e;
      color: white;
    }
  }
}
</style>

<style scoped>
>>> .tabs .v-tabs__item--active {
  background: #3b589e;
  color: white;
}
</style>
