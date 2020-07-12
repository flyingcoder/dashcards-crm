<template>
    <v-navigation-drawer v-model="drawer" expand-on-hover :mini-variant.sync="mini" permanent width="200" mini-variant-width="80" class="sidebar-drawer">
        <v-list-item class="px-2 hamburger">
            <v-list-item-avatar v-if="!mini">
                <v-img v-if="user.company.company_logo" :src="user.company.company_logo"></v-img>
                <v-icon large v-else>mdi-copyright</v-icon>
            </v-list-item-avatar>
            <v-list-item-content v-if="!mini">
                <v-list-item-title>{{user.company.name | ucwords | truncate }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
            <v-btn icon @click.stop="mini = !mini">
                <v-icon> {{mini ? 'menu' : 'chevron_left'}} </v-icon>
            </v-btn>
            </v-list-item-action>
        </v-list-item>
        <!-- <v-divider></v-divider> -->
        <v-list class="sidebar">
            <div class="sidebar-inner" v-for="(item, index) in items" :data-nav="item.title" :key="item.index" @click="sidebar_item_clicked(item.action)" tile :class="{ active: item.action === selected_route_name }">
                <v-list class="s__list" :key="index" :class="{ active: item.action === selected_route_name }" v-if="item.can_view() && item.title != 'Timers' && item.title != 'Templates'">
                    <v-list-item-action class="s__icons">
                        <svg viewBox="0 0 250 250">
                            <path class="icon" :d="item.icon" />
                        </svg>
                        <div class="mini-title">
                            {{ item.title }}
                        </div>
                    </v-list-item-action>
                    <v-list-item-content class="s__content">
                        {{ item.title }}
                    </v-list-item-content>
                </v-list>
                <v-list-group class="s_submenu" v-if="item.can_view() && item.title === 'Timers'">
                    <template v-slot:activator>
                        <v-list-item class="s__list-group" :key="index" :class="{ active: item.action === selected_route_name }">
                            <v-list-item-action class="s__icons">
                                <svg viewBox="0 0 250 250">
                                    <path class="icon" :d="item.icon" />
                                </svg>
                                <div class="mini-title">
                                    {{ item.title }}
                                </div>
                            </v-list-item-action>
                            <v-list-item-content class="s__content">
                                {{ item.title }}
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item :class="{ active: selected_route_name === 'globalTimer' }" sub-group class="submenu-item" @click.stop="sidebar_item_clicked('globalTimer')">
                        <v-list-item-action class="s__icons">
                            <v-icon>mdi-account-clock</v-icon>
                            <div class="mini-title">
                                Global Timers
                            </div>
                        </v-list-item-action>
                        <v-list-item-title>Global Timers</v-list-item-title>
                    </v-list-item>
                    <v-list-item :class="{ active: selected_route_name === 'taskTimer' }" sub-group class="submenu-item" @click.stop="sidebar_item_clicked('taskTimer')">
                        <v-list-item-action class="s__icons">
                            <v-icon>mdi-folder-clock-outline</v-icon>
                            <div class="mini-title">
                                Task Timers
                            </div>
                        </v-list-item-action>
                        <v-list-item-title>Task Timers</v-list-item-title>
                    </v-list-item>
                    <v-list-item :class="{ active: selected_route_name === 'alarm' }" sub-group class="submenu-item" @click.stop="sidebar_item_clicked('alarm')">
                        <v-list-item-action class="s__icons">
                            <v-icon>mdi-clock-digital</v-icon>
                            <div class="mini-title">
                                Alarms
                            </div>
                        </v-list-item-action>
                        <v-list-item-title>Alarms</v-list-item-title>
                    </v-list-item>
                </v-list-group>
                <v-list-group class="s_submenu" v-if="item.can_view() && item.title === 'Templates'">
                    <template v-slot:activator>
                        <v-list-item class="s__list-group" :key="index" :class="{ active: item.action === selected_route_name }">
                            <v-list-item-action class="s__icons">
                                <svg viewBox="0 0 250 250">
                                    <path class="icon" :d="item.icon" />
                                </svg>
                                <div class="mini-title">
                                    {{ item.title }}
                                </div>
                            </v-list-item-action>
                            <v-list-item-content class="s__content">
                                {{ item.title }}
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item :class="{ active: selected_route_name === 'templates' }" sub-group class="submenu-item" @click.stop="sidebar_item_clicked('templates')">
                        <v-list-item-action class="s__icons">
                            <v-icon>mdi-clipboard-file-outline</v-icon>
                            <div class="mini-title">
                                Milestone
                            </div>
                        </v-list-item-action>
                        <v-list-item-title>Milestone</v-list-item-title>
                    </v-list-item>
                    <v-list-item :class="{ active: selected_route_name === 'templates/invoice' }" sub-group class="submenu-item" @click.stop="sidebar_item_clicked('templates/invoice')">
                        <v-list-item-action class="s__icons">
                            <v-icon>mdi-cash-register</v-icon>
                            <div class="mini-title">
                                Invoices
                            </div>
                        </v-list-item-action>
                        <v-list-item-title>Invoices</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>
<script src="./DashboardSidebar.js"></script>
<style lang="scss" src="./DashboardSidebar.scss"></style>
<!-- <style scoped src="./DashboardSidebar.css"></style> -->