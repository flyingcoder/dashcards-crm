<template>
  <v-layout row justify-center>
    <custom-dialog
      :title="title"
      ref="dialog"
      :open.sync="open"
      button2-text="Save"
      @button1="open = false"
      @button2="save"
    >
      <template slot="content">
        <v-layout wrap class="custom-dialog">
          <v-flex xs12 sm6>
            <v-autocomplete
              class="dialog__selectfield"
              :items="permissions"
              :loading="loading_permissions"
              v-model.trim="selected_permission"
              placeholder="Select Permission"
              item-text="name"
              item-value="id"
              solo
              hide-details
              color="#657186"
            ></v-autocomplete>
          </v-flex>

          <v-flex xs12 sm6>
            <v-select
              class="dialog__selectfield"
              placeholder="Select Group"
              :items="group_items"
              v-model.trim="selected_group"
              solo
              hide-details
              color="#657186"
              item-text="name"
              item-value="slug"
            ></v-select>
          </v-flex>

	        <div class="permissions">
		        <div class="title">
			        <div class="left-line line"></div>
			        <h4>Permissions</h4>
			        <div class="right-line line"></div>
		        </div>

		        <div class="items">
			        <v-switch label="View" v-model="slug.view"></v-switch>
			        <v-switch label="Create" v-model="slug.create"></v-switch>
			        <v-switch label="Update" v-model="slug.update"></v-switch>
			        <v-switch label="Delete" v-model="slug.delete"></v-switch>
		        </div>
	        </div>

          <v-flex xs12>
            <v-textarea
              class="dialog__textarea"
              label="Description"
              v-model.trim="description"
              solo
              hide-details
              color="#657186"
            ></v-textarea>
          </v-flex>

        </v-layout>
      </template>
    </custom-dialog>
  </v-layout>
</template>

<script src="./PermissionsDialog.js"></script>

<style lang="scss" scoped src="./PermissionsDialog.scss"></style>
