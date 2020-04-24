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
      <v-row no-gutters class="pa-3">
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
        <v-spacer></v-spacer>
        <v-col>
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
            <v-col v-for="item in filteredItems" :key="item.id" xs="12" sm="4" md="3">
              <v-card>
                <Media
                  :height="150"
                  :media="item"
                  @click-main="pop(item.public_url)"
                ></Media>
                <v-card-text>
                  <v-list dense class="pa-0">
                  <v-list-item two-line class="pa-0">
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
                </v-list>
                </v-card-text>

                <v-card-actions>
                  <span class="overline">{{
                    item.custom_properties.ext
                  }}</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    small
                    depressed
                    title="Download"
                    :href="item.download_url"
                    v-if="item.mime_type !== 'link'"
                  >
                    <v-icon small>cloud_download</v-icon>
                  </v-btn>
                  <v-btn
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
                    small
                    depressed
                    title="Delete"
                  >
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
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

          <Empty headline="No file found" v-else></Empty>

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
        :loading="loading"
        :key="componentKey"
        :noMoreData="noMoreData"
        :permission="$_permissions.get('hq_files')"
      >
        <template v-slot:row-slot="{ item }">
          <td @click="pop(item.public_url)">
            <Media
              :height="50"
              :width="50"
              :media="item"
              size="lg"
            ></Media>
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
