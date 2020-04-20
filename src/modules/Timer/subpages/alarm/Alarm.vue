<template>
  <div class="alarm">
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
      title="Alarms"
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
        <td>{{ item.title | ucwords | truncate }}</td>
        <td>
          <Avatars
            :items="item.participants"
            deep
            :count="3"
            style="display:inline-block;"
          ></Avatars>
        </td>
        <td>
          <v-icon :color="item.event_type.properties.color" left
            >mdi-circle</v-icon
          >
          {{ item.event_type.name }}
        </td>
        <td>{{ item.start | format('MMM DD YYYY') }}</td>
        <td>{{ item.start | format('HH:mm:ss') }}</td>
        <td>
          <v-tooltip left v-if="is_event_owner(item)">
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="handleAction"
                >delete</v-icon
              >
            </template>
            <span>Delete Event</span>
          </v-tooltip>
          <v-tooltip left v-if="is_event_owner(item)">
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="handleAction"
                >edit</v-icon
              >
            </template>
            <span>Edit Event</span>
          </v-tooltip>
          <v-tooltip left v-if="is_event_owner(item)">
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="handleAction"
                >pageview</v-icon
              >
            </template>
            <span>View Event</span>
          </v-tooltip>
          <v-tooltip left v-if="is_event_owner(item)">
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="handleAction"
                >mdi-email-send-outline</v-icon
              >
            </template>
            <span>Add Participant</span>
          </v-tooltip>
          <v-tooltip left v-else>
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="handleAction"
                >mdi-email-receive-outline</v-icon
              >
            </template>
            <span>Leave Event</span>
          </v-tooltip>
        </td>
      </template>
    </VueTable>
  </div>
</template>

<script src="./Alarm.js"></script>
<style lang="scss" scoped src="./Alarm.scss"></style>
