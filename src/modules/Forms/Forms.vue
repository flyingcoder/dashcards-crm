<template>
  <div class="forms-page">
    <table-header :paths="paths" :noButton="true">
      <template slot="form-btn">
        <div class="form-btn">
          <v-btn outlined small fab><v-icon>remove_red_eye</v-icon></v-btn>
          <v-btn outlined small fab><v-icon>more_horiz</v-icon></v-btn>
          <v-btn outlined small fab><v-icon>close</v-icon></v-btn>

          <!-- <v-tooltip bottom content-class="action">
              <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    class="add__btn"
                    fab
                    small
                    dark
                    title="Add question"
                    color="#3b589e"
                    slot="activator"
                    @click="add_new_question"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
              </template>
              <span>Add Question</span>
            </v-tooltip>

            <v-tooltip bottom content-class="action">
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    class="add__btn"
                    fab
                    small
                    slot="activator"
                    dark
                    color="#3b589e"
                    @click="add_title_and_descriptions"
                  >
                    <v-icon>text_fields</v-icon>
                  </v-btn>
                </template>
                <span>Add title and descriptions</span>
              </v-tooltip> -->
        </div>
      </template>
    </table-header>

    <div class="forms-page-wrapper">
      <div class="forms-page-content">
        <div class="form">
          <div class="form-header">
            <v-btn outlined small fab><v-icon>more_horiz</v-icon></v-btn>
          </div>
          <v-form class="form-body">
            <v-row>
              <v-col cols="12" class="py-0">
                <div class="title-field">
                  <v-text-field
                    color="#b3b7c3"
                    class="f-title"
                    placeholder="Form Title"
                    single-line
                  ></v-text-field>
                </div>
              </v-col>

              <v-col cols="12" class="py-0">
                <div class="desc-field">
                  <v-textarea
                    class="f-desc"
                    color="#b3b7c3"
                    placeholder="Description"
                  ></v-textarea>
                </div>
                <div class="field-actions">
                  <div class="left-action">
                    <v-btn fab text small><v-icon>text_format</v-icon></v-btn>
                    <v-btn fab text small><v-icon>attachment</v-icon></v-btn>
                    <v-btn fab text small><v-icon>image</v-icon></v-btn>
                  </div>
                  <div class="right-action">
                    <div class="switch-field">
                      <span>Required: </span
                      ><v-switch
                        single-line
                        hide-details
                        class="mt-0"
                      ></v-switch>
                    </div>
                    <v-btn fab text small><v-icon>filter_none</v-icon></v-btn>
                    <v-btn fab text small><v-icon>delete</v-icon></v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-form>

          <div class="form-options">
            <v-btn fab text small><v-icon>add</v-icon></v-btn>
            <v-btn fab text small><v-icon>text_fields</v-icon></v-btn>
            <v-btn fab text small><v-icon>collections</v-icon></v-btn>
            <v-btn fab text small><v-icon>play_circle_outline</v-icon></v-btn>
            <v-btn fab text small><v-icon>view_stream</v-icon></v-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="form-content">
      <div class="form-container">
        <v-tabs
          class="tabs"
          centered
          grow
          hide-slider
          height="60px"
          v-model="active_tab"
        >
          <v-tab v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
            {{ tab.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="active_tab">
          <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
            <div class="form-wrapper">
              <component
                :is="active_tab"
                :sections="dynamic_sections"
                v-if="active_tab === tab.name"
              ></component>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>-->
  </div>
</template>

<script src="./Forms.js"></script>

<style lang="scss" scoped src="./Forms.scss"></style>
<style scoped>
/* Title Field Style */
>>> .form .v-text-field > .v-input__control > .v-input__slot:after {
  display: none;
}
>>> .f-title.v-text-field > .v-input__control > .v-input__slot {
  font-size: 30px;
}
>>> .f-title.v-text-field > .v-input__control > .v-input__slot:before {
  display: none;
}
>>> .f-title.v-input .v-label {
  height: 38px;
  line-height: 38px;
  font-size: 30px;
}
>>> .f-title.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot {
  height: 40px;
}
>>> .f-title.v-input input {
  max-height: 40px;
  height: 40px;
}
/* Title Field Style End */
>>> .f-desc .v-input__slot:before {
  display: none;
}
</style>
