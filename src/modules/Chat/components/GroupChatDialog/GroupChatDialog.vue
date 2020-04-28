<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="800" persistent scrollable>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Create Group
          <v-spacer></v-spacer>
          <v-icon @click="clear_and_close()">close</v-icon>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-flex xs12>
                <v-text-field
                  solo
                  prepend-inner-icon="mdi-dialpad"
                  clearable
                  label="Group Name"
                  v-model="group_name"
                  required
                >
                </v-text-field>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex sm12 md8>
                <v-text-field
                  solo
                  label="Search for people to add"
                  required
                  clearable
                  prepend-inner-icon="search"
                  v-model="search"
                  @keydown="filter_users"
                  @click:clear="filter_users"
                ></v-text-field>

                <v-list
                  v-if="filtered_by_search.length > 0"
                  id="filtered_by_search_wrapper"
                >
                  <v-list-item
                    v-for="item in filtered_by_search"
                    :key="item.title"
                    @click="selected(item)"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.fullname"
                      ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon v-show="item.is_selected" color="success"
                        >mdi-checkbox-marked-circle</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex sm12 md4>
                <v-list id="all_selected_wrapper">
                  <v-subheader
                    >Selected ({{ all_selected.length }})</v-subheader
                  >
                  <v-list-item
                    v-if="all_selected.length > 0"
                    v-for="item in all_selected"
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle
                        v-text="item.fullname"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon @click="selected(item)" small color="danger"
                        >close</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-flex>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="clear_and_close" :disabled="btnloading">
            Cancel
          </v-btn>
          <v-btn color="primary" :disabled="btnloading" @click="save_group" :loading="btnloading">
            <v-icon small left>save</v-icon> Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script src="./GroupChatDialog.js"></script>
<style scoped>
#all_selected_wrapper {
  max-height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
}
#filtered_by_search_wrapper {
  max-height: 260px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
