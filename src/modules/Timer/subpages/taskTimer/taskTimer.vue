<template>
    <div class="timer">
        <div class="timer-actions text-right mb-4">
            <v-btn fab small dark color="#3b589e" class="mr-1">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
            <v-btn fab small dark color="#3b589e" class="mr-1" @click="minimize">
                <v-icon>close</v-icon>
            </v-btn>
        </div>
        <TaskViewDialog ref="view_task_dialog" :task="task" @close-task-preview="closeViewDialog"></TaskViewDialog>
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading" icon="widgets" title="Task Timers" :key="componentKey" :noMoreData="noMoreData" :showSelect="false">
            <template v-slot:header-toolbar>
                <v-col>
                    <v-select flat :items="task_status" label="Task Status" hide-details filled :value="filter_task" @change="filterTask"></v-select>
                </v-col>
                <v-btn-toggle class="tab-buttons" mandatory v-model="timer_tab" :value="timer_tab" @change="handleChangeTab">
                    <v-btn text class="px-5" value="task-timers">
                        <v-icon left>mdi-folder-clock-outline</v-icon> Task Timers
                    </v-btn>
                    <v-btn text class="px-5" value="global-timers">
                        <v-icon left>mdi-account-clock</v-icon> Global Timers
                    </v-btn>
                    <v-btn text class="px-5" value="alarm">
                        <v-icon left>mdi-clock-digital</v-icon> Alarms
                    </v-btn>
                </v-btn-toggle>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>
                    <Avatars :items="item.assignee" :count="1" style="display:inline-block"></Avatars>
                </td>
                <td class="clickable-td" @click="set_and_view_task(item)">
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <span v-on="on">{{ item.title | ucwords | truncate(15) }}</span>
                        </template>
                        <span>{{ item.title | ucwords }}</span>
                    </v-tooltip>
                </td>
                <td>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <span v-on="on">{{
                                item.project.title | ucwords | truncate(15)
                                }}</span>
                        </template>
                        <span>{{ item.project.title | ucwords }}</span>
                    </v-tooltip>
                </td>
                <td>{{ item.timer.timer_created | format('MMM D YYYY HH:mm:ss') }}</td>
                <td>{{ timerEnd(item) }}</td>
                <td>
                    <PlayPause :item="item" @row-item-updated="item = $event"></PlayPause>
                </td>
            </template>
        </VueTable>
    </div>
</template>
<script src="./taskTimer.js"></script>
<style lang="scss" scoped src="./taskTimer.scss"></style>