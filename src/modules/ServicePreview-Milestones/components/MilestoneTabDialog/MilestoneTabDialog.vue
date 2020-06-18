<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save">
        <template v-slot:content>
            <v-row>
                <v-col cols="12" class="pt-0">
                    <v-text-field class="dialog__textfield" filled hide-details color="#657186" label="Add milestone title" v-model.trim="title"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" class="pt-0">
                    <date-picker class="dialog__textfield" filled hide-details color="#657186" label="Start Date" prepend-inner-icon="event" readonly :value="start_date" @input="start_date_changed" :max="end_date" :hasButtons="false"></date-picker>
                </v-col>
                <v-col cols="12" md="6" class="pt-0">
                    <date-picker class="dialog__textfield" filled hide-details color="#657186" label="End Date" prepend-inner-icon="event" readonly :value="end_date" @input="end_date_changed" :min="start_date" :hasButtons="false"></date-picker>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="pt-0">
                    <v-text-field class="dialog__textfield" filled hide-details color="#657186" label="Add days" v-model.number="days" min="0" type="number"></v-text-field>
                </v-col>
            </v-row>
        </template>
    </custom-dialog>
</template>
<script src="./MilestoneTabDialog.js"></script>
<style lang="scss" scoped src="./MilestoneTabDialog.scss"></style>