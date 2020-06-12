<template>
    <custom-dialog :title="dialogTitle" :hasFooter="false" :open.sync="open" maxWidth="800px" ref="dialog">
        <template slot="content">
            <v-stepper alt-labels v-model="stepper" flat class="invoice-dialog">
                <v-stepper-header flat>
                    <v-stepper-step :rules="[stepOneRules]" :complete="stepper > 1" step="1">Basic Info</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :rules="[stepTwoRules]" :complete="stepper > 2" step="2">Additional Info</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">Customize & Save</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card flat>
                            <StepOne :projectLock="projectLock"></StepOne>
                        </v-card>
                        <v-row no-gutters>
                            <v-spacer></v-spacer>
                            <!-- <v-btn class="mx-1" outlined text @click="cancel">
                                <v-icon left>mdi-close</v-icon> Cancel
                            </v-btn> -->
                            <v-btn class="mx-1 action" :disabled="!can_proceed_two" @click="stepper = 2">
                                Next <v-icon right>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card class="mb-12" flat>
                            <StepTwo></StepTwo>
                        </v-card>
                        <v-row no-gutters>
                            <v-btn class="mx-1 action" @click="stepper = 1">
                                <v-icon left>mdi-arrow-left</v-icon> Previous
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class="mx-1 action" @click="stepper = 3" :disabled="!can_proceed_three">
                                Next <v-icon right>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-card class="mb-12" flat>
                            <StepThree></StepThree>
                        </v-card>
                        <v-row no-gutters>
                            <v-btn class="mx-1 action" @click="stepper = 2">
                                <v-icon left>mdi-arrow-left</v-icon> Previous
                            </v-btn>
                            <v-spacer></v-spacer>
                           <!--  <v-btn outlined text disabled>
                                <v-icon left>pageview</v-icon> Preview
                            </v-btn> -->
                            <v-btn class="mx-1 action" :loading="btnloading" :disabled="!can_submit" @click="save_invoice">
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
<style lang="scss">
@import '~@/sass/_variables';

.invoice-dialog.v-stepper{
    background-color: $modalBgGray;

    .v-stepper__step__step.primary{
        background: $blue !important;
        border-color: $blue !important;
    }

    .v-stepper__step--inactive.v-stepper__step--error .v-stepper__step__step{
        background: transparent !important;
        border-color: transparent !important;
    }

    .v-stepper__step--inactive .v-stepper__step__step{
        background: $gray-4 !important;
        border-color: $gray-4 !important;
    }

    .v-stepper__header{
        box-shadow: none;
    }
    .v-card{
        background-color: transparent;
        padding: 5px 0;
        color: $textDark-3;
    }
    .v-stepper__step{
        margin-bottom: 0;
        padding: 12px;
    }
    .v-stepper__label {
        position: relative;
        background: $white;
        border: 1px solid $borderGray;
        padding: 5px 10px;
        border-radius: 5px;
        color: $textDark;
        text-align: center;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .v-stepper__label:after, .v-stepper__label:before {
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .v-stepper__label:after {
        border-color: transparent;
        border-top-color: $white;
        border-width: 10px;
        margin-left: -10px;
    }
    .v-stepper__label:before {
        border-color: transparent;
        border-top-color: $borderGray;
        border-width: 12px;
        margin-left: -12px;
    }
    .v-stepper__step{
        flex-direction: column-reverse;
    }
    .v-stepper__header .v-divider{
        align-self: center;
        margin: 60px -70px 0;
        border-width: 2px;
        border-color: $gray-4 !important;
    }
    .v-stepper__step__step{
        margin-bottom: 0;
    }
    .action.v-btn.v-btn--contained.theme--light{
        background: $blue;
        color: $white;
    }
}
@media only screen and (max-width: 959px){
    .invoice-dialog.v-stepper{
        .v-divider{
            align-self: center;
            margin: 0 -70px 0;
        }
    }
}
</style>