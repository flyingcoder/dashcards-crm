<template>
  <div class="services">

    <custom-table
            v-model="selected"
            :headers="headers"
            :items="items"
            :total-items="total_items"
            :loading="loading"
            select-all
            :has-checkbox="true"
            :table-action-disabled.sync="table_action_disabled"
    >

      <template slot="custom-item" slot-scope="item">
        <td class="text-xs-left pl-5">{{ item.item.service }}</td>

        <td class="text-xs-left create-by-column">
          <img :src="item.item.created_by.icon"/>
          <span>{{ item.item.created_by.text }}</span>
        </td>

        <td class="text-xs-left pl-5">{{ item.item.company }}</td>
        <td class="text-xs-left pl-5">{{ item.item.date_created }}</td>

        <td class="text-xs-center">
          <v-btn fab small color="blue" depressed
                 :disabled="!table_action_disabled">
            <img src="@/assets/icons/groups/edit.svg" alt="">
          </v-btn>
          <v-btn fab small color="blue" depressed
                 :disabled="!table_action_disabled">
            <img src="@/assets/icons/groups/delete.svg" alt="">
          </v-btn>
        </td>
      </template>

    </custom-table>








    <!--<v-data-table-->
            <!--:headers="headers"-->
            <!--:items="items"-->
            <!--:search="search"-->
            <!--:total-items="total_items"-->
            <!--pagination.sync="pagination"-->
            <!--v-model="selected"-->
            <!--select-all-->
            <!--class="elevation-1"-->
    <!--&gt;-->

      <!--<template slot="headerCell" slot-scope="props"> &lt;!&ndash; ON HEADER HOVER, SHOW THE TOOLTIP&ndash;&gt;-->
        <!--<v-tooltip bottom>-->
          <!--<span slot="activator">-->
            <!--{{ props.header.text }}-->
          <!--</span>-->
          <!--<span>-->
            <!--{{ props.header.text }}-->
          <!--</span>-->
        <!--</v-tooltip>-->
      <!--</template>-->

      <!--<template slot="headers" slot-scope="props"> &lt;!&ndash; HEADER ITEMS &ndash;&gt;-->
        <!--<tr>-->
          <!--<th>-->
            <!--<v-checkbox-->
                    <!--:input-value="props.all"-->
                    <!--:indeterminate="props.indeterminate"-->
                    <!--primary-->
                    <!--hide-details-->
                    <!--@click.native="toggleAll"-->
            <!--&gt;</v-checkbox>-->
          <!--</th>-->
          <!--<th-->
                  <!--v-for="header in props.headers"-->
                  <!--:key="header.id"-->
                  <!--:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"-->
                  <!--@click="changeSort(header.value)"-->
                  <!--:align="header.align"-->
          <!--&gt;-->
            <!--<template v-if="header.text === 'Icon'">-->
              <!--<v-btn fab small color="blue" depressed :disabled="table_action_disabled">-->
                <!--<img src="@/assets/icons/groups/delete.svg" alt="">-->
              <!--</v-btn>-->
            <!--</template>-->

             <!--<template v-else>-->
               <!--<v-icon small v-if="header.sortable">arrow_upward</v-icon>-->
               <!--{{ header.text }}-->
             <!--</template>-->

          <!--</th>-->
        <!--</tr>-->
      <!--</template>-->

      <!--<template slot="items" slot-scope="props">-->
        <!--<td>-->
          <!--<v-checkbox-->
                  <!--v-model="props.selected"-->
                  <!--primary-->
                  <!--hide-details-->
          <!--&gt;</v-checkbox>-->
        <!--</td>-->
        <!--<td class="text-xs-left pl-5">{{ props.item.service }}</td>-->

        <!--<td class="text-xs-left create-by-column">-->
          <!--<img :src="props.item.created_by.icon" />-->
          <!--<span>{{ props.item.created_by.text }}</span>-->
        <!--</td>-->

        <!--<td class="text-xs-left pl-5">{{ props.item.company }}</td>-->
        <!--<td class="text-xs-left pl-5">{{ props.item.date_created }}</td>-->

        <!--<td class="text-xs-center">-->
          <!--<v-btn fab small color="blue" depressed :disabled="!table_action_disabled">-->
            <!--<img src="@/assets/icons/groups/edit.svg" alt="">-->
          <!--</v-btn>-->
          <!--<v-btn fab small color="blue" depressed :disabled="!table_action_disabled">-->
            <!--<img src="@/assets/icons/groups/delete.svg" alt="">-->
          <!--</v-btn>-->
        <!--</td>-->
      <!--</template>-->

      <!--<template slot="no-data"> &lt;!&ndash; WHEN NO DATA PRESENT ON TABLE &ndash;&gt;-->
        <!--<v-alert :value="true" color="error" icon="warning">-->
          <!--Sorry, nothing to display here :(-->
        <!--</v-alert>-->
      <!--</template>-->

    <!--</v-data-table>-->
  </div>
</template>
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>