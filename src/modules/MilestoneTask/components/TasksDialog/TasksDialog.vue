<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel" @button2="save">
        <template slot="content">
            <v-text-field class="dialog__textfield d-field" label="Add task title" v-model.trim="title" color="#667187" filled counter maxlength="30"></v-text-field>
            <!--<v-select class="dialog__selectfield d-field" label="Select Group" v-model.trim="selected_group" :items="group_items" item-text="name" item-value="id" color="#667187" filled hide-details></v-select> -->
            <v-checkbox v-model="disabled" class="mx-2" label="No Specific Days"></v-checkbox>
            <v-text-field class="dialog__textfield d-field" label="Add days" v-model.number="days" type="number" min="0" color="#667187" filled hide-details :disabled="disabled"></v-text-field>
            <div class="dialog__textarea d-field">
                <Editor ref="editor" :hasFloatingTools="false" v-model="quill_editor.description" :content="quill_editor.description" placeholder="Add task description" ></Editor>
            </div>
        </template>
    </custom-dialog>
</template>
<script src="./TasksDialog.js"></script>
<style lang="scss" scoped src="./TasksDialog.scss"></style>