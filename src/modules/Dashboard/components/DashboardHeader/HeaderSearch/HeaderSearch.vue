<template>
    <div class="search">
        <v-autocomplete 
          class="search-field" 
          hide-details 
          :items="globalSearchResult" 
          :loading="isGlobalFetching" 
          v-model="globalSearchbox" 
          :search-input.sync="globalSearch" 
          no-filter 
          clearable
          disable-lookup 
          item-text="title" 
          placeholder="Start typing to search..." 
          prepend-inner-icon="search" 
          persistent-hint 
          @click:clear="globalSearchResult = []" 
          :menu-props="menuprops"
          color="#3b589e"
        >
            <template v-slot:no-data>
                <v-list-item>
                    <v-list-item-title>
                        Search for <strong>Users</strong> or <strong>Projects</strong>
                    </v-list-item-title>
                </v-list-item>
            </template>
            <template v-slot:item="{ item }" class="find">
                <v-list-item v-if="item.modelType === 'user'" @click="navigate_search(item)">
                    <v-list-item-avatar>
                        <v-img v-if="item.image_url" :src="item.image_url"></v-img>
                        <v-icon large v-else>mdi-account</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title :inner-html.prop="item.fullname | truncate(25)"></v-list-item-title>
                        <v-list-item-subtitle :inner-html.prop="item.job_title | truncate(25)"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-else-if="item.modelType === 'project'" @click="navigate_search(item)">
                    <v-list-item-avatar>
                        <v-icon large>mdi-book</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title :inner-html.prop="item.title | truncate(25)"></v-list-item-title>
                        <v-list-item-subtitle :inner-html.prop="item.description | truncate(25)"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-autocomplete>
    </div>
</template>
<script src="./HeaderSearch.js"></script>
<style lang="scss" scoped src="./HeaderSearch.scss"></style>
