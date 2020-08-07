<template>
    <v-layout justify-center>
        <v-dialog v-model="dialog" persistent :max-width="maxWidth" scrollable>
            <v-progress-linear v-if="loading" slot="progress" color="blue" indeterminate />
            <v-card class="custom__dialog" v-else>
                <div class="dialog__header">
                    <slot name="entire-header">
                        <slot name="title">
                            <h3 class="dialog__title">{{ title }}</h3>
                        </slot>
                        <slot name="extra-buttons" />
                        <slot name="cancel-icon">
                            <v-btn fab small depressed class="close__dialog" @click="close_dialog">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </slot>
                    </slot>
                    <slot name="below-title" />
                </div>
                <v-card-text class="dialog__body">
                    <slot name="content">
                        <div v-html="content" />
                    </slot>
                </v-card-text>
                <v-card-actions class="dialog__actions" v-if="hasFooter">
                    <slot name="entire-actions">
                        <slot name="extras" />
                        <slot name="button1">
                            <v-btn :disabled="btnloading" @click="button1clicked">{{ button1Text }}</v-btn>
                        </slot>
                        <slot name="button2">
                            <v-btn :loading="btnloading" :disabled="mainBtnDisabled" @click="button2clicked">
                                {{ button2Text }}
                            </v-btn>
                        </slot>
                    </slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script src="./CustomDialog.js"></script>
<style lang="scss" scoped src="./CustomDialog.scss"></style>
<style scoped src="./CustomDialog.css"></style>