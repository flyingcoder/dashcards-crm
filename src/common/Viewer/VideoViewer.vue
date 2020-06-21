<template>
    <v-dialog v-model="dialog" @click:outside="closeDialog">
        <div v-if="media" class="video-wrapper">
            <div class="dialog-header">
                <div class="uploaded-info">
                    <div class="client" v-if="project">
                        <v-avatar size="40">
                            <v-img v-if="project.client.image_url" :src="project.client.image_url" :alt="project.client.first_name"></v-img>
                            <v-icon v-else x-large>mdi-account</v-icon>
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
                            <div class="subname">{{ type | ucwords }}</div>
                        </div>
                    </div>
                </div>
                <v-btn outlined fab small text class="action" @click="closeDialog">
                    <v-icon>close</v-icon>
                </v-btn>
            </div>
            
            <div class="dialog-body" v-if="previewFrom === 'files'">
                <div class="left-side">
                    <div class="video-preview">
                        <video-player class="video-player-box" ref="videoPlayer" :playsinline="true" :options="options"></video-player>
                    </div>
                    <div class="video-footer">
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
                <div class="left-side">
                    <div class="video-preview">
                        <video-player class="video-player-box" ref="videoPlayer" :playsinline="true" :options="options"></video-player>
                    </div>
                    <div class="video-footer">
                        <div class="uploaded-by">
                            <v-avatar size="40">
                                <v-img :src="media.custom_properties.user.image_url" :alt="media.custom_properties.user.fullname">
                                    <v-icon x-large>mdi-account</v-icon>
                                </v-img>
                            </v-avatar>
                            <div class="b-info">
                                <div class="name">{{media.file_name}}</div>
                                <div class="subname">
                                    Uploaded by:
                                    <strong>{{ media.custom_properties.user.fullname }}</strong>
                                </div>
                                <div class="subname">{{ media.created_at | bzFromNow }}</div>
                            </div>
                        </div>
                        <div class="approval">
                            <v-btn @click="update_status(2)" v-if="media.approved !== 2" class="approve mr-1">Approve</v-btn>
                            <v-btn @click="update_status(1)" v-if="media.approved !== 1" class="modif mr-1">For Modification</v-btn>
                            <v-btn @click="update_status(0)" v-if="media.approved !== 0" class="reject mr-1">Reject</v-btn>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-dialog>
</template>
<script>
import request from '@/services/axios_instance'
import Comment from '@/common/Comment/Comment.vue'
export default {
    name: 'VideoViewer',
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
    computed: {
        comment_api() {
            return `api/file/${this.media.id}/comment`
        },
        options() {
            return {
                muted: false,
                autoplay: false,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: this.media.mime_type,
                    src: this.media.public_url
                }],
                controls: true,
                fluid: true
            }
        },
        type(){
            if (this.project) {
                return this.project.type
            }
            return 'project'
        }
    },
    methods: {
        closeAllIframe() {
            const iframes = document.getElementsByTagName('iframe')
            if (iframes != null) {
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].src = iframes[i].src
                }
            }
        },
        openDialog() {
            this.dialog = true
            this.ckey += 1
        },
        closeDialog() {
            this.closeAllIframe()
            this.dialog = false
        },
        fetchProjectInfo() {
            request.get(`api/projects/${this.media.model_id}/info`)
                .then(({ data }) => {
                    this.project = data
                })
        },
    }
}
</script>
<style lang="scss" scoped src="./VideoViewer.scss">
</style>
<style scoped>
>>>.video-js .vjs-big-play-button {
    top: calc(50% - 25px);
    left: calc(50% - 45px);
}
</style>