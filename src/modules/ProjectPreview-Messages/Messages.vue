<template>
  <div class="message__tab">
    <v-layout row wrap class="message__content">
      <v-flex sm3 xs12>
        <div class="sidebar__chatlist">
          <div class="you user">
            <div class="user__img">
              <v-img :src="require('@/assets/temp/user.png')" />
              <span class="status online"></span>
            </div>
            <span class="user__name">Mohammad</span>
          </div>

          <div class="friend__list">
            <div class="friend user" v-for="friend in friends" :key="friend.id">
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

      <v-flex sm9 xs12 class="message-group">
        <v-tabs
          class="tabs"
          centered
          grow
          hide-slider
          height="60px"
          :show-arrows="is_screen_medium_and_down"
        >
          <v-tab
            class="option"
            v-for="(tab, index) in tabs"
            :href="'#tab-' + index"
            :key="index"
          >
            <div class="tab-title">{{ tab.title }}</div>
            <div class="counter">{{ tab.counter }}</div>
          </v-tab>
          <v-tab-item
            v-for="(text, index) in texts"
            :value="'tab-' + index"
            :key="index"
          >
            <div class="message__body">
              <div class="messages">
                <div class="message">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"
                    ><h5>Kate Martz</h5></v-flex
                    >
                    <v-flex xs4 class="date"> 1 hour ago </v-flex>
                  </v-layout>
                  <div class="sender__message">Hello</div>
                </div>
                <div class="message me">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"><h5>me</h5></v-flex>
                    <v-flex xs4 class="date">59 mins ago</v-flex>
                  </v-layout>
                  <div class="sender__message">Hi</div>
                </div>
                <div class="message">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"
                    ><h5>Kate Martz</h5></v-flex
                    >
                    <v-flex xs4 class="date"> 23 sec ago</v-flex>
                  </v-layout>
                  <div class="sender__message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque atque voluptas ipsam reprehenderit provident? Id,
                    officia. Ut corrupti assumenda architecto molestiae quaerat
                    necessitatibus beatae, nesciunt quo minus facilis iste ab?
                  </div>
                </div>
                <div class="message">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"
                    ><h5>Kate Martz</h5></v-flex
                    >
                    <v-flex xs4 class="date"> 23 sec ago</v-flex>
                  </v-layout>
                  <div class="sender__message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque atque voluptas ipsam reprehenderit provident? Id,
                    officia. Ut corrupti assumenda architecto molestiae quaerat
                    necessitatibus beatae, nesciunt quo minus facilis iste ab?
                  </div>
                </div>
                <div class="message me">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"><h5>Me</h5></v-flex>
                    <v-flex xs4 class="date"> 23 sec ago</v-flex>
                  </v-layout>
                  <div class="sender__message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </div>
                </div>
                <div class="message">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"
                    ><h5>Kate Martz</h5></v-flex
                    >
                    <v-flex xs4 class="date"> 23 sec ago</v-flex>
                  </v-layout>
                  <div class="sender__message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque atque voluptas ipsam reprehenderit provident? Id,
                    officia. Ut corrupti assumenda architecto molestiae quaerat
                    necessitatibus beatae, nesciunt quo minus facilis iste ab?
                  </div>
                </div>
                <div class="message me">
                  <v-layout row wrap class="sender">
                    <v-flex xs3 class="sender__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                      <span class="status online"></span>
                    </v-flex>
                    <v-flex xs5 class="sender__name"
                    ><h5>Kate Martz</h5></v-flex
                    >
                    <v-flex xs4 class="date"> 23 sec ago</v-flex>
                  </v-layout>
                  <div class="sender__message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque atque voluptas ipsam reprehenderit provident? Id,
                    officia. Ut corrupti assumenda architecto molestiae quaerat
                    necessitatibus beatae, nesciunt quo minus facilis iste ab?
                  </div>
                </div>
              </div>

              <div class="write">
                <v-text-field
                  class="write__msg"
                  solo
                  flat
                  hide-details
                  color="#667187"
                  label="Type a message..."
                ></v-text-field>
                <div class="write__actions">
                  <v-icon class="action insert__emoticon"
                  >insert_emoticon</v-icon
                  >
                  <v-icon class="action attach_file">attach_file</v-icon>
                  <v-icon class="action send">send</v-icon>
                </div>
              </div>
              <div class="view__more">
                <v-btn flat class="view__more_btn">VIEW MORE</v-btn>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./Messages.js"></script>
<style lang="scss" scoped src="./Messages.scss"></style>
