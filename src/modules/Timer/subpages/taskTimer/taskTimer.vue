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
        <v-col>
          <v-select
            :items="task_status"
            label="Task Status"
            solo
            :value="filter_task"
            class="mt-7"
            @change="filterTask"
          ></v-select>
        </v-col>
        <v-btn-toggle
          mandatory
          v-model="timer_tab"
          :value="timer_tab"
          @change="handleChangeTab"
        >
          <v-btn text class="px-5" value="task-timers">
            <v-icon left>mdi-folder-clock-outline</v-icon> Task Timers
          </v-btn>
          <v-btn text class="px-5" value="global-timers">
            <v-icon left>mdi-web-clock</v-icon> Global Timers
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
            :count="1"
            style="display:inline-block"
          ></Avatars>
        </td>
        <td>
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
