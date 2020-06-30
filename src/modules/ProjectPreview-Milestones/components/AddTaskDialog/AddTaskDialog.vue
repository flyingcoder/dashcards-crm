<template>
    <div class="tasks-dialog">
        <custom-dialog ref="dialog" :open.sync="computedDialog" title="Add Task" @button1="computedDialog = false">
            <template #content>
                <v-row wrap class="custom-dialog">
                    <v-col cols="12" class="pt-0">
                        <v-text-field clearable class="dialog__textfield d-field" label="Add task title" v-model.trim="title" filled hide-details="auto" color="#657186"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0">
                        <date-picker clearable class="dialog__date d-field" label="Start Date" prepend-inner-icon="event" readonly :value="start_date" @input="start_date_changed" :max="end_date" />
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0 pr-4">
                        <date-picker clearable class="dialog__date d-field" label="End Date" prepend-inner-icon="event" readonly :value="end_date" @input="end_date_changed" :min="start_date" />
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <members-dropdown :members.sync="members.selected" :member-items="members.items" :is-loading="members.loading" @search="filter_dropdown_items('members', $event)" class="task-member" />
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <!-- <rich-editor placeholder="Description" v-model="description" class="task-description" /> -->
                        <Editor ref="editor" v-model="description" :key="fieldsToEdit ? fieldsToEdit.id : 0" :hasFloatingTools="false" :content="description" placeholder="Task description"></Editor>
                    </v-col>
                </v-row>
            </template>
            <template slot="button2">
                <v-btn :loading="btnloading" @click="save">Save</v-btn>
            </template>
        </custom-dialog>
    </div>
</template>
<script src="./AddTaskDialog.js"></script>
<style lang="scss" scoped src="./AddTaskDialog.scss"></style>
<style scoped src="./AddTaskDialog.css"></style>