<template>
    <div class="header">
        <div class="h__pagetitle">
            <v-breadcrumbs :items="paths"></v-breadcrumbs>
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
<style lang="scss" scoped src="./DashboardHeader.scss"></style>
<style lang="scss">
.v-breadcrumbs {
    .v-breadcrumbs__item {
        text-transform: capitalize;
    }
}
</style>