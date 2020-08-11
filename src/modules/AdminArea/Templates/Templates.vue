<template>
    <div class="database">
        <div class="database-wrapper">
            <div class="database-content">
                <v-row no-gutters>
                    <div class="page-title">Templates</div>
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
                                <v-icon>mdi-arrow-collapse-vertical</v-icon>
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
                                        <span class="subtitle-1">Email Templates</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-row>
                                        <v-col md="4">
                                            <v-card class="mx-auto" tile>
                                                <v-list flat>
                                                    <v-list-item-group color="primary">
                                                        <v-list-item
                                                                :class="{active: activeType && activeType.type === item.type}"
                                                                v-for="(item, i) in tabs" :key="i"
                                                                @click="setActiveType(item)"
                                                        >
                                                            <v-list-item-content>
                                                                <v-list-item-title v-text="item.title" />
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </v-card>
                                        </v-col>
                                        <v-col grow>
                                            <v-card flat v-show="activeType">
                                                <v-card-text v-if="activeType">
                                                    <span class="subtitle-2">{{ activeType.title }}</span><br>
                                                    <small class="caption">{{ activeType.description }}</small>
                                                </v-card-text>
                                                <v-card-text>
                                                    <p>Available placeholder:</p>
                                                    <template v-if="activeType">
                                                        <v-chip depressed @click="append(slot)" label class="mr-1 mb-1"
                                                                v-for="slot in activeType.slots" :key="slot"
                                                        >
                                                            {{ slot }}
                                                            <v-icon small right>mdi-plus</v-icon>
                                                        </v-chip>
                                                    </template>
                                                    <Editor ref="editor" v-model="content" :content="content"
                                                            :hasFloatingTools="false"
                                                    />
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer />
                                                    <v-btn dark class="px-5 mr-2" :loading="submitting"
                                                           @click="saveChanges"
                                                    >
                                                        Save Changes
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                            <Empty v-if="!activeType" headline="Select from the left" />
                                        </v-col>
                                    </v-row>
                                    <v-divider />
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-card flat>
                                                <v-card-title class="subtitle-2">
                                                    <span class="subtitle-2">Email Events</span>
                                                    <v-spacer />
                                                    <v-btn text outlined :loading="email_event_btn"
                                                           :disabled="email_event_btn" @click="save_allowed_email_event"
                                                           small
                                                    >
                                                        save changes
                                                    </v-btn>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-row>
                                                        <v-col v-for="(module, index) in events" :key="index">
                                                            <v-checkbox on-icon="mdi-puzzle"
                                                                        off-icon="mdi-puzzle-outline"
                                                                        :label="module"
                                                                        v-model="email_event.value[module]"
                                                                        :value="email_event.value[module]"
                                                                        hide-details="auto"
                                                            />
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .database-content -->
        </div> <!-- .database-wrapper -->
    </div> <!-- .database -->
</template>
<script src="./Templates.js"></script>
<style lang="scss" scoped src="./Templates.scss"></style>