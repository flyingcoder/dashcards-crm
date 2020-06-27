<template>
    <div class="s__title">
        <div class="s__logo">
            <img v-show="miniSidebar" class="mini__logo" :src="square_logo" alt="logo" />
            <img v-show="!miniSidebar" class="logo" :src="long_logo" />
        </div>
        <span :class="['icon', { close: miniSidebar }]" @click="rotateIcon">
            <img src="@/assets/icons/header/chevron.png" class="chevron" alt="chevron" />
        </span>
    </div>
</template>
<style lang="scss" src="./DashboardLogo.scss"></style>
<script src="./DashboardLogo.js"></script>