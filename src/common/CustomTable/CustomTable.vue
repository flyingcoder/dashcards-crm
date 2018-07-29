<template>
  <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :pagination.sync="pagination"
          select-all
          item-key="name"
          class="elevation-1"
  >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  primary
                  hide-details
                  @click.native="toggleAll"
          ></v-checkbox>
        </th>
        <th
                v-for="header in props.headers"
                :key="header.text"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>
  </v-data-table>
</template>
<script src="./CustomTable.js"></script>
<style lang="scss" scoped src="./CustomTable.scss"></style>