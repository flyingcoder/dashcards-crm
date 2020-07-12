<template>
    <div class="company-profile">
        <div class="profile mt-1">
            <div class="profile-content">
                <v-row no-gutters class="user-info">
                    <div class="loading" v-if="loading">
                        <v-progress-linear :indeterminate="true"></v-progress-linear>
                    </div>
                    <v-col v-else md="12" sm="12">
                        <v-row>
                            <v-col md="4">
                                <v-card class="mx-auto" tile>
                                    <v-card-title>Email Templates</v-card-title>
                                    <v-list flat>
                                        <v-list-item-group color="primary">
                                            <v-list-item :class="{active: activeType && activeType.type === item.type}" v-for="(item, i) in tabs" :key="i" @click="setActiveType(item)">
                                                <v-list-item-content>
                                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col grow>
                                <v-card v-if="activeType">
                                    <v-card-title>
                                        <span class="subtitle-2">{{activeType.text}}</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <p>Available placeholder:</p>
                                        <v-chip depressed @click="append(slot)" label class="mr-1 mb-1" v-for="slot in activeType.slots" :key="slot">
                                            {{slot}} <v-icon small right>mdi-plus</v-icon>
                                        </v-chip>
                                        <Editor placeholder="Write something... (If empty, will used the default global template.)" ref="editor" v-model="content" :content="content" :hasFloatingTools="false"></Editor>
                                    </v-card-text>
                                    <v-card-actions class="mb-3 mr-2">
                                        <v-spacer></v-spacer>
                                        <v-btn dark class="px-5" :loading="submitting" @click="saveChanges">Save Changes</v-btn>
                                    </v-card-actions>
                                </v-card>
                                <Empty v-else headline="Select from the left"></Empty>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script src="./Templates.js"></script>
<style lang="scss" src="./Templates.scss"></style>