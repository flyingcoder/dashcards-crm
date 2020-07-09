<template>
    <div class="b-header">
        
        <img class="logo" src="@/assets/logo/buzzooka-blue.png" />
        <div class="h__pagetitle">
            <v-breadcrumbs class="b-breadcrumbs" :items="paths"></v-breadcrumbs>
        </div>
        <div class="h__search">
            <header-search></header-search>
        </div>
        <div class="h__menu">
            <header-menu></header-menu>
        </div>
    </div>
</template>
<script src="./DashboardHeader.js"></script>
<style lang="scss" src="./DashboardHeader.scss"></style>