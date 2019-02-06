<template>
  <div class="project-preview">
    <v-tabs
      class="tabs"
      centered
      grow
      hide-slider
      height="60px"
      v-model="active_tab"
      :show-arrows="is_screen_medium_and_down"
    >
      <v-tab v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="active_tab">
      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
        <component
          :id="project_id"
          :is="active_tab"
          v-if="active_tab === tab.name"
        ></component>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script src="./ProjectPreview.js">
</script>
<style lang="scss" scoped src="./ProjectPreview.scss">
</style>

<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background: #3b589e;
  color: white;
}
</style>
