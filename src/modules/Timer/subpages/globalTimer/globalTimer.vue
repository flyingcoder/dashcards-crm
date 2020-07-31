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
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading" title="Global Timers" :key="componentKey" :noMoreData="noMoreData" :showSelect="false">
            <template v-slot:header-toolbar>
                <v-col>
                    <date-picker :hasButtons="false" flat class="dialog__date d-field text-center mr-1" label="Start Date" prepend-inner-icon="event" readonly v-model="filter_date" :max="today" @input="handleChangeDate"></date-picker>
                </v-col>
                <v-btn-toggle class="tab-buttons" mandatory v-model="timer_tab" :value="timer_tab" @change="handleChangeTab">
                    <v-btn text class="px-5" value="task-timers">
                        <v-icon left>mdi-folder-clock-outline</v-icon> Task Timers
                    </v-btn>
                    <v-btn text class="px-5" value="global-timers">
                        <v-icon left>mdi-account-clock</v-icon> Global Timers
                    </v-btn>
                    <v-btn text class="px-5" value="alarm">
                        <v-icon left>mdi-alarm-multiple</v-icon> Alarms
                    </v-btn>
                </v-btn-toggle>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>
                    <Avatar :user="item"></Avatar>
                </td>
                <td>{{ item.job_title | ucwords }}</td>
                <td>{{ item.timer.timer_created | format('MMM DD YYYY HH:mm:ss') }}</td>
                <td>{{ timerEnd(item) }}</td>
                <td>
                    <PlayStop :item="item" :forDate="dateSelected" @row-item-updated="item = $event"></PlayStop>
                </td>
            </template>
        </VueTable>
    </div>
</template>
<script src="./globalTimer.js"></script>
<style lang="scss" scoped src="./globalTimer.scss"></style>