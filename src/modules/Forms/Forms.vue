<template>
  <div class="forms">
    <table-header :paths="paths" :noButton="true">
      <template slot="form-btn">
        <div class="form-btn">
          <v-tooltip bottom content-class="action">
            <v-btn
              class="add__btn"
              fab
              small
              dark
              color="#3b589e"
              slot="activator"
              @click="add_new_question"
            >
              <v-icon>add</v-icon>
            </v-btn>
            <span>Add question</span>
          </v-tooltip>

          <v-tooltip bottom content-class="action">
            <v-btn
              class="add__btn"
              fab
              small
              slot="activator"
              dark
              color="#3b589e"
              @click="add_title_and_descriptions"
            >
              <v-icon>text_fields</v-icon>
            </v-btn>
            <span>Add title and descriptions</span>
          </v-tooltip>
        </div>
      </template>
    </table-header>

    <div class="form-content">
      <div class="form-container">
        <v-tabs
          class="tabs"
          centered
          grow
          hide-slider
          height="60px"
          v-model="active_tab"
        >
          <v-tab v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
            {{ tab.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="active_tab">
          <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
            <div class="form-wrapper">
              <component
                :is="active_tab"
                :sections="dynamic_sections"
                v-if="active_tab === tab.name"
              ></component>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script src="./Forms.js"></script>

<style lang="scss" scoped src="./Forms.scss"></style>

<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background: #3b589e;
  color: white;
}
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
