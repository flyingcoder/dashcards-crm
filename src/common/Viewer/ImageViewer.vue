<template>
    <v-dialog v-model="dialog" @click:outside="closeDialog" width="90%" class="image-dialog">
        <div class="mx-auto image-wrapper" tile v-if="media">
            <div class="dialog-header">
                <div class="uploaded-info">
                    <div class="client" v-if="project">
                        <v-avatar size="40">
                            <v-img :src="project.client.image_url" :alt="project.client.first_name">
                                <!-- <v-icon x-large>mdi-account</v-icon> -->
                            </v-img>
                        </v-avatar>
                        <div class="b-info">
                            <div class="name">{{project.client.fullname}}</div>
                            <div class="subname">{{project.client.job_title}}</div>
                        </div>
                    </div>
                    <div class="project" v-if="project">
                        <div class="b-icon">
                            <svg viewBox="0 0 250 250">
                                <path class="b-icon-inner" d="M28 38l194 0c7,0 14,3 19,8 5,5 9,12 9,19l0 115c0,7 -4,14 -9,19 -5,5 -12,8 -19,8 -21,0 -39,0 -61,0 -3,0 -6,-2 -6,-6 0,-3 3,-6 6,-6l4 0 0 0 57 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -115c0,-4 -2,-8 -5,-10 -2,-3 -6,-5 -10,-5l-194 0c-4,0 -8,2 -11,5l0 0c-2,2 -4,6 -4,10l0 115c0,4 2,8 4,10l0 0c3,3 7,5 11,5l57 0 0 0 6 0c4,0 7,3 7,6 0,4 -3,6 -7,6 -22,0 -41,0 -63,0 -8,0 -15,-3 -20,-8l0 0c-5,-5 -8,-12 -8,-19l0 -115c0,-7 3,-14 8,-19l0 0c5,-5 12,-8 20,-8zm99 138c12,0 22,9 22,22 0,12 -10,22 -22,22 -12,0 -22,-10 -22,-22 0,-13 10,-22 22,-22zm-82 -69c4,0 8,3 10,6l64 0c2,-3 6,-6 10,-6 4,0 8,3 10,6l56 0c2,-3 6,-6 10,-6 6,0 11,6 11,12 0,6 -5,12 -11,12 -4,0 -8,-3 -10,-6l-56 0c-2,3 -6,6 -10,6 -4,0 -8,-3 -10,-6l-64 0c-2,3 -6,6 -10,6 -7,0 -12,-6 -12,-12 0,-6 5,-12 12,-12z" />
                            </svg>
                        </div>
                        <div class="b-info">
                            <div class="name">{{project.title}}</div>
                            <div class="subname">Project</div>
                        </div>
                    </div>
                    <div class="service" v-if="project">
                        <div class="b-icon">
                            <svg viewBox="0 0 250 250">
                                <path class="b-icon-inner" d="M57 58l151 0 0 -7c0,-4 -2,-7 -4,-10 -3,-3 -7,-4 -11,-4l-165 0c-4,0 -8,1 -10,4 -3,3 -5,6 -5,10l0 113c0,4 2,8 5,10 2,3 6,4 10,4l1 0 0 -92c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm164 0l1 0c8,0 15,3 20,8 5,5 8,12 8,20l0 113c0,7 -3,14 -8,20 -5,5 -12,8 -20,8l-165 0c-8,0 -15,-3 -20,-8 -5,-6 -8,-13 -8,-20l0 -7 -1 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -113c0,-7 3,-14 8,-20 5,-5 12,-8 20,-8l165 0c8,0 15,3 20,8 5,6 8,13 8,20l0 7zm1 14l-165 0c-4,0 -8,1 -11,4 -2,2 -4,6 -4,10l0 113c0,4 2,7 4,10 3,3 7,4 11,4l165 0c4,0 8,-1 10,-4 3,-3 5,-6 5,-10l0 -113c0,-4 -2,-8 -5,-10 -2,-3 -6,-4 -10,-4z M125 67c3,0 5,1 7,3l0 0c1,2 2,4 2,7l0 5c6,1 10,3 15,6l4 -4c1,-2 4,-3 6,-3 3,0 5,1 7,3 2,2 3,4 3,7 0,2 -1,5 -3,6l-4 4c3,4 5,9 6,15l5 0c3,0 5,1 7,2l0 0c2,2 3,4 3,7 0,3 -1,5 -3,7 -2,1 -4,2 -7,2l-4 0c-2,6 -4,11 -7,15l4 4c2,1 3,4 3,6 0,3 -1,5 -3,7 -2,2 -4,3 -7,3 -2,0 -5,-1 -6,-3l-4 -3c-4,3 -9,5 -15,6l0 4c0,3 -1,5 -2,7 -2,2 -4,3 -7,3 -3,0 -5,-1 -7,-3l0 0c-1,-2 -2,-4 -2,-7l0 -4c-6,-1 -11,-3 -15,-6l-4 3c-1,2 -4,3 -6,3 -3,0 -5,-1 -7,-3 -2,-2 -3,-4 -3,-7 0,-2 1,-5 3,-6l4 -4c-3,-4 -5,-9 -7,-15l-4 0c-3,0 -5,-1 -7,-2l0 0c-2,-2 -3,-4 -3,-7 0,-3 1,-5 3,-7l0 0c2,-1 4,-2 7,-2l5 0c1,-6 3,-11 6,-15l-4 -4c-2,-1 -3,-4 -3,-6 0,-3 1,-5 3,-7 2,-2 4,-3 7,-3 2,0 5,1 6,3l4 4c5,-3 9,-5 15,-6l0 -5c0,-3 1,-5 2,-7l0 0c2,-2 4,-3 7,-3zm1 14l0 -4c0,-1 0,-1 0,-1l0 0c0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1l0 0c0,0 0,0 0,1l0 4c0,0 1,0 1,0 0,0 1,0 1,0zm29 12c1,0 1,1 1,1 1,0 1,1 1,1l3 -3c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1l-3 3zm14 31c0,0 0,1 0,1 0,1 0,1 0,1l4 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1l0 0c0,0 0,0 -1,0l-4 0zm-11 32c-1,0 -1,0 -2,1 0,0 0,0 0,1l2 2c0,1 1,1 1,1 1,0 1,0 1,-1 1,0 1,0 1,-1 0,0 0,-1 -1,-1l-2 -2zm-32 14c0,0 -1,0 -1,0 0,0 -1,0 -1,0l0 3c0,1 0,1 0,1l0 0c0,1 1,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 -3zm-32 -12c0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-2 2c-1,0 -1,1 -1,1 0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,0 1,-1l2 -2zm-13 -32c0,0 0,0 0,-1 0,0 0,-1 0,-1l-4 0c-1,0 -1,0 -1,0l0 0c-1,0 -1,1 -1,1 0,0 0,1 1,1l0 0c0,0 0,0 1,0l4 0zm12 -31c0,0 0,-1 1,-1 0,0 0,-1 1,-1l-3 -3c0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 0,0 0,1 1,1l3 3zm32 11c5,0 10,2 14,6 3,3 5,8 5,13 0,6 -2,11 -5,14l0 0c-4,4 -9,6 -14,6 -5,0 -10,-2 -14,-6l0 0c-3,-3 -5,-8 -5,-14 0,-5 2,-10 5,-13l0 0c4,-4 9,-6 14,-6zm4 15c-1,-1 -2,-1 -4,-1 -2,0 -3,0 -4,1l0 0c-1,1 -2,3 -2,4 0,2 1,4 2,5 1,1 2,1 4,1 2,0 3,0 4,-1 1,-1 2,-3 2,-5 0,-1 -1,-3 -2,-4zm18 -17c-6,-6 -13,-9 -22,-9 -9,0 -16,3 -22,9 -5,5 -9,13 -9,21 0,9 4,17 9,22 6,6 13,9 22,9 9,0 16,-3 22,-9 5,-5 9,-13 9,-22 0,-8 -4,-16 -9,-21z" />
                            </svg>
                        </div>
                        <div class="b-info">
                            <div class="name">{{project.service.name}}</div>
                            <div class="subname">Services</div>
                        </div>
                    </div>
                </div>
                <v-btn outlined fab small text class="action" @click="closeDialog">
                    <v-icon>close</v-icon>
                </v-btn>
            </div>
            <div class="dialog-body" v-if="previewFrom === 'files'">
                <div class="left-side">
                    <div class="img-controls">
                        <v-spacer></v-spacer>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>near_me</v-icon>
                        </v-btn>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>text_fields</v-icon>
                        </v-btn>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>photo_library</v-icon>
                        </v-btn>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>more_horiz</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>zoom_out</v-icon>
                        </v-btn>
                        <v-btn fab small outlined class="elevation-1">
                            <v-icon>zoom_in</v-icon>
                        </v-btn>
                    </div>
                    <div class="img-preview">
                        <img :src="mainurl" />
                    </div>
                    <div class="img-footer">
                        <div class="uploaded-by">
                            <v-avatar size="40">
                                <v-img :src="media.custom_properties.user.image_url" :alt="media.custom_properties.user.fullname">
                                    <v-icon x-large>mdi-account</v-icon>
                                </v-img>
                            </v-avatar>
                            <div class="b-info">
                                <div class="name">Buzzooka-Profile-Page.jpg</div>
                                <div class="subname">
                                    Uploaded by:
                                    <strong>{{ media.custom_properties.user.fullname }}</strong>
                                </div>
                                <div class="subname">2hrs ago</div>
                            </div>
                        </div>
                        <!-- <div class="slide-control">
              <v-btn fab small outlined><v-icon>navigate_before</v-icon></v-btn>
              <span>1/135</span>
              <v-btn fab small outlined><v-icon>navigate_next</v-icon></v-btn>
            </div> -->
                        <div class="approval">
                            <v-btn @click="update_status(2)" v-if="media.approved !== 2" class="approve mr-1">Approve</v-btn>
                            <v-btn @click="update_status(1)" v-if="media.approved !== 1" class="modif mr-1">For Modification</v-btn>
                            <v-btn @click="update_status(0)" v-if="media.approved !== 0" class="reject mr-1">Reject</v-btn>
                            <!-- <v-btn>
                                <v-icon>delete</v-icon>
                            </v-btn> -->
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="chat-controls">
                        <v-spacer></v-spacer>
                        <!--  <div class="members">
                            <v-avatar size="40">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                            </v-avatar>
                            <v-avatar size="40">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                            </v-avatar>
                            <v-avatar size="40">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                            </v-avatar>
                            <v-avatar size="40">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                            </v-avatar>
                            <v-avatar size="40">
                                <span class="white--text">+5</span>
                            </v-avatar>
                        </div>
                        <v-btn fab small outlined>
                            <v-icon>add</v-icon>
                        </v-btn> -->
                        <v-btn class="share-btn">
                            <v-icon left>share</v-icon>SHARE
                        </v-btn>
                    </div>
                    <div class="comments-body">
                        <Comment :id="media.id" :componentKey="ckey" :addApi="comment_api" :fetchApi="comment_api" :deleteApi="comment_api"></Comment>
                    </div>
                </div>
            </div>
            <div class="dialog-body-preview" v-else>
                <div class="img-preview">
                    <img :src="mainurl" />
                </div>
                <div class="img-footer">
                    <div class="uploaded-by">
                        <v-avatar size="40">
                            <v-img :src="media.custom_properties.user.image_url" :alt="media.custom_properties.user.fullname">
                                <!-- <v-icon x-large>mdi-account</v-icon> -->
                            </v-img>
                        </v-avatar>
                        <div class="b-info">
                            <div class="name">Buzzooka-Profile-Page.jpg</div>
                            <div class="subname">
                                Uploaded by:
                                <strong>{{ media.custom_properties.user.fullname }}</strong>
                            </div>
                            <div class="subname">{{media.created_at | from_now}}</div>
                        </div>
                    </div>
                    <!-- <div class="slide-control">
            <v-btn fab small outlined><v-icon>navigate_before</v-icon></v-btn>
            <span>1/135</span>
            <v-btn fab small outlined><v-icon>navigate_next</v-icon></v-btn>
          </div> -->
                </div>
            </div>
        </div>
    </v-dialog>
