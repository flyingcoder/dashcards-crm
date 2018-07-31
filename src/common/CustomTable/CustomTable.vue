<template>

  <v-data-table
          v-model="selected"
          :headers="headers"
          :items="items"
          :loading="loading"
          :pagination.sync="pagination"
          select-all
          :total-items="totalItems"
          :rows-per-page-items="rowsPerPageItems"
  >
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear> <!-- LOADING -->

    <template slot="headers" slot-scope="props"> <!-- HEADERS -->
      <tr>
        <th v-if="$props.hasCheckbox">
          <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  primary
                  hide-details
                  @click.self="toggleAll"
          ></v-checkbox>
        </th>
        <th
                v-for="header in props.headers"
                :key="header.id"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                :width="header.width"
                @click="changeSort(header.value)"
        >
          <template v-if="header.text === 'Icon'">
            <v-btn fab small color="blue" depressed
                   :disabled="tableActionDisabled">
              <img src="@/assets/icons/groups/delete.svg" alt="">
            </v-btn>
          </template>

          <template v-else-if="header.is_action">
            <img src="@/assets/icons/table/menu.svg" />
          </template>

          <template v-else>
            <v-icon small>arrow_upward</v-icon>
            {{header.text}}
          </template>
        </th>

        <th v-if="hasHeaderIcon">
          <img src="@/assets/icons/table/menu.svg" />
        </th>

      </tr>
    </template>

    <template slot="items" slot-scope="props"> <!-- ITEMS -->
      <tr :active="props.selected">
        <td v-if="$props.hasCheckbox" @click="props.selected = !props.selected">
          <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
          ></v-checkbox>
        </td>

        <slot name="custom-item" :item="props.item"></slot>

      </tr>
    </template>

    <template slot="no-data"> <!-- DISPLAYED WHEN NO ITEMS -->
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>

  </v-data-table>

</template>
<script src="./CustomTable.js"></script>
<style lang="scss" scoped src="./CustomTable.scss"></style>