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
          <Empty
            v-else-if="timeline_items.length === 0"
            slug="empty-timeline"
            headline="No timeline yet"
          >
          </Empty>

          <v-timeline align-top dense v-else>
            <v-timeline-item
              v-for="item of timeline_items"
              :key="item.id"
              color="#1fb868"
              small
            >
              <div class="timeline__item">
                <div class="t__time">
                  {{ get_calendar_time(item.created_at) }}
                </div>
                <v-flex>
                  <h2 class="t__title">{{ item.description }}</h2>
                  <Carousel
                    v-if="item.properties.media.length"
                    :autoplay="true"
                    :nav="false"
                    :items="5"
                    :showPrev="false"
                    :showNext="false"
                  >
                    <v-img
                      v-for="(media, i) in item.properties.media"
                      :key="i"
                      :src="media.thumb_url"
                      width="60px"
                      height="60px"
                      @error="altImage(media)"
                    ></v-img>
                  </Carousel>
                  <!-- else if single media old uploaded -->
                  <v-img
                    v-else
                    :src="addHost(item.properties.thumb_url)"
                    width="60px"
                    height="60px"
                    @error="altImage(item.properties)"
                  ></v-img>
                  <!-- {{item.properties}} -->
                </v-flex>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </dash-card>
    </div>
  </div>
</template>
<script src="./TimelineCard.js"></script>
