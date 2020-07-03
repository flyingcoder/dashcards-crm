<template>
    <div class="api-configs">
        <div class="api-configs-wrapper">
            <div class="api-configs-content">
                <v-row no-gutters>
                    <div class="page-title">API's Settings</div>
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
                <div class="api-configs-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-battlenet</v-icon>
                                        <span class="subtitle-1">Connects</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Connects</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="connects_btn" :disabled="connects_btn" @click="save_connects" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col md="3" v-for="item in connectlist" :key="item.value">
                                                    <v-checkbox  on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="connects[item.value]" :label="`${item.name}`" hide-details="auto"></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .api-configs-content -->
        </div> <!-- .api-configs-wrapper -->
    </div> <!-- .api-configs -->
</template>
<script src="./ApiConfigs.js"></script>
<style lang="scss" scoped src="./ApiConfigs.scss"></style>