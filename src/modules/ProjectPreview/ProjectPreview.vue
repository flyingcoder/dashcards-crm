<template>
  <div class="project-preview">
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

<script src="./ProjectPreview.js"></script>
<style lang="scss" scoped src="./ProjectPreview.scss"></style>

<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background: #3b589e;
  color: white;
}
</style>
