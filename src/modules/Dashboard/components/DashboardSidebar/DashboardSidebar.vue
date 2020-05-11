<template>
  <v-list class="sidebar">
    <div
      class="sidebar-inner"
      v-for="(item, index) in items"
      :data-nav="item.title"
      :key="item.action"
      @click="sidebar_item_clicked(item.action)"
      tile
      :class="{ active: item.action === selected_route_name }"
    >
      <v-list
        v-if="item.can_view()"
        class="s__list"
        :key="index"
        :class="{ active: item.action === selected_route_name }"
      >
        <v-list-item-action class="s__icons mr-5">
          <svg viewBox="0 0 250 250">
            <path class="icon" :d="item.icon" />
          </svg>
        </v-list-item-action>

        <v-list-item-content class="s__content">
          {{ item.title }}
        </v-list-item-content>
      </v-list>
      <v-list-group class="s_submenu" v-if="item.title === 'Timers'">
        <v-list-tile
          :class="{ active: selected_route_name === 'globalTimer' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('globalTimer')"
        >
          <v-list-tile-title>Global Timers</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :class="{ active: selected_route_name === 'taskTimer' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('taskTimer')"
        >
          <v-list-tile-title>Task Timers</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :class="{ active: selected_route_name === 'alarm' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('alarm')"
        >
          <v-list-tile-title>Alarms</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      <v-list-group class="s_submenu" v-if="item.title === 'Templates'">
        <v-list-tile
          :class="{ active: selected_route_name === 'templates' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('templates')"
        >
          <v-list-tile-title>Milestone</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :class="{ active: selected_route_name === 'reports' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('reports')"
        >
          <v-list-tile-title>Reports</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :class="{ active: selected_route_name === 'invoices' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('invoices')"
        >
          <v-list-tile-title>Invoices</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      <v-list-group class="s_submenu" v-if="item.title === 'Forms'">
        <v-list-tile
          :class="{ active: selected_route_name === 'questionnaire' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('questionnaire')"
        >
          <v-list-tile-title>Questionnaire</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          :class="{ active: selected_route_name === 'projectDetails' }"
          sub-group
          class="v-list-item"
          @click.stop="sidebar_item_clicked('projectDetails')"
        >
          <v-list-tile-title>Project Details</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <!-- <div class="submenu" v-if="item.title === 'Timers'">
        <div class="item" @click.stop="sidebar_item_clicked('taskTimer')">
          Task Timers
        </div>
        <div class="item" @click.stop="sidebar_item_clicked('globalTimer')">
          Global Timers
        </div>
        <div class="item" @click.stop="sidebar_item_clicked('alarm')">
          Alarms
        </div>
      </div>

      <div class="submenu" v-if="item.title === 'Templates'">
        <div class="item" @click.stop="sidebar_item_clicked('templates')">
          Milestone
        </div>
        <div class="item" @click.stop="sidebar_item_clicked('reports')">
          Reports
        </div>
        <div class="item" @click.stop="sidebar_item_clicked('invoices')">
          Invoice
        </div>
      </div>

      <div class="submenu" v-if="item.title === 'Forms'">
        <div class="item" @click.stop="sidebar_item_clicked('questionnaire')">
          Questionnaire
        </div>
        <div class="item" @click.stop="sidebar_item_clicked('projectDetails')">
          Project Details
        </div>
      </div> -->
    </div>
  </v-list>
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>
<style scoped>
>>> .s_submenu .v-list-item__icon.v-list-group__header__append-icon {
  position: absolute;
  top: -34px;
  left: 145px;
}
>>> .sidebar-inner.active
  .s_submenu
  i.v-icon.notranslate.mdi.mdi-chevron-down.theme--light {
  color: #fff !important;
}
>>> .s_submenu
  .v-list-group__header.v-list-item.v-list-item--active.v-list-item--link.theme--light {
  color: #fff;
}

>>> .s_submenu
  .v-list-group__header.v-list-item.v-list-item--link.theme--light {
  position: absolute;
  padding: 0;
}
</style>
