<template>
    <div class="b-header">        
        <img class="logo" :src="company_logo" />
        <div class="h__pagetitle" v-if="$route.name !== 'pricing'">
            <v-breadcrumbs class="b-breadcrumbs" :items="paths" />
        </div>
        <div class="h__search" v-if="user">
            <header-search />
        </div>
        <div class="h__menu">
            <header-menu />
        </div>
    </div>
</template>
<script src="./DashboardHeader.js"></script>
<style lang="scss" src="./DashboardHeader.scss"></style>