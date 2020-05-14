<template>
    <div class="project-details">
        <TableHeader :paths="paths" @click="addNewQuestion" />
        <CustomDialog title="Select service" v-model="serviceDialog">
            <template #cancel-icon>
                <span></span>
            </template>
            <template #content>
                <v-select v-model="service.selected" :items="service.items" :loading="service.loading" item-text="name" item-value="id" solo flat class="mt-3" label="Select Service"></v-select>
            </template>
            <template #entire-actions>
                <v-btn :to="{ name: 'default-content' }" class="mx-1">Cancel</v-btn>
                <v-btn :disabled="!service.selected" @click="save">Select</v-btn>
            </template>
        </CustomDialog>
        <div class="question-fields">
            <div class="service-name-label" v-if="serviceName">
                {{ serviceName }} Extra Inputs
            </div>
            <QuestionsFields :service-id="service.selected" v-if="!serviceDialog" :sections.sync="dynamicSections" />
        </div>
    </div>
</template>
<script src="./ProjectDetails.js"></script>
<style lang="scss" scoped src="./ProjectDetails.scss"></style>