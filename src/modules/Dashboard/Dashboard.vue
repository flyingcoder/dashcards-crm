<template>
  <div class="dashboard__container">
    <div class="d__header"><dashboard-header></dashboard-header></div>
    <div :class="['d__sidebar', { collapse: mini_sidebar }]">
      <div class="d__logo">
        <dashboard-logo :mini-sidebar.sync="mini_sidebar"></dashboard-logo>
      </div>
      <dashboard-sidebar></dashboard-sidebar>
    </div>

    <div class="d__content">
      <router-view :key="$route.fullPath"></router-view>
      <floating-chat-button></floating-chat-button>
    </div>
  </div>
</template>
<style lang="scss" src="./Dashboard.scss"></style>
<script src="./Dashboard.js"></script>
