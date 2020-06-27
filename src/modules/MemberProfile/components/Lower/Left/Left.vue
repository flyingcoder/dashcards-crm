<template>
    <div class="profile-left">
        <v-tabs class="tabs" centered grow hide-slider v-model="active_tab" height="60px">
            <v-tab class="tab-item" v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="tab.icon" />
                </svg>
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="active_tab">
            <v-tab-item key="1" value="Tasks">
                <v-card flat>
                    <tasks-tab />
                </v-card>
            </v-tab-item>
            <v-tab-item key="2" value="Timer">
                <v-card flat>
                    <v-card-text>
                        <Empty icon="mdi-hammer-wrench" headline="Under construction"></Empty>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
import TasksTab from './Tasks.vue'

export default {
    name: 'TasksContent',
    components: {
        TasksTab
    },

    data: () => ({
        active_tab: 'Tasks',
        tabs: [{
                id: 1,
                name: 'Tasks',
                icon: 'M23 40l177 0c6,0 12,3 16,7l0 0c4,4 7,10 7,16l0 6c0,0 0,0 0,0l0 36c0,3 -2,5 -6,5 -3,0 -5,-2 -5,-5l0 -1 0 0 0 -41c0,-3 -1,-6 -4,-8l0 0c-2,-3 -5,-4 -8,-4l-177 0c-3,0 -6,1 -8,4 -3,2 -4,5 -4,8l0 93c0,4 1,7 4,9 2,2 5,3 8,3l117 0 0 0 5 0c3,0 6,3 6,6 0,3 -3,5 -6,5l-35 0c0,0 0,0 -1,0l-86 0c-6,0 -12,-2 -16,-6l0 -1c-4,-4 -7,-9 -7,-16l0 -93c0,-6 3,-12 7,-16l0 0c4,-4 10,-7 16,-7zm180 77c13,0 25,5 33,13 9,9 14,20 14,33 0,13 -5,25 -14,33 -8,9 -20,14 -33,14 -13,0 -24,-5 -33,-14 -8,-8 -13,-20 -13,-33 0,-13 5,-24 13,-33 9,-8 20,-13 33,-13zm4 24c6,1 9,3 9,6 0,1 -1,2 -2,3 0,1 -2,2 -3,2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,-1 -3,-1 -4,-1 -1,0 -2,0 -3,1 -1,0 -1,1 -1,2 0,1 0,2 1,3 0,0 1,1 2,1 3,1 4,1 6,2 2,1 4,1 6,2 1,2 3,3 3,4 1,2 2,4 2,6 0,4 -1,7 -4,10 -2,2 -4,4 -8,4l0 5c0,1 -1,2 -1,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1 -1,0 -1,-1 -1,-2l0 -4c-2,0 -5,-1 -7,-2 -3,-1 -5,-3 -5,-5 0,-1 0,-2 1,-3 1,-2 2,-2 3,-2 1,0 2,0 2,0l4 1c2,1 4,1 5,1 1,0 2,0 4,-1 1,-1 1,-2 1,-3 0,-2 0,-3 -2,-3 -1,-1 -3,-2 -6,-2 -2,-1 -4,-2 -5,-2 -1,-1 -3,-1 -4,-2 -1,-1 -2,-3 -2,-4 -1,-2 -1,-3 -1,-5 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 1,-2 2,-3 2,-2 5,-4 8,-4l0 -4c0,-1 0,-2 1,-3 1,0 1,-1 2,-1 1,0 2,1 3,1 0,1 1,2 1,3l0 4zm21 -3c-6,-6 -15,-10 -25,-10 -10,0 -18,4 -25,10 -6,7 -10,15 -10,25 0,10 4,19 10,25 7,7 15,11 25,11 10,0 19,-4 25,-11 7,-6 11,-15 11,-25 0,-10 -4,-18 -11,-25zm-192 -26c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l63 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-63 0zm0 -30c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l85 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-85 0zm0 58c-3,0 -5,-2 -5,-5 0,-3 2,-6 5,-6l85 0c3,0 5,3 5,6 0,3 -2,5 -5,5l-85 0z'
            },
            {
                id: 2,
                name: 'Timer',
                icon: 'M125 0c35,0 66,14 88,37 23,22 37,53 37,88 0,35 -14,66 -37,88 -22,23 -53,37 -88,37 -35,0 -66,-14 -88,-37 -23,-22 -37,-53 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 88,-37zm-4 56c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 54c5,3 8,8 8,14 0,9 -8,16 -17,16 -1,0 -2,0 -3,0l-46 56c-3,4 -8,4 -11,1 -4,-2 -4,-8 -1,-11l46 -56c-1,-2 -1,-4 -1,-6 0,-7 4,-12 9,-15l0 -53zm81 -8c-20,-20 -47,-32 -77,-32 -30,0 -57,12 -77,32 -20,20 -32,47 -32,77 0,30 12,57 32,77 20,20 47,32 77,32 30,0 57,-12 77,-32 20,-20 32,-47 32,-77 0,-30 -12,-57 -32,-77z M121 135c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 68c0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8l0 -68z M131 136c-3,-3 -3,-8 0,-11 3,-3 8,-3 11,0l48 48c3,3 3,8 0,11 -3,3 -8,3 -12,0l-47 -48z M141 132c-5,0 -8,-3 -8,-8 0,-4 3,-8 8,-8l67 0c5,0 9,4 9,8 0,5 -4,8 -9,8l-67 0z'
            }
        ]
    })
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.profile-left {
    box-shadow: $darkBoxShadow;

    .tab-item {
        background-color: $bgLightBlue-2;
        border: 1px solid $borderLightGray;

        svg {
            width: 40px;
            fill: $textDark-3;
        }

        img {
            height: 40px;
        }

        .v-icon {
            font-size: 40px;
            color: $textDark-3;
        }
    }
}

.tasks-content {
    border: 1px solid $borderGray;
    margin: 5px;

    .task__tabs {
        border-bottom: 1px solid $borderGray;

        .v-tabs__div:nth-child(1) {
            border-right: 1px solid $borderGray;
        }
    }
}
</style>
<style scoped>
>>>.tabs a.v-tabs__item.v-tabs__item--active {
    background-color: #3b589e;
    color: #fff;
}

>>>.tabs a.v-tabs__item.v-tabs__item--active .v-icon {
    color: #fff;
}

>>>.tabs a.v-tabs__item.v-tabs__item--active svg {
    fill: #fff;
}
</style>