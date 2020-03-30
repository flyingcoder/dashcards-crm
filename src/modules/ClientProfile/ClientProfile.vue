<template>
  <div class="client-profile">
    <table-header :paths="paths" :no-button="true" />

    <div class="profile">
      <div class="profile-content">
        <Upper @client-updated="client_updated" />
        <Lower :user_id="user_id" />
      </div>
    </div>
  </div>
</template>

<script src="./ClientProfile.js"></script>
<style lang="scss" scoped src="./ClientProfile.scss"></style>
