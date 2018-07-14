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
                v-for="item in items"
                :key="item.title"
            >
                <v-list-tile-action>
                    <img :src="item.icon" />
                </v-list-tile-action>

                <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>