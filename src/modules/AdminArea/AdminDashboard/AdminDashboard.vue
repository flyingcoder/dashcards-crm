<template>
    <div class="admin-dashboard">
        <div class="admin-dashboard-wrapper">
            <div class="admin-dashboard-content">
                <v-row no-gutters>
                    <div class="page-title">General Settings</div>
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
                <div class="admin-dashboard-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-puzzle-outline</v-icon>
                                        <span class="subtitle-1">Features</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Modules</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="allowed_modules_btn" :disabled="allowed_modules_btn" @click="save('allowed_modules')" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col v-for="(module, index) in modules" :key="index">
                                                    <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="allowed_modules" :label="module.name" :value="module.value" hide-details="auto"></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Dashcards</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="allowed_dashcards_btn" :disabled="allowed_dashcards_btn" @click="save('allowed_dashcards')" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col v-for="item in dashitems" :key="item.value">
                                                    <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="allowed_dashcards" :label="item.name" :value="item.value" hide-details="auto"></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Dashtiles</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="allowed_dashtiles_btn" :disabled="allowed_dashtiles_btn" @click="save('allowed_dashtiles')" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col v-for="item in dashtiles" :key="item.value">
                                                    <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="allowed_dashtiles" :label="item.name" :value="item.value" hide-details="auto"></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header tile>
                                    <div>
                                        <v-icon left>mdi-security</v-icon> Security
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">reCaptcha</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="recaptcha_btn" :disabled="recaptcha_btn" @click="save('recaptcha')" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col md="12">
                                                    <v-checkbox on-icon="mdi-puzzle" off-icon="mdi-puzzle-outline" v-model="recaptcha.enabled" label="Enable" hide-details="auto"></v-checkbox>
                                                </v-col>
                                                <v-col md="12">
                                                    <v-text-field class="mb-1" label="reCaptcha Key" v-model="recaptcha.key" filled hide-details="auto"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header tile>
                                    <div>
                                        <v-icon left>mdi-server</v-icon> Website
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-title class="subtitle-2">
                                            <span class="subtitle-2">Website Meta</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text outlined :loading="meta_btn" :disabled="meta_btn" @click="save('meta')" small>save changes</v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-text-field class="mb-1" label="Name" filled hide-details="auto" v-model="meta.name"></v-text-field>
                                            <v-text-field class="mb-1" label="Description" filled hide-details="auto" v-model="meta.description"></v-text-field>
                                            <v-text-field class="mb-1" label="Image URL" filled hide-details="auto" v-model="meta.image"></v-text-field>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .admin-dashboard-content -->
        </div> <!-- .admin-dashboard-wrapper -->
    </div> <!-- .admin-dashboard -->
</template>
<script src="./AdminDashboard.js"></script>
<style lang="scss" scoped src="./AdminDashboard.scss"></style>