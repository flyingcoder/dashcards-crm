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
          v-for="permission in permissions"
          :key="permission.id"
          class="table-data"
        >
          <td>{{ snakeCaseToNormal(permission.name) }}</td>
          <td class="switches">
            <v-switch v-model="permission.slug.view"></v-switch>
            <v-switch v-model="permission.slug.create"></v-switch>
            <v-switch v-model="permission.slug.update"></v-switch>
            <v-switch v-model="permission.slug.delete"></v-switch>
          </td>
        </tr>
      </table>
    </template>
  </CustomDialog>
</template>
<script src="./PermissionsDialog.js"></script>
<style lang="scss" scoped src="./PermissionsDialog.scss"></style>
