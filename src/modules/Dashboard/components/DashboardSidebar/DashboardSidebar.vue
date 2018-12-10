<template>
    <v-list class="sidebar">
        <v-list-tile
            class="s__list"
            v-for="item in items"
            :key="item.title"
            :class="{active: item.action === selected_route_name}"
            @click="sidebar_item_clicked(item.action)"
        >
            <v-list-tile-action class="s__icons">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="item.icon"/>
                </svg>
            </v-list-tile-action>

            <v-list-tile-content class="s__content">
                {{ item.title }}
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script src="./DashboardSidebar.js">
</script>
<style lang="scss" scoped src="./DashboardSidebar.scss">
</style>
