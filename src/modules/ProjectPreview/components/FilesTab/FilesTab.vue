<template>
  <div class="files__tab">
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
      hide-actions
      :permission="$_permissions.get('hq_files')"
      @items-selected="selected_ids = $event"
      class="custom__table"
      no-row-edit
      no-row-view
    >
      <template slot="toolbar">
        <v-layout row class="file__list_header">
          <v-flex md10 sm12 xs12 class="file__tab">
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
            <v-btn color="#3b589e" dark>
              Add Link
            </v-btn>
          </v-flex>
          <v-flex md2 sm12 xs12 class="file__option text-xs-right">
            <v-btn fab flat small class="list__view">
              <v-icon>list</v-icon>
            </v-btn>
            <v-btn fab flat small class="grid__view">
              <v-icon>grid_on</v-icon>
            </v-btn>
            <v-btn fab flat small class="sort__option">
              <v-icon>more_horiz</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </template>

      <template slot="custom-item" slot-scope="item">
        <td class="text-upper">{{ item.item.custom_properties.ext }}</td>
        <td class="text-cap">{{ item.item.name }}</td>
        <td class="text-cap">
          {{ item.item.custom_properties.user.first_name }}
        </td>
        <td class="text-cap">Project</td>
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
