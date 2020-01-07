<template>
  <div class="notification-dropdown">
    <div class="notif-title">{{ notifications.length }} Notifications</div>
    <div class="notif-body">
      <SingleNotification
        v-for="(notification, index) of notifications"
        :key="notification.id"
        :description="notification.description"
        :read="notification.read"
        @click="notificationClicked(notification, index)"
      />
    </div>
  </div>
</template>
<script src="./NotificationDropdown.js"></script>
<style lang="scss" scoped src="./NotificationDropdown.scss"></style>
