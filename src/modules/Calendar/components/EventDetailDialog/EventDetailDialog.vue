<template>
    <v-dialog v-model="dialog" scrollable max-width="600px" persistent>
        <v-card class="custom__dialog" v-if="event">
            <v-card-title class="dialog__header">
                <h3 class="dialog__title">{{ dialogTitle }}</h3>
                <v-spacer />
                <v-btn fab small depressed class="close__dialog" @click="clear_and_close">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="dialog__body">
                <v-row no-gutters class="justify-center align-center">
                    <label>{{ event_date }}</label>
                    <v-divider class="mx-2" vertical />
                    <label>{{ event_time }}</label>
                    <v-icon v-if="event && event.properties.alarm" right small>mdi-bell</v-icon>
                    <v-spacer />
                    <v-tooltip top v-if="can_edit_event">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn outlined @click="emitEvents('edit-event', event)" class="mr-1" color="#b3b7c3" icon v-bind="attrs"
                                   v-on="on"
                            >
                                <v-icon>mdi-calendar-edit</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit Event</span>
                    </v-tooltip>
                    <v-tooltip top v-if="can_delete_event">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn outlined @click="emitEvents('delete-event', event)" class="mr-1" color="#b3b7c3" icon v-bind="attrs"
                                   v-on="on"
                            >
                                <v-icon>mdi-calendar-remove</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete Event</span>
                    </v-tooltip>
                    <v-tooltip top v-if="can_add_participants">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn outlined @click="emitEvents('add-participant', event)" class="mr-1" color="#b3b7c3" icon v-bind="attrs"
                                   v-on="on"
                            >
                                <v-icon>mdi-account-multiple-plus-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>Manage Participants</span>
                    </v-tooltip>
                </v-row>
                <v-row no-gutters v-if="event">
                    <v-col md="12" class="pa-4">
                        <v-avatar size="20" :color="event.event_type.properties.color" />
                        <span class="font-weight-medium title">
                                {{ event.event_type.name }}</span>
                    </v-col>
                    <v-col md="4" class="pa-4">
                        <Avatars :items="event.users" :hasAddMember="can_add_participants" :count="7"
                                 @add-member="emitEvents('add-participant', event)"
                        />
                    </v-col>
                    <v-col md="12" class="pa-4">
                        <div v-if="event.description" class="responsive" v-html="event.description" />
                        <div v-if="event.properties.link" class="responsive">
                            Link :
                            <v-btn dark depressed color="#3b589e" class="link-btn ml-1" :href="event.properties.link"
                                   target="_blank"
                            >
                                <v-icon left small>mdi-account-tie-voice-outline</v-icon>
                                Open Link
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col>
                        <v-divider />
                        <Comment :items="all_comments" :addApi="addCommentApi"
                                 :deleteApi="deleteCommentApi"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script src="./EventDetailDialog.js"></script>
<style lang="scss" scoped src="./EventDetailDialog.scss"></style>
<style scoped>
    >>> .rich-editor .ql-editor {
        min-height: 100px;
    }

    >>> .responsive img {
        max-width: 100%;
    }
</style>