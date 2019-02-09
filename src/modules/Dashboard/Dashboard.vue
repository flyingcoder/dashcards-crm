<template>
  <div class="dashboard__container">
    <div class="d__header"><dashboard-header></dashboard-header></div>
    <div class="d__sidebar">
      <div class="d__logo"><dashboard-logo></dashboard-logo></div>
      <dashboard-sidebar></dashboard-sidebar>
    </div>

    <div class="d__content">
      <router-view></router-view>
      <floating-chat-button></floating-chat-button>
    </div>
  </div>
</template>
<style lang="scss" src="./Dashboard.scss"></style>
<script src="./Dashboard.js"></script>
