<template>
  <div class="content projects">

    <v-layout row justify-space-between>

      <v-flex xs12>
          <breadcrumb :paths="paths" />
      </v-flex>

      <v-flex>
        <div class="page__options">
          <div class='newAdd__btn'>
            <v-icon class="addIcon__btn">add_icon</v-icon>
            <div class="addText__btn"><span>Add New</span></div>
          </div>
        </div>
      </v-flex>
      
    </v-layout>

    <div class="content__wrapper">
      <div class="row buzz__tables">
        <div class="buzz__tablesTwo">
          <v-toolbar flat class="table__toolbar">
            <v-toolbar-title class="table__toolbar-title" padding="0">Projects</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <custom-table
            :headers="headers"
            :items="projects"
            :has-checkbox="true"
            :has-header-icon="true"
            class="custom__table"
          ></custom-table>

          <div class="table__pagination text-xs-center">
            <v-pagination
              class="buzz__pagination"
              v-model="page"
              :length="4"
              circle
            ></v-pagination>
          </div>          
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" scoped src="./Projects.scss"></style>