<template>
  <v-dialog
      v-model="dialog" 
      transition="dialog-bottom-transition"
      :max-width="modalWidth"
      scrollable 
      persistent
    >
    <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-icon @click="closeDialog">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height:auto;" class="pa-0">
          <v-carousel
              v-if="allowed_display.length > 0"
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              :show-arrows="showArrows"
              :show-arrows-on-hover="showArrows"
            >
              <v-carousel-item
                v-for="(slide, i) in allowed_display"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                :continuous="false"
              >
                <v-sheet height="100%" >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">
                      <v-card v-if="slide.collection_name === `project.files.images`" >
                      <img 
                        :src="slide.public_url"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      </v-card>
                      <div 
                        ref="iframe_video"
                        v-else-if="slide.collection_name === `project.files.links`" 
                        v-html="slide.custom_properties.embed"
                      ></div>

                      <video-player  class="video-player-box"
                       v-else-if="slide.collection_name === `project.files.videos`" 
                       ref="videoPlayer"
                       :options="{
                            muted: false,
                            autoplay: false,
                            language: 'en',
                            playbackRates: [0.7, 1.0, 1.5, 2.0],
                            sources: [{
                              type: slide.mime_type,
                              src: slide.public_url
                            }],
                            controls: true,
                            height: 400
                          }"
                       :playsinline="true"
                       ></video-player>

                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>

            <Empty v-else headline="No viewable items"></Empty>

        </v-card-text>
        <!-- <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
</template>

<script src="./Viewer.js"></script>

<style lang="scss" rel="stylesheet/scss" scoped>
>>> .v-responsive__content{
    width: 700px;
  }
</style>