<template>
    <v-row class="timer my-0 py-0">
        <v-col class="time" :class="timer_started ? `success--text` : ``">
            {{ display }}
        </v-col>
        <v-spacer />
        <v-col class="time-control">
            <v-tooltip left v-if="task_is_done">
                <template v-slot:activator="{ on }">
                    <v-icon color="error" v-on="on">mdi-clock-alert-outline</v-icon>
                </template>
                <span>Task is completed!</span>
            </v-tooltip>
            <v-tooltip left v-else-if="!timer_started && can_start_timer">
                <template v-slot:activator="{ on }">
                    <v-btn :loading="btnloading" outlined small icon v-on="on" @click="timerClick">
                        <v-icon>play_arrow</v-icon>
                    </v-btn>
                </template>
                <span>Start Timer</span>
            </v-tooltip>
            <v-tooltip left v-else-if="timer_started && can_stop_timer">
                <template v-slot:activator="{ on }">
                    <v-btn :loading="btnloading" outlined small v-on="on" icon @click="timerClick">
                        <v-icon>pause</v-icon>
                    </v-btn>
                </template>
                <span>Pause Timer</span>
            </v-tooltip>
        </v-col>
    </v-row>
</template>
<style lang="scss" scoped>
    .timer {
        .time {
            font-size: 20px;
            font-family: 'Digital-7';
            font-weight: 600;
        }

        .time-control {
            font-size: 20px;
        }
    }
</style>
<script>
    import request from '@/services/axios_instance'
    import moment from 'moment'

    export default {
        name: 'PlayPause',
        inheritAttrs: false,
        props: {
            item: Object
        },
        data: () => ({
            timer_started: false,
            init_time: '00:00:00',
            interval: null,
            btnloading: false
        }),
        computed: {
            display: {
                get() {
                    return this.item.timer.timer_stats.format || ''
                },
                set(new_val) {
                    this.init_time = new_val
                }
            },
            participants() {
                return this.item.assigned || []
            },
            is_viewer_a_participant() {
                let index = this.participants.findIndex(i => i.id === this.viewer.id)
                return !!(~index)
            },
            viewer() {
                return this.$store.getters.user
            },
            can_start_timer() {
                // if (this.viewer.is_admin) return true
                return this.is_viewer_a_participant
            },
            can_stop_timer() {
                if (this.viewer.is_admin) return true
                return this.is_viewer_a_participant
            },
            selectedDate() {
                return moment(this.forDate).format('YYYY-MM-DD')
            },
            now() {
                return moment().format('YYYY-MM-DD')
            },
            is_lapsed() {
                return moment(this.item.timer.timer_stopped, 'YYYY-MM-DD') < moment()
            },
            task_is_done() {
                return this.item.status.toLowerCase() === 'completed'
            },
            last_date_action() {
                return moment(this.item.timer.latest_timer.created_at).format(
                    'MMMM D YYYY'
                )
            }
        },
        created() {
            if (this.is_open()) {
                this.start_timer()
                this.timer_started = true
            }
            this.$event.$on('task-timer-started', (task_id) => {
                if (this.item.id === task_id) {
                    this.start_timer()
                }
            })
            this.$event.$on('task-timer-paused', (task_id) => {
                if (this.item.id === task_id) {
                    this.paused_timer()
                }
            })
        },
        methods: {
            is_open() {
                return this.item.timer.timer_status === 'ongoing'
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
            pause_timer() {
                this.btnloading = true
                this.item.timer.timer_disabled = true
                request
                    .post('api/timer/pause', {type: 'task', id: this.item.id})
                    .then(() => {
                        this.paused_timer()
                    })
                    .finally(() => {
                        this.btnloading = false
                    })
            },
            timerClick() {
                if (this.item.timer.timer_disabled) return
                if (this.timer_started) this.pause_timer()
                else {
                    this.btnloading = true
                    this.start_timer()
                    let api = 'api/timer/start'
                    if (this.item.timer.timer_status === 'pause') api = 'api/timer/back'
                    this.item.timer.timer_disabled = true
                    request
                        .post(api, {type: 'task', id: this.item.id})
                        .then(() => {
                            this.item.timer.timer_disabled = false
                            this.item.timer.timer_status = 'ongoing'
                        })
                        .finally(() => {
                            this.btnloading = false
                        })
                }
            },
            paused_timer() {
                clearInterval(this.item.timer.timer_interval)
                this.item.timer.timer_disabled = false
                this.item.timer.timer_status = 'pause'
                this.timer_started = false
            },
            start_timer() {
                this.timer_started = true
                this.item.timer.timer_interval = setInterval(() => {
                    let hours = this.get_hours(this.item.timer.timer_stats.format)
                    let mins = this.get_mins(this.item.timer.timer_stats.format)
                    let secs = this.get_secs(this.item.timer.timer_stats.format)

                    if (secs >= 59 && mins >= 59) {
                        hours++
                        mins = secs = '00'
                    } else if (secs >= 59) {
                        mins++
                        secs = '00'
                    } else {
                        secs++
                    }
                    this.item.timer.timer_stats.format = this.set_time_running(
                        hours,
                        mins,
                        secs
                    )
                }, 1000)
            },
            set_time_running(hours, mins, secs) {
                if (hours.toString().length === 1) hours = '0' + hours
                if (mins.toString().length === 1) mins = '0' + mins
                if (secs.toString().length === 1) secs = '0' + secs

                return `${hours}:${mins}:${secs}`
            }
        }
    }
</script>