<template>
  <div class="calendar-card">
    <div class="calendar__content">
      <calendar-dialog
        :dialog.sync="add_dialog"
        ref="add_dialog"
        dialogTitle="Add New Calendar"
        @save="add_item('add_new_calendar', $event)"
      />

      <calendar-dialog
        :dialog.sync="edit_dialog"
        ref="edit_dialog"
        dialogTitle="Edit Calendar"
        :is-edit-dialog="edit_dialog"
        :fields-to-edit="edit_item"
        @save="update_item('edit_calendar', $event)"
      />

      <delete-dialog
        :open-dialog.sync="delete_dialog"
        title="Delete Event"
        ref="delete_event_dialog"
        text-content="Are you sure you want to delete this event?"
        @delete="closeDialogAndDelete"
      />

      <ConfirmDialog
        ref="confirm_leave_event"
        title="Confirmation required!"
        confirm-button-text="Yes"
        text-content="Leave this event?"
        @confirm="confirmed_leave"
      />

      <EventDialog
        ref="event_dialog"
        :dialogTitle="event_dialog_title"
        :isEditDialog="isEventEditDialog"
        :fieldsToEdit="eventToEdit"
        :calendar="calendar"
        @new-event-added="insert_new_event"
        @event-updated="updated_event"
        @open-custom-event-type="open_add_event_type_dialog"
      ></EventDialog>

      <EventTypeDialog
        ref="event_type_dialog"
        :calendar="calendar"
        @new-event-type-added="insert_new_event_type"
      ></EventTypeDialog>

      <EventDetailDialog
        ref="event_detail_dialog"
        :event="eventToEdit"
        @edit-event="open_add_event_dialog(true, eventToEdit)"
        @delete-event="open_delete_dialog(eventToEdit)"
        @add-participant="open_add_participant_dialog(eventToEdit)"
      ></EventDetailDialog>

      <AddParticipantDialog
        ref="add_participant_dialog"
        :event="eventToEdit"
        @participants-refresh="refreshParticipants"
      >
      </AddParticipantDialog>

      <dash-card
        title="Calendar"
        @close="$emit('close')"
        class="calendar__content"
        :viewMoreBtn="!noMoreData"
        :view-more-link="viewMoreLink"
        @view-more="load_more_events"
        :dashboard="dashboard"
        @expand="expand"
      >
        <div class="calendar__inner_content" slot="content">
          <v-progress-linear
            v-if="loading"
            :indeterminate="true"
          ></v-progress-linear>

          <v-row no-gutters>
            <v-col md="12" class="mb-1">
              <vc-calendar
                ref="vccalendar"
                :attributes="attributes"
                is-expanded
                class="px-3"
                @dayclick="dayclick"
              ></vc-calendar>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col md="6">
              <div class="date">
                <div class="date_icon">
                  <svg viewBox="0 0 250 250">
                    <path class="icon" :d="icon"></path>
                  </svg>
                </div>
                <div class="date_text">
                  <h3>Today</h3>
                  <div>{{ today }}</div>
                </div>
              </div>
            </v-col>
            <v-col md="6">
              <v-tabs
                class="event_tab_items"
                centered
                grow
                hide-slider
                v-model="active_tab"
              >
                <v-tab key="all" @click="tabFilter('all')">All</v-tab>
                <v-tab key="today" @click="tabFilter('today')">Today</v-tab>
              </v-tabs>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <EventCard
                v-for="(event, index) in items"
                :event="event"
                :key="event.id"
                :avatarCount="3"
                @edit-event="open_add_event_dialog(true, event)"
                @delete-event="open_delete_dialog(event)"
                @leave-event="open_confirm_leave_dialog(event)"
                @view-event="open_event_detail_dialog(event)"
                @add-participant="open_add_participant_dialog(event)"
              ></EventCard>
            </v-col>
          </v-row>
        </div>
      </dash-card>
    </div>
  </div>
</template>

<script src="./CalendarCard.js"></script>
<style lang="scss" scoped src="./CalendarCard.scss"></style>
<style scoped>
>>> .card__content .calendar__inner_content {
  width: 100%;
}
>>> .event_card {
  margin: 2px auto;
}
</style>
