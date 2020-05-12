<template>
    <v-dialog v-model="dialog" @click:outside="closeDialog" class="image-dialog">
        <div class="mx-auto image-wrapper" tile v-if="media">
            <v-row dense no-gutters class="dialog-header">
              <v-col grow>
                <v-list-item>
                  <v-list-item-avatar color="grey">
                    <v-img :src="media.custom_properties.user.image_url"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-left subtitle">{{media.custom_properties.user.fullname}}</v-list-item-title>
                    <v-list-item-subtitle class="text-left">{{media.custom_properties.user.job_title}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
             <!--  <v-col>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-left subtitle">Project</v-list-item-title>
                    <v-list-item-subtitle class="text-left">Service</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col> -->
              <v-spacer></v-spacer>
                <v-btn outlined fab  text class="action" @click="closeDialog">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-row>
            <div class="dialog-body">
                <v-row>
                    <v-col md="8" class="text-center">
                        <img :src="mainurl" />
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col grow>
                        <Comment :id="media.id" :componentKey="ckey" :addApi="comment_api" :fetchApi="comment_api" :deleteApi="comment_api"></Comment>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-dialog>
</template>
<script>
import Comment from '@/common/Comment/Comment.vue'
export default {
    name: 'ImageViewer',
    components: {
        Comment
    },
    props: {
        media: Object
    },
    data: () => ({
        dialog: false,
        ckey: 0
    }),
    computed: {
        mainurl() {
            return this.media ? this.media.public_url : null
        },
        comment_api(){
          return `api/file/${this.media.id}/comment`
        }
    },
    methods: {
        openDialog() {
            this.dialog = true
            this.ckey += 1
        },
        closeDialog() {
            this.dialog = false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include styledScrollFor('.dialog-body');

.image-wrapper {
    img {
        max-width: 100%;
        max-height: 460px;
    }

    .dialog-header {
        text-align: right;
        background: $white;
        padding: 10px;
        border-bottom: 1px solid $borderGray;

        .v-btn__content .v-icon {
            color: $btnGray;
        }

        .v-btn--outlined {
            border: thin solid $btnGray;
            margin-left: 5px;
        }
    }

    @include styledScrollFor('.dialog-body');

    .dialog-body {
        background: $white;
        padding: 20px;
        max-height: 500px;
        overflow: auto;
        display: flex;
        justify-content: center;
    }
}
</style>