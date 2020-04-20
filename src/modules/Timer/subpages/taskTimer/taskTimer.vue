<template>
  <div class="timer">
    <table-header :paths="paths" :noButton="true">
      <template v-slot:form-btn>
        <v-btn fab outlined small class="mx-1" color="gray" icon
          ><v-icon>mdi-dots-horizontal</v-icon></v-btn
        >
        <v-btn fab outlined small class="mx-1" color="gray" icon
          ><v-icon>close</v-icon></v-btn
        >
      </template>
    </table-header>

    <VueTable
      :items="items"
      :headers="headers"
      :showRowActions="true"
      @load-more="load_more"
      :loading="loading"
      icon="widgets"
      title="Task Timers"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="false"
    >
      <template v-slot:header-toolbar>
        <v-btn-toggle
          mandatory
          v-model="timer_tab"
          :value="timer_tab"
          @change="handleChangeTab"
        >
          <v-btn text class="px-5" value="task-timers">
            <v-icon left>mdi-timeline-clock-outline</v-icon> Task Timers
          </v-btn>
          <v-btn text class="px-5" value="global-timers">
            <v-icon left>mdi-map-clock-outline</v-icon> Global Timers
          </v-btn>
          <v-btn text class="px-5" value="alarm">
            <v-icon left>mdi-alarm</v-icon> Alarms
          </v-btn>
        </v-btn-toggle>
      </template>
      <template v-slot:row-slot="{ item }">
        <td>
          <Avatars
            :items="item.assignee"
            :count="2"
            style="display:inline-block"
          ></Avatars>
        </td>
        <td>{{ item.title | ucwords | truncate }}</td>
        <td>{{ item.service | ucwords | truncate }}</td>
        <td>{{ item.timer.timer_created | format('HH:mm:ss') }}</td>
        <td>{{ item.timer.timer_stopped | format('HH:mm:ss') }}</td>
        <td>{{ timerEnd(item) }}</td>
        <td>
          <v-tooltip
            left
            v-if="
              can_run_timer(item) &&
                item.timer.timer_status === 'ongoing' &&
                item.status !== `completed`
            "
          >
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" @click="handleActionClick(item)">pause</v-icon>
            </template>
            <span>Pause the timer</span>
          </v-tooltip>
          <v-tooltip
            left
            v-else-if="can_run_timer(item) && item.status !== `completed`"
          >
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" @click="handleActionClick(item)"
                >play_arrow</v-icon
              >
            </template>
            <span>Start the timer</span>
          </v-tooltip>
          <v-tooltip left v-else>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-clock-alert-outline</v-icon>
            </template>
            <span>Timer unavailable</span>
          </v-tooltip>
        </td>
      </template>
    </VueTable>
  </div>
</template>

<script src="./taskTimer.js"></script>
<style lang="scss" scoped src="./taskTimer.scss"></style>
