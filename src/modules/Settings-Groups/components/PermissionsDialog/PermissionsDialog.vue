<template>
    <CustomDialog :title="title" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save">
        <template #content>
            <table class="bz-table">
                <tr class="table-header">
                    <th align="left">Title</th>
                    <th align="left">
                        <v-row no-gutters>
                            <v-col>View</v-col>
                            <v-col>Create</v-col>
                            <v-col>Update</v-col>
                            <v-col>Delete</v-col>
                        </v-row>
                    </th>
                </tr>
                <tr v-for="(permission, index) in permissions" :key="permission.id" class="table-data">
                    <td>{{ snakeCaseToNormal(permission.name) | removeSlug | ucwords}}</td>
                    <td class="switches">
                        <v-row dense no-gutters>
                            <v-col>
                                <v-switch v-model="permission.slug.view" @change="viewSlug(index, $event)">
                                </v-switch>
                            </v-col>
                            <v-col>
                                <v-switch v-model="permission.slug.create" @change="createSlug(index, $event)">
                                </v-switch>
                            </v-col>
                            <v-col>
                                <v-switch v-model="permission.slug.update" @change="updateSlug(index, $event)">
                                </v-switch>
                            </v-col>
                            <v-col>
                                <v-switch v-model="permission.slug.delete" @change="deleteSlug(index, $event)">
                                </v-switch>
                            </v-col>
                        </v-row>
                    </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-row no-gutters>
                            <v-col class="subtitle-2">View</v-col>
                            <v-col class="subtitle-2">Create</v-col>
                            <v-col class="subtitle-2">Update</v-col>
                            <v-col class="subtitle-2">Delete</v-col>
                        </v-row></td>
                </tr>
            </table>
        </template>
    </CustomDialog>
</template>
<script src="./PermissionsDialog.js"></script>
<style lang="scss" scoped src="./PermissionsDialog.scss"></style>