<template>
  <v-flex xs12 class="task__tab_preview_card" v-if="activeId">
    <v-flex class="task__preview_content">
      <v-flex class="card__content" slot="content">
        <v-progress-linear
          v-if="loading"
          :indeterminate="true"
        ></v-progress-linear>

        <template v-else>
          <v-layout class="task__header text-xs-left">
            <v-flex xs5 class="assignee">
              <v-flex xs4 v-if="assignee_url"
                ><v-img :src="assignee_url" height="45" width="45"
              /></v-flex>
              <div class="assignee__name text-cap">{{ full_name }}</div>
            </v-flex>

            <v-flex xs5 class="date">
              <div><v-icon class="date__icon">date_range</v-icon></div>
              <div class="date__text">
                {{ date_created(content.created_at) }}
              </div>
            </v-flex>

            <v-menu offset-y left>
              <template v-slot:activator="{ on }">
                <v-btn icon fab small outlined v-on="on">
                  <v-icon>more_horiz</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item 
                    v-for="item of dropdown_actions"
                    :key="item.id"
                    @click="$emit('dropdown-action', item.value)">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-layout>

          <div class="task__sub_header">
            <div class="boxes job__title text-cap" v-if="job_title">
              <span class="box__content">{{ job_title }}</span>
            </div>
            <div class="boxes status">
              <span class="box__content">{{ content.status }}</span>
            </div>
            <hours-box
              :content="content"
              v-if="content.status != 'completed'"
            />
          </div>

          <div class="mobile__hours-box"><hours-box :content="content" /></div>

          <div class="task__content">
            <div class="task__title text-cap">{{ content.title }}</div>

            <div
              class="task__description textarea-cap"
              v-html="content.description"
            ></div>

            <v-row no-gutters class="task__assigned_to" v-if="content.assignee">
              <v-col md="12">
                <div>Assigned to:</div>
              </v-col>
              <v-col md="12">
                <Avatars :deep="false" :items="content.assignee" :count="6"></Avatars>
              </v-col>
            </v-row>

            <div class="task__comment_section">
              <div class="mb-1"><v-icon>chat</v-icon> Comments</div>
              <div
                class="comment"
                v-for="comment of all_comments"
                :key="comment.id"
              >
                <v-flex sm2 xs3
                  ><v-img
                    v-if="comment.causer"
                    :src="comment.causer.image_url"
                    height="45"
                    width="45"
                /></v-flex>
                <v-flex sm10 xs9>
                  <div
                    class="commenter"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                  >
                    <v-btn
                      icon
                      v-show="hover && can_delete_comment(comment)"
                      @click="confirm_delete_comment(comment)"
                      class="btn-comment-delete"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <div class="comment-name">
                      <span
                        >{{ comment.causer.first_name }}
                        {{ comment.causer.last_name }}</span
                      >
                    </div>
                    <small class="comment-time">{{
                      comment.created_at | from_now
                    }}</small>
                  </div>
                  <div v-html="comment.body" class="comment-msg"></div>
                </v-flex>
              </div>
            </div>
          </div>

          <div class="task__comments">
            <v-flex sm2 xs3
              ><v-img :src="commenter.image_url" height="45" width="45"
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
                  :loading="btnloading"
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
    </v-flex>

    <DeleteDialog
      ref="delete_comment_dialog"
      title="Delete Comment"
      text-content="Are you sure you want to delete this comment?"
      @delete="confirmed_delete_comment"
    />
  </v-flex>
</template>

<script src="./TaskTabPreviewCard.js"></script>
<style lang="scss" scoped src="./TaskTabPreviewCard.scss"></style>

<style scoped>
>>> .comment__btn .v-btn__content {
  color: #fff;
}
</style>
