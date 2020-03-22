<template>
  <div class="timeline-card">
    <div class="timeline__content">
      <dash-card 
        title="Timeline" 
        :dashboard="dashboard" 
        @close="$emit('close')"
        :view-more-link="viewMoreLink"
        :viewMoreBtn="enableViewMore"
        @view-more="load_more_timeline"
      >
        <div class="timeline__inner_content" slot="content">
          <v-progress-linear
            v-if="loading"
            :indeterminate="true"
          ></v-progress-linear>

          <v-card
            class="mx-auto"
            v-if="timeline_items.length"
          >
            <v-card-text class="py-0">
              <v-timeline
                align-top
                dense
              >
                <v-timeline-item
                  small
                  v-for="item of timeline_items"
                  :key="item.id"
                  :icon="set_icon(item)"
                  fill-dot
                >
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <small>{{ get_calendar_time(item.created_at) }}</small>
                    </v-col>
                    <v-col>
                      <strong>{{ item.description }}</strong>
                      <div class="caption mb-2"></div>

                      <v-avatar
                        v-if="item.properties.media.length"
                        v-for="media in item.properties.media.slice(0, 5)"
                        tile
                      >
                        <v-img  
                          v-if="media.collection_name === 'project.files.links'"
                          :src="media.custom_properties.thumb"
                        ></v-img>
                        <v-img
                          v-else
                          :src="media.thumb_url"
                          @error="altImage(media)"
                        ></v-img>
                      </v-avatar>

                      <v-avatar tile v-else >
                        <v-img
                          :src="addHost(item.properties.thumb_url)"
                          @error="altImage(media)"
                        ></v-img>
                      </v-avatar>
                      
                    </v-col>
                  </v-row>
                </v-timeline-item>

              </v-timeline>
            </v-card-text>
          </v-card>

          <Empty v-else
            headline="No timeline yet"
            slug="empty-timeline"
          ></Empty>
      </div>
    </dash-card>
  </div>
</div>
</template>
<script src="./TimelineCard.js"></script>