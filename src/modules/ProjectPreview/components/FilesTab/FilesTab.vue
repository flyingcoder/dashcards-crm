<template>
  <div class="files__tab">
    <LinkDialog ref="link_dialog" />

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
        />
      </div>
    </div>

    <custom-table
      v-if="items.length || loading"
      :headers="headers"
      :items="items"
      :has-checkbox="true"
      :permission="$_permissions.get('hq_files')"
      hide-actions
      class="custom__table"
      @items-selected="selected_ids = $event"
    >
      <template slot="toolbar">
        <v-layout row class="file__list_header">
          <v-flex class="file__tab">
            <v-btn color="#b3b7c3" flat medium>
              <v-icon dark left class="all">select_all</v-icon>
              All
            </v-btn>
            <v-btn color="#b3b7c3" flat medium>
              <v-icon dark left class="image">image</v-icon>
              Image
            </v-btn>
            <v-btn color="#b3b7c3" flat medium>
              <v-icon dark left class="video">video_library</v-icon>
              Video
            </v-btn>
            <v-btn color="#b3b7c3" flat medium>
              <v-icon dark left class="docs">file_copy</v-icon>
              Document
            </v-btn>
            <v-btn color="#b3b7c3" flat medium>
              <v-icon dark left class="other">settings_applications</v-icon>
              Other
            </v-btn>
            <v-btn color="#3b589e" dark @click="open_link_dialog">
              Add Link
            </v-btn>
          </v-flex>
        </v-layout>
      </template>

      <template slot="custom-item" slot-scope="item">
        <td>
          <v-img :src="item.item.thumb_url"></v-img>
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
            @click="download_image(item.thumb_url)"
          >
            <v-icon>cloud_download</v-icon>
          </v-btn>
          <v-btn v-if="can_delete" fab small flat depressed title="Delete">
            <img src="@/assets/icons/groups/delete.svg" alt="" />
          </v-btn>
        </td>
      </template>
    </custom-table>
  </div>
</template>

<script src="./FilesTab.js"></script>
<style lang="scss" scoped src="./FilesTab.scss"></style>

<style scoped>
>>> .content__wrapper .buzz__tables .buzz__tablesTwo {
  padding: 0;
  border: none;
  background-color: #fff;
}
</style>
