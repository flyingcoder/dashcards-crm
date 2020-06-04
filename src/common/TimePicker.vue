<template>
    <div class="text-center">
        <v-menu :close-on-content-click="false" :nudge-width="200" offset-y :max-width="300" v-model="menu" :close-on-click="false">
            <template v-slot:activator="{ on }">
                <v-btn :color="buttonColor" v-on="on" :block="isBtnBlock">
                    <v-icon left>{{ icon }}</v-icon> {{ buttonLabel }}
                </v-btn>
            </template>
            <v-card class="pa-0">
                <v-time-picker v-model="picker" :landscape="false" :use-seconds="hasSecond" ampm-in-title :format="format" ref="vtimepicker">
                    <v-row no-gutters>
                        <v-btn block class="mb-1" v-if="hasAlarm" :color="alarm ? `primary` : `gray`" @click="toggleAlarm">
                            <v-icon left>mdi-alarm</v-icon>
                            {{ alarm ? `Unset Alarm` : `Set Alarm` }}
                        </v-btn>
                        <v-btn text class="mr-1" outlined color="#657186" @click="cancel">Cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text class="mr-1" outlined color="#657186" @click="clear">Clear</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text class="mr-1" outlined color="primary" @click="save">Save</v-btn>
                    </v-row>
                </v-time-picker>
            </v-card>
        </v-menu>
    </div>
</template>
<script>
export default {
    name: 'TimePicker',
    props: {
        buttonColor: { type: String, default: 'white' },
        buttonLabel: { type: String, default: 'Time' },
        icon: { type: String, default: 'mdi-clock' },
        format: { type: String, default: 'ampm' },
        value: { type: String, default: null },
        hasSecond: { type: Boolean, default: false },
        hasAlarm: { type: Boolean, default: true },
        isBtnBlock: { type: Boolean, default: false }
    },
    data: () => ({
        selected: [],
        members: [],
        menu: false,
        picker: null,
        alarm: false
    }),
    methods: {
        clear() {
            this.picker = null
        },
        cancel() {
            this.menu = false
        },
        save() {
            const tp = this.$refs.vtimepicker
            if (!tp.inputHour) {
                return
            }
            var payload = {
                hour: tp.lazyInputHour,
                hour24: tp.inputHour,
                mins: tp.inputMinute,
                secs: tp.inputSecond,
                period: tp.period,
                hi: `${tp.lazyInputHour}:${tp.inputMinute}`,
                his: `${tp.lazyInputHour}:${tp.inputMinute}:${tp.inputSecond}0`,
                Hms: `${tp.inputHour}:${tp.inputMinute}:${tp.inputSecond}0`,
                hia: `${tp.lazyInputHour}:${tp.inputMinute} ${tp.period}`,
                hisa: `${tp.lazyInputHour}:${tp.inputMinute}:${tp.inputSecond}0 ${tp.period}`,
                alarm: this.alarm
            }
            this.$emit('input', payload)
            this.cancel()
        },
        toggleAlarm() {
            this.alarm = !this.alarm
        }
    }
}
</script>
<style scoped>
>>>.v-picker__body {
    width: 240px;
}
</style>