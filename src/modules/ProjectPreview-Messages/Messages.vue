<template>
  <div class="message__tab">
    <v-layout row wrap class="message__content">
      <UsersList :id="id" />

      <v-flex sm9 xs12 class="message-group">
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
</template>

<script src="./Messages.js"></script>
<style lang="scss" scoped src="./Messages.scss"></style>
