<template>
    <div class="forms-page-response">
        <div class="forms-page-response-wrapper">
            <div class="forms-page-response-content">
                <v-card flat v-if="form">
                    <v-tabs v-model="tab" centered icons-and-text>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab href="#questions" class="mr-2 pt-5">
                            Questions
                            <v-icon>mdi-cloud-question</v-icon>
                        </v-tab>
                        <v-tab href="#responses" class="ml-2 pt-5">
                            Responses
                            <v-badge color="green" :content="form.responses_count">
                                <v-icon>mdi-cloud-print-outline</v-icon>
                            </v-badge>
                        </v-tab>
                        <v-tab-item value="questions">
                            <v-divider></v-divider>
                            <v-card flat class="mx-auto pa-5" max-width="700">
                                <v-list-item>
                                    <v-list-item-avatar tile color="grey">
                                        <v-img v-if="form.company.company_logo" :src="form.company.company_logo"></v-img>
                                        <v-icon v-else color="white">mdi-alpha-c-circle-outline</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">{{form.title}}</v-list-item-title>
                                        <v-list-item-subtitle>{{form.company.name|ucwords}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-card-text>
                                    <v-col md="12" v-for="(item, pIndex) in form.questions" :key="item.id">
                                        <div class="section pa-2" v-if="item.type ===`section`">
                                            <div v-for="(child,cIndex) in item.children" :key="child.id">
                                                <div v-if="child.type === 'divider'">
                                                    <hr />
                                                </div>
                                                <div v-else-if="child.type === 'image'">
                                                    <p v-if="child.label">{{child.label}}</p>
                                                    <v-img style="max-width: 100%;" :width="child.itemwidth" :height="child.itemheight" :src="child.src" :alt="child.alt"></v-img>
                                                </div>
                                                <div v-else-if="child.type === 'video'">
                                                    <p v-if="child.label">{{child.label}}</p>
                                                    <iframe style="max-width: 100%;" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" :src="getEmbed(child.src)" :width="child.itemwidth" :height="child.itemheight"></iframe>
                                                </div>
                                                <div v-else-if="child.type === 'paragraph' ">
                                                    <p>{{child.text}}</p>
                                                </div>
                                                <div v-else-if="textfield.includes(child.type)">
                                                    <component :is="child.type">
                                                        {{child.text}}
                                                    </component>
                                                </div>
                                                <div v-else-if="child.type === `date`">
                                                    <label v-if="child.label">{{child.label}}</label>
                                                    <v-menu v-model="child.popover" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field v-model="child.value" filled hide-details="auto" :label="child.palceholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                        </template>
                                                        <v-date-picker ref="picker" v-model="child.value" :max="child.max_date" :min="child.min_date"></v-date-picker>
                                                    </v-menu>
                                                </div>
                                                <div v-else-if="child.type === `time`">
                                                    <label v-if="child.label">{{child.label}}</label>
                                                    <v-menu v-model="child.popover" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field v-model="child.value" filled hide-details="auto" :label="child.palceholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                        </template>
                                                        <v-time-picker v-model="child.value" full-width @click:minute="child.popover= false"></v-time-picker>
                                                    </v-menu>
                                                </div>
                                                <div v-else-if="child.type === `checkbox`">
                                                    <label v-if="child.label">{{child.label}}</label>
                                                    <v-checkbox dense hide-details="auto" :label="child.text" v-model="child.value"></v-checkbox>
                                                </div>
                                                <div v-else-if="child.type === `multiple_choice`">
                                                    <label v-if="child.label">{{child.label}}</label>
                                                    <v-radio-group v-model="child.value" row :mandatory="child.required">
                                                        <v-radio v-for="(option,i) in child.items" :key="i" :label="option" :value="option"></v-radio>
                                                    </v-radio-group>
                                                </div>
                                                <div v-else>
                                                    <label v-if="child.label">{{child.label}}</label>
                                                    <component v-model="child.value" filled hide-details="auto" :is="child.tag" :required="child.required" :rows="child.rows" :items="child.items"></component>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else-if="item.type === 'divider'">
                                            <hr />
                                        </div>
                                        <div v-else-if="item.type === 'image'">
                                            <p v-if="item.label">{{item.label}}</p>
                                            <v-img style="max-width: 100%;" :width="item.itemwidth" :height="item.itemheight" :src="item.src" :alt="item.alt"></v-img>
                                        </div>
                                        <div v-else-if="item.type === 'video'">
                                            <p v-if="item.label">{{item.label}}</p>
                                            <iframe style="max-width: 100%;" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" :src="getEmbed(item.src)" :width="item.itemwidth" :height="item.itemheight"></iframe>
                                        </div>
                                        <div v-else-if="item.type === 'paragraph'">
                                            <p>
                                                {{item.text}}
                                            </p>
                                        </div>
                                        <div v-else-if="textfield.includes(item.type)">
                                            <component :is="item.tag">
                                                {{item.text}}
                                            </component>
                                        </div>
                                        <div v-else-if="item.type === `date`">
                                            <label v-if="item.label">{{item.label}}</label>
                                            <v-menu v-model="item.popover" :close-on-content-click="true" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker ref="picker" v-model="item.value" :max="item.max_date" :min="item.min_date"></v-date-picker>
                                            </v-menu>
                                        </div>
                                        <div v-else-if="item.type === `time`">
                                            <label v-if="item.label">{{item.label}}</label>
                                            <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-time-picker v-model="item.value" full-width @click:minute="item.popover= false"></v-time-picker>
                                            </v-menu>
                                        </div>
                                        <div v-else-if="item.type === `checkbox`">
                                            <label v-if="item.label">{{item.label}}</label>
                                            <v-checkbox dense hide-details="auto" :label="item.text" v-model="item.value"></v-checkbox>
                                        </div>
                                        <div v-else-if="item.type === `multiple_choice`">
                                            <label v-if="item.label">{{item.label}}</label>
                                            <v-radio-group v-model="item.value" row :mandatory="item.required">
                                                <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option"></v-radio>
                                            </v-radio-group>
                                        </div>
                                        <div v-else>
                                            <label v-if="item.label">{{item.label}}</label>
                                            <component v-model="item.value" filled hide-details="auto" :is="item.tag" :required="item.required" :rows="item.rows" :items="item.items"></component>
                                        </div>
                                    </v-col>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="responses">
                            <v-divider></v-divider>
                            <v-card flat max-width="1000" v-if="responses.length > 0">
                                <v-row no-gutters>
                                    <v-card-text class="col-md-8" v-if="activeResponder">
                                        <template v-for="(data, i) in activeResponder.data">
                                            <template v-if="data.type === 'section'">
                                                <template v-for="(child, i) in data.children">
                                                    <div class="pa-3" v-if="child.hasOwnProperty('value')">
                                                        <p>
                                                            <v-icon small left>mdi-comment-question-outline</v-icon>{{ child.label }}
                                                        </p>
                                                        <p class="subtitle-2">
                                                            <v-icon x-small left>mdi-checkbox-marked-circle-outline</v-icon>{{child.value || 'No Answer'}}
                                                        </p>
                                                    </div>
                                                    <div class="pa-3" v-else>
                                                        <component :is="child.tag">{{child.text}}</component>
                                                    </div>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <div class="pa-3" v-if="data.hasOwnProperty('value')">
                                                    <p>
                                                        <v-icon small left>mdi-comment-question-outline</v-icon>{{ data.label }}
                                                    </p>
                                                    <p class="subtitle-2">
                                                        <v-icon x-small left>mdi-checkbox-marked-circle-outline</v-icon>{{data.value || 'No Answer'}}
                                                    </p>
                                                </div>
                                                <div class="pa-3" v-else>
                                                    <component :is="data.tag">{{data.text}}</component>
                                                </div>
                                            </template>
                                        </template>
                                    </v-card-text>
                                    <v-col md="4">
                                        <v-list subheader dense class="responses-list">
                                            <v-subheader class="subtitle-2">Recent Responses</v-subheader>
                                            <v-list-item :class="{active: activeResponder === item}" v-for="item in responses" :key="item.id" @click="activeResponder = item">
                                                <v-list-item-avatar>
                                                    <v-img v-if="item.user" :src="item.user.image_url"></v-img>
                                                    <v-icon v-else large>mdi-account-question-outline</v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{item.user ? item.user.fullname : 'Unknown User'}}</v-list-item-title>
                                                    <v-list-item-subtitle>{{item.user ? item.user.job_title : item.ip_address}}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item v-if="next_url">
                                                <v-list-item-content>
                                                    <v-btn block text :loading="loading_more"  @click="load_more_response">Load More</v-btn>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <Empty v-else icon="mdi-cloud-off-outline" headline="No response yet"></Empty>
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