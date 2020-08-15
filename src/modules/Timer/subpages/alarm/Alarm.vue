<template>
    <div class="alarm">
        <div class="timer-actions text-right mb-4">
            <v-btn fab small dark color="#3b589e" class="mr-1" @click="open_add_event_dialog(false, null)">
                <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <v-btn fab small dark color="#3b589e" class="mr-1" @click="minimize">
                <v-icon>mdi-close-circle-outline</v-icon>
            </v-btn>
        </div>

        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading"
                  title="Alarms" icon="mdi-alarm-off" emptyText="No alarm yet" :key="componentKey"
                  :noMoreData="noMoreData" :showSelect="false"
        >
            <template v-slot:header-toolbar>
                <v-btn-toggle class="tab-buttons" mandatory v-model="timer_tab" :value="timer_tab"
                              @change="handleChangeTab"
                >
                    <v-btn text class="px-5" value="task-timers">
                        <v-icon left>mdi-folder-clock-outline</v-icon>
                        Task Timers
                    </v-btn>
                    <v-btn text class="px-5" value="global-timers">
                        <v-icon left>mdi-account-clock</v-icon>
                        Global Timers
                    </v-btn>
                    <v-btn text class="px-5" value="alarm">
                        <v-icon left>mdi-alarm-multiple</v-icon>
                        Alarms
                    </v-btn>
                </v-btn-toggle>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ item.title | ucwords | truncate }}</td>
                <td>
                    <Avatars :items="item.users" :count="3" style="display:inline-block;"/>
                </td>
                <td>
                    <v-icon :color="item.event_type.properties.color" left>mdi-circle</v-icon>
                    {{ item.event_type.name | ucwords }}
                </td>
                <td>{{ item.start | format('MMM DD YYYY') }}</td>
                <td>{{ item.start | format('HH:mm A') }}</td>
                <td>
                    <v-tooltip left v-if="is_event_owner(item)">
                        <template v-slot:activator="{ on }">
                            <v-icon class="mx-1" v-on="on" @click="open_delete_dialog(item)">mdi-delete-circle-outline
                            </v-icon>
                        </template>
                        <span>Delete Event</span>
                    </v-tooltip>
                    <v-tooltip left v-if="is_event_owner(item)">
                        <template v-slot:activator="{ on }">
                            <v-icon class="mx-1" v-on="on" @click="open_add_event_dialog(true, item)">
                                mdi-circle-edit-outline
                            </v-icon>
                        </template>
                        <span>Edit Event</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-icon class="mx-1" v-on="on" @click="open_event_detail_dialog(item)">
                                mdi-eye-circle-outline
                            </v-icon>
                        </template>
                        <span>View Event</span>
                    </v-tooltip>
                    <v-tooltip left v-if="is_event_owner(item)">
                        <template v-slot:activator="{ on }">
                            <v-icon class="mx-1" v-on="on" @click="open_confirm_leave_dialog(item)">
                                mdi-email-receive-outline
                            </v-icon>
                        </template>
                        <span>Leave Event</span>
                    </v-tooltip>
                </td>
            </template>
        </VueTable>
        <calendar-dialog :dialog.sync="add_dialog" ref="add_dialog" dialogTitle="Add New Calendar"
                         @save="add_item('add_new_calendar', $event)"
        />
        <calendar-dialog :dialog.sync="edit_dialog" ref="edit_dialog" dialogTitle="Edit Calendar"
                         :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item"
                         @save="update_item('edit_calendar', $event)"
        />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Event" ref="delete_event_dialog"
                       text-content="Are you sure you want to delete this event?" @delete="closeDialogAndDelete"
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
        <EventTypeDialog ref="event_type_dialog" :calendar="calendar" @new-event-type-added="insert_new_event_type"/>
        <EventDetailDialog ref="event_detail_dialog" :event="eventToEdit"
                           @edit-event="open_add_event_dialog(true, eventToEdit)"
                           @delete-event="open_delete_dialog(eventToEdit)"
                           @add-participant="open_add_participant_dialog(eventToEdit)"
        />
        <AddParticipantDialog ref="add_participant_dialog" :event="eventToEdit"
                              @participants-refresh="refreshParticipants"
        />
    </div>
</template>
<script src="./Alarm.js"></script>
<style lang="scss" scoped src="./Alarm.scss"></style>