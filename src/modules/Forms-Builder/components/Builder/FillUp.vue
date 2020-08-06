<template>
    <v-card flat>
        <v-card-text>
            <v-col md="12" v-for="(item, index) in questions" :key="item.id">
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
                            allowfullscreen allowusermedia
                            :src="getEmbed(item.src)" :width="item.itemwidth" :height="item.itemheight"
                    />
                </div>
                <div v-else-if="item.type === 'paragraph'">
                    <p :style="`text-align:`+item.align">
                        {{ item.text }}
                    </p>
                </div>
                <div v-else-if="text_fields.includes(item.type)">
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
                            <v-text-field v-model="questions[index].value" filled hide-details="auto"
                                          :label="item.placeholder"
                                          readonly v-bind="attrs" v-on="on"
                            />
                        </template>
                        <v-date-picker ref="picker" v-model="questions[index].value" :max="item.max_date"
                                       :min="item.min_date"/>
                    </v-menu>
                </div>
                <div v-else-if="item.type === `time`">
                    <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                    <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y max-width="100%" min-width="250px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="questions[index].value" filled hide-details="auto"
                                          :label="item.placeholder"
                                          readonly v-bind="attrs" v-on="on"
                            />
                        </template>
                        <v-time-picker v-model="questions[index].value" full-width @click:minute="item.popover= false"/>
                    </v-menu>
                </div>
                <div v-else-if="item.type === `checkbox`">
                    <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                    <v-checkbox dense hide-details="auto" :label="item.text" v-model="questions[index].value"/>
                </div>
                <div v-else-if="item.type === `radio_group`">
                    <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                    <v-radio-group v-model="questions[index].value" v-if="item.direction === 'row'" row
                                   :mandatory="item.required">
                        <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option"/>
                    </v-radio-group>
                    <v-radio-group v-model="questions[index].value" v-else column :mandatory="item.required">
                        <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option"/>
                    </v-radio-group>
                </div>
                <div v-else-if="item.type === `checkboxes`">
                    <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                    <v-row no-gutters dense v-if="item.direction === 'row'">
                        <v-col md="12" class="d-flex flex-wrap">
                            <v-checkbox v-model="questions[index].value" hide-details="auto" class="mr-3 my-1"
                                        v-for="(option,i) in item.items" :key="i" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                    <v-row no-gutters dense v-else>
                        <v-col md="12">
                            <v-checkbox v-model="questions[index].value" hide-details="auto"
                                        v-for="(option,i) in item.items"
                                        :key="i" class="my-1" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                </div>
                <div v-else-if="item.type === `checkboxes`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-row no-gutters dense v-if="item.direction === 'row'">
                        <v-col md="12" class="d-flex flex-wrap">
                            <v-checkbox v-model="questions[index].value" hide-details="auto" class="mr-3 my-1"
                                        v-for="(option,i) in item.items" :key="i" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                    <v-row no-gutters dense v-else>
                        <v-col md="12">
                            <v-checkbox v-model="questions[index].value" hide-details="auto"
                                        v-for="(option,i) in item.items"
                                        :key="i" class="my-1" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                </div>
                <div v-else>
                    <label v-if="item.label">{{ item.label }}</label><sup v-if="item.required">*</sup>
                    <component :placeholder="item.placeholder" :type="item.tag_type" v-model="questions[index].value"
                               filled
                               hide-details="auto" :is="item.tag" :required="item.required" :rows="item.rows"
                               :items="item.items"
                    />
                </div>
            </v-col>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "FillUp",
        props: {
            value: Array
        },
        data: () => ({
            questions: [],
            date_formats: [
                {value: 'D-M-Y', text: 'D-M-Y e.g 01-12-2020'},
                {value: 'Y-M-D', text: 'Y-M-D e.g 2020-12-01'},
                {value: 'M-D-Y', text: 'M-D-Y e.g 12-01-2020'}
            ],
        }),
        computed: {
            text_fields() {
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
            }
        },
        watch: {
            value: {
                handler(val) {
                    this.questions = val
                },
                immediate: true,
                deep: true
            },
            questions(val) {
                this.$emit('input', val)
            }
        },
        methods: {
            alignClass(align) {
                if (align === 'right') return 'ml-auto'
                else if (align === 'center') return 'mx-auto'
                else return 'mr-auto'
            },
            getEmbed(src) {
                let youtubeID = src ? this.youtubeParser(src) : ''
                return `https://www.youtube.com/embed/${youtubeID}`
            },
        }
    }
</script>

<style scoped>

</style>