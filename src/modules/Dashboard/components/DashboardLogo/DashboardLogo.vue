<template>
  <div class="s__title">
    <div class="s__logo">
      <img
        v-if="iconClass"
        class="mini__logo"
        src="@/assets/logo/mini-white.png"
        alt="logo"
      />
      <img
        v-else
        class="logo"
        src="@/assets/logo/buzzooka-white.png"
      />
      <!--<img-->
      <!--class="logo__img b__icon"-->
      <!--src="@/assets/logo/buzzooka-blue.png"-->
      <!--width="20px"-->
      <!--height="20px"-->
      <!--/>-->
    </div>
    <span :class="['icon', iconClass]" @click="rotateIcon(iconClass)">
      <img
        src="@/assets/icons/header/chevron.png"
        class="chevron"
        alt="chevron"
      />
    </span>
  </div>
</template>
<style lang="scss" src="./DashboardLogo.scss"></style>
<script src="./DashboardLogo.js"></script>
