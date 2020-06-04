<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save">
        <template slot="content">
            <v-layout wrap>
                <v-flex xs12>
                    <v-text-field class="dialog__textfield d-field" label="Add task title" v-model.trim="title" color="#667187" filled hide-details></v-text-field>
                </v-flex>
                <!-- <v-flex xs12>
                    <v-select class="dialog__selectfield d-field" label="Select Group" v-model.trim="selected_group" :items="group_items" item-text="name" item-value="id" color="#667187" filled hide-details></v-select>
                </v-flex> -->
                <v-flex xs12>
                    <v-checkbox v-model="disabled" class="mx-2" label="No Specific Days"></v-checkbox>
                    <v-text-field class="dialog__textfield d-field" label="Add days" v-model.number="days" type="number" min="0" color="#667187" filled hide-details :disabled="disabled"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <div class="dialog__textarea d-field">
                        <Editor ref="editor" :hasFloatingTools="false" v-model="quill_editor.description" :content="quill_editor.description" placeholder="Add task description" ></Editor>
                    </div>
                </v-flex>
            </v-layout>
        </template>
    </custom-dialog>
</template>
<script src="./TasksDialog.js"></script>
<style lang="scss" scoped src="./TasksDialog.scss"></style>