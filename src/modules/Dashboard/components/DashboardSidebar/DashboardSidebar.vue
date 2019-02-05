<template>
  <v-list class="sidebar">
    <template v-for="item in items">
      <v-list-tile
        v-if="item.can_view()"
        class="s__list"
        :key="item.title"
        :class="{ active: item.action === selected_route_name }"
        @click="sidebar_item_clicked(item.action)"
      >
        <v-list-tile-action class="s__icons">
          <svg viewBox="0 0 250 250">
            <path class="icon" :d="item.icon" />
          </svg>
        </v-list-tile-action>

        <v-list-tile-content class="s__content" :data-nav="item.title">
          {{ item.title }}

          <div class="submenu" v-if="item.title === 'Templates'">
            <div class="item">Milestone</div>
            <div class="item">Report</div>
            <div class="item">Invoice</div>
          </div>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>
