<template>
    <v-row no-gutters class="task__tab_preview_card" v-if="activeId">
        <v-col md="12">
            <v-boilerplate v-if="loading" class="mb-6" type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"></v-boilerplate>
            <v-card class="mx-auto" v-else-if="content && !loading" style="box-shadow: none;">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-row no-gutters>
                                <v-col>
                                    <v-list-item-title class="body-2 font-weight-medium">
                                        <v-avatar color="grey">
                                            <v-img v-if="assignee_url" :src="assignee_url" height="45" width="45"></v-img>
                                            <v-icon large v-else>mdi-account-question-outline</v-icon>
                                        </v-avatar>
                                        <span class="title">&nbsp;{{ full_name | ucwords | truncate }}</span>
                                    </v-list-item-title>
                                </v-col>
                                <v-col class="body-2 py-2">
                                    <v-icon left>date_range</v-icon>{{ date_created(content.created_at) }}
                                </v-col>
                                <v-col md="1" xs="2">
                                    <v-spacer></v-spacer>
                                    <v-menu offset-y left>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon fab small outlined v-on="on">
                                                <v-icon>more_horiz</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-for="item of dropdown_actions" :key="item.id" @click="dropdownAction(item.value)">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        <v-icon left>{{ item.icon }}</v-icon> {{ item.text }}
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-card-text class="px-4">
                    <v-row class="px-4" v-if="content">
                        <v-col xs="12" v-if="job_title">
                            <v-btn disabled outlined block :height="45">{{
                                job_title
                                }}</v-btn>
                        </v-col>
                        <v-col xs="12">
                            <v-btn disabled outlined block :height="45">{{
                                content.status
                                }}</v-btn>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col xs="12">
                            <hours-box :content="content" v-if="content.status != 'completed'" @timer-started="timerStarted" @timer-paused="timerPaused"></hours-box>
                        </v-col>
                        <v-col md="12">
                            <h3 class="headline mb-3">{{ content.title | ucwords }}</h3>
                            <p v-html="content.description" class="body-2"></p>
                        </v-col>
                        <v-col md="12" v-if="content.assignee.length > 0">
                            <h5 class="body-2 mb-3">Assigned to:</h5>
                            <Avatars :deep="false" :items="content.assignee" :count="6" style="display: inline-block;"></Avatars>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="px-4">
                    <Comment :items="all_comments" :deleteApi="delApi" :addApi="addApi" :uploadApi="uploadApi"></Comment>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script src="./TaskTabPreviewCard.js"></script>
<style lang="scss" scoped src="./TaskTabPreviewCard.scss"></style>
<style scoped>
>>>.comment__btn .v-btn__content {
    color: #fff;
}

>>>.task__tab_preview_card .v-card.v-sheet {
    border-radius: 10px;
}

.task__tab_preview_card .v-card>>>img {
    max-width: 100%;
}
</style>