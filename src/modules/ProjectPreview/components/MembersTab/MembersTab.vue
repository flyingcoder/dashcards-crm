<template>
  <div class="members-tab">
    <v-layout row>
      <v-flex xs12 class="text-xs-right">
        <v-btn fab small class="add__btn" @click="add_dialog = true">
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <add-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      title="Add Member(s)"
      @save="add_item('add_members', $event, dynamic_api)"
      :all-members="items"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Member"
      text-content="Are you sure you want to delete this member?"
      @delete="delete_item('delete_member', dynamic_api)"
    />

    <custom-table
      v-if="items.length"
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort="sort"
      :has-checkbox="true"
      hide-actions
      no-row-edit
      toolbar-title="Members"
      no-row-view
      :permission="$_permissions.get('hq_members')"
      @items-selected="selected_ids = $event"
      @sorted="changeSort"
    >
      <template slot="custom-item" slot-scope="{ item }">
        <td class="text-cap">{{ item.first_name + ' ' + item.last_name }}</td>
        <td class="email">{{ item.email }}</td>
        <td>{{ item.telephone }}</td>
        <td class="text-cap">{{ item.job_title }}</td>
        <td>{{ item.tasks.length }}</td>
      </template>

      <template slot="row-delete" slot-scope="{ item }">
        <v-btn
          v-if="can_be_deleted(item)"
          fab
          small
          flat
          depressed
          @click="open_delete_dialog(item)"
        >
          <img src="@/assets/icons/groups/delete.svg" alt="" />
        </v-btn>
      </template>
    </custom-table>

    <div class="empty-member" v-else>
      <div class="empty-content">
        <div class="empty-svg">
          <svg viewBox="0 0 250 250">
            <path
              d="M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z"
            />
          </svg>
        </div>
        <div class="empty-btn">
          <v-btn large dark color="#3b589e" @click="add_dialog = true"
            >Add Member
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./MembersTab.js"></script>
<style lang="scss" scoped src="./MembersTab.scss"></style>
