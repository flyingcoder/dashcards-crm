<template>
  <div class="projects">
    <table-header :paths="paths" @click="add_dialog = true" />

    <ProjectModal
      :dialog.sync="add_dialog"
      ref="add_dialog"
      title="Add New Project"
      @save="handleSaveProject"
    ></ProjectModal>

    <ProjectModal
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Project"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('update_project', $event)"
    ></ProjectModal>

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Project"
      text-content="Are you sure you want to delete this project? "
      @delete="delete_item('delete_project')"
    />

    <delete-dialog
      :open-dialog.sync="bulk_delete_dialog"
      title="Delete Projects"
      text-content="Are you sure you want to delete these projects? This can't be undone."
      @delete="bulk_delete('bulk_delete_project')"
    />

    <services-add-dialog
      :dialog.sync="add_new_service_dialog"
      ref="add_service_dialog"
      title="Add New Service(s)"
      @save="save_new_services($event)"
    />

    <clients-dialog
      :dialog.sync="add_new_client_dialog"
      ref="add_client_dialog"
      title="Add New Client"
      @save="save_new_client($event)"
    />

    <teams-dialog
      ref="add_member_dialog"
      title="Add New Member"
      :dialog.sync="add_new_member_dialog"
      @save="save_new_member($event)"
    />

    <VueTable
      :items="items"
      :headers="headers"
      :showRowActions="true"
      @load-more="load_more"
      @delete-selected="open_bulk_delete_dialog($event)"
      icon="widgets"
      title="Projects"
      :key="componentKey"
      :noMoreData="noMoreData"
      :showSelect="true"
      :loading="loading"
    >
      <template v-slot:row-slot="{ item }">
        <td class="clickable-td" @click="navigate_to_view_project(item.id)">
          {{ item.title }}
        </td>
        <td>{{ item.company_name }}</td>
        <td>{{ item.service_name | str_limit }}</td>
        <td>
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-avatar size="35" color="teal" dark v-on="on">
                <v-img
                  :src="item.project_manager.user.image_url"
                  :title="item.project_manager.user.fullname"
                >
                  <template v-slot:placeholder>
                    <span class="white--text headline">U</span>
                  </template>
                </v-img>
              </v-avatar>
            </template>
            <span>{{item.project_manager.user.fullname | ucwords}}</span>
          </v-tooltip>
        </td>
        <td>{{ item.started_at | bzFromNow }}</td>
        <td>
          <v-progress-linear
            v-if="item.progress < 100"
            color="#9095AB"
            height="5"
            value="100"
          ></v-progress-linear>
          <v-progress-linear
            v-else
            color="#1fb868"
            height="5"
            value="100"
          ></v-progress-linear>
        </td>
        <Actions
          :item="item"
          @delete="open_delete_dialog(item)"
          @edit="open_edit_dialog(item)"
          @view="navigate_to_view_project(item.id)"
        ></Actions>
      </template>
      <template v-slot:empty-slot>
        <v-btn dark color="#3b589e" @click="add_dialog = true"
          >Add Project</v-btn
        >
      </template>
    </VueTable>
  </div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" scoped src="./Projects.scss"></style>
