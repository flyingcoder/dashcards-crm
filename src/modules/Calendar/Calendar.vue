<template>
  <div class="calendar">
    <v-layout row wrap>
      <v-flex xs12>
        <table-header :paths="paths" @click="add_dialog = true" />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          color="primary"
        ></v-calendar>
      </v-flex>
    </v-layout>
    <!-- table-header :paths="paths" :noButton="true" />
    <div class="wrapper">
      <div class="calendar-actions">
        <v-btn @click="$refs.calendar.prev()">
          <v-icon dark left>
            keyboard_arrow_left
          </v-icon>
          Prev
        </v-btn>

        <h2>{{ date }}</h2>

        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon right dark>
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </div>
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          color="primary"
        ></v-calendar>
      </v-sheet>
    </div -->
  </div>
</template>
<script src="./Calendar.js"></script>
<style lang="scss" scoped src="./Calendar.scss"></style>
