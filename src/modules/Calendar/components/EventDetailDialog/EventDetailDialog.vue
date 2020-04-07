<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="600px" persistent>
      <v-card class="custom__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ dialogTitle }}</span>
          <v-spacer></v-spacer>
          <v-btn
            fab
            small
            depressed
            class="close__dialog"
            @click="clear_and_close"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text style="height: 500px;">
          <v-row no-gutters>
            <label>{{ event_date }}</label>
            <v-divider class="mx-2" vertical></v-divider>
            <label>{{ event_time }}</label>
            <v-spacer></v-spacer>
            <v-btn icon outlined class="mr-1"
              ><v-icon @click="$emit('edit-event')">edit</v-icon></v-btn
            >
            <v-btn icon outlined class="mr-1"
              ><v-icon @click="$emit('delete-event')">delete</v-icon></v-btn
            >
            <!-- <v-btn icon outlined ><v-icon @click="">mdi-dots-horizontal</v-icon></v-btn> -->
            <v-menu bottom left offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon outlined class="mr-1" v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="$emit('add-participant')">
                  <v-list-item-title>Add Member</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item @click="$emit('open-custom-event-type')" >
                    <v-list-item-title>Custom Event</v-list-item-title>
                  </v-list-item> -->
                <v-list-item @click="$emit('edit-event')">
                  <v-list-item-title>Edit Event</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$emit('delete-event')">
                  <v-list-item-title>Delete Event</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>

          <v-row no-gutters>
            <v-col md="12" class="pa-4">
              <v-avatar
                size="20"
                :color="event.event_type.properties.color"
              ></v-avatar>
              <span class="font-weight-medium title">
                {{ event.event_type.name }}</span
              >
            </v-col>

            <v-col md="4" class="pa-4">
              <Avatars
                :items="event.participants"
                :hasAddMember="true"
                :count="7"
                :deep="true"
                @add-member="$emit('add-participant')"
              ></Avatars>
            </v-col>

            <v-col md="12" class="pa-4">
              <div v-if="event.description" v-html="event.description"></div>
            </v-col>

            <v-col>
              <v-divider></v-divider>
              <Comment
                :items="all_comments"
                :addApi="addCommentApi"
                :deleteApi="deleteCommentApi"
              ></Comment>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./EventDetailDialog.js"></script>
<style lang="scss" scoped src="./EventDetailDialog.scss"></style>
<style scoped>
>>> .rich-editor .ql-editor {
  min-height: 100px;
}
</style>
