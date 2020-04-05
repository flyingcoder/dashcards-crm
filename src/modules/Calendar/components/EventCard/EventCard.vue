<template>
<div class="event_card">
  <div class="card_header">
    <h3 class="card_title">
      <v-icon small :color="event.event_type.properties.color">mdi-checkbox-blank-circle</v-icon>
      {{ event.event_type.name }}
    </h3>
    <div class="card_actions">
      <v-btn fab small text color="#b3b7c3" v-if="can_edit" class="action" @click="$emit('edit-event')">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn fab small text color="#b3b7c3" v-if="can_delete" class="action" @click="$emit('delete-event')">
        <v-icon>delete</v-icon>
      </v-btn>
      <v-btn fab small text color="#b3b7c3" class="action" @click="$emit('view-event')">
        <v-icon>pageview</v-icon>
      </v-btn>
    </div>
  </div>
  <div class="card_body">
    <div class="event_time">{{ datetimedisplay }}</div>
    <h3 class="event_title">{{ event.title }}</h3>
    <div class="invited">
      <v-spacer></v-spacer>
      <Avatars :items="event.participants" :count="2" :deep="true"></Avatars>
      <v-spacer></v-spacer>
    </div>
  </div>
  <div class="card_footer">
    <v-btn v-if="is_creator" dark :color="event.event_type.properties.color" @click="$emit('add-participant')">
      <v-icon left small>mdi-email-send-outline</v-icon> Invite
    </v-btn>
    <v-btn v-else dark :color="event.event_type.properties.color" @click="$emit('leave-event')">
      <v-icon left small>mdi-email-receive-outline</v-icon> Leave Event
    </v-btn>
    <!-- <v-btn class="view_more" text color="white">View More</v-btn> -->
  </div>
</div>
</template>
<script src="./EventCard.js"></script>
<style lang="scss" scoped src="./EventCard.scss"></style>
