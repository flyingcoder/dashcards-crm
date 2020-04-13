<template>
  <div class="timer-card">
    <div class="timer__content">
      <dash-card
        title="Alarm"
        :view-more-link="viewMoreLink"
        class="timer__content"
        :dashboard="dashboard"
        @close="$emit('close')"
        :hasAdd="true"
        @add="open_add_event_dialog(false)"
      >
        <div slot="content">
          <div class="timer" v-if="items.length === 0">
            <div class="date">{{ dayNow }} {{ dateNow }}</div>
            <div class="time">{{ timeNow }}</div>
          </div>
          <div class="alarm" v-else>
            <div class="alarm-body">
              <v-carousel hide-delimiters show-arrows height="auto">
                <v-carousel-item v-for="(slide, i) in items" :key="slide.id">
                  <v-sheet color="transparent">
                    <div class="alarm-header">
                      <div class="a-label">
                        <v-icon :color="slide.event_type.properties.color" small>mdi-circle</v-icon>
                        <span class="body-2">{{slide.event_type.name}}</span>
                      </div>
                      <div class="a-date">
                        <h3>{{slide.start | format('MMMM D, YYYY') }}</h3>
                        <span>{{slide.start | format('HH:mm A') }}</span>
                      </div>
                      <div class="a-actions">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on }">
                            <v-btn dark  icon v-on="on" >
                              <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                          </template>
                          <v-list dense>
                            <v-list-item :disabled="!is_owner(slide)" @click="open_add_event_dialog(true, slide)">
                              <v-list-item-title><v-icon left small>edit</v-icon>Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item :disabled="!is_owner(slide)" @click="open_delete_dialog(slide)"  >
                              <v-list-item-title><v-icon left small>delete</v-icon>Delete</v-list-item-title>
                            </v-list-item>
                            <v-list-item :disabled="!is_owner(slide)" @click="open_event_detail_dialog(slide)" >
                              <v-list-item-title><v-icon left small>pageview</v-icon>View</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                    </div>
                    <div class="a-slide">
                      <h4 class="a-title">{{slide.title}}</h4>
                      <div class="a-members">
                        <Avatars class="a-imgs" 
                          :items="slide.participants" 
                          :count="4" 
                          :deep="true">
                        </Avatars>
                      </div>
                      <v-btn outlined dark @click="open_add_participant_dialog(slide)" v-if="is_owner(slide)">Invite</v-btn>
                      <v-btn outlined dark @click="open_confirm_leave_dialog(slide)" v-else>Leave</v-btn>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>

          <Empty headline="No Alarm Yet" v-if="items.length === 0"></Empty>
          <v-list dense v-else>
            <v-list-item-group >
              <v-list-item
                v-for="(item, i) in items"
                :key="item.id"
              >
                <v-list-item-content>
                  <v-col md="6" class="body-2">
                      <v-icon small :color="item.event_type.properties.color">mdi-circle</v-icon> 
                      {{item.title}}
                  </v-col>
                  <v-col md="5" class="body-2">{{item.start | format }}</v-col>
                  <v-col md="1">
                    <v-menu bottom left>
                      <template v-slot:activator="{ on }">
                        <v-btn small icon v-on="on" >
                          <v-icon small>mdi-dots-horizontal</v-icon>
                        </v-btn>
                      </template>
                      <v-list dense>
                        <v-list-item :disabled="!is_owner(item)" @click="open_add_event_dialog(true, item)">
                          <v-list-item-title><v-icon left small>edit</v-icon>Edit</v-list-item-title>
                        </v-list-item>
                        <v-list-item :disabled="!is_owner(item)" @click="open_delete_dialog(item)"  >
                          <v-list-item-title><v-icon left small>delete</v-icon>Delete</v-list-item-title>
                        </v-list-item>
                        <v-list-item :disabled="!is_owner(item)" @click="open_event_detail_dialog(item)" >
                          <v-list-item-title><v-icon left small>pageview</v-icon>View</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </dash-card>

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
            v-if="calendar"
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
    </div>
  </div>
</template>

<script src="./AlarmCard.js"></script>
<style lang="scss" src="./AlarmCard.scss" scoped></style>
