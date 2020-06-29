<template>
    <div class="timer-card">
        <div class="timer__content">
            <dash-card title="Timer" :view-more-link="viewMoreLink" class="timer__content" :dashboard="dashboard" @close="$emit('close')" @expand="expand">
                <div slot="content">
                    <div class="timer">
                        <div class="date">{{ dayNow }} {{ dateNow }}</div>
                        <div class="time">{{ timeNow }}</div>
                        <div class="hours-detail" v-show="true">
                            <div class="today">
                                <p>
                                    HRS OF WORK TODAY
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-icon small :color="user_global_status ? `success` : `grey`" v-on="on">mdi-circle</v-icon>
                                        </template>
                                        <span>{{
                                            user_global_status ? `Timer Ongoing` : `Timer Stop`
                                            }}</span>
                                    </v-tooltip>
                                </p>
                                <div class="hours-box">
                                    <div class="box">
                                        <span class="hrs">{{ user_today.hrs }}</span><span class="lbl">HRS</span>
                                    </div>
                                    <div class="box">
                                        <span class="hrs">{{ user_today.min }}</span><span class="lbl">MIN</span>
                                    </div>
                                    <div class="box">
                                        <span class="hrs">{{ user_today.sec }}</span><span class="lbl">SEC</span>
                                    </div>
                                </div>
                            </div>
                            <div class="today">
                                <p>MONTH TOTAL HRS OF WORK</p>
                                <div class="hours-box">
                                    <div class="box">
                                        <span class="hrs">{{ user_monthly.hrs }}</span><span class="lbl">HRS</span>
                                    </div>
                                    <div class="box">
                                        <span class="hrs">{{ user_monthly.min }}</span><span class="lbl">MIN</span>
                                    </div>
                                    <div class="box">
                                        <span class="hrs">{{ user_monthly.sec }}</span><span class="lbl">SEC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sel-timer">
                        <div class="timer-body">
                            <div class="pa-2" v-if="loading">
                                <v-boilerplate type="article, actions"></v-boilerplate>
                            </div>
                            <v-carousel hide-delimiters show-arrows height="auto" v-else-if="items.length > 0">
                                <v-carousel-item v-for="(slide, i) in items" :key="slide.id">
                                    <v-sheet color="transparent">
                                        <div class="t-slide">
                                            <div class="slide-left">
                                                <div class="t-person">
                                                    <Avatars :count="2" :items="slide.assignee"></Avatars>
                                                </div>
                                                <div class="t-title">
                                                    <h3 class="subtitle-2 font-weight-bold">
                                                        {{ slide.title | ucwords }}
                                                    </h3>
                                                    <div class="caption" :inner-html.prop="slide.description | truncate(50)"></div>
                                                </div>
                                                <!-- <div class="t-service">
                                                    {{ slide.service | ucwords }}
                                                </div> -->
                                            </div>
                                            <div class="slide-right">
                                                <div class="s-hours-detail">
                                                    <div class="today">
                                                        <p>START TIME</p>
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
                                                        <p>END TIME</p>
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
                                                <div class="s-total-hours">
                                                    <span>TOTAL HOURS</span>
                                                    <div class="time">
                                                        {{ slide.timer.timer_stats.format }}
                                                    </div>
                                                </div>
                                                <div v-if="task_belongs_to_logged_user(slide)">
                                                    <v-btn color="#fff" v-if="slide.status === `completed`" :disabled="true" class="start-btn" tile text block>TASK COMPLETED</v-btn>
                                                    <v-btn color="#fff" @click="timerClick(slide)" v-else-if="slide.timer.timer_started" :disabled="slide.timer.timer_disabled" class="start-btn" tile text block>
                                                        <v-icon small left>pause</v-icon>PAUSED
                                                        TIMER
                                                    </v-btn>
                                                    <v-btn color="#fff" @click="timerClick(slide)" v-else :disabled="slide.timer.timer_disabled" class="start-btn" tile text block>
                                                        <v-icon small left>play_arrow</v-icon>START
                                                        TIMER
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                            <Empty v-else headline="No Timer Found!"></Empty>
                        </div>
                    </div>
                    <!--           <v-data-table
            v-show="false"
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
            <template v-slot:item="{ item }">
              <tr>
              <td>{{item.title }}</td>
              <td>
                <Avatars :items="item.assignee" :count="1" ></Avatars>
              </td>
              <td>{{item.total_time }}</td>
              <td>{{item.status }}</td>
            </tr>
            </template>
          </v-data-table> -->
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
                    <!--           <div class="empty-timer" v-else>
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
          </div> -->
                </div>
            </dash-card>
        </div>
    </div>
</template>
<script src="./TimerCard.js"></script>
<style lang="scss" src="./TimerCard.scss" scoped></style>