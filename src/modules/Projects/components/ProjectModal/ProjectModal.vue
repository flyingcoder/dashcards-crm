<<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="700px" persistent>
      <v-card>
        <v-card-title>
          {{ title }}
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px;">
          <v-row no-gutter>
            <v-col md="4" sm="6">
              <v-menu
                bottom
                close-on-content-click
                transition="slide-y-transition"
                bottom
                max-height="300"
              >
                <template v-slot:activator="{ on }">
                  <v-btn block outlined tile text v-on="on">
                    <v-icon left>account_circle</v-icon> Select Client
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item @click="open_add_new_client">
                    <v-icon left>add</v-icon> Add new client
                  </v-list-item>
                  <v-list-item
                    v-for="(item, index) in client.items"
                    :key="index"
                    @click="client.selected = item"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.company_name"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.fullname"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="choosen" v-if="client.selected">
                <v-chip outlined label class="mt-1 tile">
                  <v-avatar left>
                    <v-img :src="client.selected.image_url"></v-img>
                  </v-avatar>
                  {{ client.selected.company_name }}
                </v-chip>
              </div>
            </v-col>

            <v-col md="4" sm="6">
              <v-menu
                bottom
                close-on-content-click
                transition="slide-y-transition"
                bottom
                max-height="300"
              >
                <template v-slot:activator="{ on }">
                  <v-btn block outlined tile text v-on="on">
                    <v-icon left>mdi-blinds</v-icon> Select Service
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item @click="open_add_new_service">
                    <v-icon left>add</v-icon> Add new service
                  </v-list-item>
                  <v-list-item
                    v-for="(item, index) in service.items"
                    :key="index"
                    @click="service.selected = item"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="choosen" v-if="service.selected">
                <v-chip outlined label class="mt-1 tile">
                  {{ service.selected.name }}
                </v-chip>
              </div>
            </v-col>

            <v-col md="4" sm="6">
              <v-btn block outlined tile text>
                <v-icon left> attach_file</v-icon>
                Attach
              </v-btn>
            </v-col>

            <v-col md="4" sm="6">
              <v-menu
                v-model="rangemenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" block outlined tile text>
                    <v-icon left>mdi-history</v-icon> Select date
                  </v-btn>
                </template>
                <v-date-picker v-model="dates" no-title range>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="rangemenu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="setDatesAndCloseMenu(dates)"
                    >Apply</v-btn
                  >
                </v-date-picker>
              </v-menu>
              <div
                class="choosen"
                v-if="
                  date_pickers.start_date !== '' || date_pickers.end_date !== ''
                "
              >
                <v-chip block outlined label class="mt-1">
                  <v-icon></v-icon>
                  Start : {{ date_pickers.start_date }}
                </v-chip>
                <v-chip block outlined label class="mt-1">
                  <v-icon></v-icon>
                  End : {{ date_pickers.end_date }}
                </v-chip>
              </div>
            </v-col>

            <v-col md="8" sm="12">
              <v-menu
                bottom
                close-on-content-click
                transition="slide-y-transition"
                bottom
                max-height="300"
              >
                <template v-slot:activator="{ on }">
                  <v-btn block outlined tile text v-on="on">
                    <v-icon left>people_outline</v-icon
                    ><v-icon left>add</v-icon> Assign Members
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item @click="open_add_new_member_dialog">
                    <v-icon left>add</v-icon> Add new member
                  </v-list-item>
                  <v-list-item
                    v-for="item in members.items"
                    :key="item.user_id"
                    @click="add_to_selected_members(item)"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.fullname"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.job_title"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="choosen" v-if="members.selected.length > 0">
                <v-chip
                  outlined
                  class="mt-1 tile"
                  v-for="item in members.selected"
                  close
                  label
                  @click:close="remove_from_selected_members(item)"
                >
                  <v-avatar left>
                    <v-img :src="item.image_url"></v-img>
                  </v-avatar>
                  {{ item.fullname }}
                </v-chip>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <TextField
                :value.sync="project_title"
                label="Project Title"
                color="#657186"
                solo
                filled
              ></TextField>
            </v-col>
            <v-col md="12">
              <span>Description</span>
              <quill-editor
                v-model="quill_editor.content"
                :options="quill_editor.editorOption"
              >
              </quill-editor>
            </v-col>
            <v-col md="12">
              <span>Comments</span>
              <v-textarea
                :rows="1"
                background-color="grey lighten-5"
                solo
                v-model="comment"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined text @click="cancel"
            ><v-icon left>close</v-icon> Close</v-btn
          >
          <v-btn
            outlined
            :loading="btnloading"
            :disabled="disabled"
            @click="save"
            ><v-icon left>save</v-icon> Save</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./ProjectModal.js"></script>
