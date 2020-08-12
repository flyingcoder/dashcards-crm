<template>
    <div class="milestones__tab">
        <milestone-tab-dialog :dialog.sync="add_dialog" ref="add_dialog" dialog-title="Add Milestone"
                              @save="add_new_milestone"
        />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Milestone"
                       text-content="Are you sure you want to delete this milestone?" @delete="delete_milestone"
        />
        <milestone-tab-dialog :dialog.sync="edit_dialog" ref="edit_dialog" dialog-title="Edit Milestone"
                              :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item" @save="update_milestone"
        />
        <select-template-dialog ref="select_template_dialog" @save="add_template"
                                dialog-title="Add Milestone Template"
        />
        <add-task-dialog :dialog.sync="add_task_dialog" ref="add_task_dialog" dialog-title="Add Task"
                         :milestone-start-date="add_task_start_date" :id="id" @save="add_new_task"
        />
        <add-task-dialog :dialog.sync="edit_task_dialog" ref="edit_task_dialog" dialog-title="Edit Task"
                         :is-edit-dialog="edit_task_dialog" :fields-to-edit="edit_task_item" :id="id"
                         @save="update_task"
        />
        <v-layout justify-end>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-2" color="#3b589e" dark small fab @click="add_dialog = true" v-bind="attrs"
                           v-on="on"
                    >
                        <v-icon>mdi-bookmark-plus-outline</v-icon>
                    </v-btn>
                </template>
                <span>Create New Milestone</span>
            </v-tooltip>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-2" color="#3b589e" small v-bind="attrs" v-on="on" fab
                           @click="open_select_template_dialog"
                    >
                        <v-icon color="white">mdi-bookmark-multiple-outline</v-icon>
                    </v-btn>
                </template>
                <span>Add Milestone From Templates</span>
            </v-tooltip>
        </v-layout>
        <v-progress-linear class="my-5" v-show="loading" :indeterminate="true"/>
        <v-layout wrap class="boxes__wrapper" v-if="boxes.length > 0">
            <v-flex md6 xs12 class="milestone__box" v-for="(box, index) of boxes" :key="box.id">
                <div class="milestone__dynamic_box">
                    <dynamic-box :id="id" :box="box" :loading="box.id === boxIdInProgress" @edit="open_edit_dialog"
                                 @delete="open_delete_confirmation" @edit-task="edit_task"
                                 @remove-task="remove_task(index, $event)" @add-task="open_add_task_dialog"
                    />
                </div>
            </v-flex>
        </v-layout>
        <v-card flat v-else>
            <Empty class="mt-3" icon="mdi-bookmark-remove-outline" headline="No milestone yet">
                <template v-slot:extra>
                    <v-btn large dark color="#3b589e" @click="add_dialog = true">
                        <v-icon left>mdi-bookmark-plus-outline</v-icon>
                        Add milestone
                    </v-btn>
                </template>
            </Empty>
        </v-card>

    </div>
</template>
<script src="./Milestones.js"></script>
<style lang="scss" scoped src="./Milestones.scss"></style>