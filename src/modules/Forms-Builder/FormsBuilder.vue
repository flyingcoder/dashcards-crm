<template>
    <div class="forms-page">
        <div class="forms-page-wrapper">
            <div class="forms-page-content">
                <div class="form">
                    <div class="form-header">
                        <v-row no-gutters>
                            <v-col md="6" sm="5" xs="12">
                                <v-text-field placeholder="Form Title" v-model="form_title" hide-details="auto" dense flat outlined solo class="ma-1"></v-text-field>
                            </v-col>
                            <v-col md="3" sm="4" xs="12">
                                <v-select clearable append-icon="mdi-content-copy" @change="structures = $event" :items="list" item-value="questions" item-text="title" placeholder="Copy Form From ..." solo dense hide-details="auto" class="ma-1" flat></v-select>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="mx-1" v-bind="attrs" v-on="on" fab small @click="clearAll">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                                <span>Clear All</span>
                            </v-tooltip>
                        </v-row>
                    </div>
                    <v-row no-gutters class="form-body">
                        <v-col md="9">
                            <Empty icon="mdi-border-none-variant" v-if="structures.length === 0" headline="Add a title to get started!">
                                <template v-slot:extra>
                                    <v-btn dark depressed color="#3b589e" @click="setProperty(headings.h1)">Add title</v-btn>
                                </template>
                            </Empty>
                            <v-card flat v-else>
                                <v-card-text>
                                    <draggable class="row" v-model="structures" scroll-sensitivity="300" force-fallback="true">
                                        <v-col md="12" v-for="(item, pIndex) in structures" :key="item.id">
                                            <div v-if="item.type === 'divider'" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <hr />
                                                <v-icon small class="hr-action" @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                            </div>
                                            <div v-else-if="item.type === 'image'" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <p v-if="item.label">{{item.label}}</p>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                                <v-img style="max-width: 100%;" :class="alignClass(item.align)" :width="item.itemwidth" :height="item.itemheight" :src="item.src" :alt="item.alt"></v-img>
                                            </div>
                                            <div v-else-if="item.type === 'video'" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <p v-if="item.label">{{item.label}}</p>
                                                <iframe style="max-width: 100%;display:block;" :class="alignClass(item.align)" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" :src="getEmbed(item.src)" :width="item.itemwidth" :height="item.itemheight"></iframe>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                            </div>
                                            <div v-else-if="item.type === 'paragraph'" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <p :style="`text-align:`+item.align">
                                                    {{item.text}}
                                                    <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                    <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                                </p>
                                            </div>
                                            <div v-else-if="textfield.includes(item.type)" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <component :is="item.tag" :style="`text-align:`+item.align">
                                                    {{item.text}}
                                                    <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                    <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                                </component>
                                            </div>
                                            <div v-else-if="item.type === `date`" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker ref="picker" v-model="item.value" :max="item.max_date" :min="item.min_date"></v-date-picker>
                                                </v-menu>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                            </div>
                                            <div v-else-if="item.type === `time`" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <v-menu v-model="item.popover" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="100%" min-width="250px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="item.value" filled hide-details="auto" :label="item.placeholder" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                    </template>
                                                    <v-time-picker v-model="item.value" full-width @click:minute="item.popover= false"></v-time-picker>
                                                </v-menu>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                            </div>
                                            <div v-else-if="item.type === `checkbox`" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <v-checkbox dense hide-details="auto" :label="item.text" v-model="item.value"></v-checkbox>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                            </div>
                                            <div v-else-if="item.type === `radio_group`" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                                <v-radio-group v-model="item.value" v-if="item.direction === 'row'" row :mandatory="item.required">
                                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option"></v-radio>
                                                </v-radio-group>
                                                <v-radio-group v-model="item.value" v-else column :mandatory="item.required">
                                                    <v-radio v-for="(option,i) in item.items" :key="i" :label="option" :value="option"></v-radio>
                                                </v-radio-group>
                                            </div>
                                            <div v-else-if="item.type === `checkboxes`" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                                <v-row no-gutters dense v-if="item.direction === 'row'" >
                                                    <v-col md="12" class="d-flex flex-wrap">
                                                        <v-checkbox v-model="item.value" hide-details="auto" class="mr-3 my-1" v-for="(option,i) in item.items" :key="i" :label="option" :value="option"></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                                <v-row no-gutters dense v-else>
                                                    <v-col md="12">
                                                        <v-checkbox v-model="item.value" hide-details="auto" v-for="(option,i) in item.items" :key="i" class="my-1"  :label="option" :value="option"></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                            <div v-else @mouseover="item.hover = true" @mouseleave="item.hover = false">
                                                <label v-if="item.label">{{item.label}}</label>
                                                <component :placeholder="item.placeholder" :type="item.tag_type" v-model="item.value" filled hide-details="auto" :is="item.tag" :required="item.required" :rows="item.rows" :items="item.items"></component>
                                                <v-icon class="parent-btn" small @click="remove(pIndex)" v-if="item.hover">mdi-delete</v-icon>
                                                <v-icon class="parent-btn" small @click="edit(item, null)" v-if="item.hover">edit</v-icon>
                                            </div>
                                        </v-col>
                                    </draggable>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="3">
                            <v-card flat>
                                <v-tabs dense v-model="sidetab" flat centered>
                                    <v-tab href="#Element">Element</v-tab>
                                    <v-tab href="#Property" :disabled="property_disabled">Property</v-tab>
                                    <v-tab-item value="Element">
                                        <v-card flat tile>
                                            <v-card-text>
                                                <v-list dense>
                                                    <v-subheader>Media Elements</v-subheader>
                                                    <v-list-item-group>
                                                        <v-list-item @click="addDivider(false)">
                                                            <v-list-item-icon>
                                                                <v-icon left>mdi-border-horizontal</v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content>
                                                                <v-list-item-title>Divider</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                        <v-list-group no-action dense>
                                                            <template v-slot:activator>
                                                                <v-list-item-icon>
                                                                    <v-icon left>mdi-format-size</v-icon>
                                                                </v-list-item-icon>
                                                                <v-list-item-content>
                                                                    <v-list-item-title>Heading</v-list-item-title>
                                                                </v-list-item-content>
                                                            </template>
                                                            <v-list-item v-for="(item, i) in headingList" :key="i" @click="setProperty(item)">
                                                                <v-list-item-icon>
                                                                    <v-icon left>{{item.icon}}</v-icon>
                                                                </v-list-item-icon>
                                                                <v-list-item-content>
                                                                    <v-list-item-title>{{item.description | ucwords}}</v-list-item-title>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list-group>
                                                        <v-list-item @click="setProperty(paragraph)">
                                                            <v-list-item-icon>
                                                                <v-icon left>mdi-format-paragraph</v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content>
                                                                <v-list-item-title>Paragraph</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                        <v-list-item @click="setProperty(image)">
                                                            <v-list-item-icon>
                                                                <v-icon left>mdi-image</v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content>
                                                                <v-list-item-title>Image</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                        <v-list-item @click="setProperty(video)">
                                                            <v-list-item-icon>
                                                                <v-icon left>mdi-youtube</v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content>
                                                                <v-list-item-title>Video</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                    <v-subheader>Form Elements</v-subheader>
                                                    <v-list-item-group>
                                                        <v-list-item v-for="form in formInputs" :key="form.type" @click="setProperty(form)">
                                                            <v-list-item-icon>
                                                                <v-icon v-text="form.icon"></v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content>
                                                                <v-list-item-title>{{ form.type | snakeCaseToNormal | removeSlug | ucwords}}</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                    <v-tab-item value="Property">
                                        <v-card flat tile>
                                            <v-card-text v-if="activeType">
                                                <h3 class="subtitle-2 mb-2 text-center"><v-icon left>{{activeType.icon}}</v-icon>{{activeType.type | snakeCaseToNormal | removeSlug | ucwords}}</h3>
                                                <v-text-field v-model="activeType.label" label="Question" hide-details="auto" filled dense v-if="activeType.hasOwnProperty('label')" class="mb-1"></v-text-field>
                                                <v-text-field v-model="activeType.text" label="Value" hide-details="auto" dense filled v-if="activeType.type !== 'paragraph' && activeType.hasOwnProperty('text')" class="mb-1"></v-text-field>
                                                <v-textarea v-model="activeType.text" rows="3" v-if="activeType.type === 'paragraph'" label="Value" hide-details="auto" dense filled class="mb-1"></v-textarea>
                                                <!-- <v-text-field v-model="activeType.min_date" label="Min Date YYYY-MM-DD" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('min_date')" class="mb-1"></v-text-field> -->
                                                <!-- <v-text-field v-model="activeType.max_date" label="Max Date YYYY-MM-DD" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('max_date')" class="mb-1"></v-text-field> -->
                                                <v-text-field v-model="activeType.src" label="Source URL*" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('src')" class="mb-1"></v-text-field>
                                                <v-text-field v-model="activeType.alt" label="Alternate text" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('alt')" class="mb-1"></v-text-field>
                                                <v-text-field v-model="activeType.rows" label="Textarea rows" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('rows')" class="mb-1" type="number"></v-text-field>
                                                <v-text-field v-model="activeType.itemwidth" label="Element Width" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('itemwidth')" class="mb-1" type="number"></v-text-field>
                                                <v-text-field v-model="activeType.itemheight" label="Element Height" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('itemheight')" class="mb-1" type="number"></v-text-field>
                                                <v-text-field v-model="activeType.placeholder" label="Placeholder" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('placeholder')" class="mb-1"></v-text-field>
                                                <!-- <v-text-field v-model="activeType.icon" label="Icon" hide-details="auto" dense filled v-if="activeType.hasOwnProperty('icon')" class="mb-1" append-outer-icon="mdi-help-circle-outline" @click:append-outer="navigate_icons"></v-text-field> -->
                                                <v-select v-model="activeType.width" label="Width (# of columns)" :items="Array.from(Array(12), (_, i) => i + 1)" menu-props="auto" hide-details single-line v-if="activeType.hasOwnProperty('width')" dense filled class="mb-1"></v-select>
                                                <v-select v-model="activeType.date_format" item-value="value" label="Date format" :items="date_formats" menu-props="auto" hide-details single-line v-if="activeType.hasOwnProperty('date_format')" dense filled class="mb-1"></v-select>
                                                <v-select v-model="activeType.align" label="Date format" append-icon="mdi-align-horizontal-center" item-value="value" :items="alignItems" menu-props="auto" hide-details single-line v-if="activeType.hasOwnProperty('align')" dense filled class="mb-1"></v-select>
                                                <v-checkbox v-model="activeType.required" label="Required?" hide-details="auto" v-if="activeType.hasOwnProperty('required')"></v-checkbox>
                                                <!-- <v-checkbox v-model="activeType.is_24hr" label="24 Hour format?" v-if="activeType.hasOwnProperty('is_24hr')"></v-checkbox> -->
                                                <div v-if="activeType.hasOwnProperty('items')">
                                                    <small>Options</small>
                                                    <div v-for="(item, index) in activeType.items">
                                                        <v-text-field label="Enter option" v-model="activeType.items[index]" hide-details="auto" dense filled class="mb-1">
                                                            <template v-slot:append-outer>
                                                                <v-icon @click="removeFromItems(index)">mdi-delete</v-icon>
                                                            </template>
                                                        </v-text-field>
                                                    </div>
                                                    <v-text-field label="Enter option" v-model="new_option" hide-details="auto" dense filled class="mb-1">
                                                        <template v-slot:append-outer>
                                                            <v-icon :disabled="!new_option" :color="new_option ? `success` : `grey`" @click="addToItem">mdi-check-circle-outline</v-icon>
                                                        </template>
                                                    </v-text-field>
                                                </div>
                                                <div v-if="activeType.hasOwnProperty('direction')">
                                                    <small>Direction</small>
                                                    <v-radio-group v-model="activeType.direction" row>
                                                        <v-radio label="Row" value="row"></v-radio>
                                                        <v-radio label="Column" value="column"></v-radio>
                                                    </v-radio-group>
                                                </div>
                                                <!-- buttons -->

                                                <v-btn text class="mt-2" v-if="!isEditing" depressed @click="insertTextContent">Insert</v-btn>
                                                <v-btn text class="mt-2" v-else depressed @click="updateTextContent">Update</v-btn>
                                                <v-btn text depressed @click="cancelTextContent">Cancel</v-btn>
                                            </v-card-text>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-btn text v-if="!isFormEdit" block @click="save" :disabled="disabled || saving" :loading="saving">
                                        <v-icon left>mdi-content-save</v-icon> Save Form
                                    </v-btn>
                                    <v-btn text v-else block @click="update" :disabled="disabled || saving" :loading="saving">
                                        <v-icon left>mdi-content-save</v-icon> Update Form
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
        <!-- <v-row no-gutters class="debuggger">
            <v-col md="7">
                <pre>
                    <code class="fullwidth pa-4">Structure : {{ structures }}<br> </code>
                </pre>
            </v-col>
            <v-col md="5">
                <pre>
                    <code class="fullwidth pa-4">isEditing: {{isEditing}} <br> Parent : {{ parent }} <br> ActiveType : {{ activeType }} <br></code>
                </pre>
            </v-col>
        </v-row> -->
    </div>
</template>
<script src="./FormsBuilder.js"></script>
<style lang="scss" scoped src="./FormsBuilder.scss"></style>
<style scoped>
.border-dots {
    border: 1px dotted grey;
}

.section {
    /*min-height: 200px;*/
    border: 1px dotted grey;
    cursor: pointer;
}

.section .head-tools {
    position: relative;
    right: -93%;
    top: -5px;
}

.section .section-tools {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1px;
}

.section.active {
    border-color: blue;
}

.hr-action {
    font-size: 16px;
    position: relative;
    right: -98%;
    top: -5px;
    height: 0px;
}

.child-btn {
    margin: 0 1px;
}

.parent-btn {
    margin: 0 2px;
}
</style>