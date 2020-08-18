<template>
    <v-app class="buzzooka" id="buzzooka">
        <custom-loader />
        <snackbar />
        <router-view />
        <v-bottom-sheet v-model="bottom_sheet" style="z-index: 999">
            <v-sheet class="text-center" height="150px">
                <v-card flat>
                    <v-row no-gutters>
                        <v-spacer />
                        <v-icon class="mr-5 mt-2" @click="bottom_sheet = !bottom_sheet">
                            mdi-close-circle-outline
                        </v-icon>
                    </v-row>
                    <v-row>
                        <v-col md="8" sm="10" xs="12" class="mx-auto">
                            <v-banner class="fullwidth" elevation="0">
                                <v-avatar slot="icon" tile :size="60">
                                    <v-icon color="red" :size="40">
                                        mdi-clock-alert-outline
                                    </v-icon>
                                </v-avatar>
                                <p class="subtitle">You were idle for 30 minutes. Your timer is paused.</p>
                                <template v-slot:actions>
                                    <v-btn height="50" dark color="#3b589e">
                                        <v-icon left>mdi-play-circle-outline</v-icon>
                                        Resume Timer
                                    </v-btn>
                                </template>
                            </v-banner>
                        </v-col>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-bottom-sheet>
    </v-app>
</template>
<script>
    import snackbar from './common/snackbar/snackbar.vue'
    import CustomLoader from './common/CustomLoader.vue'

    export default {
        name: 'App',
        components: {snackbar, CustomLoader},
        data: () => ({
            user_moved_mouse: 0,
            bottom_sheet: false,
            timer_started : false
        }),

        watch: {
            user_moved_mouse(val) {
                if (val >= 1800000) {
                    //if user is idle for 30 mins
                    let notification = new Notification('You were idle for 30 mins')
                    setTimeout(() => {
                        notification.close()
                    }, 4500)
                }
            }
        },

        created() {
            // Let's check if the browser supports notifications
            if (!('Notification' in window)) {
                alert('This browser does not support desktop notification')
            } else if (Notification.permission !== 'denied') {
                this.request_notification_permission()
            }

            //this.$event.$on('global-timer-started', () => { this.timer_started = true})
            //this.$event.$on('global-timer-stopped', () => { this.timer_started = false})
        },

        mounted() {
            document.addEventListener('mousemove', this.reset_timer)
            setInterval(() => {
                this.user_moved_mouse += 1000
            }, 10000)
        },

        methods: {
            reset_timer() {
                this.user_moved_mouse = 0
            },
            request_notification_permission() {
                Notification.requestPermission().then(function (permission) {
                    if (permission === 'denied') {
                        this.request_notification_permission()
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    .text-cap {
        text-transform: capitalize;
    }

    .textarea-cap::first-letter {
        text-transform: uppercase;
    }
</style>