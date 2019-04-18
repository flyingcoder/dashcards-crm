<template>
  <CustomDialog
    :title="title"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template #content>
      <table class="bz-table">
        <tr class="table-header">
          <th class="text-xs-left">Title</th>
          <th>View Create Update Delete</th>
        </tr>
        <tr
          v-for="(permission, index) in permissions"
          :key="permission.id"
          class="table-data"
        >
          <td>{{ snakeCaseToNormal(permission.name) }}</td>
          <td class="switches">
            <v-switch
              v-model="permission.slug.view"
              @change="viewSlug(index, $event)"
            ></v-switch>

            <v-switch
              v-model="permission.slug.create"
              @change="createSlug(index, $event)"
            ></v-switch>

            <v-switch
              v-model="permission.slug.update"
              @change="updateSlug(index, $event)"
            ></v-switch>

            <v-switch
              v-model="permission.slug.delete"
              @change="deleteSlug(index, $event)"
            ></v-switch>
          </td>
        </tr>
      </table>
    </template>
  </CustomDialog>
</template>
<script src="./PermissionsDialog.js"></script>
<style lang="scss" scoped src="./PermissionsDialog.scss"></style>
