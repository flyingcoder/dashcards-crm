<template>
    <div class="form-wrapper">
        <v-row style="min-height: 800px;">
            <v-col md="8" class="mx-auto py-5">
                <v-card>
                    <v-list-item v-if="form">
                        <v-list-item-avatar tile color="grey">
                            <v-img v-if="form.company.company_logo" :src="form.company.company_logo" />
                            <v-icon v-else color="white">mdi-alpha-c-circle-outline</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{ form.title | ucwords }}</v-list-item-title>
                            <v-list-item-subtitle>{{ form.company.name | ucwords }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-text v-if="form && !submitted">
                        <v-col md="12" v-for="item in form.questions" :key="item.id">
                            <div v-if="item.type === 'divider'">
                                <hr>
                            </div>
                            <div v-else-if="item.type === 'image'">
                                <p v-if="item.label">{{ item.label }}</p>
                                <v-img style="max-width: 100%;" :class="alignClass(item.align)" :width="item.itemwidth"
                                       :height="item.itemheight" :src="item.src" :alt="item.alt"
                                />
                            </div>
                            <div v-else-if="item.type === 'video'">
                                <p v-if="item.label">{{ item.label }}</p>
                                <iframe style="max-width: 100%;display:block;" :class="alignClass(item.align)"
                                        allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        :src="getEmbed(item.src)" :width="item.itemwidth"
                                        :height="item.itemheight"
                                />
                            </div>
                            <div v-else-if="item.type === 'paragraph'">
                                <p :style="`text-align:`+item.align">
                                    {{ item.text }}
                                </p>
                            </div>
                            <div v-else-if="textfield.includes(item.type)">
                                <component :is="item.tag" :style="`text-align:`+item.align">
                                    {{ item.text }}
                                </component>
                            </div>
                            <div v-else-if="item.type === `date`">
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40"
                                        transition="scale-transition" offset-y max-width="100%" min-width="250px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="item.value" filled hide-details="auto"
                                                      :label="item.placeholder" readonly v-bind="attrs"
                                                      v-on="on"
                                        />
                                    </template>
                                    <v-date-picker ref="picker" v-model="item.value" :max="item.max_date"
                                                   :min="item.min_date"
                                    />
                                </v-menu>
                            </div>
                            <div v-else-if="item.type === `time`">
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40"
                                        transition="scale-transition" offset-y max-width="100%" min-width="250px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="item.value" filled hide-details="auto"
                                                      :label="item.placeholder" readonly v-bind="attrs"
                                                      v-on="on"
                                        />
                                    </template>
                                    <v-time-picker v-model="item.value" full-width
                                                   @click:minute="item.popover= false"
                                    />
                                </v-menu>
                            </div>
                            <div v-else-if="item.type === `checkbox`">
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <v-checkbox dense hide-details="auto" :label="item.text"
                                            v-model="item.value"
                                />
                            </div>
                            <div v-else-if="item.type === `radio_group`">
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <v-radio-group v-model="item.value" v-if="item.direction === 'row'" row
                                               :mandatory="item.required"
                                >
                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option"
                                             :value="option"
                                    />
                                </v-radio-group>
                                <v-radio-group v-model="item.value" v-else column :mandatory="item.required">
                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option"
                                             :value="option"
                                    />
                                </v-radio-group>
                            </div>
                            <div v-else-if="item.type === `checkboxes`">
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <v-row no-gutters dense v-if="item.direction === 'row'">
                                    <v-col md="12" class="d-flex flex-wrap">
                                        <v-checkbox v-model="item.value" hide-details="auto" class="mr-3 my-1"
                                                    v-for="(option,i) in item.items" :key="i" :label="option"
                                                    :value="option"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row no-gutters dense v-else>
                                    <v-col md="12">
                                        <v-checkbox v-model="item.value" hide-details="auto"
                                                    v-for="(option,i) in item.items" :key="i" class="my-1"
                                                    :label="option" :value="option"
                                        />
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else-if="item.type === `checkboxes`">
                                <label v-if="item.label">{{ item.label }}</label>
                                <v-row no-gutters dense v-if="item.direction === 'row'">
                                    <v-col md="12" class="d-flex flex-wrap">
                                        <v-checkbox v-model="item.value" hide-details="auto" class="mr-3 my-1"
                                                    v-for="(option,i) in item.items" :key="i" :label="option"
                                                    :value="option"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row no-gutters dense v-else>
                                    <v-col md="12">
                                        <v-checkbox v-model="item.value" hide-details="auto"
                                                    v-for="(option,i) in item.items" :key="i" class="my-1"
                                                    :label="option" :value="option"
                                        />
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else>
                                <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                                <component :placeholder="item.placeholder" :type="item.tag_type" v-model="item.value"
                                           filled hide-details="auto" :is="item.tag" :required="item.required"
                                           :rows="item.rows" :items="item.items"
                                />
                            </div>
                        </v-col>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="pb-5" v-if="!submitted">
                        <v-col md="2">
                            <small>Powered by</small><br>
                            <v-img :height="20" contain :src="require('@/assets/logo/buzzooka-blue.png')" />
                        </v-col>
                        <v-spacer />
                        <small>Never submit passwords through Buzzooka Forms.</small>
                        <v-spacer />
                        <v-btn v-if="form && form.status === 'active'" @click="submitForm" x-large depressed
                               color="primary" :disabled="viewMode || submitting || disabled" :loading="submitting"
                               class="px-5"
                        >
                            Submit
                            <v-icon right>mdi-email-send</v-icon>
                        </v-btn>
                        <v-btn v-else x-large depressed disabled class="px-5">No more response permitted</v-btn>
                    </v-card-actions>
                    <v-card-text v-if="submitted" class="py-5 my-5">
                        <v-alert border="bottom" colored-border type="success" elevation="1">
                            <p class="subtitle">
                                Your response has been recorded.
                            </p>
                        </v-alert>
                        <v-btn text @click="submit_another">Submit another response</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script src="./Forms-Online.js"></script>
<style lang="scss" scoped src="./Forms-Online.scss"></style>