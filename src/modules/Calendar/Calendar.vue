<template>
  <div class="calendar">
    <calendar-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      dialogTitle="Add New Calendar"
      @save="add_item('add_new_calendar', $event)"
    />

    <calendar-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      dialogTitle="Edit Calendar"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('edit_calendar', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Calendar"
      text-content="Are you sure you want to delete this calendar?"
      @delete="delete_item('delete_calendar')"
    />

    <table-header :paths="paths" @click="add_dialog = true" />

    <div class="calendar-wrapper">
      <div class="calendar-content">
        
        <div class="calendar_header">
          <div class="left_option">
            <v-btn dark color="#3b589e" large>Add Template</v-btn>
            <v-btn dark color="#3b589e" large>Customize Event</v-btn>
            <span class="date_title"> March 12, 2020</span>
          </div>
          <div class="right_option">
            <v-btn fab large text color="#b3b7c3" class="action"><v-icon>list</v-icon></v-btn>
            <v-btn fab large text color="#b3b7c3" class="action"><v-icon>grid_on</v-icon></v-btn>
            <div class="event_tab">
              <v-tabs class="event_tab_items" centered grow hide-slider v-model="active_tab">
                <v-tab>Today</v-tab>
                <v-tab>All</v-tab>
              </v-tabs>
            </div>
          </div>
        </div>

        <div class="calendar_body">
          <div class="left">
            <div class="date">
              <div class="date_icon">
                <svg viewBox="0 0 250 250">
                  <path
                    class="icon"
                    d="M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z"
                  ></path>
                </svg>
              </div>
              <div class="date_text">
                <h3>Today</h3>
                <div>12 March</div>
              </div>
            </div>
            <vc-calendar
              :attributes="attributes"
              nav-visibility="visible"
              is-expanded
              class="px-3"
            />
            <div class="calendar_label">
              <div class="label_left">
                <h3>Events</h3>
                <div class="event-item" v-for="elabel in eventlabels">
                  <v-avatar width="15" height="15" min-width="15"  :color="elabel.color"><span></span></v-avatar>
                  <div class="event-title"> {{ elabel.title }} </div>
                </div>
              </div>
              <div class="label_right">
                <h3>Calendars</h3>
                <v-checkbox hide-details label="Reports"></v-checkbox>
                <v-checkbox hide-details label="Local SEO"></v-checkbox>
                <v-checkbox hide-details label="Social Posts"></v-checkbox>
                <v-checkbox hide-details label="Questionnaires"></v-checkbox>
              </div>
            </div>
          </div>

          <div class="right">

            <div class="event_card" v-for="event in events">
              <div class="card_header">
                <h3 class="card_title"> {{event.type}} </h3>
                <div class="card_actions">
                  <v-btn fab small text color="#b3b7c3" class="action">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn fab small text color="#b3b7c3" class="action">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn fab small depressed dark color="#1fb868" class="action">
                    <v-icon>add</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="card_body">
                <v-avatar class="event_color" width="15" height="15" min-width="15"  :color="event.color"><span></span></v-avatar>
                <div class="event_time"> {{event.time}} </div>
                <h3 class="event_title"> {{event.title}} </h3>
                <div class="invited">
                  <div class="invited-inner">
                    <div class="invited-icon">
                      <template v-for="user in event.users">
                        <v-avatar
                          v-if="user.image_url"
                          class="user-icon responsive-img"
                          size="40"
                        >
                          <img class="atomic-icon" :src="user.image_url" alt="user" />
                        </v-avatar>
                        <v-avatar
                          v-else
                          color="red"
                          size="40"
                          class="user-icon responsive-img"
                        >
                          <span class="white--text">
                            {{ user.first_name.charAt(0) + user.last_name.charAt(0) }}
                          </span>
                        </v-avatar>
                      </template>
                    </div>
                    <div class="more"> +2 more invited</div>
                  </div>
                  <!-- <ul>
                    <li v-for="person in event.persons"> {{ person }} </li>
                  </ul> -->
                </div>
                <v-btn dark :color="event.color">Join Meeting</v-btn>
              </div>
              <div class="card_footer">
                <v-btn class="view_more" text color="white">View More</v-btn>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- <div class="calendar-actions">
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
      </v-sheet> -->
    </div>
  </div>
</template>
<script src="./Calendar.js"></script>
<style lang="scss" scoped src="./Calendar.scss"></style>
<style lang="css" scoped>
>>> .event_tab .v-item-group.theme--light.v-slide-group.v-tabs-bar.primary--text {
      height: 35px !important;
  }
</style>
