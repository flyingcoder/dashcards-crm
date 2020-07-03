<template>
    <div class="database">
        <div class="database-wrapper">
            <div class="database-content">
                <v-row no-gutters>
                    <div class="page-title">Database</div>
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
                <div class="database-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-chart-timeline</v-icon>
                                        <span class="subtitle-1">Tables</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                   <Empty icon="mdi-hammer-wrench" headline="Under constructions!"></Empty>
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