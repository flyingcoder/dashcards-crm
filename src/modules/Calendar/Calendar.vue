<template>
  <div class="calendar">
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
      v-if="calendar"
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
      v-if="calendar"
      ref="event_type_dialog"
      :calendar="calendar"
      @new-event-type-added="insert_new_event_type"
    ></EventTypeDialog>

    <EventDetailDialog
      v-if="eventToEdit"
      ref="event_detail_dialog"
      :event="eventToEdit"
      @edit-event="open_add_event_dialog(true, eventToEdit)"
      @delete-event="open_delete_dialog(eventToEdit)"
      @add-participant="open_add_participant_dialog(eventToEdit)"
    ></EventDetailDialog>

    <AddParticipantDialog
      v-if="eventToEdit"
      ref="add_participant_dialog"
      :event="eventToEdit"
      @participants-refresh="refreshParticipants"
    >
    </AddParticipantDialog>

    <table-header :paths="paths" :noButton="true" />

    <div class="calendar-wrapper">
      <div class="calendar-content">
        <div class="calendar_header">
          <div class="left_option">
            <v-btn
              dark
              color="#3b589e"
              large
              @click="open_add_event_dialog(false)"
              >Add Event</v-btn
            >
            <v-btn
              dark
              color="#3b589e"
              large
              @click="open_add_event_type_dialog"
              >Customize Event</v-btn
            >
            <span class="date_title"> {{ selected_date }}</span>
          </div>
          <div class="right_option">
            <v-btn
              fab
              large
              text
              :color="view == 'list' ? 'primary' : ''"
              @click="view = 'list'"
              class="mr-1 action"
              ><v-icon>list</v-icon></v-btn
            >
            <v-btn
              fab
              large
              text
              :color="view == 'grid' ? 'primary' : ''"
              @click="view = 'grid'"
              class="mr-1 action"
              ><v-icon>grid_on</v-icon></v-btn
            >
            <div class="event_tab">
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
            </div>
          </div>
        </div>

        <div class="calendar_body">
          <div class="left">
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
            <vc-calendar
              ref="vccalendar"
              :attributes="attributes"
              is-expanded
              class="px-3"
              @dayclick="dayclick"
            ></vc-calendar>

            <div class="calendar_label" v-if="calendar">
              <div class="label_left">
                <h3>Events</h3>
                <div class="event-item" v-for="elabel in calendar.event_types">
                  <v-avatar
                    width="15"
                    height="15"
                    min-width="15"
                    :color="elabel.properties.color"
                    ><span></span
                  ></v-avatar>
                  <div class="event-title">{{ elabel.name }}</div>
                </div>
              </div>
              <div class="label_right">
                <h3>Calendars</h3>
                <v-checkbox
                  hide-details
                  input-value="true"
                  value
                  disabled
                  :label="calendar.title"
                ></v-checkbox>
              </div>
            </div>
          </div>

          <div class="right">
            <EventCard
              v-if="view === 'grid'"
              v-for="(event, index) in items"
              :event="event"
              :key="event.id"
              @edit-event="open_add_event_dialog(true, event)"
              @delete-event="open_delete_dialog(event)"
              @leave-event="open_confirm_leave_dialog(event)"
              @view-event="open_event_detail_dialog(event)"
              @add-participant="open_add_participant_dialog(event)"
            ></EventCard>

            <VueTable
              v-if="view == 'list'"
              :items="items"
              :headers="headers"
              :showRowActions="true"
              @load-more="load_more_events"
              @delete-selected="open_bulk_delete_dialog($event)"
              icon="widgets"
              :showTopHeader="false"
              :key="componentKey"
              :noMoreData="noMoreData"
              :showSelect="false"
            >
              <template v-slot:row-slot="{ item }">
                <td>{{ item.title }}</td>
                <td>{{ datetimedisplay(item) }}</td>
                <td>
                  <Avatars
                    :items="item.participants"
                    :count="2"
                    :deep="true"
                  ></Avatars>
                </td>
                <Actions
                  :item="item"
                  @delete="open_delete_dialog(item)"
                  @edit="open_edit_dialog(item)"
                  @view="open_event_detail_dialog(item)"
                ></Actions>
              </template>
              <template v-slot:empty-slot>
                <v-btn
                  dark
                  color="#3b589e"
                  @click="open_add_event_dialog(false)"
                  >Add Event</v-btn
                >
              </template>
            </VueTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Calendar.js"></script>
<style lang="scss" scoped src="./Calendar.scss"></style>
<style lang="css" scoped>
>>> .event_tab
  .v-item-group.theme--light.v-slide-group.v-tabs-bar.primary--text {
  height: 35px !important;
}
</style>
