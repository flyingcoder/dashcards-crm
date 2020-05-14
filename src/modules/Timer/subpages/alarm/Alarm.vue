<template>
    <div class="alarm">
        <table-header :paths="paths" :noButton="true">
            <template v-slot:form-btn>
                <v-btn fab outlined small class="mx-1" color="gray" icon>
                    <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
                <v-btn fab outlined small class="mx-1" color="gray" icon @click="minimize">
                    <v-icon>close</v-icon>
                </v-btn>
            </template>
        </table-header>
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading" title="Alarms" :key="componentKey" :noMoreData="noMoreData" :showSelect="false">
            <template v-slot:header-toolbar>
                <v-btn-toggle mandatory v-model="timer_tab" :value="timer_tab" @change="handleChangeTab">
                    <v-btn text class="px-5" value="task-timers">
                        <v-icon left>mdi-folder-clock-outline</v-icon> Task Timers
                    </v-btn>
                    <v-btn text class="px-5" value="global-timers">
                        <v-icon left>mdi-account-clock</v-icon> Global Timers
                    </v-btn>
                    <v-btn text class="px-5" value="alarm">
                        <v-icon left>mdi-clock-digital</v-icon> Alarms
                    </v-btn>
                </v-btn-toggle>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ item.title | ucwords | truncate }}</td>
                <td>
                    <Avatars :items="item.participants" deep :count="3" style="display:inline-block;"></Avatars>
                </td>
                <td>
                    <v-icon :color="item.event_type.properties.color" left>mdi-circle</v-icon>
                    {{ item.event_type.name }}
                </td>
                <td>{{ item.start | format('MMM DD YYYY') }}</td>
                <td>{{ item.start | format('HH:mm:ss') }}</td>
                <td>
                    <v-tooltip left v-if="is_event_owner(item)">
                        <template v-slot:activator="{ on }">
                            <v-icon small class="mx-1" v-on="on" @click="open_delete_dialog(item)">delete</v-icon>
                        </template>
                        <span>Delete Event</span>
                    </v-tooltip>
                    <!-- <v-tooltip left v-if="is_event_owner(item)">
            <template v-slot:activator="{ on }">
              <v-icon small class="mx-1" v-on="on" @click="open_add_event_dialog(true, item)"
                >edit</v-icon
              >
            </template>
            <span>Edit Event</span>
          </v-tooltip> -->
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-icon small class="mx-1" v-on="on" @click="open_event_detail_dialog(item)">pageview</v-icon>
                        </template>
                        <span>View Event</span>
                    </v-tooltip>
                    <v-tooltip left v-if="!is_event_owner(item)">
                        <template v-slot:activator="{ on }">
                            <v-icon small class="mx-1" v-on="on" @click="open_confirm_leave_dialog(item)">mdi-email-receive-outline</v-icon>
                        </template>
                        <span>Leave Event</span>
                    </v-tooltip>
                </td>
            </template>
        </VueTable>
        <calendar-dialog :dialog.sync="add_dialog" ref="add_dialog" dialogTitle="Add New Calendar" @save="add_item('add_new_calendar', $event)" />
        <calendar-dialog :dialog.sync="edit_dialog" ref="edit_dialog" dialogTitle="Edit Calendar" :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item" @save="update_item('edit_calendar', $event)" />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Event" ref="delete_event_dialog" text-content="Are you sure you want to delete this event?" @delete="closeDialogAndDelete" />
        <ConfirmDialog ref="confirm_leave_event" title="Confirmation required!" confirm-button-text="Yes" text-content="Leave this event?" @confirm="confirmed_leave" />
        <EventDialog ref="event_dialog" :dialogTitle="event_dialog_title" :isEditDialog="isEventEditDialog" :fieldsToEdit="eventToEdit" :calendar="calendar" @new-event-added="insert_new_event" @event-updated="updated_event" @open-custom-event-type="open_add_event_type_dialog"></EventDialog>
        <EventTypeDialog ref="event_type_dialog" :calendar="calendar" @new-event-type-added="insert_new_event_type"></EventTypeDialog>
        <EventDetailDialog ref="event_detail_dialog" :event="eventToEdit" @edit-event="open_add_event_dialog(true, eventToEdit)" @delete-event="open_delete_dialog(eventToEdit)" @add-participant="open_add_participant_dialog(eventToEdit)"></EventDetailDialog>
        <AddParticipantDialog ref="add_participant_dialog" :event="eventToEdit" @participants-refresh="refreshParticipants">
        </AddParticipantDialog>
    </div>
</template>
<script src="./Alarm.js"></script>
<style lang="scss" scoped src="./Alarm.scss"></style>