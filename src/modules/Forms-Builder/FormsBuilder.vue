<template>
    <div class="forms-page">
        <div class="forms-page-wrapper">
            <div class="forms-page-content">
                <div class="form">
                    <div class="form-header">
                        <v-row no-gutters>
                            <v-col md="3" sm="4" xs="6">
                                <v-select clearable @change="structures = $event" :items="list" item-value="questions"
                                          item-text="title" placeholder="Copy Form From ..." solo dense
                                          hide-details="auto" class="ma-1" flat
                                />
                            </v-col>
                            <v-spacer />
                            <v-btn class="dialog-button" @click="clearAll">
                                <v-icon>delete</v-icon>
                                Clear All
                            </v-btn>
                        </v-row>
                    </div>
                    <Builder v-model="structures" has-file-upload ref="builder">
                        <template v-slot:right-bottom>
                            <v-divider />
                            <v-card-text>
                                <label>Form Name *</label>
                                <v-text-field label="Form Name *" v-model="form_title" hide-details="auto"
                                              dense flat outlined solo class="ma-1"
                                />
                                <label>Form Notifications</label>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon class="ml-2" x-small v-bind="attrs" v-on="on">
                                            mdi-help-circle-outline
                                        </v-icon>
                                    </template>
                                    <span>Email addresses separated by comma</span>
                                </v-tooltip>
                                <v-text-field label="Send notification to" v-model="form_notif_receivers"
                                              hide-details="auto" dense flat outlined solo class="ma-1"
                                />
                                <label>Accepting Responses</label>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon class="ml-2" x-small v-bind="attrs" v-on="on">
                                            mdi-help-circle-outline
                                        </v-icon>
                                    </template>
                                    <span>Inactive form will no longer accept responses</span>
                                </v-tooltip>
                                <v-select v-model="status" :items="['active', 'inactive']" menu-props="auto"
                                          hide-details="auto" single-line dense filled
                                />
                            </v-card-text>
                            <v-card-actions>
                                <v-btn class="primary-btn" text v-if="!isFormEdit" block @click="save"
                                       :disabled="disabled || saving" :loading="saving"
                                >
                                    <v-icon left>mdi-content-save</v-icon>
                                    Save Form
                                </v-btn>
                                <v-btn class="primary-btn" text v-else block @click="update"
                                       :disabled="disabled || saving" :loading="saving"
                                >
                                    <v-icon left>mdi-content-save</v-icon>
                                    Update Form
                                </v-btn>
                            </v-card-actions>
                        </template>
                    </Builder>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./FormsBuilder.js"></script>
<style lang="scss" src="./FormsBuilder.scss"></style>
