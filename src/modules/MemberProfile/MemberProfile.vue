<template>
  <div class="member-profile">
    <table-header :paths="paths" :no-button="true" />

    <div class="profile">
      <div class="profile-content">
        <Upper />
        <Lower />
      </div>
    </div>
  </div>
</template>

<script src="./MemberProfile.js"></script>
<style lang="scss" scoped src="./MemberProfile.scss"></style>
