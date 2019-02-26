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
        v-for="tab in tabs"
        :key="tab.name"
        :href="`#${tab.name}`"
        class="tab-item"
      >
        <svg viewBox="0 0 250 250">
          <path class="icon" :d="tab.icon" />
        </svg>
      </v-tab>
      <v-tabs-items v-model="active_tab">
        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
          <component
            :id="user_id"
            :is="active_tab"
            v-if="active_tab === tab.name"
          ></component>
        </v-tab-item>
      </v-tabs-items>
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
