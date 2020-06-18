<template>
    <div class="text-center">
        <v-menu :close-on-content-click="false" :nudge-width="200" offset-y :max-width="300" v-model="menu" :close-on-click="false">
            <template v-slot:activator="{ on }">
                <slot name="trigger-btn" :props="on">
                    <v-btn :color="buttonColor" v-on="on" :block="isBtnBlock">
                        <v-icon left>{{ icon }}</v-icon> {{ buttonLabel }}
                    </v-btn>
                </slot>
            </template>
            <v-card class="pa-0">
                <v-date-picker style="width:100%;" clearable color="#657186" v-model="picker_date" :max="max" :min="min" :no-title="noTitle" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text outlined color="#657186" @click="cancel">Cancel</v-btn>
                    <v-btn text outlined color="#657186" @click="clear">Clear</v-btn>
                    <v-btn text outlined color="primary" @click="save">Save</v-btn>
                    <v-spacer></v-spacer>
                </v-date-picker>
            </v-card>
        </v-menu>
    </div>
</template>
<script>
export default {
    name: 'DatePicker',
    props: {
        buttonColor: { type: String, default: 'white' },
        buttonLabel: { type: String, default: 'Date' },
        icon: { type: String, default: 'mdi-calendar' },
        value: { type: String, default: null },
        min: { type: String, default: null },
        max: { type: String, default: null },
        noTitle: { type: Boolean, default: true },
        isBtnBlock: { type: Boolean, default: false }
    },
    data: () => ({
        selected: [],
        members: [],
        menu: false,
        picker_date: null
    }),
    methods: {
        clear() {
            this.picker_date = null
        },
        cancel() {
            this.menu = false
        },
        save() {
            this.$emit('input', this.picker_date)
            this.cancel()
        }
    }
}
</script>