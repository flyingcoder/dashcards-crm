<template>
  <div class="teams-page">
    <table-header
      :paths="paths"
      :noListButton="false"
      :noGridButton="false"
      @click="add_dialog = true"
      @click-list-view="setPreferredView('list')"
      @click-grid-view="setPreferredView('grid')"
    />

    <v-progress-linear
      v-if="view === 'grid'"
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <teams-dialog
      ref="add_dialog"
      title="Add New Member"
      :dialog.sync="add_dialog"
      @save="add_item('add_new_team', $event)"
      @close-dialog="add_dialog = false"
    />

    <teams-dialog
      ref="edit_dialog"
      title="Edit Member"
      :dialog.sync="edit_dialog"
      :fields-to-edit="edit_item"
      :is-edit-dialog="edit_dialog"
      @save="update_item('update_team', $event)"
      @close-dialog="edit_dialog = false"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Member"
      text-content="Are you sure you want to delete this member?"
      @delete="delete_item('delete_team', $event)"
    />

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Members"
      text-content="Are you sure you want to delete these members? This can't be undone."
      @delete="bulk_delete('bulk_delete_member')"
    />

    <VueTable
      v-if="view === 'list'"
      :items="items"
      :headers="headers"
      :showRowActions="true"
      @load-more="load_more_users"
      :loading="loading"
      icon="widgets"
      title="Members"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="true"
      @delete-selected="open_bulk_delete_dialog($event)"
    >
      <template v-slot:row-slot="{ item }">
        <td @click="navigate_to_view_profile(item)" class="clickable-td">
          <v-avatar size="30" color="teal">
            <v-img :src="item.image_url" :title="item.fullname">
              <template v-slot:placeholder>
                <span class="white--text headline">U</span>
              </template>
            </v-img>
          </v-avatar>
          {{ item.fullname }}
        </td>
        <td>{{ item.job_title }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.tasks }}</td>
        <td>{{ item.projects }}</td>
        <Actions
          :item="item"
          :permissions="$_permissions.get('hq_members')"
          @delete="open_delete_dialog(item)"
          @edit="open_edit_dialog(item)"
          @view="navigate_to_view_profile(item)"
        ></Actions>
      </template>
      <template v-slot:empty-slot>
        <v-btn dark color="#3b589e" @click="add_dialog = true"
          >Add Member</v-btn
        >
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
    ></VueGrid>
  </div>
</template>
<style lang="scss" src="./Teams.scss"></style>
<script src="./Teams.js"></script>
