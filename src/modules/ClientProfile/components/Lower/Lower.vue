<template>
    <div class="profile-lower">
        <v-tabs :hide-slider="false" :show-arrows="is_screen_medium_and_down" centered class="tabs" grow height="60px"
                v-model="active_tab"
        >
            <v-tab :key="tab.route" :to="tab.route" class="tab-item" exact v-for="tab of tabs">
                <div>
                    <v-icon left small>{{ tab.icon }}</v-icon>
                    {{ tab.name }}
                </div>
            </v-tab>
        </v-tabs>
        <keep-alive :key="user_id">
            <router-view :key="$route.fullPath" />
        </keep-alive>
    </div>
</template>

<style lang="scss" scoped src="./Lower.scss"></style>
<script src="./Lower.js"></script>

<style scoped>
    >>> .tabs a.v-tabs__item.v-tabs__item--active {
        background-color: #3b589e;
        color: #fff;
    }

    >>> .tabs a.v-tabs__item.v-tabs__item--active .v-icon {
        color: #fff;
    }

    >>> .tabs a.v-tabs__item.v-tabs__item--active svg {
        fill: #fff;
    }
</style>
