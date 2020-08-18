<template>
    <div class="event_card">
        <div class="card_header">
            <h3 class="card_title">
                <v-icon :color="event.event_type.properties.color" small>mdi-checkbox-blank-circle</v-icon>
                {{ event.event_type.name | ucwords }}
            </h3>
            <div class="card_actions" v-if="!dense">
                <v-tooltip top v-if="can_edit">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="$emit('edit-event', event)" class="action" color="#b3b7c3" icon v-bind="attrs"
                               v-on="on"
                        >
                            <v-icon>mdi-calendar-edit</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit Event</span>
                </v-tooltip>
                <v-tooltip top v-if="can_delete">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="$emit('delete-event', event)" class="action" color="#b3b7c3" icon v-bind="attrs"
                               v-on="on"
                        >
                            <v-icon>mdi-calendar-remove</v-icon>
                        </v-btn>
                    </template>
                    <span>Delete Event</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="$emit('view-event', event)" class="action" color="#b3b7c3" icon v-bind="attrs"
                               v-on="on"
                        >
                            <v-icon>mdi-calendar-search</v-icon>
                        </v-btn>
                    </template>
                    <span>View Event</span>
                </v-tooltip>
            </div>
            <v-menu bottom left v-if="dense">
                <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                        <v-icon color="primary">mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="$emit('edit-event')">
                        <v-list-item-title>
                            <v-icon left>edit</v-icon>
                            Edit
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="$emit('delete-event')">
                        <v-list-item-title>
                            <v-icon left>delete</v-icon>
                            Delete
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="$emit('view-event')">
                        <v-list-item-title>
                            <v-icon left>pageview</v-icon>
                            View
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="card_body">
            <div class="event_time">{{ datetimedisplay }} <v-icon v-if="event.properties.alarm" right small>mdi-bell</v-icon></div>
            <h3 class="event_title">{{ event.title | ucwords }}</h3>
            <div class="invited">
                <v-spacer/>
                <Avatars :count="avatarCount" :items="event.users"/>
                <v-spacer/>
            </div>
        </div>
        <div class="card_footer">
            <v-btn :color="event.event_type.properties.color" @click="$emit('add-participant')" dark depressed
                   v-if="is_creator"
            >
                <v-icon left small>mdi-account-multiple-plus-outline</v-icon>
                Invite
            </v-btn>
            <v-btn :color="event.event_type.properties.color" @click="$emit('leave-event')" dark depressed v-else>
                <v-icon left small>mdi-account-arrow-left-outline</v-icon>
                Leave Event
            </v-btn>
            <v-btn :href="event.properties.link" class="link-btn ml-1" depressed target="_blank"
                   v-if="event.properties.link"
            >
                <v-icon left small>mdi-account-tie-voice-outline</v-icon>
                Open Link
            </v-btn>
            <v-btn @click="$emit('edit-event', event)" class="link-btn ml-1" depressed v-else>
                <v-icon left>insert_link</v-icon>
                Add Link
            </v-btn>
        </div>
    </div>
</template>
<script src="./EventCard.js"></script>
<style lang="scss" scoped src="./EventCard.scss"></style>