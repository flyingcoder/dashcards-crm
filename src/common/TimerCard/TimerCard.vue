<template>
    <div class="timer-card">
        <div class="timer__content">
            <dash-card title="Timer" :view-more-link="viewMoreLink" class="timer__content" :dashboard="dashboard"
                       @close="$emit('close')" @expand="expand"
            >
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
                                            <v-icon small :color="user_global_status ? `success` : `grey`" v-on="on">
                                                mdi-circle
                                            </v-icon>
                                        </template>
                                        <span>{{ user_global_status ? `Timer Ongoing` : `Timer Stop` }}</span>
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
                                <v-boilerplate type="article, actions" />
                            </div>
                            <v-carousel hide-delimiters show-arrows height="auto" v-else-if="items.length > 0">
                                <v-carousel-item v-for="slide in items" :key="slide.id">
                                    <v-sheet color="transparent">
                                        <div class="t-slide">
                                            <div class="slide-left">
                                                <div class="t-person">
                                                    <Avatars :count="2" :items="slide.assigned" />
                                                </div>
                                                <div class="t-title">
                                                    <h3 class="subtitle-2 font-weight-bold">
                                                        {{ slide.title | ucwords }}
                                                    </h3>
                                                    <div class="caption"
                                                         :inner-html.prop="slide.description | truncate(50)"
                                                    />
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
                                                                <span class="hrs">1384</span><span
                                                                    class="lbl"
                                                            >HRS</span>
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
                                                    <v-btn color="#fff" v-if="slide.status === `completed`"
                                                           :disabled="true" class="start-btn" tile text block
                                                    >
                                                        TASK
                                                        COMPLETED
                                                    </v-btn>
                                                    <v-btn color="#fff" @click="timerClick(slide)"
                                                           v-else-if="slide.timer.timer_started"
                                                           :disabled="slide.timer.timer_disabled" class="start-btn" tile
                                                           text block
                                                    >
                                                        <v-icon small left>pause</v-icon>
                                                        PAUSED
                                                        TIMER
                                                    </v-btn>
                                                    <v-btn color="#fff" @click="timerClick(slide)" v-else
                                                           :disabled="slide.timer.timer_disabled" class="start-btn" tile
                                                           text block
                                                    >
                                                        <v-icon small left>play_arrow</v-icon>
                                                        START
                                                        TIMER
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                            <Empty icon="" v-else headline="No Timer Found!" />
                        </div>
                    </div>
                </div>
            </dash-card>
        </div>
    </div>
</template>
<script src="./TimerCard.js"></script>
<style lang="scss" src="./TimerCard.scss" scoped></style>