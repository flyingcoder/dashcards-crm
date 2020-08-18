<template>
    <v-row justify="center" v-if="event">
        <v-dialog v-model="dialog" scrollable max-width="700px" persistent>
            <v-card class="custom__dialog add-participant">
                <v-card-title class="dialog__header">
                    <h3 class="dialog__title">{{ dialogTitle }}</h3>
                    <v-spacer />
                    <v-btn fab small depressed class="close__dialog" @click="clear_and_close">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="6">
                            <v-list dense max-height="400" style="overflow-y: auto">
                                <v-subheader class="subtitle-2">Members ({{ members.original.length }})</v-subheader>
                                <template v-if="available.length > 0">
                                    <v-list-item v-for="(user, index) in available" :key="index"
                                                 @click="add_to(user, index)"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="user.image_url" />
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ user.fullname | ucwords }}</v-list-item-title>
                                            <v-list-item-subtitle>{{ user.job_title | ucwords }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon>mdi-account-arrow-right-outline</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-col>
                        <v-col cols="6">
                            <v-list dense max-height="400" style="overflow-y: auto">
                                <v-subheader class="subtitle-2">Selected ({{ members.selected.length }})</v-subheader>
                                <template v-if="members.selected.length > 0">
                                    <v-list-item v-for="(user,index) in members.selected" :key="index"
                                                 @click="remove_from(user, index)"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="user.image_url" />
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ user.fullname | ucwords }}</v-list-item-title>
                                            <v-list-item-subtitle>{{ user.job_title | ucwords }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon>mdi-account-arrow-left-outline</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="dialog__actions">
                    <v-spacer />
                    <v-btn @click="clear_and_close" class="dialog__actions_btn">Cancel</v-btn>
                    <v-btn class="dialog__actions_btn" :loading="btnloading" :disabled="disabled" @click="save">
                        Save
                    </v-btn>
                    <v-spacer />
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="./AddParticipantDialog.js"></script>
<style lang="scss" src="./AddParticipantDialog.scss"></style>
<style lang="css" scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }
</style>