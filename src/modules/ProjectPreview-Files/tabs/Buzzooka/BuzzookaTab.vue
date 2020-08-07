<template>
    <div class="files__tab">
        <LinkDialog ref="link_dialog" @save="addLink" />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete File"
                       text-content="Are you sure you want to delete this file?" @delete="delete_item"
        />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Selected Files"
                       text-content="Are you sure you want to delete these files? <br>This can't be undone."
                       @delete="bulk_delete_files"
        />
        <div class="drop__files">
            <div class="drop__files_body">
                <CustomDropzone ref="dropzone" :needConfirmation="true" :duplicateCheck="true"
                                :options="dropzoneOptions" :useCustomSlot="true" dictFileTooBig="File too big"
                                dictInvalidFileType="Invalid file type" @success="file_added" @failed="file_failed"
                                @open-add-link-dialog="open_link_dialog" @upload-this-files="manual_upload"
                />
            </div>
        </div>
        <EmbedViewer ref="embed_viewer_dialog" :media="selected_media" />
        <VideoViewer ref="video_viewer_dialog" :media="selected_media" previewFrom="files" />
        <ImageViewer ref="image_viewer_dialog" :media="selected_media" previewFrom="files" />
        <DocsViewer ref="doc_viewer_dialog" :media="selected_media" />
        <IframeViewer ref="iframe_viewer_dialog" :media="selected_media" />
        <OtherViewer ref="other_viewer_dialog" :media="selected_media" />
        <v-card outlined class="files__tab-content p-2">
            <v-row no-gutters class="pa-5 files-header">
                <v-col md="11" sm="9" xs="12">
                    <ToolbarItem v-for="item of toolbarItems" :key="item.id" :icon="item.icon"
                                 :icon-text="item.iconText" :icon-class="item.className"
                                 :is-active="item.type === filter" @click="filter = item.type"
                    />
                </v-col>
                <v-spacer />
                <v-btn icon right @click="setPreferredView('list')">
                    <v-icon :class="{ active: view === 'list' }">mdi-view-sequential</v-icon>
                </v-btn>
                <v-btn icon right @click="setPreferredView('grid')">
                    <v-icon :class="{ active:view === 'grid' }">mdi-view-module</v-icon>
                </v-btn>
            </v-row>
            <v-card v-if="view === 'grid'" class="grid-view" flat>
                <v-container fluid grid-list-md>
                    <v-layout wrap v-if="filteredItems.length">
                        <v-col v-for="item in filteredItems" :key="item.id" xs="12" sm="4" md="3">
                            <v-card>
                                <Media :height="150" :media="item" @click-alt="openViewer(item)"
                                       @click-main="openViewer(item)"
                                />
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
                                                        {{ item.custom_properties.user.first_name }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                                <v-card-actions>
                                    <span class="overline">{{ item.custom_properties.ext }}</span>
                                    <v-spacer />
                                    <v-menu top v-if="item.category === 'videos' || item.category === 'images'">
                                        <template v-slot:activator="{ on: menu }">
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on: tooltip }">
                                                    <v-btn class="ml-1" icon v-on="{ ...tooltip, ...menu }" depressed>
                                                        <v-icon>mdi-clipboard-pulse-outline</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Approval Status</span>
                                            </v-tooltip>
                                        </template>
                                        <v-list>
                                            <v-list-item v-for="(action, i) in approval_actions(item)" :key="i"
                                                         @click="update_status(item, action)"
                                            >
                                                <v-list-item-title>
                                                    <v-icon left>{{ action.icon }}</v-icon>
                                                    {{ action.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                    <v-tooltip top v-if="item.mime_type !== 'link'">
                                        <template v-slot:activator="{ on }">
                                            <v-btn class="ml-1" v-on="on" depressed icon
                                                   :href="item.download_url"
                                            >
                                                <v-icon>mdi-cloud-download-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Download File</span>
                                    </v-tooltip>
                                    <v-tooltip top v-else>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon class="ml-1" depressed v-on="on"
                                                   @click="goto_link(item.download_url)"
                                            >
                                                <v-icon>mdi-link-box-variant-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Go to link</span>
                                    </v-tooltip>
                                    <v-tooltip top v-if="can_delete(item)">
                                        <template v-slot:activator="{ on }">
                                            <v-btn class="ml-1" v-on="on" @click="open_delete_dialog(item)" icon
                                                   depressed
                                            >
                                                <v-icon>mdi-delete-circle-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Delete File</span>
                                    </v-tooltip>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-layout>
                    <v-row no-gutters v-if="filteredItems.length">
                        <v-spacer />
                        <v-card-actions class="py-2">
                            <v-btn tile text v-if="noMoreData" disabled>NO MORE DATA</v-btn>
                            <v-btn tile text :loading="btnloading" v-else @click="get_more_files">LOAD MORE</v-btn>
                        </v-card-actions>
                        <v-spacer />
                    </v-row>
                    <Empty icon="mdi-file-alert-outline" headline="No file found" v-else />
                </v-container>
            </v-card>
            <VueTable v-else-if="view === 'list'" :items="filteredItems" :headers="headers" :showRowActions="true"
                      @load-more="get_more_files" icon="mdi-file-alert-outline" title="Files" :loading="loading"
                      :key="componentKey" :noMoreData="noMoreData" :showSelect="user.is_admin"
                      @delete-selected="confirmBulkDeleteFiles"
            >
                <template v-slot:row-slot="{ item }">
                    <td>
                        <Media :height="50" :width="50" :media="item" size="lg" @click-alt="openViewer(item)"
                               @click-main="openViewer(item)"
                        />
                    </td>
                    <td class="text-upper">{{ item.custom_properties.ext }}</td>
                    <td class="text-cap">{{ item.name }}</td>
                    <td class="text-cap">
                        {{ item.custom_properties.user.first_name }}
                    </td>
                    <td class="text-xs-center text-right">
                        <v-menu top v-if="item.category === 'videos' || item.category === 'images'">
                            <template v-slot:activator="{ on: menu }">
                                <v-tooltip left>
                                    <template v-slot:activator="{ on: tooltip }">
                                        <v-btn icon v-on="{ ...tooltip, ...menu }" depressed>
                                            <v-icon>mdi-clipboard-pulse-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Approval Status</span>
                                </v-tooltip>
                            </template>
                            <v-list>
                                <v-list-item v-for="(action, i) in approval_actions(item)" :key="i"
                                             @click="update_status(item, action)"
                                >
                                    <v-list-item-title>
                                        <v-icon left>{{ action.icon }}</v-icon>
                                        {{ action.title }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-tooltip left v-if="item.mime_type !== 'link'">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" icon depressed :href="item.download_url">
                                    <v-icon>mdi-cloud-download-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Download File</span>
                        </v-tooltip>
                        <v-tooltip left v-else>
                            <template v-slot:activator="{ on }">
                                <v-btn icon depressed v-on="on" @click="goto_link(item.download_url)">
                                    <v-icon>mdi-link-box-variant-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Go to link</span>
                        </v-tooltip>
                        <v-tooltip left v-if="can_delete(item)">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" @click="open_delete_dialog(item)" icon depressed>
                                    <v-icon>mdi-delete-circle-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Delete File</span>
                        </v-tooltip>
                    </td>
                </template>
            </VueTable>
        </v-card>
    </div>
</template>
<script src="./BuzzookaTab.js"></script>
<style lang="scss" src="./BuzzookaTab.scss"></style>
<style scoped>
    >>> .content__wrapper .buzz__tables .buzz__tablesTwo {
        padding: 0;
        border: none;
        background-color: #fff;
    }
</style>