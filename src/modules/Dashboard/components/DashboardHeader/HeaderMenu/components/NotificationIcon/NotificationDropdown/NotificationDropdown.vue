<template>
    <v-card width="350">
        <v-toolbar flat>
            <v-icon left> mdi-bell </v-icon>
            <v-toolbar-title>Notifications ({{ total_counts || 0 }})</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-1" small icon v-on="on" @click=""><v-icon>mdi-book-open-page-variant</v-icon></v-btn>
        </template>
        <span>Mark All As Read</span>
      </v-tooltip> -->
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-1" small icon v-on="on" @click="$emit('close')">
                        <v-icon>close</v-icon>
                    </v-btn>
                </template>
                <span>Close</span>
            </v-tooltip>
        </v-toolbar>
        <v-card-text class="pa-0" style="max-height: 300px; overflow-x:hidden;overflow-y:auto;">
            <v-list dense class="pa-0" three-line>
                <v-skeleton-loader ref="skeleton" v-if="notificationsFetched" v-for="item in [1, 2, 3]" :boilerplate="boilerplate" :type="type" :tile="tile" class="mx-auto"></v-skeleton-loader>
                <v-list-item v-if="notifications.length === 0" class="new__message">
                    <v-list-item-content>
                        <v-list-item-title>No notification.</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-else v-for="(notification, index) of notifications" @click="notificationClicked(notification, index)">
                    <v-list-item-avatar color="grey">
                        <v-img :src="notification.causer.image_url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ notification.causer.fullname }}</v-list-item-title>
                        <v-list-item-subtitle class="text--primary">{{ notification.created_at | from_now }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ notification.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :loading="btnloading" :disabled="noMoreData" @click="fetchMoreNotifications">Load More</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>
<script src="./NotificationDropdown.js"></script>
<style lang="scss" scoped src="./NotificationDropdown.scss"></style>