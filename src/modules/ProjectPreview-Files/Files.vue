<template>
  <div class="files_tab">
    <v-divider></v-divider>
    <v-tabs
      class="tabs"
      height="60px"
      grow
      v-model="active_tab"
      :show-arrows="is_screen_medium_and_down"
      dense
      centered
    >
      <v-tab v-for="(tab, index) in tabs" :key="index"  @click="changeTab(tab.view)" exact>
        <div>
          <v-icon left>{{ tab.icon }}</v-icon> {{ tab.name }}
        </div>
      </v-tab>
    </v-tabs>
    
  <BuzzookaTab :projectId="id" v-if="view === `files`"></BuzzookaTab>
  <GoogleDriveTab :projectId="id" v-else-if="view === `google-drive`"></GoogleDriveTab>
  <DropboxTab :projectId="id" v-else-if="view === `dropbox`"></DropboxTab>

  </div>
</template>

<script src="./Files.js"></script>
<style lang="scss" scoped src="./Files.scss"></style>

<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background: #3b589e;
  color: white;
}
</style>
