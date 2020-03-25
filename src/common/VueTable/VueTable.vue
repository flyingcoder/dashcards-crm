<template>
  <v-card flat>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        :disable-sort="sortingEnable"
        :show-select="showSelect"
        class="elevation-1"
        v-bind="$attrs"
        shaped
        hide-default-footer
        @toggle-select-all="handleSelectAllToggle"
        height="500"
        :items-per-page="itemsPerPage"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>
              <v-icon>{{ icon }}</v-icon> {{ title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex sm12 md3 v-if="hasSearch">
              <v-text-field
                width="100"
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                dense
                hide-details
                solo
              ></v-text-field>
            </v-flex>
          </v-toolbar>
          <slot name="header"></slot>
          <v-divider></v-divider>
        </template>

        <template v-slot:item="{ item }">
          <slot name="row-slot" :item="item"></slot>
        </template>

        <template v-slot:no-data>
          <Empty>
            <slot slot="extra" name="empty-slot"></slot>
          </Empty>
        </template>

        <template v-slot:footer v-if="hasFooter">
          <v-divider></v-divider>
          <v-row class="py-3 px-2" no-gutters>
            <v-col>
              <v-btn
                tile
                text
                v-if="can_bulk_delete"
                outlined
                @click="$emit('delete-selected')"
                >DELETE SELECTED <v-icon right small>delete</v-icon></v-btn
              >
            </v-col>
            <v-col class="d-flex align-content-center">
              <v-spacer></v-spacer>
              <v-btn tile text v-if="noMoreData === true" disabled
                >NO MORE DATA</v-btn
              >
              <v-btn
                tile
                text
                :loading="btnloading"
                v-else
                @click="handleLoadMore"
                >LOAD MORE</v-btn
              >
              <v-spacer></v-spacer>
            </v-col>
            <v-col></v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="./VueTable.js"></script>
