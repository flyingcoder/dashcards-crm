<template>
  <div class="content clients">

    <custom-table
             :headers="headers"
            :items="clients"
            :has-checkbox="true"
            :has-header-icon="true"
    >

      <template slot="custom-item" slot-scope="item">

         <td class="text-xs-left"> <!--TODO fill image with dynamic data from backend-->
            <div class="user__image">
                <img :src="require('@/assets/temp/user.png')" /> &nbsp;
            </div>
            <div class="user__name">
                {{ item.item.first_name }}
                {{ item.item.last_name }}
            </div>
        </td>

        <td class="text-xs-left pl-5">{{ item.item.telephone }}</td>
        <td class="text-xs-left pl-5">{{ item.item.email }}</td>
        <td class="text-xs-left pl-5">{{ item.item.status }}</td>

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
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>