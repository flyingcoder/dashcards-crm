<template>
  <div class="header-menu">

    <connect-app/>

    <logon-label />

    <add-cards v-if="$route.name === 'default-content'" />

    <!-- <MailIcon /> --><!-- hide temporary -->

    <NotificationIcon />

    <ChatIcon />

    <dropdown />

    <div class="try__premium">
      <div class="premium__btn" @click="go_to_pricing_page">
        Try Premium Free for 1 Month
      </div>
    </div>
  </div>
</template>
<script src="./HeaderMenu.js"></script>
<style lang="scss" scoped src="./HeaderMenu.scss"></style>
