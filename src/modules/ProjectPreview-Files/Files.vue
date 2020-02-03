<template>
  <div class="files__tab">
    <LinkDialog ref="link_dialog" @save="addLink" />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete File"
      text-content="Are you sure you want to delete this file?"
      @delete="delete_item"
    />

    <div class="drop__files">
      <div class="drop__files_body">
        <CustomDropzone
          ref="dropzone"
          :duplicateCheck="true"
          :options="dropzoneOptions"
          :useCustomSlot="true"
          dictFileTooBig="File too big"
          dictInvalidFileType="Invalid file type"
          @success="file_added"
          @failed="file_failed"
        />
      </div>
    </div>

    <v-dialog v-model="dialog" width="500">
      <img :src="url" width="500" />
    </v-dialog>

    <custom-table
      :headers="headers"
      :items="filteredItems"
      :has-checkbox="true"
      :permission="$_permissions.get('hq_files')"
      hide-actions
      class="custom__table"
      @items-selected="selected_ids = $event"
    >
      <template slot="toolbar">
        <v-layout row class="file__list_header">
          <v-flex class="file__tab">
            <ToolbarItem
              v-for="item of toolbarItems"
              :key="item.id"
              :icon="item.icon"
              :icon-text="item.iconText"
              :icon-class="item.className"
              :is-active="item.type === filter"
              @click="filter = item.type"
            />
            <v-btn color="#3b589e" dark @click="open_link_dialog">
              Add Link
            </v-btn>
          </v-flex>
        </v-layout>
      </template>

      <template slot="custom-item" slot-scope="item">
        <td @click="pop(item.item.public_url)">
          <v-img :src="item.item.thumb_url" width="50px" height="50px" @error="useDefaultThumbnail(item.item)"></v-img>
        </td>
        <td class="text-upper">{{ item.item.custom_properties.ext }}</td>
        <td class="text-cap">{{ item.item.name }}</td>
        <td class="text-cap">
          {{ item.item.custom_properties.user.first_name }}
        </td>
        <td class="text-cap">Project</td>
      </template>

      <template #row-actions="{ item }">
        <td class="text-xs-center">
          <v-btn
            fab
            flat
            small
            depressed
            title="Download"
            :href="item.download_url"
          >
            <v-icon>cloud_download</v-icon>
          </v-btn>
          <v-btn
            v-if="can_delete"
            @click="open_delete_dialog(item)"
            fab
            small
            flat
            depressed
            title="Delete"
          >
            <img src="@/assets/icons/groups/delete.svg" alt="" />
          </v-btn>
        </td>
      </template>
    </custom-table>
  </div>
</template>

<script src="./Files.js"></script>
<style lang="scss" scoped src="./Files.scss"></style>

<style scoped>
>>> .content__wrapper .buzz__tables .buzz__tablesTwo {
  padding: 0;
  border: none;
  background-color: #fff;
}
</style>
