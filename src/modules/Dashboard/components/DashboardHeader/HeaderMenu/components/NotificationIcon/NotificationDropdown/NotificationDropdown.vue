<template>
    <v-card width="350">
        <v-toolbar flat>
            <v-icon left> mdi-bell</v-icon>
            <v-toolbar-title>Notifications ({{ total_counts || 0 }})</v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-1" :loading="notificationsFetched" small icon v-on="on"
                           @click="mark_all_as_read_notification"
                    >
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-btn>
                </template>
                <span>Mark All As Read</span>
            </v-tooltip>
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
            <v-list dense class="pa-0">
                <template v-if="notificationsFetched">
                    <v-skeleton-loader ref="skeleton" v-for="item in 3" :key="item" :boilerplate="boilerplate"
                                       :type="type" :tile="tile" class="mx-auto"
                    />
                </template>
                <v-list-item v-if="notifications.length === 0" class="new__message">
                    <v-list-item-content>
                        <empty headline="No notification" icon="mdi-bell-alert-outline" />
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :class="{unread:!notification.read_at}" v-else
                             v-for="(notification, index) of notifications" :key="notification.id"
                             @click="notificationClicked(notification, index)"
                >
                    <v-list-item-avatar tile>
                        <v-img v-if="notification.data.image_url" :src="notification.data.image_url" />
                        <v-icon v-else large>mdi-image-size-select-actual</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ notification.data.title | ucwords }}</v-list-item-title>
                        <v-list-item-subtitle>
                            <small class="caption">{{ notification.created_at | from_now }}</small>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>{{ notification.data.message }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn text :loading="notificationsFetched" :disabled="!hasMoreNotification"
                   @click="fetchMoreNotifications"
            >
                Load More
            </v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>
<script src="./NotificationDropdown.js"></script>
<style lang="scss" scoped src="./NotificationDropdown.scss"></style>
<style>
    .unread {
        background-color: #3b589e26;
    }
</style>