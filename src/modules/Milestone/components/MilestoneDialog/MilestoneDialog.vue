<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" @button1="cancel">
        <template slot="content">
            <v-card flat>
                <v-card-text>
<v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field dense class="dialog__textfield d-field" label="Milestone Title *"
                                          v-model.trim="title"
                                          filled
                                          counter
                                          hide-details="auto"
                                          maxlength="60"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-select dense class="dialog__selectfield d-field" label="Status *" v-model.trim="status"
                                      :items="['Active', 'Inactive']" filled hide-details="auto"
                            />
                        </v-col>
                        <v-col>
                            <v-text-field dense class="dialog__textfield d-field" :label="days_label" v-model.number="days"
                                          type="number"
                                          filled
                                          min="1"
                                          hide-details="auto" :disabled="disabled"
                            />
                        </v-col>
                        <v-col cols="5">
                            <v-checkbox v-model="disabled" class="mx-2" label="No Specific Days" />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
        <template v-slot:button2>
            <v-btn :disabled="disabled_btn" :loading="btnloading" @click="save">Save</v-btn>
        </template>
    </custom-dialog>
</template>
<script src="./MilestoneDialog.js"></script>
<style lang="scss" scoped src="./MilestoneDialog.scss"></style>