<template>
  <v-navigation-drawer class="sidebar" permanent>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        v-if="item.can_view()"
        :key="item.title"
        class="sidebar-inner"
        :class="{ active: item.action === selected_route_name }"
        @click="sidebar_item_clicked(item.action)"
        link
        dark
      >
        <v-list-item-icon class="s__icons">
          <svg viewBox="0 0 250 250">
            <path class="icon" :d="item.icon" />
          </svg>
        </v-list-item-icon>

        <v-list-item-content class="s__content">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
 <!--  <v-list class="sidebar">
    <div
      class="sidebar-inner"
      v-for="item in items"
      :data-nav="item.title"
      :key="item.action"
      tile
    >
      <v-list
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

        <v-list-tile-content class="s__content">
          {{ item.title }}
        </v-list-tile-content>
      </v-list>

      <div class="submenu" v-if="item.title === 'Templates'">
        <div class="item" @click="sidebar_item_clicked('templates')">
          Milestone
        </div>
        <div class="item" @click="sidebar_item_clicked('reports')">
          Reports
        </div>
        <div class="item" @click="sidebar_item_clicked('invoices')">
          Invoice
        </div>
      </div>

      <div class="submenu" v-if="item.title === 'Forms'">
        <div class="item" @click="sidebar_item_clicked('questionnaire')">
          Questionnaire
        </div>
        <div class="item" @click="sidebar_item_clicked('projectDetails')">
          Project Details
        </div>
      </div>
    </div>
  </v-list> -->
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>
