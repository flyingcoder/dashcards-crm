<template>
  <div>
    <div class="table-header">
      <breadcrumb :paths="paths" />
    </div>
    <div class="timer timer__tab">
      <v-layout wrap class="timer__content">
        <v-flex sm12 xs12 class="timer-group">
          <v-tabs
            class="tabs"
            centered
            grow
            hide-slider
            height="60px"
            :show-arrows="is_screen_medium_and_down"
            v-model="active_tab"
          >
            <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
              {{ tab.name }}
            </v-tab>
          </v-tabs>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script src="./Timer.js"></script>
<style lang="scss" scoped src="./Timer.scss"></style>
