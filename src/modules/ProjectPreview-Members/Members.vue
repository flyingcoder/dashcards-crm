<template>
  <div class="members-tab">
    <v-row no-gutters class="mb-2">
      <v-spacer></v-spacer>
      <v-btn fab small class="mr-1" @click="add_dialog = true">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn fab small class="mr-1" @click="setPreferredView('list')">
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn fab small class="mr-1" @click="setPreferredView('grid')">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </v-row>

    <v-progress-linear
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <add-dialog
      :dialog.sync="add_dialog"
      :id="id"
      ref="add_dialog"
      title="Add Member(s)"
      @save="add_item('add_members', $event, dynamic_api)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Member"
      text-content="Are you sure you want to delete this member?"
      @delete="delete_item('delete_member', dynamic_api)"
    />

    <VueTable
      v-if="view === 'list'"
      :items="items" 
      :headers="headers"
      :showRowActions="true"
      icon="mdi-clock"
      title="Project Timers"
      :key="componentKey"
      :noMoreData="noMoreData"
      :hasFooter="false"
    >
      <template v-slot:row-slot="{item}">
        <tr>
          <td class="text-cap">
            <v-avatar size="36" class="mr-1">
              <v-img :src="item.image_url" :title="item.fullname"></v-img>
            </v-avatar>
            {{ item.fullname }}
          </td>
          <td class="email">{{ item.email }}</td>
          <td>{{ item.telephone || 'none' }}</td>
          <td class="text-cap">{{ item.job_title }}</td>
          <td>{{ item.tasks.length }}</td>
          <Actions
            :item="item"
            :hasEdit="false"
            :permissions="$_permissions.get('hq_members')"
            @delete="open_delete_dialog(item)"
            @view="navigate_to_view_profile(item)"
          ></Actions>
        </tr>
      </template>
      <template v-slot:empty-slot>
        <v-btn tile text outlined @click="add_dialog = true"><v-icon left>add</v-icon> Add Member</v-btn>
      </template>
    </VueTable>
    
    <VueGrid
      v-else
      :items="items"
      @load-more="load_more_users"
      :key="componentKey"
      :permissions="$_permissions.get('hq_members')"
      :noMoreData="noMoreData"
      @delete="open_delete_dialog"
      @edit="open_edit_dialog"
      :hasFooter="false"
      :showProjectCount="false"
    ></VueGrid>
  </div>
</template>

<script src="./Members.js"></script>
<style lang="scss" scoped src="./Members.scss"></style>
