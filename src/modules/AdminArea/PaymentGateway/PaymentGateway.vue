<template>
    <div class="payments">
        <div class="payments-wrapper">
            <div class="payments-content">
                <v-row no-gutters>
                    <div class="page-title">Payment Settings</div>
                    <v-spacer></v-spacer>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="all">
                                <v-icon>mdi-arrow-collapse-down</v-icon>
                            </v-btn>
                        </template>
                        <span>Show All</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="none">
                                <v-icon>mdi-arrow-collapse-up</v-icon>
                            </v-btn>
                        </template>
                        <span>Hide All</span>
                    </v-tooltip>
                </v-row>
                <div class="payments-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-alpha-s-box-outline</v-icon>
                                        <span class="subtitle-1">Stripe</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Stripe Configs</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading='stripe_configs_btn' @click="save_stripe_configs" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="stripe_configs.enable" label="Enable ?" hide-details="auto"></v-checkbox>
                                            <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="stripe_configs.devMode" label="Development Mode ?" hide-details="auto"></v-checkbox>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Stripe Plans</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined @click="adding = true" small>add plan</v-btn>
                                            <!-- <v-btn text outlined @click="" small>save changes</v-btn> -->
                                        </v-card-title>
                                        <v-card-text>
                                            <v-progress-linear indeterminate color="teal" v-if="loading"></v-progress-linear>
                                            <v-row>
                                                <v-alert type="info" v-if="editting">
                                                    Plans on Stripe are immutable by design, meaning you can't change the price and currency. However, you can delete the plan and re-create it at a new price, with the same name and plan_id. Internally Stripe will continue to use the old plan for existing subscribers.
                                                    This will likely get really confusing for you, though, so I would recommend creating a new plan with a new ID. Or edit manually the plan on Stripe dashboard
                                                </v-alert>
                                                <v-col md="8" xs="12" class="mx-auto" v-if="editting || adding">
                                                    <v-card flat>
                                                        <v-card-text>
                                                            <v-text-field dense required class="mb-1" label="Plan Name" filled hide-details="auto" v-model="plan.nickname"></v-text-field>
                                                            <v-text-field dense required class="mb-1" :disabled="editting" type="number" label="Plan Price" filled hide-details="auto" v-model="plan.amount"></v-text-field>
                                                            <v-text-field dense required class="mb-1" :disabled="editting" label="Plan Currency (i.e. usd)" filled hide-details="auto" v-model="plan.currency"></v-text-field>
                                                            <v-text-field dense required class="mb-1" label="Plan Short Description" filled hide-details="auto" v-model="plan.short_description"></v-text-field>
                                                            <v-text-field dense required class="mb-1" label="Plan Long Descriptions" filled hide-details="auto" v-model="plan.long_description"></v-text-field>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn text outlined class="mx-1" :disabled="submitting" @click="cancel" small>Cancel</v-btn>
                                                            <v-btn text v-if="adding" :loading="submitting" outlined class="mx-1" @click="insertPlan" small>Add Plan</v-btn>
                                                            <v-btn text v-else-if="editting" :loading="submitting" outlined class="mx-1" @click="updatePlan" small>Update Plan</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col v-if="from_stripe_plans" v-for="(plan, index) in from_stripe_plans" :key="index">
                                                    <v-card>
                                                        <v-card-title>
                                                            <label class="subtitle-2">Name :</label><label class="subtitle-1 ml-1">{{plan.nickname}}</label>
                                                            <v-spacer></v-spacer>
                                                            <v-btn text outlined class="mx-1" @click="editPlan(plan)" small>Edit</v-btn>
                                                        </v-card-title>
                                                        <v-card-text>
                                                            <label class="subtitle-2">Price :</label><label class="subtitle-1 ml-1">{{plan.amount/100}}</label><br>
                                                            <label class="subtitle-2">Short Description :</label class="subtitle-1 ml-1">{{plan.metadata.discount_description}}<label></label><br>
                                                            <label class="subtitle-2">Long Description :</label class="subtitle-1 ml-1">{{plan.metadata.plan_description}}<label></label><br>
                                                            <label class="subtitle-2">Currency :</label><label class="subtitle-1 ml-1">{{plan.currency | uppercase}}</label><br>
                                                            <label class="subtitle-2">Dev Mode :</label><label class="subtitle-1 ml-1">{{plan.livemode ? 'No' : 'Yes'}}</label><br>
                                                            <label class="subtitle-2">ID :</label><label class="subtitle-1 ml-1">{{plan.id}}</label><br>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                            <v-alert type="info">
                                                Deleting plans are allowed on Stripe dashboard, manually make appropriate adjustment on subscribers belong to the plan (transfering subscribers to other plan or forcefully terminate the subscriber subscriptions)
                                            </v-alert>
                                        </v-card-text>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .payments-content -->
        </div> <!-- .payments-wrapper -->
    </div> <!-- .payments -->
</template>
<script src="./PaymentGateway.js"></script>
<style lang="scss" scoped src="./PaymentGateway.scss"></style>