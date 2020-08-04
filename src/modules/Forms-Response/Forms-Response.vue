<template>
    <div class="forms-page-response">
        <div class="forms-page-response-wrapper">
            <div class="forms-page-response-content">
                <v-card flat v-if="form">
                    <v-tabs v-model="tab" centered icons-and-text>
                        <v-tabs-slider />
                        <v-tab href="#questions" class="mr-2 pt-5">
                            Questions
                            <v-icon>mdi-cloud-question</v-icon>
                        </v-tab>
                        <v-tab href="#responses" class="ml-2 pt-5">
                            Responses
                            <v-badge color="green" :content="responses_count">
                                <v-icon>mdi-cloud-print-outline</v-icon>
                            </v-badge>
                        </v-tab>
                        <v-tab-item value="questions">
                            <v-divider />
                            <v-card flat class="mx-auto pa-5" max-width="700">
                                <v-list-item>
                                    <v-list-item-avatar tile color="grey">
                                        <v-img v-if="form.company.company_logo" :src="form.company.company_logo" />
                                        <v-icon v-else color="white">mdi-alpha-c-circle-outline</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">{{ form.title }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ form.company.name|ucwords }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <Preview :questions="form.questions" />
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="responses">
                            <v-divider />
                            <v-card flat max-width="1000" v-if="responses.length > 0">
                                <v-row no-gutters>
                                    <v-col cols="9" v-if="activeResponder">
                                        <Response :items="activeResponder.data" />
                                    </v-col>
                                    <v-col md="3">
                                        <v-list subheader dense class="responses-list">
                                            <v-subheader class="subtitle-2">Recent Responses</v-subheader>
                                            <v-list-item :class="{active: activeResponder === item}"
                                                         v-for="item in responses" :key="item.id"
                                                         @click="activeResponder = item"
                                            >
                                                <v-list-item-avatar>
                                                    <v-img v-if="item.user" :src="item.user.image_url" />
                                                    <v-icon v-else large>mdi-account-question-outline</v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        {{ item.user ? item.user.fullname : 'Unknown User' }}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        {{ item.user ? item.user.job_title : item.ip_address }}
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item v-if="next_url">
                                                <v-list-item-content>
                                                    <v-btn block text :loading="loading_more"
                                                           @click="load_more_response"
                                                    >
                                                        Load More
                                                    </v-btn>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <Empty v-else icon="mdi-cloud-off-outline" headline="No response yet" />
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script src="./Forms-Response.js"></script>
<style lang="scss" scoped src="./Forms-Response.scss"></style>
<style type="text/css">
    /**neeed styling improve*/
    .v-list-item.active {
        background: grey;
    }

    .v-list-item.active > * {
        color: #fff;
    }
</style>