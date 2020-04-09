<template>
  <div class="timer-card">
    <div class="timer__content">
      <dash-card
        title="Timer"
        :view-more-link="viewMoreLink"
        class="timer__content"
        :dashboard="dashboard"
        @close="$emit('close')"
      >
        <div slot="content">
          <div class="timer" v-show="true">
            <div class="date">{{ dayNow }} {{ dateNow }}</div>
            <div class="time">{{ timeNow }}</div>
            <div class="hours-detail">
              <div class="today">
                <p>HRS OF WORK TODAY</p>
                <div class="hours-box">
                  <div class="box">
                    <span class="hrs">8</span><span class="lbl">HRS</span>
                  </div>
                  <div class="box">
                    <span class="hrs">56</span><span class="lbl">MIN</span>
                  </div>
                  <div class="box">
                    <span class="hrs">21</span><span class="lbl">SEC</span>
                  </div>
                </div>
              </div>
              <div class="today">
                <p>TOTAL HRS OF WORK</p>
                <div class="hours-box">
                  <div class="box">
                    <span class="hrs">1384</span><span class="lbl">HRS</span>
                  </div>
                  <div class="box">
                    <span class="hrs">56</span><span class="lbl">MIN</span>
                  </div>
                  <div class="box">
                    <span class="hrs">21</span><span class="lbl">SEC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sel-timer" v-show="false">
            <div class="timer-body">
              <v-carousel hide-delimiters show-arrows height="auto">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet color="transparent">
                    <div class="t-slide">
                      <div class="slide-left">
                        <div class="t-person">
                          <v-avatar size="40"
                            ><img src="@/assets/temp/user2.png" alt=""
                          /></v-avatar>
                          <span>William Stomhson</span>
                        </div>
                        <div class="t-title">
                          <h3>Website Design Wirefram</h3>
                          <span>Assigned to you 1 day ago</span>
                        </div>
                        <div class="t-service">Website Design</div>
                      </div>
                      <div class="slide-right">
                        <div class="s-hours-detail">
                          <div class="today">
                            <p>START TIME</p>
                            <div class="hours-box">
                              <div class="box">
                                <span class="hrs">8</span
                                ><span class="lbl">HRS</span>
                              </div>
                              <div class="box">
                                <span class="hrs">56</span
                                ><span class="lbl">MIN</span>
                              </div>
                              <div class="box">
                                <span class="hrs">21</span
                                ><span class="lbl">SEC</span>
                              </div>
                            </div>
                          </div>
                          <div class="today">
                            <p>END TIME</p>
                            <div class="hours-box">
                              <div class="box">
                                <span class="hrs">1384</span
                                ><span class="lbl">HRS</span>
                              </div>
                              <div class="box">
                                <span class="hrs">56</span
                                ><span class="lbl">MIN</span>
                              </div>
                              <div class="box">
                                <span class="hrs">21</span
                                ><span class="lbl">SEC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="s-total-hours">
                          <span>TOTAL HOURS</span>
                          <div class="time">{{ timeNow }}</div>
                        </div>
                        <v-btn color="#fff" class="start-btn" tile text block
                          >START TIMER</v-btn
                        >
                      </div>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
          <div class="alarm" v-show="false">
            <div class="alarm-body">
              <v-carousel hide-delimiters show-arrows height="auto">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet color="transparent">
                    <div class="alarm-header">
                      <div class="a-label">
                        <v-avatar color="cyan" size="15"></v-avatar>
                        <span>Ranking Report</span>
                      </div>
                      <div class="a-date">
                        <h3>March 21</h3>
                        <span>2:00 PM - 3:30 PM</span>
                      </div>
                      <div class="a-actions">
                        <v-btn fab text small color="#fff"
                          ><v-icon>edit</v-icon></v-btn
                        >
                        <v-btn fab text small color="#fff"
                          ><v-icon>delete</v-icon></v-btn
                        >
                      </div>
                    </div>
                    <div class="a-slide">
                      <h4 class="a-title">XYZ Ranking Report</h4>
                      <div class="a-members">
                        <div class="a-imgs">
                          <v-avatar
                            ><img src="@/assets/temp/user2.png" alt=""
                          /></v-avatar>
                          <v-avatar
                            ><img src="@/assets/temp/user2.png" alt=""
                          /></v-avatar>
                          <v-avatar
                            ><img src="@/assets/temp/user2.png" alt=""
                          /></v-avatar>
                        </div>
                        <div class="a-more"><span>+2 more invited</span></div>
                      </div>
                      <v-btn large outlined dark>Invite</v-btn>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
          <v-tabs class="timer__tabs" centered grow hide-slider>
            <v-tab href="#">
              <v-icon left>access_alarm</v-icon>
              Alarm
              <v-avatar color="#f56c6c" size="25"
                ><span class="notif-text">25</span></v-avatar
              >
            </v-tab>
            <v-tab href="#">
              <v-icon left>access_time</v-icon>
              Timer
              <v-avatar color="#f56c6c" size="25"
                ><span class="notif-text">14</span></v-avatar
              >
            </v-tab>
          </v-tabs>

          <v-data-table
            v-if="items.length || loading"
            :headers="headers"
            :items="items"
            :permission="$_permissions.get('timer')"
            hide-default-footer
            :loading="loading"
            loading-text="Loading... Please wait"
            class="elevation-1 buzzooka__table"
            @page-count="pageCount = $event"
          >
            <template v-slot:items="props">
              <td>{{ props.item.title }}</td>
              <td><assigned-btn :users="props.item.assignee" /></td>
              <td>{{ props.item.total_time }}</td>
              <td>{{ props.item.status }}</td>
            </template>
          </v-data-table>
          <!-- <div
            class="flex justify-content-center"
            v-if="items.length || loading"
          >
            <v-pagination
              v-if="pagination.total > 1"
              v-model="pagination.current"
              :length="pagination.total"
              @input="onPageChange"
            ></v-pagination>
          </div> -->
          <div class="empty-timer" v-else>
            <div class="empty-content">
              <div class="empty-svg">
                <svg viewBox="0 0 250 250">
                  <path
                    d="M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"
                  />
                </svg>
              </div>
              <div class="empty-text">
                No Timer yet
              </div>
            </div>
          </div>
        </div>
      </dash-card>
    </div>
  </div>
</template>

<script src="./TimerCard.js"></script>
<style lang="scss" src="./TimerCard.scss" scoped></style>
