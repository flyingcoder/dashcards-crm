<template>
   <div class="user">
        <v-menu class="user-dropdown"
            transition="slide-y-transition"
            :nudge-width="100"
            :nudge-bottom="20"
            bottom
            offset-y
            >
            <div class="activator"
                slot="activator"
                >
                <v-avatar
                    class="user-icon responsive-img"
                    :size="avatarSize"
                    >
                    <img  class="responsive-img" src="@/assets/temp/atomic.png" alt="user">
                </v-avatar>
                <div class="user-chevron">
                    <img src="@/assets/icons/header/chevron-down.svg" class="chevron responsive-img" alt="chevron">
                </div>
            </div>

            <v-list>
                <v-list-tile
                    class="h__list"
                    v-for="(item, index) in items"
                    :key="index"
                    @click="handle_action(item.action)"
                    >
                    <v-list-tile-action class="h__icons">
                        <img class="responsive-img icon" :src="item.icon" />
                    </v-list-tile-action>

                    <v-list-tile-title class="h__title">{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
   </div>
</template>
<script src="./HeaderUser.js"></script>
<style lang="scss" scoped src="./HeaderUser.scss"></style>