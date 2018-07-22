<template>
    <div class="sidebar">
        <v-list class="s__items">
            <v-list-tile
                class="s__list"
                v-for="item in items"
                :key="item.title"
                @click="sidebar_item_clicked(item.action)"
            >
                <v-list-tile-action class="s__icons">
                    <!-- <img class="responsive-img" :src="item.icon" /> -->
                    <svg viewBox="0 0 250 250">
                        <path class="icon" :d="item.icon"/>
                    </svg>
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