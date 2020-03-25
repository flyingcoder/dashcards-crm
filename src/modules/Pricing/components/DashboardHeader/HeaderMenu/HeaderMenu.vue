<template>
  <div class="menu__content">
    <div class="m__item">
      <div class="m__icon">
        <img
          src="@/assets/icons/header/add__default.png"
          class="responsive-img icon default"
          alt="add"
        />
        <img
          src="@/assets/icons/header/add.png"
          class="responsive-img icon colored"
          alt="add"
        />
      </div>
    </div>
    <div class="m__item">
      <div class="m__icon">
        <img
          src="@/assets/icons/header/email__default.png"
          class="responsive-img icon default"
          alt="email"
        />
        <img
          src="@/assets/icons/header/email.png"
          class="responsive-img icon colored"
          alt="email"
        />
      </div>
    </div>
    <div class="m__item">
      <div class="m__icon">
        <img
          src="@/assets/icons/header/notification__default.png"
          class="responsive-img icon default"
          alt="notification"
        />
        <img
          src="@/assets/icons/header/notification.png"
          class="responsive-img icon colored"
          alt="notification"
        />
      </div>
    </div>
    <div class="m__item">
      <div class="m__icon">
        <img
          src="@/assets/icons/header/chat__default.png"
          class="responsive-img icon default"
          alt="chat"
        />
        <img
          src="@/assets/icons/header/chat.png"
          class="responsive-img icon colored"
          alt="chat"
        />
      </div>
    </div>
    <div class="m__item">
      <v-menu
        class="user-dropdown"
        transition="slide-y-transition"
        :nudge-width="100"
        :nudge-bottom="20"
        bottom
        offset-y
      >
        <div class="activator" slot="activator">
          <v-avatar class="user-icon responsive-img" :size="avatarSize">
            <img
              class="responsive-img"
              src="@/assets/temp/atomic.png"
              alt="user"
            />
          </v-avatar>
          <div class="user-chevron">
            <img
              src="@/assets/icons/header/chevron-down.svg"
              class="chevron responsive-img"
              alt="chevron"
              style="margin-left: 5px"
            />
          </div>
        </div>

        <v-list>
          <v-list-tile
            class="h__list"
            v-for="(item, index) in items"
            :key="index"
            @click="handle_action(item.action)"
          >
            <v-list-tile-action class="h__icons">
              <v-img max-width="25px" :src="item.icon" />
            </v-list-tile-action>

            <v-list-tile-title class="h__title">{{
              item.title
            }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script src="./HeaderMenu.js"></script>
<style lang="scss" scoped src="./HeaderMenu.scss"></style>
