<template>
    <div class="sidebar">
        <div class="s__title">
            <div class="t__logo">
                <img class="responsive-img" src="@/assets/logo/buzzooka-white.png" alt="">
            </div>
            <div class="t__hamburger">Hamburger Here</div>
        </div>

        <v-divider></v-divider>

        <v-list class="s__items">
            <v-list-tile
                class="s__list"
                v-for="item in items"
                :key="item.title"
            >
                <!-- <div class="s__icons" fill-height> -->
                <v-list-tile-action class="s__icons">
                    <img class="responsive-img" :src="item.icon" />
                </v-list-tile-action>

                <v-list-tile-content class="s__content">
                    <span class="s__title">{{ item.title }}</span>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>