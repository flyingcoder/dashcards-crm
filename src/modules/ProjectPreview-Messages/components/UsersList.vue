<template>
  <v-flex sm3 xs12 class="users-list">
    <div class="sidebar__chatlist">
      <div class="you user">
        <div class="user__img">
          <v-img :src="require('@/assets/temp/user.png')" />
          <span class="status online"></span>
        </div>
        <span class="user__name">Mohammad</span>
      </div>

      <div class="friend__list">
        <div class="friend user" v-for="friend of users" :key="friend.id">
          <div class="user__img">
            <v-img :src="require('@/assets/temp/user.png')" />
            <span class="status" :class="friend.status"></span>
          </div>

          <span class="user__name">{{ friend.name }}</span>
        </div>
      </div>

      <div class="view__more">
        <v-btn flat normal class="view__more_btn">VIEW MORE</v-btn>
      </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    users: []
  })
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.users-list {
  .sidebar__chatlist {
    margin: 10px;
    background-color: $white;
    border: 1px solid $tableBorderBlue;
    border-radius: 10px;
  }

  .user {
    padding: 10px;
    text-align: center;
    display: flex;
  }

  .user__img {
    height: 50px;
    width: 50px;
    max-width: 50px;
    border-radius: 50%;
    border: 1px solid $borderLightGray;
    position: relative;

    .status {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 15px;
      height: 15px;
      border: 2px solid $lightViolete;
      border-radius: 50%;
    }

    .online {
      background-color: $green;
    }

    .offline {
      background-color: $gray;
    }

    .dnd {
      background-color: $red;
    }
  }

  .user__name {
    margin-left: 10px;
    font-size: 12px;
    margin: auto 10px;
    text-align: left;
    font-weight: 500;
    color: $textDark;
    text-transform: capitalize;
  }

  @include styledScrollFor('.friend__list');

  .friend__list {
    overflow: auto;
    max-height: 500px;
    .friend {
      border-top: 1px solid $borderLightGray;
    }
  }

  .view__more {
    text-align: center;
    padding: 10px;
    border-top: 1px solid $borderLightGray;
    .view__more_btn {
      color: $tableDarkText;
    }
  }
}
</style>
