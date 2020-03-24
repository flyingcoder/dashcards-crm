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
          :needConfirmation="true"
          :duplicateCheck="true"
          :options="dropzoneOptions"
          :useCustomSlot="true"
          dictFileTooBig="File too big"
          dictInvalidFileType="Invalid file type"
          @success="file_added"
          @failed="file_failed"
          @open-add-link-dialog="open_link_dialog"
          @upload-this-files="manual_upload"
        />
      </div>
    </div>

    <v-dialog v-model="dialog" width="500">
      <img :src="url" width="500" />
    </v-dialog>
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
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn icon text @click="layout = 'list'"><v-icon>list</v-icon></v-btn>
        <v-btn icon text @click="layout = 'grid'"><v-icon>grid_on</v-icon></v-btn>
      </v-flex>
    </v-layout>

    <v-card v-if="layout == 'grid'">
      <v-container fluid grid-list-md>
        <v-layout wrap v-if="filteredItems.length">
          <v-flex v-for="item in filteredItems" :key="item.id" xs12 sm4 md3>
            <v-card class="xs-12 sm-3">
              <v-img
                :src="item.thumb_url"
                @click="pop(item.public_url)"
                height="200px"
                @error="altImage(item)"
              >
              </v-img>
              <v-card-title primary-title>
                <div>
                  <div class="break-word-container" :title="item.name">
                    {{ item.name | str_limit(25) }}
                  </div>
                  <span class="grey--text"
                    >Added by:
                    {{ item.custom_properties.user.first_name }}</span
                  >
                </div>
              </v-card-title>
              <v-card-actions>
                <span class="text-upper">{{ item.custom_properties.ext }}</span>
                <v-spacer></v-spacer>
                <v-btn
                  fab
                  flat
                  small
                  depressed
                  title="Download"
                  :href="item.download_url"
                  v-if="item.mime_type !== 'link'"
                >
                  <v-icon>cloud_download</v-icon>
                </v-btn>
                <v-btn
                  fab
                  flat
                  small
                  depressed
                  title="Go to link"
                  @click="goto_link(item.download_url)"
                  v-else
                >
                  <v-icon>link</v-icon>
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
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="justify-content-center empty-files" v-else>
          <div class="empty-content">
            <div class="empty-svg">
              <svg viewBox="0 0 250 250">
                <path
                  d="M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"
                />
              </svg>
            </div>
            <div class="empty-text">
              No file found
            </div>
          </div>
        </div>
      </v-container>
    </v-card>

    <custom-table
      v-if="layout == 'list'"
      :headers="headers"
      :items="filteredItems"
      :has-checkbox="true"
      :permission="$_permissions.get('hq_files')"
      hide-default-footer
      class="custom__table"
      @items-selected="selected_ids = $event"
    >
      <template slot="custom-item" slot-scope="item">
        <td @click="pop(item.item.public_url)">
          <v-img
            :src="item.item.thumb_url"
            width="50px"
            height="50px"
            @error="altImage(item.item)"
          ></v-img>
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
            v-if="item.mime_type !== 'link'"
          >
            <v-icon>cloud_download</v-icon>
          </v-btn>
          <v-btn
            fab
            flat
            small
            depressed
            title="Go to link"
            @click="goto_link(item.download_url)"
            v-else
          >
            <v-icon>link</v-icon>
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
