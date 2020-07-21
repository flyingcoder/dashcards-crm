<template>
    <div class="company-profile">
        <div class="profile mt-1">
            <div class="profile-content">
                <v-row no-gutters class="user-info">
                    <div class="loading" v-if="loading">
                        <v-progress-linear :indeterminate="true"/>
                    </div>
                    <v-col v-else md="12" sm="12">
                        <v-row>
                            <v-col md="4">
                                <v-card class="mx-auto" tile flat>
                                    <v-card-title>Email Templates</v-card-title>
                                    <v-list flat>
                                        <v-list-item-group color="primary">
                                            <v-list-item :class="{active: activeType && activeType.type === item.type}"
                                                         v-for="(item, i) in tabs" :key="i"
                                                         @click="setActiveType(i, item)"
                                            >
                                                <v-list-item-content>
                                                    <v-list-item-title v-text="item.title"/>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col grow>
                                <v-card v-if="activeType" flat>
                                    <v-card-text>
                                        <span class="subtitle-2">{{ activeType.title }}</span><br>
                                        <small class="caption">{{ activeType.description }}</small>
                                    </v-card-text>
                                    <v-card-text>
                                        <template v-if="activeType.slots.length > 0">
                                            <p>Available placeholder:</p>
                                            <v-chip depressed @click="append(slot)" label class="mr-1 mb-1"
                                                    v-for="slot in activeType.slots" :key="slot"
                                            >
                                                {{ slot }}
                                                <v-icon small right>mdi-plus</v-icon>
                                            </v-chip>
                                        </template>
                                        <Editor placeholder="Write something... (If empty, will used the default global template.)"
                                                ref="editor" v-model="content" :content="content"
                                                :hasFloatingTools="false"
                                        />
                                    </v-card-text>
                                    <v-card-actions class="mb-3 mr-2">
                                        <v-spacer/>
                                        <v-btn dark class="px-5" :loading="submitting" @click="saveChanges">
                                            Save Changes
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                <Empty v-else headline="Select from the left"/>
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