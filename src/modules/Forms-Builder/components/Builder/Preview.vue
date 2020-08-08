<template>
    <v-card flat>
        <v-card-text>
            <v-col md="12" v-for="(item, pIndex) in questions" :key="item.id">
                <div v-if="item.type === 'divider'">
                    <hr>
                    <v-icon small class="hr-action" @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                </div>
                <div v-else-if="item.type === 'image'">
                    <p v-if="item.label">{{ item.label }}</p>
                    <v-img style="max-width: 100%;" contain :class="alignClass(item.align)" :width="item.itemwidth"
                           :height="item.itemheight" :src="item.src" :alt="item.alt"
                    />
                </div>
                <div v-else-if="item.type === 'video'">
                    <p v-if="item.label">{{ item.label }}</p>
                    <iframe style="max-width: 100%;display:block;" :class="alignClass(item.align)"
                            allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            :src="getEmbed(item.src)" :width="item.itemwidth" :height="item.itemheight"
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
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y max-width="100%" min-width="250px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder"
                                          readonly v-bind="attrs" v-on="on"
                            />
                        </template>
                        <v-date-picker ref="picker" v-model="item.value" :max="item.max_date" :min="item.min_date" />
                    </v-menu>
                </div>
                <div v-else-if="item.type === `time`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y max-width="100%" min-width="250px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder"
                                          readonly v-bind="attrs" v-on="on"
                            />
                        </template>
                        <v-time-picker v-model="item.value" full-width @click:minute="item.popover= false" />
                    </v-menu>
                </div>
                <div v-else-if="item.type === `checkbox`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-checkbox dense hide-details="auto" :label="item.text" v-model="item.value" />
                </div>
                <div v-else-if="item.type === `radio_group`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-radio-group v-model="item.value" v-if="item.direction === 'row'" row :mandatory="item.required">
                        <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option" />
                    </v-radio-group>
                    <v-radio-group v-model="item.value" v-else column :mandatory="item.required">
                        <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option" />
                    </v-radio-group>
                </div>
                <div v-else-if="item.type === `checkboxes`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <v-row no-gutters dense v-if="item.direction === 'row'">
                        <v-col md="12" class="d-flex flex-wrap">
                            <v-checkbox v-model="item.value" hide-details="auto" class="mr-3 my-1"
                                        v-for="(option,i) in item.items" :key="i" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                    <v-row no-gutters dense v-else>
                        <v-col md="12">
                            <v-checkbox v-model="item.value" hide-details="auto" v-for="(option,i) in item.items"
                                        :key="i" class="my-1" :label="option" :value="option"
                            />
                        </v-col>
                    </v-row>
                </div>
                <div v-else-if="item.type === `file_upload`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <sup v-if="item.required">*</sup>
                    <v-file-input clearable clear-icon="mdi-close-circle-outline" filled counter
                                  :multiple="item.multiple" :placeholder="item.placeholder"
                                  hide-details :required="item.required" v-model="item.value"
                    >
                        <template v-slot:selection="{ index, text }">
                            <v-chip v-if="index < 3" color="deep-purple accent-5" dark label small>
                                {{ text }}
                            </v-chip>
                            <span v-else-if="index === 3" class="overline grey--text text--darken-3 mx-2">
                                            + {{ (item.value.length - 2) }} File(s)
                                        </span>
                        </template>
                    </v-file-input>
                </div>
                <div v-else-if="item.type === `editor`">
                    <label v-if="item.label">{{ item.label }}</label>
                    <sup v-if="item.required">*</sup>
                    <editor v-model="item.value" :has-floating-tools="false" :placeholder="item.placeholder" />
                </div>
                <div v-else>
                    <label v-if="item.label">{{ item.label }}</label>
                    <component :placeholder="item.placeholder" :type="item.tag_type" v-model="item.value" filled
                               hide-details="auto" :is="item.tag" :required="item.required" :rows="item.rows"
                               :items="item.items"
                    />
                </div>
            </v-col>
        </v-card-text>
    </v-card>
</template>

<script>
    import {global_utils} from '@/global_utils/global_utils'
    import Editor from "@/common/Editor/Editor.vue";
    export default {
        name: "Preview",
        mixins: [global_utils],
        components:{
            Editor
        },
        props: {
            questions: Array
        },
        computed: {
            textfield() {
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
            },
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