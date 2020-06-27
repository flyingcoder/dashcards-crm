<template>
    <v-layout justify-center>
        <custom-dialog :title="title" ref="dialog" :open.sync="open" button2-text="Save" @button1="open = false" @button2="save">
            <template slot="content">
                <v-row no-gutters class="custom-dialog">
                    <v-col xs="12" sm="6" v-if="!fieldsToEdit">
                        <v-select class="dialog__selectfield" placeholder="Select Group" :items="group_items" v-model.trim="selected_group" solo hide-details color="#657186" item-text="name" item-value="slug"></v-select>
                    </v-col>
                    <v-col xs="12" sm="6" v-if="!fieldsToEdit">
                        <v-autocomplete class="dialog__selectfield" :items="permissions" :loading="loading_permissions" v-model.trim="selected_permission" placeholder="Select Permission" item-text="name" item-value="id" solo hide-details color="#657186"></v-autocomplete>
                    </v-col>
                    <v-col xs="12" sm="12" v-if="fieldsToEdit">
                        <label>Edit permission for <strong>{{ permission_name }}</strong></label>
                    </v-col>
                    <div class="permissions">
                        <div class="title">
                            <div class="left-line line"></div>
                            <h4>Permissions</h4>
                            <div class="right-line line"></div>
                        </div>
                        <v-row no-gutters class="items">
                            <v-col><v-switch class="mx-auto" label="View" v-model="slug.view"></v-switch></v-col>
                            <v-col><v-switch class="mx-auto" label="Create" v-model="slug.create"></v-switch></v-col>
                            <v-col><v-switch class="mx-auto" label="Update" v-model="slug.update"></v-switch></v-col>
                            <v-col><v-switch class="mx-auto" label="Delete" v-model="slug.delete"></v-switch></v-col>
                        </v-row>
                    </div>
                    <v-col xs="12">
                        <v-textarea flat class="dialog__textarea" label="Description" v-model.trim="description" solo hide-details color="#657186"></v-textarea>
                    </v-col>
                </v-row>
            </template>
        </custom-dialog>
    </v-layout>
</template>
<script src="./PermissionsDialog.js"></script>
<style lang="scss" scoped src="./PermissionsDialog.scss"></style>