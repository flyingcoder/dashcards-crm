<template>
  <v-list class="sidebar">
    <div
      class="sidebar-inner"
      v-for="(item, index) in items"
      :data-nav="item.title"
      :key="item.index"
      @click="sidebar_item_clicked(item.action)"
      tile
      :class="{ active: item.action === selected_route_name }"
    >
      <v-list
        class="s__list"
        :key="index"
        :class="{ active: item.action === selected_route_name }"
        v-if="item.can_view() && item.title != 'Timers' && item.title != 'Templates' && item.title != 'Forms'"
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
      <v-list-group class="s_submenu" v-if="item.can_view() && item.title === 'Timers'">
        <template v-slot:activator>
          <v-list
            class="s__list-group"
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
        </template>
        <v-list-item
          :class="{ active: selected_route_name === 'globalTimer' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('globalTimer')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>GT</span>
          </v-list-item-action>
          <v-list-item-title>Global Timers</v-list-item-title>
        </v-list-item>
        <v-list-item
          :class="{ active: selected_route_name === 'taskTimer' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('taskTimer')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>TT</span>
          </v-list-item-action>
          <v-list-item-title>Task Timers</v-list-item-title>
        </v-list-item>
        <v-list-item
          :class="{ active: selected_route_name === 'alarm' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('alarm')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>A</span>
          </v-list-item-action>
          <v-list-item-title>Alarms</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group class="s_submenu" v-if="item.can_view() && item.title === 'Templates'">
        <template v-slot:activator>
          <v-list
            class="s__list-group"
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
        </template>
        <v-list-item
          :class="{ active: selected_route_name === 'templates' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('templates')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>M</span>
          </v-list-item-action>
          <v-list-item-title>Milestone</v-list-item-title>
        </v-list-item>
        <v-list-item
          :class="{ active: selected_route_name === 'invoices' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('invoices')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>I</span>
          </v-list-item-action>
          <v-list-item-title>Invoices</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group class="s_submenu" v-if="item.can_view() && item.title === 'Forms'">
        <template v-slot:activator>
          <v-list
            class="s__list-group"
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
        </template>
        <v-list-item
          :class="{ active: selected_route_name === 'questionnaire' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('questionnaire')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>Q</span>
          </v-list-item-action>
          <v-list-item-title>Questionnaire</v-list-item-title>
        </v-list-item>
        <v-list-item
          :class="{ active: selected_route_name === 'projectDetails' }"
          sub-group
          class="submenu-item"
          @click.stop="sidebar_item_clicked('projectDetails')"
        >
          <v-list-item-action class="s__icons mr-5 pl-4">
            <span>PD</span>
          </v-list-item-action>
          <v-list-item-title>Project Details</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>

<script src="./DashboardSidebar.js"></script>
<style lang="scss" scoped src="./DashboardSidebar.scss"></style>
<style scoped>
>>> .v-list-group.s_submenu .v-list-item{
  padding-left: 0;
  cursor: pointer;
  margin-left: 8px;
  height: 45px;
  min-height: 45px;
  -webkit-transition: -webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
  transition: -webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
  transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
  transition: box-shadow .28s cubic-bezier(.4,0,.2,1), -webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
  will-change: box-shadow;
}
>>> .v-list-group__header:hover{
      background-color: #3b589e;
      border-radius: 8px 0 0 8px;
      box-shadow: -10px 2px 15px 0px rgba(0, 0, 0, 0.4);
}
>>> .v-list-group.s_submenu.v-list-group--active.primary--text i{
        color: #3b589e;
}
>>> .v-list-group.s_submenu.v-list-group--active.primary--text:hover i{
        color: #3b589e;
}
>>> .v-list-group.s_submenu .submenu-item{
        color: #3b589e;
}
>>> .v-list-group.s_submenu i {
        color: #3b589e;
}

>>> .v-list-group.s_submenu .submenu-item:hover{
        color: #fff;
}
>>> .v-list-group.s_submenu:hover i {
        color: #fff;
}
>>> .v-list-group.s_submenu .v-list-item.active{
      background-color: #3b589e;
      border-radius: 8px 0 0 8px;
}
</style>
