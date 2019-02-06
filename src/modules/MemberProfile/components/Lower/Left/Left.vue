<template>
  <div class="profile-left">
    <v-tabs
      class="tabs"
      centered
      grow
      hide-slider
      height="60px"
      :show-arrows="is_screen_medium_and_down"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        class="tab-item"
        :href="'#tab-' + index"
        :key="index"
      >
        <svg viewBox="0 0 250 250">
          <path class="icon" :d="tab.icon" />
        </svg>
      </v-tab>
      <v-tab-item
        v-for="(text, index) in texts"
        :value="'tab-' + index"
        :key="index"
      >
        <v-card flat>
          <v-card-text>{{ text.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<style lang="scss" scoped src="./Left.scss">
</style>
<script src="./Left.js">
</script>

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
