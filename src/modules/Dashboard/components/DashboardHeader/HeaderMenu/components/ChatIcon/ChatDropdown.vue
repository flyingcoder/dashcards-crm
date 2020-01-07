<template>
  <div class="chat__inbox">
    <div class="inbox__title">Message Notifications ({{ chat || 0 }})</div>
    <div class="msg__notif">
      <div
        class="user new__message"
        v-for="notification of notifications"
        :key="notification.id"
        @click="open_chat_box(notification.sender)"
      >
        <div class="user__img">
          <v-img :src="require('@/assets/temp/user.png')" />
          <span class="status offline"></span>
        </div>

        <div class="user__detail">
          <span class="user__name">{{ notification | full_name }}</span>
          <span class="user__msg">{{ notification.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('onlineUsers', ['all_users']),
    ...mapGetters('headerIcons', ['chat']),
    notifications() {
      return this.$store.getters['notifications/chat']
    }
  },

  filters: {
    full_name(notification) {
      const user = notification.sender
      return `${user.first_name} ${user.last_name}`
    }
  },

  methods: {
    open_chat_box(user) {
      this.$store.dispatch('chat/open_conversation', {
        id: user.id,
        is_online: this.is_user_online(user.id),
        name: `${user.first_name}, ${user.last_name}`
      })
      this.$emit('close')
    },
    is_user_online(id) {
      const user = this.all_users.find(user => user.id === id)
      if (!user) return false
      return user.is_online
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.chat__inbox {
  background-color: $lightBlue-2;
  padding: 10px 0;
  width: 300px;
  margin-top: 15px;

  &:after {
    content: '';
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid $lightBlue-2;
    border-top: 15px solid transparent;
    right: 50%;
    top: 0;
    margin-top: -15px;
    z-index: 10;
  }

  .inbox__title {
    padding: 5px;
    color: $titleDarkBlue;
    font-weight: 500;
    border-bottom: 1px solid $borderGray;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @include styledScrollFor('.msg__notif');

  .msg__notif {
    max-height: 300px;
    overflow: auto;

    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid $borderGray;
      padding: 5px;

      &:hover {
        background-color: $lightBlue-2;
      }

      @include userImgWithStatus('.user__img');

      .user__img {
        height: 40px;
        width: 40px;
        min-width: 40px;
      }

      .user__detail {
        margin-left: 10px;
        cursor: pointer;

        .user__name {
          width: 220px;
          overflow: hidden;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          color: $titleDarkBlue;
        }
        .user__msg {
          width: 220px;
          overflow: hidden;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: $titleDarkBlue;
          font-size: 12px;
        }
      }
    }
    .new__message {
      background-color: $blue-2;
    }
  }
}
</style>
