<template>
    <div class="timer-icon">
        <!--     <v-switch
      v-model="status"
      :disabled="disabled"
      @change="switch1_changed"
      dense
      color="#3b589e"
    ></v-switch> -->
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn :loading="requesting" icon v-on="on" tile class="mx-2" @click="switch1_changed">
                    <v-icon :color="timer_color" large>{{ timer_icon }}</v-icon>
                </v-btn>
            </template>
            <span>{{ timer_tip }}</span>
        </v-tooltip>
    </div>
</template>
<script>
import makeRequestTo from '@/services/makeRequestTo'

export default {
    name: 'LogOnLable',

    data: () => ({
        status: false,
        disabled: false,
        requesting: false
    }),
    computed: {
        label() {
            return this.status === true ? 'Log On' : 'Log Off'
        },
        timer_icon() {
            return this.status === true ? 'mdi-timer-off' : 'mdi-timer'
        },
        timer_tip() {
            return this.status === true ? 'Stop current timer' : 'Start the timer'
        },
        timer_color() {
            return this.status === true ? 'success' : ''
        }
    },
    mounted() {
        this.get_timer_status()

        this.$event.$on('self-global-timer-updated', () => {
            this.get_timer_status()
        })
    },

    methods: {
        get_timer_status() {
            this.requesting = true
            makeRequestTo.timer_status()
                .then(({ data }) => {
                    if (data) {
                        this.status = data.action === 'start' ? true : false
                    }
                })
                .finally(() => this.requesting = false)
        },
        switch1_changed() {
            const type = !this.status ? 'start' : 'stop'
            this.disabled = true
            this.requesting = true
            makeRequestTo.change_timer(type).then(() => {
                    this.disabled = false
                    this.status = !this.status
                    const timer_message = this.status ? 'started' : 'stopped'

                    this.$event.$emit(
                        this.status ? 'global-timer-started' : 'global-timer-stopped'
                    )

                    this.$event.$emit(
                        'open_snackbar',
                        `Timer ${timer_message}`,
                        'notification'
                    )
                })
                .finally(() => this.requesting = false)
        }
    }
}
</script>

