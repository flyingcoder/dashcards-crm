<template>
  <v-flex xs12 class="task__tab_preview_card" v-if="task">
    <v-flex class="task__preview_content">
      <v-flex class="card__content" slot="content">
        <v-progress-linear
          v-if="loading"
          :indeterminate="true"
        ></v-progress-linear>

        <template v-else>
          <v-layout class="task__header text-xs-left">
            <v-flex xs5 class="assignee">
              <v-flex xs4
                ><v-img
                  :src="require('@/assets/temp/user.png')"
                  height="45"
                  width="45"
              /></v-flex>
              <div class="assignee__name text-cap">{{ full_name }}</div>
            </v-flex>

            <v-flex xs5 class="date">
              <div><v-icon class="date__icon">date_range</v-icon></div>
              <div class="date__text">
                {{ date_created(content.created_at) }}
              </div>
            </v-flex>

            <v-flex xs2 class="more__button text-xs-right">
              <v-btn fab text small class="action">
                <v-icon>more_horiz</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>

          <div class="task__sub_header">
            <div class="boxes job__title text-cap">
              <span class="box__content">{{ job_title() }}</span>
            </div>
            <div class="boxes status">
              <span class="box__content">{{ content.status }}</span>
            </div>
            <hours-box :content="content" />
          </div>

          <div class="mobile__hours-box"><hours-box :content="content" /></div>

          <div class="task__content">
            <div class="task__title text-cap">{{ content.title }}</div>

            <div
              class="task__description textarea-cap"
              v-html="content.description"
            ></div>

            <div class="task__comment_section">
              <v-divider></v-divider><br />

              <div
                class="comment"
                v-for="comment of all_comments"
                :key="comment.id"
              >
                <v-flex sm2 xs3
                  ><v-img
                    :src="require('@/assets/temp/user.png')"
                    height="45"
                    width="45"
                /></v-flex>
                <v-flex sm10 xs9>
                  <div class="commenter">
                    <div class="comment-name">Ross Mosqueda</div>
                    <small class="comment-time">
                      {{ comment.created_at | from_now }}</small
                    >
                  </div>
                  <div v-html="comment.body" class="comment-msg"></div>
                </v-flex>
              </div>
            </div>
          </div>

          <div class="task__comments">
            <v-flex sm2 xs3
              ><v-img
                :src="require('@/assets/temp/user.png')"
                height="45"
                width="45"
            /></v-flex>

            <v-flex sm10 xs9 class="rich__editor">
              <rich-editor
                placeholder="Add Comment"
                ref="editor"
                v-model="comment"
              />

              <div class="comments__actions">
                <v-btn
                  class="comment__btn"
                  color="#3b589e"
                  :disabled="!comment"
                  @click="add_new_comment"
                  >Send</v-btn
                >
                <div class="emoji-wrapper">
                  <emoji-picker @emoji-added="emoji_added" />
                </div>
              </div>
            </v-flex>
          </div>
        </template>
      </v-flex>

      <!--  v-flex xs12 class="card__footer text-xs-center">
				<v-btn text class="view__more_btn">VIEW MORE</v-btn>
			</v-flex -->
    </v-flex>
  </v-flex>
</template>

<script src="./TaskTabPreviewCard.js"></script>
<style lang="scss" scoped src="./TaskTabPreviewCard.scss"></style>

<style scoped>
>>> .comment__btn .v-btn__content {
  color: #fff;
}
</style>
