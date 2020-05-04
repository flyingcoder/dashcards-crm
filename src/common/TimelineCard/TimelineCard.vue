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
        @expand="expand"
      >
        <template v-slot:content>
          <Empty
            v-if="!loading && items.length === 0"
            slug="empty-timeline"
            headline="No timeline yet"
          >
          </Empty>

          <v-timeline align-top dense v-else>
            <v-timeline-item
              v-for="item of items"
              :key="item.id"
              small
              :icon="set_icon(item)"
              fill-dot
            >
              <v-row class="pt-1" no-gutters>
                <v-col>
                  <strong>{{ item.created_at | from_now }}</strong>
                  <div class="caption mb-2">{{ item.description }}</div>
                  <FilesPreview
                    v-if="!isExpanded"
                    :item="item"
                    :limit="5"
                  ></FilesPreview>
                </v-col>
                <v-col v-if="isExpanded">
                  <FilesPreview :item="item" :limit="5"></FilesPreview>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>

          <v-progress-linear
            v-if="loading"
            :indeterminate="true"
            class="mb-1"
          ></v-progress-linear>
        </template>
      </dash-card>
    </div>
  </div>
</template>
<script src="./TimelineCard.js"></script>
