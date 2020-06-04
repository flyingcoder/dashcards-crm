<template>
    <v-row class="timer my-0 py-0">
        <v-col class="time" :class="timer_started ? `success--text` : ``">{{ display }}</v-col>
        <v-spacer></v-spacer>
        <v-col class="time-control">
            <v-tooltip left v-if="is_ongoing_previous_date">
                <template v-slot:activator="{ on }">
                    <v-icon color="success" v-on="on">mdi-clock-end</v-icon>
                </template>
                <span>Timer is ongoing since {{ last_date_action }}</span>
            </v-tooltip>
            <v-tooltip left v-else-if="!timer_started && can_start_timer">
                <template v-slot:activator="{ on }">
                    <v-btn :loading="btnloading" outlined small icon v-on="on" @click="timer_action('start')">
                        <v-icon>play_arrow</v-icon>
                    </v-btn>
                </template>
                <span>Start Timer</span>
            </v-tooltip>
            <v-tooltip left v-else-if="timer_started && can_stop_timer">
                <template v-slot:activator="{ on }">
                    <v-btn :loading="btnloading" outlined small v-on="on" icon @click="timer_action('stop')">
                        <v-icon>stop</v-icon>
                    </v-btn>
                </template>
                <span>Stop Timer</span>
            </v-tooltip>
            <v-tooltip left v-else-if="is_lapsed">
                <template v-slot:activator="{ on }">
                    <v-icon color="grey" v-on="on">mdi-lock-clock</v-icon>
                </template>
                <span>Timer unavailable</span>
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
import { mapGetters } from 'vuex'
import request from '@/services/axios_instance'
import makeRequestTo from '@/services/makeRequestTo'
import moment from 'moment'

export default {
    name: 'PlayStop',
    inheritAttrs: false,
    props: {
        item: Object,
        forDate: { type: String, default: moment().format('YYYY-MM-DD') }
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
                return this.init_time
            },
            set(new_val) {
                this.init_time = new_val
            }
        },
        owner() {
            return this.item
        },
        is_own_timer() {
            return this.item.id === this.viewer.id
        },
        viewer() {
            return this.$store.getters.user
        },
        can_start_timer() {
            // if (this.viewer.is_admin) return true
            return this.owner.id === this.viewer.id
        },
        can_stop_timer() {
            // if (this.viewer.is_admin) return true
            return this.owner.id === this.viewer.id
        },
        selectedDate() {
            return moment(this.forDate).format('YYYY-MM-DD')
        },
        now() {
            return moment().format('YYYY-MM-DD')
        },
        is_lapsed() {
            if(!this.item.timer.timer_stopped) return false
            var xyz = moment(this.item.timer.timer_stopped) 
            if (xyz.format('YYYY-MM-DD') == moment(this.forDate).tz('America/Toronto').format('YYYY-MM-DD')){
              return false
            }
            return true
        },
        is_ongoing_previous_date() {
            if (!this.item.timer.latest_timer) {
                return false
            }
            return (
                this.item.timer.latest_timer.action === 'start' &&
                this.item.timer.total_seconds === 0 &&
                this.item.timer.timer_status === ''
            )
        },
        last_date_action() {
            return moment(this.item.timer.latest_timer.created_at).format(
                'MMMM D YYYY'
            )
        },
        is_playable(){
          return !this.is_ongoing_previous_date && !this.is_lapsed && this.can_start_timer
        }
    },
    mounted() {
        if (this.is_open()) {
            this.setGlobalTimerRunning()
            this.timer_started = true
        } else {
            this.display = this.item.timer.format
        }
    },
    methods: {
        is_open() {
            return this.item.timer.timer_status === 'open'
        },
        setGlobalTimerRunning() {
            this.interval = setInterval(() => {
                let hours = this.item.timer.hrs
                let mins = this.item.timer.min
                let secs = this.item.timer.sec

                if (secs >= 59 && mins >= 59) {
                    hours++
                    mins = secs = '00'
                } else if (secs >= 59) {
                    mins++
                    secs = '00'
                } else {
                    secs++
                }
                this.item.timer.hrs = hours
                this.item.timer.min = mins
                this.item.timer.sec = secs

                this.display = this.set_time_running(hours, mins, secs)
            }, 1000)
        },
        set_time_running(hours, mins, secs) {
            if (hours.toString().length === 1) hours = '0' + hours
            if (mins.toString().length === 1) mins = '0' + mins
            if (secs.toString().length === 1) secs = '0' + secs

            return `${hours}:${mins}:${secs}`
        },
        timer_action(type) {
            //start | stop
            this.btnloading = true
            makeRequestTo
                .change_timer(type)
                .then(() => {
                    const timer_message = type === `start` ? 'started' : 'stopped'

                    if (type === `start`) {
                        this.setGlobalTimerRunning()
                        this.timer_started = true
                        this.item.timer.timer_status = 'open'
                        if (!this.item.timer.timer_created) {
                            this.item.timer.timer_created = moment().format(
                                'YYYY-MM-DD HH:mm:ss'
                            )
                        }
                    } else {
                        clearInterval(this.interval)
                        this.item.timer.timer_status = 'close'
                        this.timer_started = false
                        this.item.timer.timer_stopped = moment().format(
                            'YYYY-MM-DD HH:mm:ss'
                        )
                    }
                    this.$emit('row-item-updated', this.item)
                    if (this.is_own_timer) {
                        this.$event.$emit('self-global-timer-updated')
                    }
                    this.$event.$emit(
                        'open_snackbar',
                        `Timer ${timer_message}`,
                        'notification'
                    )
                })
                .finally(() => {
                    this.btnloading = false
                })
        }
    }
}
</script>