<template>
    <v-card flat>
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
                    <v-boilerplate type="article, actions"/>
                </div>
                <v-carousel hide-delimiters show-arrows height="auto" v-else-if="items.length > 0">
                    <v-carousel-item v-for="slide in items" :key="slide.id">
                        <v-sheet color="transparent">
                            <div class="t-slide">
                                <div class="slide-left">
                                    <div class="t-person">
                                        <Avatars :count="2" :items="slide.assigned"/>
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
                <Empty icon="" v-else headline="No Timer Found!"/>
            </div>
        </div>
    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex'
    import request from '@/services/axios_instance'
    import moment from 'moment'

    //components
    import Avatars from '@/common/Avatars.vue'
    export default {
        name: "TimerContent",
        components: {
            Avatars,
            VBoilerplate: {
                functional: true,
                render(h, {data, props, children}) {
                    return h(
                        'v-skeleton-loader', {
                            ...data,
                            props: {
                                boilerplate: true,
                                elevation: 2,
                                ...props
                            }
                        },
                        children
                    )
                }
            }
        },
        data() {
            return {
                loading: true,
                items: [],
                page: 1,
                timeNow: new Date().toLocaleTimeString(),
                dayNow: moment().format('ddd'),
                dateNow: moment().format('LL'),
                pagination: {
                    current: 1,
                    total: 0
                },
                headers: [
                    { text: 'Task', sortable: false },
                    { text: 'Assigned', sortable: false },
                    { text: 'Total Time', sortable: false },
                    { text: 'Status', sortable: false }
                ],
                slides: 5,
                tab: 'timer',
                user_today: {
                    hrs: 0,
                    min: 0,
                    sec: 0,
                    interval: null
                },
                user_monthly: {
                    hrs: 0,
                    min: 0,
                    sec: 0,
                    interval: null
                },
                user_global_status: false
            }
        },
        beforeDestroy() {
            this.items.forEach(i => {
                clearInterval(i.timer.timer_interval)
            })
        },
        mounted() {
            this.getTaskTimers()

            setInterval(() => {
                this.timeNow = new Date().toLocaleTimeString()
            }, 1000)
            this.getUserTimers()

            this.$event.$on('global-timer-started', () => {
                this.setGlobalTimerRunning(this.user_today)
                this.setGlobalTimerRunning(this.user_monthly)
                this.user_global_status = true
            })
            this.$event.$on('global-timer-stopped', () => {
                this.user_global_status = false
                clearInterval(this.user_today.interval)
                clearInterval(this.user_monthly.interval)
            })
        },

        computed: {
            ...mapGetters(['user'])
        },

        methods: {
            task_belongs_to_logged_user(task) {
                if (!task.assigned.length) return
                let ind = task.assigned.findIndex(
                    i => i.id === this.$auth.logged_user().id
                )
                return !!(~ind)
            },
            getUserTimers() {
                request
                    .get(`/api/user/${this.user.id}/global-timers`)
                    .then(({ data }) => {
                        this.user_today = data.today
                        this.user_monthly = data.monthly
                        this.user_global_status = data.is_started
                        if (this.user_global_status) {
                            this.setGlobalTimerRunning(this.user_today)
                            this.setGlobalTimerRunning(this.user_monthly)
                        }
                    })
                    .finally(() => (this.loading = false))
            },
            getTaskTimers() {
                this.loading = true
                request
                    .get(
                        `/api/user/${this.user.id}/task-timers?page=${this.pagination.current}`
                    )
                    .then(({ data }) => {
                        this.items = data.data
                        this.items.map(ii => {
                            if (ii.timer.timer_status === 'ongoing') {
                                this.start_timer(ii)
                            }
                        })
                        this.pagination.current = data.current_page
                        this.pagination.total = data.last_page
                    })
                    .finally(() => (this.loading = false))
            },
            setGlobalTimerRunning(type) {
                type.interval = setInterval(() => {
                    let hours = type.hrs
                    let mins = type.min
                    let secs = type.sec

                    if (secs >= 59 && mins >= 59) {
                        hours++
                        mins = secs = '00'
                    } else if (secs >= 59) {
                        mins++
                        secs = '00'
                    } else {
                        secs++
                    }
                    type.hrs = hours
                    type.min = mins
                    type.sec = secs
                }, 1000)
            },
            get_hours(time_format) {
                return time_format.split(':')[0]
            },
            get_mins(time_format) {
                return time_format.split(':')[1]
            },
            get_secs(time_format) {
                return time_format.split(':')[2]
            },
            set_time_running(hours, mins, secs) {
                if (hours.toString().length === 1) hours = '0' + hours
                if (mins.toString().length === 1) mins = '0' + mins
                if (secs.toString().length === 1) secs = '0' + secs

                return `${hours}:${mins}:${secs}`
            },
            timerClick(item) {
                if (item.timer.timer_disabled) return
                if (item.timer.timer_started) this.pause_timer(item)
                else {
                    this.start_timer(item)
                    let api = 'api/timer/start'
                    if (item.timer.timer_status === 'pause') api = 'api/timer/back'
                    item.timer.timer_disabled = true
                    request.post(api, { type: 'task', id: item.id }).then(() => {
                        item.timer.timer_disabled = false
                        item.timer.timer_status = 'ongoing'
                    })
                }
            },
            pause_timer(item) {
                item.timer.timer_disabled = true
                request
                    .post('api/timer/pause', { type: 'task', id: item.id })
                    .then(() => {
                        clearInterval(item.timer.timer_interval)
                        item.timer.timer_disabled = false
                        item.timer.timer_status = 'pause'
                        item.timer.timer_started = false
                    })
            },
            start_timer(item) {
                item.timer.timer_started = true
                item.timer.timer_interval = setInterval(() => {
                    let hours = this.get_hours(item.timer.timer_stats.format)
                    let mins = this.get_mins(item.timer.timer_stats.format)
                    let secs = this.get_secs(item.timer.timer_stats.format)

                    if (secs >= 59 && mins >= 59) {
                        hours++
                        mins = secs = '00'
                    } else if (secs >= 59) {
                        mins++
                        secs = '00'
                    } else {
                        secs++
                    }
                    item.timer.timer_stats.format = this.set_time_running(hours, mins, secs)
                }, 1000)
            },
        }
    }
</script>

<style lang="scss" src="./TimerCard.scss" scoped></style>