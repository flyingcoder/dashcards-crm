<template>
  <v-layout row wrap class="reports">
    <v-flex xs12>
      <table-header :paths="paths" :noButton="true" />
    </v-flex>

    <v-flex xs12>
      <reports-list
        v-if="reports.length"
        :reports="reports"
        :loading="loading"
      />
    </v-flex>

    <v-flex xs12>
      <div class="body-wrapper">
        <custom-dialog ref="dialog" title="Add Link">
          <template slot="content">
            <div class="custom-dialog">
              <v-text-field
                class="dialog__link"
                pattern="https://.*"
                type="url"
                v-model.trim="link"
                prepend-icon="link"
                label="https://"
                clearable
                @keydown="validate_url"
                box
                hide-details
                color="#657186"
              />
              <v-text-field
                v-model.trim="title"
                class="dialog__textfield "
                label="Title"
                box
                clearable
                hide-details
                prepend-icon="text_fields"
                color="#657186"
              />
            </div>
          </template>

          <template slot="button2">
            <div class="disable-btn">
              <v-btn @click="on_dialog_save" :disabled="is_disabled"
                >Display</v-btn
              >
            </div>
          </template>
        </custom-dialog>
        <div class="reports__body">
          <div class="reports-content">
            <div class="reports__buttons">
              <div class="reports__option">
                <v-btn color="#3b589e" class="add__link" @click="open_dialog">
                  Add Link
                </v-btn>

                <v-btn
                  color="#3b589e"
                  :disabled="!activate_save"
                  class="save"
                  @click="save_report"
                >
                  Save
                </v-btn>
              </div>
            </div>
            <div class="site-preview" v-if="iframe_src">
              <iframe
                :src="iframe_src"
                frameborder="0"
                width="100%"
                height="500px"
                @load="iframe_loaded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>
