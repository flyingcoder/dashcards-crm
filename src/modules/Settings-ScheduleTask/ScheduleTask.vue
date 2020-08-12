<template>
    <div class="company-profile">
        <div class="profile mt-1">
            <div class="profile-content">
                <v-row no-gutters class="user-info">
                    <div class="loading" v-if="loading">
                        <v-progress-linear :indeterminate="true" />
                    </div>
                    <v-col v-else md="12" sm="12">
                        <v-row>
                            <v-col md="4">
                                <v-card class="mx-auto" tile flat>
                                    <v-list flat two-line>
                                        <v-subheader>
                                            <span>Schedule Emails</span>
                                            <v-spacer />
                                            <v-icon @click="newScheduleTask('email')">add_circle_outline</v-icon>
                                        </v-subheader>
                                        <v-list-item-group color="primary" v-if="schedule_tasks.length > 0">
                                            <v-list-item v-for="item in schedule_tasks" :key="item.id"
                                                         @click="setActiveType(item)"
                                            >
                                                <v-list-item-icon dense>
                                                    <v-tooltip right v-if="item.deleted_at">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon v-bind="attrs" v-on="on">
                                                                mdi-progress-close
                                                            </v-icon>
                                                        </template>
                                                        <span>Inactive</span>
                                                    </v-tooltip>
                                                    <v-tooltip right v-else>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="success" v-bind="attrs" v-on="on">
                                                                mdi-progress-check
                                                            </v-icon>
                                                        </template>
                                                        <span>Active</span>
                                                    </v-tooltip>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        {{ item.props.name | ucwords }}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="caption">
                                                        {{ snakeCaseToNormal(item.interval_type) | ucwords }} 
                                                        <span v-if="item.interval_at">{{ item.interval_at }}</span>
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-menu bottom left>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn icon v-bind="attrs" v-on="on">
                                                                <v-icon>mdi-dots-vertical-circle-outline</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <v-list dense>
                                                            <v-list-item @click="toggleStatus(item)">
                                                                <v-list-item-title v-if="!item.deleted_at">
                                                                    <v-icon left>mdi-pause-circle-outline</v-icon>
                                                                    Deactivate
                                                                </v-list-item-title>
                                                                <v-list-item-title v-else>
                                                                    <v-icon left>mdi-play-circle-outline</v-icon>
                                                                    Activate
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item @click="confirm_delete(item)">
                                                                <v-list-item-title>
                                                                    <v-icon left>mdi-delete-circle-outline</v-icon>
                                                                    Delete
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item @click="showHistory(item)">
                                                                <v-list-item-title>
                                                                    <v-icon left>mdi-history</v-icon>
                                                                    History
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-menu>
                                                </v-list-item-action>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                    <Empty v-show="schedule_tasks.length === 0" headline="No schedule task yet!" />
                                </v-card>
                            </v-col>
                            <v-col grow>
                                <v-card flat v-show="task">
                                    <v-card-text>
                                        <v-row dense>
                                            <v-col md="6">
                                                <v-text-field dense filled hide-details="auto" class="mb-1" clearable
                                                              v-model="task.name" label="Schedule Task Name *"
                                                />
                                            </v-col>
                                            <v-col md="6">
                                                <v-text-field dense filled hide-details="auto" class="mb-1" clearable
                                                              v-model="task.subject" label="Mail Subject"
                                                />
                                            </v-col>
                                            <v-col md="6">
                                                <v-text-field dense filled hide-details="auto" class="mb-1" clearable
                                                              v-model="task.from" label="Mail From *"
                                                />
                                            </v-col>
                                            <v-col md="6">
                                                <v-combobox v-model="task.to" :items="members"
                                                            hide-selected hide-details="auto" label="Mail To *"
                                                            deletable-chips :return-object="false"
                                                            multiple small-chips filled dense clearable
                                                            item-text="email" item-value="email"
                                                >
                                                    <template v-slot:no-data>
                                                        <v-list-item>
                                                            <v-list-item-content>
                                                                <v-list-item-title>
                                                                    No results matching "<strong>{{ search }}</strong>".
                                                                    Press <kbd>enter</kbd> to create a new one
                                                                </v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </template>
                                                </v-combobox>
                                            </v-col>
                                        </v-row>

                                        <Editor placeholder="Mail Body *"
                                                ref="editor" v-model="task.contents"
                                                :content="task ? task.contents : ''"
                                                :hasFloatingTools="false"
                                        />
                                        <v-row dense>
                                            <v-col md="4">
                                                <v-select dense filled hide-details="auto" class="mb-1"
                                                          :items="interval_types"
                                                          item-value="value"
                                                          :return-object="false"
                                                          v-model="task.interval_type" label="Interval Type *"
                                                />
                                            </v-col>
                                            <v-col md="4">
                                                <v-select :disabled="!interval_type_at || interval_type_at.length === 0"
                                                          dense filled
                                                          hide-details="auto" class="mb-1"
                                                          :items="interval_type_at"
                                                          item-value="value"
                                                          item-text="text"
                                                          :return-object="false"
                                                          v-model="task.interval_at"
                                                          :label="!interval_type_at || interval_type_at.length === 0 ? 'Interval At' : 'Interval At *'"
                                                />
                                            </v-col>
                                            <v-col md="4">
                                                <v-autocomplete dense filled hide-details="auto" class="mb-1"
                                                                :items="timezones"
                                                                item-value="zone"
                                                                item-text="text"
                                                                v-model="task.timezone" label="Timezone *"
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions class="mb-3 mr-2 py-3">
                                        <small>* Required</small>
                                        <v-spacer />
                                        <v-btn dark color="#3b589e" class="px-5" v-if="editting" :disabled="!validScheduleTask "
                                               :loading="submitting"
                                               @click="saveChanges"
                                        >
                                            Update Schedule Task
                                        </v-btn>
                                        <v-btn dark color="#3b589e" class="px-5" v-if="!editting" :disabled="!validScheduleTask"
                                               :loading="submitting"
                                               @click="addNewScheduleTask"
                                        >
                                            Save New Schedule Task
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                <Empty v-show="!activeType && schedule_tasks.length > 0"
                                       headline="Select from the left"
                                />
                                <Empty v-show="!activeType && schedule_tasks.length === 0"
                                       headline="Create a new schedule task"
                                />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Schedule Task"
                       text-content="Are you sure you want to delete this schedule task?" @delete="handleDelete"
        />
        <HistoryDialog :open-dialog.sync="history_dialog" :id="activeId" />
    </div>
</template>
<script src="./ScheduleTask.js"></script>
<style lang="scss" src="./ScheduleTask.scss"></style>