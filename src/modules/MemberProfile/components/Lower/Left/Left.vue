<template>
    <div class="profile-left">
        <v-tabs class="tabs" centered grow hide-slider v-model="active_tab" height="60px">
            <v-tab class="tab-item" v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
                <v-icon large>{{ tab.icon }}</v-icon>
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="active_tab">
            <v-tab-item key="1" value="Tasks">
                <v-card flat>
                    <tasks-tab />
                </v-card>
            </v-tab-item>
            <v-tab-item key="2" value="Timer">
                <TimerContent />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import TasksTab from './Tasks.vue'
    import TimerContent from "@/common/TimerCard/TimerContent.vue";

    export default {
        name: 'TasksContent',
        components: {
            TimerContent,
            TasksTab
        },

        data: () => ({
            active_tab: 'Tasks',
            tabs: [{
                id: 1,
                name: 'Tasks',
                icon: 'mdi-clipboard-file-outline'
            },
                {
                    id: 2,
                    name: 'Timer',
                    icon: 'mdi-timetable'
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