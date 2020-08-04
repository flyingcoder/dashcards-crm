<template>
    <v-row no-gutters class="task__tab_preview_card" v-if="activeId">
        <v-col md="12">
            <v-boilerplate v-if="loading" class="mb-6"
                           type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
            />
            <v-card class="mx-auto" v-else-if="content && !loading" style="box-shadow: none;">
                <v-card-title>
                    <v-row>
                        <v-col>
                            <v-list-item-title class="body-2 font-weight-medium">
                                <v-avatar size="30" tile>
                                    <v-icon large left>mdi-file-document-outline</v-icon>
                                </v-avatar>
                                <span class="title">&nbsp;{{ content.title | ucwords | truncate(40) }}</span>
                            </v-list-item-title>
                        </v-col>
                        <v-col md="1" xs="2">
                            <v-spacer/>
                            <v-menu offset-y left>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on">
                                        <v-icon large>mdi-dots-horizontal-circle-outline</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="item of dropdown_actions" :key="item.id"
                                                 @click="dropdownAction(item.value)"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <v-icon left>{{ item.icon }}</v-icon>
                                                {{ item.text }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text class="px-4">
                    <v-row class="px-4" v-if="content">
                        <v-col xs="12">
                            <v-btn disabled outlined block :height="45">
                                <v-icon left>date_range</v-icon>
                                {{ date_created(content.created_at) }}
                            </v-btn>
                        </v-col>
                        <v-col xs="12">
                            <v-btn disabled outlined block :height="45">
                                <v-icon left color="success" v-if="content.status.toLowerCase() === 'completed'">
                                    mdi-clipboard-check-outline
                                </v-icon>
                                <v-icon left color="warning" v-else-if="content.status.toLowerCase() === 'pending'">
                                    mdi-clipboard-pulse-outline
                                </v-icon>
                                <v-icon left color="danger" v-else-if="content.status.toLowerCase() === 'behind'">
                                    mdi-clipboard-alert-outline
                                </v-icon>
                                <v-icon left color="info" v-else-if="content.status.toLowerCase() === 'open'">
                                    mdi-clipboard-text-play-outline
                                </v-icon>
                                {{ content.status }}
                            </v-btn>
                        </v-col>
                        <v-spacer/>
                        <v-col xs="12">
                            <hours-box :content="content" v-if="content.status.toLowerCase() !== 'completed'"
                                       @timer-started="timerStarted" @timer-paused="timerPaused"
                            />
                            <v-btn v-else disabled outlined block :height="45">
                                <v-icon left>mdi-credit-card-clock</v-icon>
                                <span class="subtitle-1">{{ content.total_time }}</span>
                            </v-btn>
                        </v-col>
                        <v-col md="12">
                            <p v-html="content.description" class="body-2 description-wrapper"/>
                        </v-col>
                        <v-col md="12" v-if="content.assigned.length > 0">
                            <h5 class="body-2 mb-3">Assigned to:</h5>
                            <Avatars :deep="false" :items="content.assigned" :count="6" style="display: inline-block;"/>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="px-4">
                    <Comment :items="all_comments" :deleteApi="delApi" :addApi="addApi" :uploadApi="uploadApi"/>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script src="./TaskTabPreviewCard.js"></script>
<style lang="scss" scoped src="./TaskTabPreviewCard.scss"></style>
<style scoped>
    >>> .comment__btn .v-btn__content {
        color: #fff;
    }

    >>> .task__tab_preview_card .v-card.v-sheet {
        border-radius: 10px;
    }

    .task__tab_preview_card .v-card >>> img {
        max-width: 100%;
    }

</style>