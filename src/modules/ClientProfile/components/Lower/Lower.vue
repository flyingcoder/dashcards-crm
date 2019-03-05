<template>
  <div class="profile-lower">
    <v-tabs
      class="tabs"
      centered
      grow
      hide-slider
      height="60px"
      :show-arrows="is_screen_medium_and_down"
      v-model="active_tab"
    >
      <v-tab
        v-for="tab of tabs"
        :key="tab.route"
        :to="tab.route"
        class="tab-item"
      >
        <svg viewBox="0 0 250 250">
          <path class="icon" :d="tab.icon" />
        </svg>
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.route" :value="tab.route">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<style lang="scss" scoped src="./Lower.scss"></style>
<script src="./Lower.js"></script>

<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background-color: #3b589e;
  color: #fff;
}
>>> .tabs a.v-tabs__item.v-tabs__item--active .v-icon {
  color: #fff;
}
>>> .tabs a.v-tabs__item.v-tabs__item--active svg {
  fill: #fff;
}
</style>
