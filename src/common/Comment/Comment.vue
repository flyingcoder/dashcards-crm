<template>
  <v-row no-gutters>
    <v-col md="12">
      <v-subheader class="body-2">Comments:</v-subheader>
      <v-list three-line flat class="comments-wrapper" :max-height="maxHeight">
        <template v-for="(item, index) in items">
          <v-list-item
            :key="item.id"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <v-list-item-avatar>
              <v-img :src="item.causer.image_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-html="item.causer.fullname"
              ></v-list-item-title>
              <v-list-item-subtitle class="caption">{{
                item.created_at | from_now
              }}</v-list-item-subtitle>
              <v-list-item-subtitle v-html="item.body"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                v-show="hover && can_delete_comment(item)"
                @click="confirm_delete_comment(item)"
              >
                <v-icon small color="grey lighten-1">delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-col>

    <v-col md="12">
      <v-row>
        <v-col md="2">
          <v-avatar size="80">
            <v-img :src="user.image_url" :alt="user.fullname"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="10" class="pr-3 pl-4">
          <rich-editor
            placeholder="Enter a coment"
            ref="editor"
            v-model="comment"
            :uploadApi="uploadApi"
          ></rich-editor>
          <v-btn
            :loading="btnloading"
            @click="addComment"
            tile
            :disabled="isEmptyComment"
            color="gray"
          >
            <v-icon small left>mdi-send</v-icon>Send
          </v-btn>
          <!-- <emoji-picker @emoji-added="emoji_added" /> -->
        </v-col>
      </v-row>
    </v-col>
    <DeleteDialog
      ref="delete_comment_dialog"
      title="Delete Comment"
      text-content="Are you sure you want to delete this comment?"
      @delete="confirmed_delete_comment"
    />
  </v-row>
</template>
<script src="./Comment.js"></script>
<style scoped>
>>> .comments-wrapper {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

>>> .ql-container.ql-snow {
  min-height: 120px;
}
>>> .v-list-item__subtitle img { max-width: 100%; }
</style>
