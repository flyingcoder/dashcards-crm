<template>
    <v-row no-gutters class="comments-section">
        <v-col md="12">
            <v-subheader class="body-2">Comments:</v-subheader>
            <v-list dense three-line flat class="comments-wrapper" :max-height="maxHeight">
                <template v-if="comments.length > 0">
                    <v-list-item @mouseover="hover = true" @mouseleave="hover = false" class="px-0" v-for="(item, index) in comments" :key="item.id">
                        <v-list-item-avatar>
                            <v-img :src="item.causer.image_url"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="item.causer.fullname"></v-list-item-title>
                            <v-list-item-subtitle class="caption">{{
                                item.created_at | from_now
                                }}</v-list-item-subtitle>
                            <v-list-item-subtitle v-html="item.body"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon v-show="hover && can_delete_comment(item)" @click="confirm_delete_comment(item)">
                                <v-icon small color="grey lighten-1">delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </template>
                <template v-else>
                    <Empty headline="No comment yet"></Empty>
                </template>
            </v-list>
            <v-btn dense text block v-if="next_page_url" @click="fetchMoreComments">Load More</v-btn>
        </v-col>
        <v-col md="12" class="comment-field-wrapper">
            <v-row>
                <v-avatar size="40">
                    <v-img :src="user.image_url" :alt="user.fullname"></v-img>
                </v-avatar>
                <v-col grow class="pr-3 pl-4">
                    <div class="comment-field">
                        <Editor v-model="comment" :componentKey="counterReset" :hasFloatingTools="false" :content="comment" placeholder="Enter a comment" ></Editor>
                        <v-btn :loading="btnloading" @click="addComment" tile :disabled="isEmptyComment" class="send">
                            <v-icon small left>mdi-send</v-icon>Send
                        </v-btn>
                    </div>
                    <!-- <emoji-picker @emoji-added="emoji_added" /> -->
                </v-col>
            </v-row>
        </v-col>
        <DeleteDialog ref="delete_comment_dialog" title="Delete Comment" text-content="Are you sure you want to delete this comment?" @delete="confirmed_delete_comment"></DeleteDialog>
    </v-row>
</template>
<script src="./Comment.js"></script>
<style scoped lang="scss">
@import "~@/sass/_variables";

.comments-wrapper {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    .v-avatar {
        border: 1px solid $darkGray;
        margin: 8px 16px 8px 8px;
    }
}

.comment-field-wrapper .v-avatar {
    position: relative;
    top: 15px;
    left: 7px;
    border: 1px solid $darkGray;
}

.comment-field {
    .rich-editor {
        background-color: $white;
    }

    .send.v-btn {
        float: right;
        background-color: $blue !important;
        color: $white;
    }
}

.ql-container.ql-snow {
    min-height: 120px;
}

.ql-container .ql-editor {
    min-height: 150px;
}

.v-list-item__subtitle img {
    max-width: 100%;
}
</style>