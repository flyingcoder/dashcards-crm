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
    
    <v-card class="p-2">
      <v-row class="py-2 px-1">
        <v-col md="10" sm="9" xs="12">
          <ToolbarItem
            v-for="item of toolbarItems"
            :key="item.id"
            :icon="item.icon"
            :icon-text="item.iconText"
            :icon-class="item.className"
            :is-active="item.type === filter"
            @click="filter = item.type"
          ></ToolbarItem>
        </v-col>
        <v-col md="2" sm="3" xs="12">
          <v-spacer></v-spacer>
          <v-btn icon text right @click="setPreferredView('list')"
            ><v-icon :color="view == 'list' ? 'primary' : ''"
              >list</v-icon
            ></v-btn
          >
          <v-btn icon text right @click="setPreferredView('grid')"
            ><v-icon :color="view == 'grid' ? 'primary' : ''"
              >grid_on</v-icon
            ></v-btn
          >
        </v-col>
      </v-row>

      <v-card v-if="view == 'grid'">
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
                <v-card-text>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        <div class="break-word-container" :title="item.name">
                          {{ item.name | str_limit(25) }}
                        </div>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <span class="grey--text">
                          Added by:
                          {{ item.custom_properties.user.first_name }}</span
                        >
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>
                <v-card-actions>
                  <span class="text-upper">{{
                    item.custom_properties.ext
                  }}</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    depressed
                    title="Download"
                    :href="item.download_url"
                    v-if="item.mime_type !== 'link'"
                  >
                    <v-icon small>cloud_download</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    small
                    depressed
                    title="Go to link"
                    @click="goto_link(item.download_url)"
                    v-else
                  >
                    <v-icon small>link</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="can_delete"
                    @click="open_delete_dialog(item)"
                    fab
                    small
                    text
                    pressed
                    title="Delete"
                  >
                    <img src="@/assets/icons/groups/delete.svg" alt="" />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>

          <v-row no-gutters v-if="filteredItems.length">
            <v-spacer></v-spacer>
            <v-card-actions class="py-2">
              <v-btn tile text v-if="noMoreData === true" disabled
                >NO MORE DATA</v-btn
              >
              <v-btn
                tile
                text
                :loading="btnloading"
                v-else
                @click="get_more_files"
                >LOAD MORE</v-btn
              >
            </v-card-actions>
            <v-spacer></v-spacer>
          </v-row>

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

      <VueTable
        v-else-if="view == 'list'"
        :items="filteredItems"
        :headers="headers"
        :showRowActions="true"
        @load-more="get_more_files"
        icon="widgets"
        title="Files"
        :key="componentKey"
        :noMoreData="noMoreData"
        :permission="$_permissions.get('hq_files')"
      >
        <template v-slot:row-slot="{ item }">
          <td @click="pop(item.public_url)">
            <v-img
              class="my-1"
              :src="item.thumb_url"
              width="50px"
              height="50px"
              @error="altImage(item.item)"
            ></v-img>
          </td>
          <td class="text-upper">{{ item.custom_properties.ext }}</td>
          <td class="text-cap">{{ item.name }}</td>
          <td class="text-cap">
            {{ item.custom_properties.user.first_name }}
          </td>
          <td class="text-cap">Project</td>
          <td class="text-xs-center">
            <v-btn
              fab
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
              text
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
              text
              depressed
              title="Delete"
            >
              <img src="@/assets/icons/groups/delete.svg" alt="" />
            </v-btn>
          </td>
        </template>
      </VueTable>
    </v-card>
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
