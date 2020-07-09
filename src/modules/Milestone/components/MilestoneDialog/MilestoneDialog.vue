<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save">
        <template slot="content">
            <v-text-field class="dialog__textfield d-field" label="Milestone Title" v-model.trim="title" filled counter maxlength="30"></v-text-field>
            <v-select class="dialog__selectfield d-field" label="Status" v-model.trim="status" :items="['Active', 'Inactive']" filled hide-details></v-select>
            <v-checkbox v-model="disabled" class="mx-2" label="No Specific Days"></v-checkbox>
            <v-text-field class="dialog__textfield d-field" label="Days" v-model.number="days" type="number" filled hide-details :disabled="disabled"></v-text-field>
        </template>
    </custom-dialog>
</template>
<script src="./MilestoneDialog.js"></script>
<style lang="scss" scoped src="./MilestoneDialog.scss"></style>