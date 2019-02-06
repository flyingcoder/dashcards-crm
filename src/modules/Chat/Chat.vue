<template>
  <div class="chat">
    <table-header :paths="paths" :noButton="true" />

    <div class="chat-container">
      <v-layout row wrap class="chat__content">
        <v-flex md3 sm4 xs12 class="chat__sidebar">
          <div class="chatlist">
            <div class="you user">
              <div class="user__img">
                <v-img :src="require('@/assets/temp/user.png')" />
                <span class="status online"></span>
              </div>
              <span class="user__name">Ross Mosqueda</span>
              <v-spacer></v-spacer>
              <v-menu
                class="hover__add"
                right
                offset-y
                :nudge-right="33"
                :nudge-top="25"
                :close-on-content-click="false"
              >
                <v-btn flat class="add__chat" slot="activator"
                  ><v-icon>add</v-icon></v-btn
                >

                <div class="add__chatlist">
                  <div class="add__group">
                    <div class="group__icon">
                      <svg viewBox="0 0 250 250">
                        <path
                          class="icon"
                          d="M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z"
                        />
                      </svg>
                    </div>
                    <span>Add New Group</span>
                  </div>

                  <div class="search">
                    <v-text-field
                      class="search__textfield"
                      solo
                      flat
                      hide-details
                      prepend-icon="search"
                      color="657186"
                    >
                    </v-text-field>
                  </div>

                  <div class="friend__list">
                    <div
                      class="friend user"
                      v-for="friend in friends"
                      :key="friend.id"
                    >
                      <div class="user__img">
                        <v-img :src="require('@/assets/temp/user.png')" />
                        <span class="status" :class="friend.status"></span>
                      </div>

                      <div class="user__info">
                        <div class="user__name">{{ friend.name }}</div>
                        <div class="active__history">
                          {{ friend.activeHistory }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-menu>
            </div>

            <div class="friend__list">
              <v-menu
                class="friend__info"
                v-for="friend in friends"
                :key="friend.id"
                right
                offset-y
                :nudge-right="190"
                :nudge-top="150"
                :close-on-content-click="false"
                open-on-hover
              >
                <div class="friend user" slot="activator">
                  <div class="user__img">
                    <v-img :src="require('@/assets/temp/user.png')" />
                    <span class="status" :class="friend.status"></span>
                  </div>

                  <span class="user__name">{{ friend.name }}</span>
                </div>

                <div class="hover__info">
                  <div class="info__one">
                    <div class="h__img">
                      <v-img :src="require('@/assets/temp/user.png')" />
                    </div>
                    <div class="h__details">
                      <h2 class="h__name">{{ friend.name }}</h2>
                      <p class="h__job">Front-end Web Developer</p>
                      <div class="info__anchor">
                        <v-icon>email</v-icon>
                        <a href="mailto:sample.buzzooka@gmail.com"
                          >sample.buzzooka@gmail.com</a
                        >
                      </div>
                      <div class="info__anchor">
                        <v-icon>location_on</v-icon> <span>Sweden</span>
                      </div>
                    </div>
                  </div>
                  <div class="info__two">
                    <div class="info__cta">
                      <div class="info__anchor">
                        <v-icon>person</v-icon> <a href="#">View Profile</a>
                      </div>
                      <div class="info__anchor">
                        <v-icon>email</v-icon>
                        <a href="mailto:sample.buzzooka@gmail.com">Email</a>
                      </div>
                      <div class="info__anchor">
                        <v-icon>message</v-icon> <a href="#">Chat</a>
                      </div>
                      <div class="info__anchor">
                        <v-icon>phone</v-icon>
                        <a href="tel:16045555555">Call</a>
                      </div>
                    </div>
                  </div>

                  <div class="info__three">
                    <div class="total">
                      <p>Total Hours</p>
                      <h2>10</h2>
                    </div>
                    <div class="total">
                      <p>Total Amount</p>
                      <h2>$2,758.93</h2>
                    </div>
                  </div>
                </div>
              </v-menu>
            </div>

            <div class="view__more">
              <v-btn flat normal class="view__more_btn">VIEW MORE</v-btn>
            </div>
          </div>
        </v-flex>

        <v-flex md9 sm8 xs12 class="chat__message">
          <div class="message__content">
            <v-layout row wrap class="message__header">
              <v-flex xs2 class="sender__img">
                <v-img :src="require('@/assets/temp/user.png')" />
                <span class="status online"></span>
              </v-flex>
              <v-flex xs5 class="name">
                <h5>Kate Martz</h5>
                <span class="active__status">Active now</span>
              </v-flex>
              <v-flex xs5 class="actions">
                <v-btn dark fab flat small color="#fff">
                  <v-icon>email</v-icon>
                </v-btn>
                <v-btn dark fab flat small color="#fff">
                  <v-icon>share</v-icon>
                </v-btn>
                <v-btn dark fab flat small color="#fff">
                  <v-icon>settings</v-icon>
                </v-btn>
                <v-btn dark fab flat small color="#fff">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>

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
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script src="./Chat.js">
</script>
<style lang="scss" scoped src="./Chat.scss">
</style>
<style scoped src="./Chat.css">
</style>
