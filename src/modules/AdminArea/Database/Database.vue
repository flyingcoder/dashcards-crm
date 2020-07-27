<template>
    <div class="database">
        <div class="database-wrapper">
            <div class="database-content">
                <v-row no-gutters>
                    <div class="page-title">Database</div>
                    <v-spacer />
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
                <div class="database-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-file-table-outline</v-icon>
                                        <span class="subtitle-1">Tables  ({{ tables.length }})</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card class="mx-auto" tile flat>
                                        <v-list dense>
                                            <v-list-item-group color="primary">
                                                <v-list-item v-for="(item, i) in tables" :key="i">
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-file-table-outline</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.table" />
                                                    </v-list-item-content>
                                                    <v-list-item-action>
                                                        <v-chip>~{{ item.rows }}</v-chip>
                                                    </v-list-item-action>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .database-content -->
        </div> <!-- .database-wrapper -->
    </div> <!-- .database -->
</template>
<script src="./Database.js"></script>
<style lang="scss" scoped src="./Database.scss"></style>