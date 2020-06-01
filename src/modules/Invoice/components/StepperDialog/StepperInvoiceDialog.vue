<template>
    <custom-dialog :title="dialogTitle" :hasFooter="false" :open.sync="open" maxWidth="800px" ref="dialog">
        <template slot="content">
            <v-stepper v-model="stepper" flat>
                <v-stepper-header flat>
                    <v-stepper-step :rules="[stepOneRules]" :complete="stepper > 1" step="1">Basic Info</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :rules="[stepTwoRules]" :complete="stepper > 2" step="2">Additional Info</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">Customize & Save</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card class="mb-12" flat>
                            <StepOne></StepOne>
                        </v-card>
                        <v-row no-gutters>
                            <v-spacer></v-spacer>
                            <!-- <v-btn class="mx-1" outlined text @click="cancel">
                                <v-icon left>mdi-close</v-icon> Cancel
                            </v-btn> -->
                            <v-btn class="mx-1" color="primary" :disabled="!can_proceed_two" @click="stepper = 2">
                                Next <v-icon right>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card class="mb-12" flat>
                            <StepTwo></StepTwo>
                        </v-card>
                        <v-row no-gutters>
                            <v-btn class="mx-1" outlined @click="stepper = 1" text>
                                <v-icon left>mdi-arrow-left</v-icon> Previous
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class="mx-1" color="primary" @click="stepper = 3" :disabled="!can_proceed_three">
                                Next <v-icon right>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-card class="mb-12" flat>
                            <StepThree></StepThree>
                        </v-card>
                        <v-row no-gutters>
                            <v-btn class="mx-1" outlined @click="stepper = 2" text>
                                <v-icon left>mdi-arrow-left</v-icon> Previous
                            </v-btn>
                            <v-spacer></v-spacer>
                           <!--  <v-btn outlined text disabled>
                                <v-icon left>pageview</v-icon> Preview
                            </v-btn> -->
                            <v-btn class="mx-1" outlined color="primary" :loading="btnloading" :disabled="!can_submit" text @click="save_invoice">
                                {{ buttonLabel }} <v-icon right>mdi-content-save-move-outline</v-icon>
                            </v-btn>
                        </v-row>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </template>
    </custom-dialog>
</template>
<script src="./StepperInvoiceDialog.js"></script>