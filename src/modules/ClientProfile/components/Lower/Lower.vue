<template>
    <div class="profile-lower">
        <v-tabs
                class="tabs"
                centered
                grow
                :hide-slider="false"
                height="60px"
                :show-arrows="is_screen_medium_and_down"
                v-model="active_tab"
        >
            <v-tab
                    v-for="tab of tabs"
                    :key="tab.route"
                    :to="tab.route"
                    class="tab-item"
                    exact
            >
                <div>
                    <v-icon small left>{{tab.icon}}</v-icon>
                    {{ tab.name }}
                </div>
            </v-tab>
        </v-tabs>
        <keep-alive>
            <router-view />
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