</template>
<script>
import request from '@/services/axios_instance'
import Comment from "@/common/Comment/Comment.vue";
export default {
    name: "ImageViewer",
    components: {
        Comment
    },
    props: {
        media: Object,
        previewFrom: String,
    },
    data: () => ({
        dialog: false,
        ckey: 0,
        project: null
    }),

    computed: {
        mainurl() {
            return this.media ? this.media.public_url : null;
        },
        comment_api() {
            return `api/file/${this.media.id}/comment`;
        },
        approval_actions() {
            const list = [{ id: 2, title: 'Approved', action: 'approved' }, { id: 0, title: 'Reject', action: 'reject' }, { id: 1, title: 'For Modification', action: 'modification' }]
            return list.filter(i => { return i.id !== this.media.approved })
        },
    },
    watch: {
        media: {
            handler(val) {
                if (val && this.media && this.media.model_type.includes('Project')) {
                    this.fetchProjectInfo()
                }
            },
            deep: true
        }
    },
    methods: {
        openDialog() {
            this.dialog = true;
            this.ckey += 1;
        },
        closeDialog() {
            this.dialog = false;
        },
        fetchProjectInfo() {
            request.get(`api/projects/${this.media.model_id}/info`)
                .then(({ data }) => {
                    this.project = data
                })
        },
        update_status(action) {
            var payload = { action: action }
            request.post(`api/file/${this.media.id}/status`, payload)
                .then(({ data }) => {
                    this.media.approved = action
                    this.$event.$emit('open_snackbar', data.message)
                })
        }
    }
};
</script>
<style lang="scss" scoped src="./ImageViewer.scss"></style>