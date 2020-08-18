<template>
    <div class="timer-card">
        <div class="timer__content">
            <dash-card :dashboard="dashboard" :hasAdd="true" :view-more-link="viewMoreLink"
                       @add="open_add_event_dialog(false)"
                       @close="$emit('close')" @expand="expand" class="timer__content" title="Alarm"
            >
                <div slot="content">
                    <div class="timer" v-if="items.length === 0">
                        <div class="date">{{ dayNow }} {{ dateNow }}</div>
                        <div class="time">{{ timeNow }}</div>
                    </div>
                    <div class="alarm" v-else>
                        <div class="alarm-body">
                            <v-carousel height="auto" hide-delimiters show-arrows>
                                <v-carousel-item :key="slide.id" v-for="slide in items">
                                    <v-sheet color="transparent">
                                        <div class="alarm-header">
                                            <div class="a-label">
                                                <v-icon :color="slide.event_type.properties.color" small>
                                                    mdi-circle
                                                </v-icon>
                                                <span class="body-2">{{ slide.event_type.name }}</span>
                                            </div>
                                            <div class="a-date">
                                                <h3>{{ slide.start | format('MMMM D, YYYY') }}</h3>
                                                <span>{{ slide.start | format('HH:mm A') }}</span>
                                            </div>
                                            <div class="a-actions">
                                                <v-menu bottom left>
                                                    <template v-slot:activator="{ on }">
                                                        <v-btn icon small v-on="on">
                                                            <v-icon small>mdi-dots-horizontal</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list dense>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_add_event_dialog(true, slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>mdi-circle-edit-outline</v-icon>
                                                                Edit
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_delete_dialog(slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>mdi-delete-circle-outline</v-icon>
                                                                Delete
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_event_detail_dialog(slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>mdi-eye-circle-outline</v-icon>
                                                                View
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                        </div>
                                        <div class="a-slide">
                                            <h4 class="a-title">{{ slide.title }}</h4>
                                            <div class="a-members">
                                                <Avatars :count="5" :items="slide.users"
                                                         class="a-imgs"
                                                />
                                            </div>
                                            <v-btn @click="open_add_participant_dialog(slide)" dark outlined
                                                   v-if="is_owner(slide)"
                                            >
                                                Invite
                                            </v-btn>
                                            <v-btn class="ml-1" @click="open_confirm_leave_dialog(slide)" dark outlined>
                                                Leave
                                            </v-btn>
                                            <v-btn class="ml-1" v-if="slide.properties.link"
                                                   :href="slide.properties.link"
                                                   target="_blank" @click="open_confirm_leave_dialog(slide)" dark
                                                   outlined
                                            >
                                                Open Link
                                            </v-btn>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </div>
                    </div>
                    <Empty headline="No Alarm Yet" v-if="items.length === 0" />
                    <v-list dense v-else>
                        <v-list-item-group dense>
                            <v-list-item :key="item.id" v-for="item in items">
                                <v-list-item-content>
                                    <v-row no-gutters>
                                        <v-col class="body-2" md="6">
                                            <v-icon :color="item.event_type.properties.color" small>mdi-circle</v-icon>
                                            {{ item.title | ucwords }}
                                        </v-col>
                                        <v-col class="body-2" md="5">{{ item.start | format }}</v-col>
                                        <v-col class="body-2" md="1">
                                            <v-menu bottom left>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn icon small v-on="on">
                                                        <v-icon small>mdi-dots-horizontal</v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list dense>
                                                    <v-list-item :disabled="!is_owner(item)"
                                                                 @click="open_add_event_dialog(true, item)"
                                                    >
                                                        <v-list-item-title>
                                                            <v-icon left small>mdi-circle-edit-outline</v-icon>
                                                            Edit
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item :disabled="!is_owner(item)"
                                                                 @click="open_delete_dialog(item)"
                                                    >
                                                        <v-list-item-title>
                                                            <v-icon left small>mdi-delete-circle-outline</v-icon>
                                                            Delete
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item :disabled="!is_owner(item)"
                                                                 @click="open_event_detail_dialog(item)"
                                                    >
                                                        <v-list-item-title>
                                                            <v-icon left small>mdi-eye-circle-outline</v-icon>
                                                            View
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
            </dash-card>
            <delete-dialog :open-dialog.sync="delete_dialog" @delete="closeDialogAndDelete" ref="delete_event_dialog"
                           text-content="Are you sure you want to delete this event?" title="Delete Event"
            />
            <ConfirmDialog @confirm="confirmed_leave" confirm-button-text="Yes" ref="confirm_leave_event"
                           title="Confirmation required!"
            >
                <template v-slot:content>
                    <v-row no-gutters>
                        <v-col md="12" class="title">
                            <v-banner two-line outlined tile>
                                <v-avatar slot="icon" color="deep-purple accent-4" size="40">
                                    <v-icon icon="mdi-lock" color="white">
                                        mdi-clipboard-check-outline
                                    </v-icon>
                                </v-avatar>
                                <p>Leave this event?</p>
                            </v-banner>
                        </v-col>
                    </v-row>
                </template>
            </ConfirmDialog>
            <EventDialogV2 :dialog="open_event_dialog" :eventToEdit="eventToEdit" :calendar="calendar"
                           :is-edit="isEventEditDialog" force-alarm
                           @open-custom-event-type="open_add_event_type_dialog"
                           @new-event-added="insert_new_event"
                           @event-updated="updated_event"
                           @cancel="open_event_dialog = false"
            />
            <EventTypeDialog :calendar="calendar" @new-event-type-added="insert_new_event_type" ref="event_type_dialog"
                             v-if="calendar"
            />
            <EventDetailDialog ref="event_detail_dialog" :event="eventToEdit" />
            <AddParticipantDialog ref="add_participant_dialog" :event="eventToEdit"
                                  @participants-refresh="refreshParticipants"
            />
        </div>
    </div>
</template>
<script src="./AlarmCard.js"></script>
<style lang="scss" scoped src="./AlarmCard.scss"></style>