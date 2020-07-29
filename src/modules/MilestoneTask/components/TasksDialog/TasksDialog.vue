<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel"
                   @button2="save"
    >
        <template slot="content">
            <v-text-field class="dialog__textfield d-field" hide-details="auto" dense label="Task Title *"
                          v-model.trim="title" color="#667187"
                          filled counter maxlength="60"
            />
            <!--<v-select class="dialog__selectfield d-field" label="Select Group" v-model.trim="selected_group" :items="group_items" item-text="name" item-value="id" color="#667187" filled hide-details></v-select> -->

            <Editor ref="editor" :hasFloatingTools="false" v-model="quill_editor.description"
                    :content="quill_editor.description" placeholder="Task Description"
            />
            <v-row no-gutters>
                <v-col cols="6">
                    <v-text-field filled dense class="dialog__textfield d-field" label="Days"
                                  v-model.number="days" type="number"
                                  min="0" color="#667187" hide-details="auto" :disabled="disabled"
                    />
                </v-col>
                <v-col cols="6">
                    <v-checkbox v-model="disabled" class="mx-2" label="No Specific Days"/>
                </v-col>
            </v-row>
        </template>
    </custom-dialog>
</template>
<script src="./TasksDialog.js"></script>
<style lang="scss" scoped src="./TasksDialog.scss"></style>