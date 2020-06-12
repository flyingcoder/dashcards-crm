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
    computed:{
        tp() {
            return this.$refs.vtimepicker
        }
    },
    methods: {
        clear() {
            this.picker = null
        },
        cancel() {
            this.menu = false
        },
        save() {
            var payload = {
                hour: this.tp.lazyInputHour,
                hour24: this.tp.inputHour,
                mins: this.tp.inputMinute,
                secs: this.tp.inputSecond,
                period: this.tp.period,
                hi: `${this.tp.inputHour}:${this.tp.inputMinute}`,
                his: `${this.tp.genValue()}:${this.tp.inputSecond}0`,
                Hms: `${this.tp.genValue()}:${this.tp.inputSecond}0`,
                hia: `${this.tp.lazyInputHour}:${this.tp.inputMinute} ${this.tp.period}`,
                hisa: `${this.tp.lazyInputHour}:${this.tp.inputMinute}:${this.tp.inputSecond}0 ${this.tp.period}`,
                alarm: this.alarm
            }
            // console.log(payload)
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