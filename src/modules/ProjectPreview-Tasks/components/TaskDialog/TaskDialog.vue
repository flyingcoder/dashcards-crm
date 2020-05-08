<template>
    <div class="task-dialog">
        <custom-dialog ref="dialog" :open.sync="computedDialog" :title="dialogTitle" @button1="clear_and_close" :maxWidth="850">
            <template #content>
                <v-row wrap class="custom-dialog">
                    <v-col cols="12" class="pt-0">
                        <v-select v-model="milestones.selected" :items="milestones.items" item-text="title" item-value="id" label="Milestone" placeholder="Select Milestone" filled color="#657186" hide-details class="d-field">
                            <template v-slot:append-outer>
                                <v-btn icon large @click="open_add_milestone_dialog" class="btn-add-milestone">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                        </v-select>
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <v-text-field class="dialog__textfield d-field" label="Add task title" v-model.trim="title" filled hide-details color="#657186"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0 pl-4">
                        <date-picker class="dialog__date d-field" label="Start Date" prepend-inner-icon="event" readonly v-model="start_date" :max="end_date" />
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0 pr-4">
                        <date-picker class="dialog__date d-field" label="End Date" prepend-inner-icon="event" readonly v-model="end_date" :min="start_date" />
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <members-dropdown :members.sync="members.selected" :member-items="members.items" :is-loading="members.loading" @search="filter_dropdown_items('members', $event)" class="task-member" />
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <rich-editor placeholder="Task Details" v-model="description" class="task-description" />
                    </v-col>
                </v-row>
            </template>
            <template slot="button2">
                <v-btn @click="save" :loading="btnloading">Save</v-btn>
            </template>
        </custom-dialog>
        <milestone-tab-dialog :dialog.sync="add_milestone_dialog" ref="add_milestone_dialog" dialog-title="Add New Milestone" @save="add_new_milestone" />
    </div>
</template>
<script src="./TaskDialog.js"></script>
<style lang="scss" scoped src="./TaskDialog.scss"></style>