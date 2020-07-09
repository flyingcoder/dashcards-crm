<template>
    <div class="dashboard__container">
        <div class="d__header">
            <!-- <div class="d__logo">
                <dashboard-logo :mini-sidebar.sync="mini_sidebar"></dashboard-logo>
            </div> -->
            <dashboard-header></dashboard-header>
        </div>
        <div :class="['d__sidebar', { collapse: mini_sidebar }]">
            <dashboard-sidebar></dashboard-sidebar>
        </div>
        <div class="d__content">
            <v-sheet elevation="1" v-if="is_admin_routes">
                <v-tabs background-color="#f5f7fa" next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline" show-arrows @change="navigate" v-model="tab">
                    <v-tabs-slider color="#3b589e"></v-tabs-slider>
                    <v-tab v-for="tab in admintabs" :key="tab.text">
                        <span> {{ tab.text | ucwords }}</span>
                    </v-tab>
                </v-tabs>
            </v-sheet>
            <router-view :key="$route.fullPath"></router-view>
            <floating-chat-button></floating-chat-button>
        </div>
    </div>
</template>
<style lang="scss" src="./Dashboard.scss"></style>
<script src="./Dashboard.js"></script>