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
                                <v-carousel-item :key="slide.id" v-for="(slide, i) in items">
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
                                                        <v-btn dark icon v-on="on">
                                                            <v-icon>mdi-dots-horizontal</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list dense>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_add_event_dialog(true, slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>edit</v-icon>
                                                                Edit
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_delete_dialog(slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>delete</v-icon>
                                                                Delete
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item :disabled="!is_owner(slide)"
                                                                     @click="open_event_detail_dialog(slide)"
                                                        >
                                                            <v-list-item-title>
                                                                <v-icon left small>pageview</v-icon>
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
                                                <Avatars :count="4" :deep="true" :items="slide.participants"
                                                         class="a-imgs"
                                                />
                                            </div>
                                            <v-btn @click="open_add_participant_dialog(slide)" dark outlined
                                                   v-if="is_owner(slide)"
                                            >
                                                Invite
                                            </v-btn>
                                            <v-btn @click="open_confirm_leave_dialog(slide)" dark outlined v-else>
                                                Leave
                                            </v-btn>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </div>
                    </div>
                    <Empty headline="No Alarm Yet" v-if="items.length === 0"/>
                    <v-list dense v-else>
                        <v-list-item-group dense>
                            <v-list-item :key="item.id" v-for="item in items">
                                <v-list-item-content>
                                    <v-row no-gutters>
                                        <v-col class="body-2" md="6">
                                            <v-icon :color="item.event_type.properties.color" small>mdi-circle</v-icon>
                                            {{ item.title }}
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
                                                            <v-icon left small>edit</v-icon>
                                                            Edit
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item :disabled="!is_owner(item)"
                                                                 @click="open_delete_dialog(item)"
                                                    >
                                                        <v-list-item-title>
                                                            <v-icon left small>delete</v-icon>
                                                            Delete
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item :disabled="!is_owner(item)"
                                                                 @click="open_event_detail_dialog(item)"
                                                    >
                                                        <v-list-item-title>
                                                            <v-icon left small>pageview</v-icon>
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
                           text-content="Leave this event?" title="Confirmation required!"
            />
            <EventDialog :calendar="calendar" :dialogTitle="event_dialog_title" :fieldsToEdit="eventToEdit"
                         :isEditDialog="isEventEditDialog" @event-updated="updated_event"
                         @new-event-added="insert_new_event"
                         @open-custom-event-type="open_add_event_type_dialog" ref="event_dialog"
            />
            <EventTypeDialog :calendar="calendar" @new-event-type-added="insert_new_event_type" ref="event_type_dialog"
                             v-if="calendar"
            />
            <EventDetailDialog :event="eventToEdit" @add-participant="open_add_participant_dialog(eventToEdit)"
                               @delete-event="open_delete_dialog(eventToEdit)"
                               @edit-event="open_add_event_dialog(true, eventToEdit)"
                               ref="event_detail_dialog"
            />
            <AddParticipantDialog :event="eventToEdit" @participants-refresh="refreshParticipants"
                                  ref="add_participant_dialog"
            />
        </div>
    </div>
</template>
<script src="./AlarmCard.js"></script>
<style lang="scss" scoped src="./AlarmCard.scss"></style>