<template>
    <v-row no-gutters class="form-body">
        <v-col cols="9">
            <v-card flat id="structure-content">
                <v-card-text>
                    <draggable class="row form-drag" v-model="structures" scroll-sensitivity="300"
                               force-fallback="true"
                    >
                        <v-col class="row-type" @mouseover="item.hover = true"
                               @mouseleave="item.hover = false"
                               :class="{ active: activeType && activeType.id === item.id }" md="12"
                               v-for="(item, pIndex) in structures" :key="item.id"
                               @click="activeType = item"
                        >
                            <div class="hr-action">
                                <v-tooltip top v-if="item.hover">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-bind="attrs" v-on="on" small @click="remove(pIndex)">
                                            mdi-delete-circle-outline
                                        </v-icon>
                                    </template>
                                    <span>Remove</span>
                                </v-tooltip>
                                <v-tooltip top v-if="item.hover">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-bind="attrs" v-on="on" class="parent-btn" small @click="edit(item)">
                                            mdi-circle-edit-outline
                                        </v-icon>
                                    </template>
                                    <span>Edit Properties</span>
                                </v-tooltip>
                            </div>
                            <div v-if="item.type === 'divider'">
                                <hr>
                            </div>
                            <div v-else-if="item.type === 'image'">
                                <p v-if="item.label">{{ item.label }}</p>
                                <v-img style="max-width: 100%;" :width="item.itemwidth"
                                       :class="alignClass(item.align)" :height="item.itemheight"
                                       :src="item.src" :alt="item.alt"
                                />
                            </div>
                            <div v-else-if="item.type === 'video'">
                                <p v-if="item.label">{{ item.label }} </p>
                                <iframe style="max-width: 100%;display:block;"
                                        :class="alignClass(item.align)"
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
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-menu v-model="item.popover" :close-on-content-click="false"
                                        :nudge-right="40" transition="scale-transition" offset-y
                                        max-width="100%" min-width="250px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="item.value" filled hide-details="auto"
                                                      :label="item.placeholder" readonly v-bind="attrs"
                                                      v-on="on"
                                        />
                                    </template>
                                    <v-date-picker ref="picker" v-model="item.value"
                                                   :max="item.max_date" :min="item.min_date"
                                    />
                                </v-menu>
                            </div>
                            <div v-else-if="item.type === `time`">
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-menu v-model="item.popover" :close-on-content-click="false"
                                        :nudge-right="40" transition="scale-transition" offset-y
                                        max-width="100%" min-width="250px"
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
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-checkbox dense hide-details="auto" :label="item.text"
                                            v-model="item.value"
                                />
                            </div>
                            <div v-else-if="item.type === `radio_group`">
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-radio-group v-model="item.value" v-if="item.direction === 'row'" row
                                               :mandatory="item.required"
                                >
                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option"
                                             :value="option"
                                    />
                                </v-radio-group>
                                <v-radio-group v-model="item.value" v-else column
                                               :mandatory="item.required"
                                >
                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option"
                                             :value="option"
                                    />
                                </v-radio-group>
                            </div>
                            <div v-else-if="item.type === `checkboxes`">
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-row no-gutters dense v-if="item.direction === 'row'">
                                    <v-col md="12" class="d-flex flex-wrap">
                                        <v-checkbox v-model="item.value" hide-details="auto"
                                                    class="mr-3 my-1" v-for="(option,i) in item.items"
                                                    :key="i" :label="option" :value="option"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row no-gutters dense v-else>
                                    <v-col md="12">
                                        <v-checkbox v-model="item.value" hide-details="auto"
                                                    v-for="(option,i) in item.items" :key="i"
                                                    class="my-1" :label="option" :value="option"
                                        />
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else-if="item.type === `file_upload`">
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <v-file-input clearable clear-icon="mdi-close-circle-outline" filled counter
                                              :multiple="item.multiple" :placeholder="item.placeholder"
                                              hide-details="auto" :required="item.required" v-model="item.value"
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
                            <div v-else>
                                <label v-if="item.label">{{ item.label }}</label>
                                <sup v-if="item.required">*</sup>
                                <component :placeholder="item.placeholder" :type="item.tag_type"
                                           v-model="item.value" filled hide-details="auto"
                                           :is="item.tag" :required="item.required" :rows="item.rows"
                                           :items="item.items"
                                />
                            </div>
                        </v-col>
                    </draggable>
                    <div class="section-tools mx-auto">
                        <v-row no-gutters>
                            <v-spacer/>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" icon depressed tile v-bind="attrs"
                                           v-on="on" @click="addDivider()"
                                    >
                                        <v-icon small>mdi-border-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <span>Add Divider</span>
                            </v-tooltip>
                            <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" depressed icon v-bind="attrs"
                                           v-on="on"
                                    >
                                        <v-icon small>mdi-format-header-pound</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, i) in headingList" :key="i"
                                                 @click="setProperty(item)"
                                    >
                                        <v-list-item-title>
                                            <v-icon small>{{ item.icon }}</v-icon>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" icon depressed tile v-bind="attrs"
                                           v-on="on" @click="setProperty(paragraph)"
                                    >
                                        <v-icon small>mdi-format-paragraph</v-icon>
                                    </v-btn>
                                </template>
                                <span>Add Paragraph</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" icon depressed tile v-bind="attrs"
                                           v-on="on" @click="setProperty(image)"
                                    >
                                        <v-icon small>mdi-image</v-icon>
                                    </v-btn>
                                </template>
                                <span>Add Image</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" icon depressed tile v-bind="attrs"
                                           v-on="on" @click="setProperty(video)"
                                    >
                                        <v-icon small>mdi-youtube</v-icon>
                                    </v-btn>
                                </template>
                                <span>Add Video</span>
                            </v-tooltip>
                            <v-tooltip bottom v-for="form in formInputs" :key="form.type">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="section-tools-btn" icon depressed tile v-bind="attrs"
                                           v-on="on" @click="setProperty(form)"
                                    >
                                        <v-icon small>{{ form.icon }}</v-icon>
                                    </v-btn>
                                </template>
                                <span>Add {{ form.type | snakeCaseToNormal | removeSlug | ucwords }} Field</span>
                            </v-tooltip>
                            <v-spacer/>
                        </v-row>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="3">
            <affix class="sidebar-menu" relative-element-selector="#structure-content" style="width: 300px;">
                <v-card flat tile>
                    <v-card-text v-if="activeType">
                        <h3 class="subtitle-2 mb-2 text-center">
                            <v-icon left>{{ activeType.icon }}</v-icon>
                            {{ activeType.type | snakeCaseToNormal | removeSlug | ucwords }} Property
                        </h3>
                        <v-text-field v-model="activeType.label" label="Question" hide-details="auto"
                                      filled dense v-if="activeType.hasOwnProperty('label')"
                                      class="mb-1"
                        />
                        <v-text-field v-model="activeType.text" label="Value" hide-details="auto" dense
                                      filled
                                      v-if="activeType.type !== 'paragraph' && activeType.hasOwnProperty('text')"
                                      class="mb-1"
                        />
                        <v-textarea v-model="activeType.text" rows="3"
                                    v-if="activeType.type === 'paragraph'" label="Value"
                                    hide-details="auto" dense filled class="mb-1"
                        />
                        <v-text-field v-model="activeType.src" append-icon="mdi-cloud-upload-outline"
                                      label="Source URL *" hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('src')" class="mb-1"
                        />
                        <v-text-field v-model="activeType.alt" label="Alternate text"
                                      hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('alt')" class="mb-1"
                        />
                        <v-text-field v-model="activeType.rows" label="Textarea rows"
                                      hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('rows')" class="mb-1"
                                      type="number"
                        />
                        <v-text-field v-model="activeType.itemwidth" label="Element Width"
                                      hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('itemwidth')" class="mb-1"
                                      type="number"
                        />
                        <v-text-field v-model="activeType.itemheight" label="Element Height"
                                      hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('itemheight')" class="mb-1"
                                      type="number"
                        />
                        <v-text-field v-model="activeType.placeholder" label="Placeholder"
                                      hide-details="auto" dense filled
                                      v-if="activeType.hasOwnProperty('placeholder')" class="mb-1"
                        />
                        <v-select v-model="activeType.width" label="Width (# of columns)"
                                  :items="Array.from(Array(12), (_, i) => i + 1)" menu-props="auto"
                                  hide-details single-line v-if="activeType.hasOwnProperty('width')"
                                  dense filled class="mb-1"
                        />
                        <v-select v-model="activeType.date_format" item-value="value"
                                  label="Date format" :items="date_formats" menu-props="auto"
                                  hide-details single-line
                                  v-if="activeType.hasOwnProperty('date_format')" dense filled
                                  class="mb-1"
                        />
                        <v-select v-model="activeType.align" label="Date format"
                                  append-icon="mdi-align-horizontal-center" item-value="value"
                                  :items="alignItems" menu-props="auto" hide-details single-line
                                  v-if="activeType.hasOwnProperty('align')" dense filled class="mb-1"
                        />
                        <v-checkbox v-model="activeType.multiple" label="Multiple File Upload?" hide-details="auto"
                                    v-if="activeType.type ==='file_upload' && activeType.hasOwnProperty('multiple')"
                        />
                        <v-text-field v-model="activeType.max" label="Number of Files Allowed"
                                      hide-details="auto" dense filled
                                      :rules="multiple_count_rules"
                                      v-if="activeType.multiple && activeType.hasOwnProperty('max')" class="my-1"
                                      type="number"
                        />
                        <v-checkbox v-model="activeType.required" label="Required?" hide-details="auto"
                                    v-if="activeType.hasOwnProperty('required')"
                        />
                        <div v-if="activeType.hasOwnProperty('items')">
                            <small>Options</small>
                            <div v-for="(item, index) in activeType.items" :key="index">
                                <v-text-field label="Enter option" v-model="activeType.items[index]"
                                              hide-details="auto" dense filled class="mb-1"
                                >
                                    <template v-slot:append-outer>
                                        <v-icon @click="removeFromItems(index)">mdi-delete</v-icon>
                                    </template>
                                </v-text-field>
                            </div>
                            <v-text-field label="Enter option" v-model="new_option" hide-details="auto"
                                          dense filled class="mb-1"
                            >
                                <template v-slot:append-outer>
                                    <v-icon :disabled="!new_option"
                                            :color="new_option ? `success` : `grey`" @click="addToItem"
                                    >
                                        mdi-check-circle-outline
                                    </v-icon>
                                </template>
                            </v-text-field>
                        </div>
                        <div v-if="activeType.hasOwnProperty('direction')">
                            <small>Direction</small>
                            <v-radio-group v-model="activeType.direction" row>
                                <v-radio label="Row" value="row"/>
                                <v-radio label="Column" value="column"/>
                            </v-radio-group>
                        </div>
                    </v-card-text>
                </v-card>
                <slot name="right-bottom"/>
            </affix>
        </v-col>
        <v-col cols="12" v-if="debug_on">
            <v-row no-gutters class="debugger">
                <v-col md="7">
                <pre>
                    <code class="fullwidth pa-4">Structure : {{ structures }}<br> </code>
                </pre>
                </v-col>
                <v-col md="5">
                <pre>
                    <code class="fullwidth pa-4">isEditing: {{ isEditing }} <br> ActiveType : {{ activeType }} <br></code>
                </pre>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    import {v4 as uuidv4} from 'uuid';
    import {global_utils} from "@/global_utils/global_utils";
    import _cloneDeep from "lodash/cloneDeep";
    //components
    import draggable from 'vuedraggable'
    import {Affix} from 'vue-affix'

    export default {
        name: "Builder",
        mixins: [global_utils],
        components: {
            draggable,
            Affix
        },
        props: {
            value: Array,
            hasFileUpload: {type: Boolean, default: false}
        },
        created() {
            this.setProperty(this.headings.h1)
            this.setProperty(this.paragraph)
        },
        data: () => ({
            debug_on: false,
            divider: {
                id: null,
                type: 'divider',
                tag: 'hr',
                height: 5,
                hover: false
            },
            headings: {
                h1: {
                    id: null,
                    type: 'h1',
                    tag: 'h1',
                    description: 'Heading 1',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-1',
                    align: 'left'
                },
                h2: {
                    id: null,
                    type: 'h2',
                    tag: 'h2',
                    description: 'Heading 2',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-2',
                    align: 'left'
                },
                h3: {
                    id: null,
                    type: 'h3',
                    tag: 'h3',
                    description: 'Heading 3',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-3',
                    align: 'left'
                },
                h4: {
                    id: null,
                    type: 'h4',
                    tag: 'h4',
                    description: 'Heading 4',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-4',
                    align: 'left'
                },
                h5: {
                    id: null,
                    type: 'h5',
                    tag: 'h5',
                    description: 'Heading 5',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-5',
                    align: 'left'
                },
                h6: {
                    id: null,
                    type: 'h6',
                    tag: 'h6',
                    description: 'Heading 6',
                    text: 'Title...',
                    hover: false,
                    icon: 'mdi-format-header-6',
                    align: 'left'
                },
                label: {
                    id: null,
                    type: 'label',
                    tag: 'label',
                    description: 'Normal',
                    text: 'Text...',
                    hover: false,
                    icon: 'mdi-format-letter-case'
                }
            },
            paragraph: {
                id: null,
                type: 'paragraph',
                tag: 'p',
                text: 'Description...',
                hover: false,
                align: 'left',
                icon: 'mdi-format-paragraph'
            },
            section: {
                id: null,
                type: 'section',
                tag: 'section',
                hover: false,
                children: [],
            },
            image: {
                id: null,
                type: 'image',
                tag: 'img',
                src: 'https://via.placeholder.com/200x150.png?text=No+Image+Source+Found',
                itemheight: '120',
                itemwidth: '300',
                maxWidth: '100%',
                maxHeight: '100%',
                alt: 'No image source found',
                hover: false,
                icon: 'mdi-image',
                label: null,
                align: 'left'
            },
            video: {
                id: null,
                type: 'video',
                tag: 'video',
                src: '',
                itemheight: 'auto',
                itemwidth: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                hover: false,
                icon: 'mdi-youtube',
                label: null,
                align: 'left'
            },
            date: {
                id: null,
                type: 'date',
                tag: 'datepicker',
                label: 'Date',
                icon: 'mdi-calendar',
                show_icon: false,
                placeholder: 'Select date',
                value: null,
                min_date: null,
                max_date: null,
                date_format: 'Y-M-D',
                required: false,
                hover: false
            },
            time: {
                id: null,
                type: 'time',
                tag: 'timepicker',
                label: 'Time',
                icon: 'mdi-calendar-clock',
                show_icon: false,
                placeholder: 'Select time',
                value: null,
                required: false,
                hover: false,
                popover: false
            },
            text: {
                id: null,
                type: 'text',
                tag: 'v-text-field',
                tag_type: 'text',
                label: 'Untitle Question',
                icon: 'mdi-alpha-t-box-outline',
                show_icon: false,
                placeholder: 'Your answer',
                value: null,
                required: false,
                hover: false
            },
            number: {
                id: null,
                type: 'number',
                tag: 'v-text-field',
                tag_type: 'number',
                label: 'Untitle Question',
                icon: 'mdi-alpha-n-box-outline',
                show_icon: false,
                placeholder: 'Your answer',
                value: null,
                required: false,
                hover: false
            },
            file_upload: {
                id: null,
                type: 'file_upload',
                tag: 'v-file-input',
                tag_type: 'file',
                label: 'Upload file',
                icon: 'mdi-paperclip',
                show_icon: false,
                placeholder: 'Select file',
                value: null,
                props: [],
                required: false,
                hover: false,
                error: false,
                multiple: false,
                max: 1
            },
            link: {
                id: null,
                type: 'link',
                tag: 'v-text-field',
                tag_type: 'url',
                label: 'URL',
                icon: 'mdi-link-plus',
                show_icon: false,
                placeholder: 'https://',
                value: null,
                required: false,
                hover: false
            },
            email: {
                id: null,
                type: 'email',
                tag: 'v-text-field',
                tag_type: 'email',
                label: 'Untitle Question',
                icon: 'mdi-email-outline',
                show_icon: false,
                placeholder: 'user@site.com',
                value: null,
                required: false,
                hover: false
            },
            phone: {
                id: null,
                type: 'phone',
                tag: 'vue-phone-number-input',
                tag_type: 'phone',
                label: 'Untitle Question',
                icon: 'mdi-file-phone-outline',
                show_icon: false,
                placeholder: '123-4568',
                value: null,
                required: false,
                hover: false
            },
            textarea: {
                id: null,
                type: 'textarea',
                tag: 'v-textarea',
                label: 'Untitle Question',
                icon: 'mdi-reorder-horizontal',
                show_icon: false,
                placeholder: 'Your answer',
                value: null,
                rows: 3,
                required: false,
                hover: false
            },
            dropdown: {
                id: null,
                type: 'dropdown',
                tag: 'v-select',
                label: "Select",
                icon: 'mdi-arrow-down-drop-circle-outline',
                show_icon: false,
                placeholder: 'Select your answer',
                value: null,
                required: false,
                hover: false,
                items: ['Select 1', 'Select 2'],
            },
            radio_group: {
                id: null,
                type: 'radio_group',
                tag: 'v-radio-group',
                label: 'Select',
                icon: 'mdi-radiobox-marked',
                required: false,
                show_icon: false,
                value: null,
                hover: false,
                direction: 'row', //or column
                items: ['Option 1', 'Option 2'],
            },
            checkboxes: {
                id: null,
                type: 'checkboxes',
                tag: 'checkboxes',
                label: 'Select',
                icon: 'mdi-checkbox-multiple-marked-outline',
                show_icon: false,
                value: [],
                required: false,
                hover: false,
                direction: 'row', //or column
                items: ['Option 1', 'Option 2'],
            },
            checkbox: {
                id: null,
                type: 'checkbox',
                tag: 'v-checkbox',
                label: 'Question',
                icon: 'mdi-checkbox-marked-outline',
                show_icon: false,
                text: 'Checkbox',
                hover: false,
                value: null,
            },
            date_formats: [
                {value: 'D-M-Y', text: 'D-M-Y e.g 01-12-2020'},
                {value: 'Y-M-D', text: 'Y-M-D e.g 2020-12-01'},
                {value: 'M-D-Y', text: 'M-D-Y e.g 12-01-2020'}
            ],
            alignItems: [
                {value: 'left', text: 'Left Align'},
                {value: 'center', text: 'Center Align'},
                {value: 'right', text: 'Right Align'}
            ],
            multiple_count_rules: [
                v => !!v || 'Required',
                v => v >= 0 || 'Minimum value allowed: 1',
                v => v <= 5 || 'Maximum value allowed: 5',
            ],
            structures: [],
            sidetab: 'Element',
            activeType: null,
            isEditing: false,
            parent: null,
            new_option: null,
            saving: false,
        }),
        computed: {
            headingList() {
                return Object.values(this.headings)
            },
            property_disabled() {
                return !(this.activeType || this.parent)
            },
            textfield() {
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
            },
            formInputs() {
                let allowed = [
                    this.date,
                    this.time,
                    this.text,
                    this.number,
                    this.link,
                    this.email,
                    // this.phone,
                    this.textarea,
                    this.dropdown,
                    this.radio_group,
                    this.checkboxes,
                    this.checkbox
                ]
                if (this.hasFileUpload) {
                    allowed.push(this.file_upload)
                }
                return allowed
            },
        },
        watch: {
            value(val) {
                this.structures = val
            },
            structures(val) {
                this.$emit('input', val)
            }
        },
        methods: {
            setStructure(structure) {
                this.structures = structure
            },
            validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            alignClass(align) {
                if (align === 'right') return 'ml-auto'
                else if (align === 'center') return 'mx-auto'
                else return 'mr-auto'
            },
            toggleParent(id) {
                this.parent = this.parent === id ? null : id
            },
            setProperty(item) {
                this.activeType = _cloneDeep(item)
                this.insertTextContent()
                this.edit(this.activeType)
            },
            editProperty(item) {
                this.activeType = item
                this.sidetab = 'Property'
            },
            insertTextContent() {
                let element = this.activeType
                element.id = uuidv4()
                this.insert(element)
            },
            updateTextContent() {
                let active = this.activeType
                if (this.parent) {
                    let parentIndex = this.getIndex(this.structures, this.parent)
                    let childIndex = this.getIndex(this.structures[parentIndex].children, active.id)
                    this.structures[parentIndex].children.splice(childIndex, 1, active)
                } else {
                    let index = this.getIndex(this.structures, active.id)
                    this.structures.splice(index, 1, active)
                }
                this.cancelTextContent()
            },
            cancelTextContent() {
                this.activeType = null
                this.isEditing = false
                this.sidetab = 'Element'
            },
            insert(type) {
                this.structures.push(type)
            },
            insertTo(type, parentId) {
                let index = this.getIndex(this.structures, parentId)
                this.structures[index].children.push(type)
            },
            edit(item) {
                this.isEditing = true
                this.editProperty(item)
            },
            getIndex(arr, findId) {
                let index = arr.findIndex(i => i.id === findId)
                return index
            },
            addDivider(parentId) {
                if (parentId) {
                    this.parent = parentId
                }
                let divider = _cloneDeep(this.divider)
                divider.id = uuidv4()
                if (this.parent) {
                    let index = this.getIndex(this.structures, this.parent)
                    this.structures[index].children.push(divider)
                } else {
                    this.structures.push(divider)
                }
            },
            removeDivider(childid, parentid) {
                if (parent) {
                    let parent_index = this.getIndex(this.structures, parentid)
                    let child_index = this.getIndex(this.structures[parent_index].children, childid)
                    this.structures[parent_index].children.splice(child_index, 1)
                } else {
                    let index = this.getIndex(this.structures, parentid)
                    this.structures.splice(index, 1)
                }
            },
            addSection() {
                let section = _cloneDeep(this.section)
                section.id = uuidv4()
                this.parent = section.id
                this.structures.push(section)
            },
            remove(index) {
                this.structures.splice(index, 1)
                if (this.structures.length === 0)
                    this.activeType = null
            },
            removeChild(pindex, cIndex) {
                this.structures[pindex].children.splice(cIndex, 1)
            },
            copySection(id) {
                let index = this.getIndex(this.structures, id)
                let section = _cloneDeep(this.structures[index])
                section.id = uuidv4()
                section.hover = false
                section.children.forEach(child => child.id = uuidv4())
                this.structures.push(section)
            },
            clearAll() {
                this.structures = []
                this.cancelTextContent()
            },
            previewForm() {

            },
            navigate_icons() {
                window.open('https://cdn.materialdesignicons.com/5.2.45/');
            },
            removeFromItems(index) {
                if (this.activeType) {
                    this.activeType.items.splice(index, 1)
                }
            },
            addToItem() {
                if (this.activeType) {
                    this.activeType.items.push(this.new_option)
                    this.new_option = null
                }
            },
            getEmbed(src) {
                let youtubeID = src ? this.youtubeParser(src) : ''
                return `https://www.youtube.com/embed/${youtubeID}`
            },
        }
    }
</script>

<style lang="scss" src="./Builder.scss"></style>