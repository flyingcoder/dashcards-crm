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

  </div>
</template>
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>