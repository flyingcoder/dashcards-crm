<template>
  <div class="cloud">
    <table-header :paths="paths" :noButton="true" />

    <v-card class="mx-auto">
      <v-toolbar flat class="px-3">
        <v-toolbar-title>Integrations</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-row>
          <v-col md="4">
            <v-card>
              <v-img
                :height="200"
                contain
                src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/google_drive-512.png"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title>Google Drive Integration</v-card-title>
              </v-img>

              <v-list dense class="ma-0 pa-0" v-if="googleUser">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="googleUser.image"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="googleUser.name"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="googleUser.email"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-btn text block large outlined @click="handleGooglebtn"
                  ><v-icon color="success" left>mdi-google-drive</v-icon>
                  {{ googleBtnLabel }}</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card>
              <v-img
                :height="200"
                contain
                src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Dropbox_Logo_02.svg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title>Dropbox Integration</v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text block large outlined disabled>
                  <v-icon color="success" left>mdi-dropbox</v-icon> Coming soon!
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./Cloud.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.cloud');

.cloud {
  @include customTableRow;
}
</style>
