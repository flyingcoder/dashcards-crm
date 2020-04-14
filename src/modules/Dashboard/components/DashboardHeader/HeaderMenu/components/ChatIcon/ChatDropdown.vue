<template>
  <v-card class="pa-1" width="350">
    <v-toolbar flat>
      <v-icon left> mdi-message </v-icon>
      <v-toolbar-title>Chat ({{ notifications.length || 0 }})</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-1" small icon v-on="on" @click="go_to_chat"
            ><v-icon>mdi-chat</v-icon></v-btn
          >
        </template>
        <span>See all in Chat</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-1" small icon v-on="on" @click="markAllAsRead"
            ><v-icon>mdi-book-open-page-variant</v-icon></v-btn
          >
        </template>
        <span>Mark All As Read</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-1" small icon v-on="on" @click="$emit('close')"
            ><v-icon>close</v-icon></v-btn
          >
        </template>
        <span>Close</span>
      </v-tooltip>
    </v-toolbar>

    <v-card-text
      class="pa-0"
      style="max-height: 300px; overflow-x:hidden;overflow-y:auto;"
    >
      <v-list dense class="pa-0">
        <v-list-item v-if="notifications.length === 0" class="new__message">
          <v-list-item-content>
            <v-list-item-title>No notification</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-else
          v-for="notification of notifications"
          :key="notification.id"
          @click="open_chat_box(notification.sender)"
        >
          <v-list-item-avatar color="grey">
            <v-img :src="notification.sender.image_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              >{{ notification | full_name }}
              <v-icon
                small
                right
                :color="
                  is_user_online(notification.sender.id) ? `success` : `gray`
                "
                >mdi-circle</v-icon
              >
            </v-list-item-title>
            <v-list-item-subtitle>{{ notification.body }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            {{ notification.created_at | from_now }}
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { global_utils } from '@/global_utils/global_utils'
export default {
  mixins: [global_utils],
  computed: {
    ...mapGetters('onlineUsers', ['all_users']),
    ...mapGetters('headerIcons', ['chat']),
    loggedUser() {
      return this.$store.getters.user
    },
    onlineUsers() {
      return this.all_users.filter(i => this.loggedUser.id !== i.id)
    },
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
    ...mapActions('notifications', ['markAllAsRead']),
    open_chat_box(user) {
      let is_online = this.is_user_online(user.id)
      if (is_online && this.$route.name !== 'chat') {
        this.$store.dispatch('chat/open_conversation', {
          id: user.id,
          is_online: is_online,
          name: `${user.first_name}, ${user.last_name}`
        })
        this.$emit('close')
      } else {
        // console.log(user)
        this.go_to_chat(user.id)
      }
    },
    is_user_online(id) {
      const user = this.all_users.find(user => user.id === id)
      if (!user) return false
      return user.is_online
    },
    go_to_chat(id) {
      this.$router.push({ name: 'chat', params: { target: id } })
      this.$emit('close')
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
