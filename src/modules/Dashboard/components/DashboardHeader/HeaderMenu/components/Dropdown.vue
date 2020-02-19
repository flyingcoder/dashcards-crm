<template>
  <v-menu
    class="user-dropdown"
    transition="slide-y-transition"
    :nudge-width="100"
    :nudge-bottom="10"
    bottom
    offset-y
  >
    <div class="dropdown" slot="activator">
      <v-layout row align-center>
        <v-flex xs6>
          <v-avatar class="user-icon responsive-img" :size="avatarSize">
            <img
              class="atomic-icon"
              :src="user.image_url"
              width="45px"
              alt="user"
            />
          </v-avatar>
        </v-flex>
        <v-flex xs6>
          <div class="user-chevron">
            <img
              src="@/assets/icons/header/chevron-down.svg"
              class="chevron responsive-img"
              alt="chevron"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>

    <v-list>
      <div class="dropdown-img">
        <v-img max-width="50px" :src="user.image_url" />
        <div class="hero-name">
          {{ user.first_name + ' ' + user.last_name }}
        </div>
      </div>
      <v-list-tile
        class="h__list"
        v-for="(item, index) in items"
        :key="index"
        @click="handle_action(item.action)"
      >
        <v-list-tile-action class="h__icons">
          <v-img max-width="25px" :src="item.icon" />
        </v-list-tile-action>

        <v-list-tile-title class="h__title">{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Dropdown',

  data: () => ({
    avatarSize: 'auto',
    items: [
      {
        title: 'Profile',
        icon: require('@/assets/icons/header/user/profile.svg'),
        action: 'navigate_to_profile'
      },
      {
        title: 'Settings',
        icon: require('@/assets/icons/header/user/settings.svg'),
        action: 'navigate_to_settings'
      },
      {
        title: 'Help',
        icon: require('@/assets/icons/header/user/help.svg')
      },
      {
        title: 'Logout',
        icon: require('@/assets/icons/header/user/logout.svg'),
        action: 'logout'
      }
    ]
  }),

  computed: {
    user() {
      return this.$store.getters.user
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_user_id']),
    ...mapActions('memberProfile', ['get_single_member']),
    handle_action(action) {
      this[action]() //i.e the action is logout will call this.logout()
    },

    logout() {
      this.$auth.logout()
    },

    navigate_to_settings() {
      this.$router.push({ name: 'settings' })
    },

    navigate_to_profile() {
      if (this.user.role === 'client') {
        this.$router.push(`/dashboard/clients/profile/${this.user.id}`)
      } else {
        this.$router.push(`/dashboard/team/profile/${this.user.id}`)
        this.set_user_id(this.user.id)
        this.get_single_member(this.user.id)
      }
      //location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.user-dropdown {
  .dropdown {
    width: 75px;
    .atomic-icon {
      width: 30px;
    }
    .user-chevron img {
      width: 25px;
    }
  }
}
.dropdown-img {
  .v-image {
    margin: 0 auto;
    display: block;
  }
  .hero-name {
    text-align: center;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 480px) {
  .user-dropdown {
    .dropdown {
      width: 50px;
      .atomic-icon {
        width: 22px;
      }
      .user-chevron img {
        width: 20px;
      }
    }
  }
}
</style>
