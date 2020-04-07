<template>
  <v-col cols="12" md="6" class="calendar-card">
    <div class="calendar__content">
      <dash-card
        title="Calendar"
        @close="$emit('close')"
        class="calendar__content"
        :view-more-link="viewMoreLink"
        :dashboard="dashboard"
      >
        <div class="calendar__inner_content" slot="content">
          <v-progress-linear
            v-if="loading"
            :indeterminate="true"
          ></v-progress-linear>

          <!-- <v-calendar align-top dense v-else ref="calendar"
          v-model="start"
          color="primary">
          </v-calendar> -->
          <vc-calendar
            :attributes="attributes"
            nav-visibility="visible"
            is-expanded
          ></vc-calendar>
        </div>
      </dash-card>
    </div>
  </v-col>
</template>

<script src="./CalendarCard.js"></script>
<style lang="scss" scoped src="./CalendarCard.scss"></style>
