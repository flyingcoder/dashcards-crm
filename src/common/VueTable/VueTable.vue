<template>
  <v-card flat class="custom-table-wrapper">
    <v-container fluid class="custom-table-inner">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :disable-sort="sortingEnable"
        :show-select="showSelect"
        class="custom-table"
        v-bind="$attrs"
        shaped
        hide-default-footer
        height="500"
        :items-per-page="itemsPerPage"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="custom-table-title">
              {{ title }}
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
          <tr>
            <td v-if="showSelect && !noRowDelete">
              <v-checkbox
                v-model="selected"
                style="margin:0px;padding:0px"
                :value="item"
                hide-details
              ></v-checkbox>
            </td>
            <slot name="row-slot" :item="item"></slot>
          </tr>
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
                v-if="showSelect && !noRowDelete && selected.length > 0"
                outlined
                color="red"
                @click="$emit('delete-selected', selected)"
                v-show="selected.length > 0"
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
<style lang="scss" src="./VueTable.scss"></style>
