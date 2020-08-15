<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="700px" persistent :key="dialogKey">
            <v-card class="custom__dialog event-dialog">
                <v-card-title class="dialog__header">
                    <h3 class="dialog__title">{{ dialogTitle }}</h3>
                    <v-spacer/>
                    <v-btn fab small depressed class="close__dialog" @click="clear_and_close">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="dialog__body">
                    <v-row>
                        <v-col md="4" sm="6" xs="12" class="d__btn">
                            <MembersPicker buttonLabel="Participants" @input="members.selected = $event"
                                           :maxHeight="300" :isBtnBlock="true"/>
                            <div class="choosen" v-if="members.selected.length > 0">
                                <v-chip outlined class="mt-1" v-for="item in members.selected" :key="item.id"
                                        :close="clearable(item)" label
                                        @click:close="remove_from_selected_members(item)">
                                    <v-avatar left>
                                        <v-img :src="item.image_url"/>
                                    </v-avatar>
                                    {{ item.fullname }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6" xs="12" class="d__btn">
                            <DatePicker @input="start_date = $event" :isBtnBlock="true"/>
                            <div class="choosen" v-if="start_date">
                                <div class="c-inner mt-1 text-center">{{ start_date | readableFormat }}</div>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6" xs="12" class="d__btn">
                            <TimePicker @input="time = $event" :isBtnBlock="true"/>
                            <div class="choosen" v-if="displayTime">
                                <div v-if="time.alarm" class="c-inner mt-1 text-center">
                                    <v-icon small left>mdi-alarm</v-icon>
                                    {{ displayTime }}
                                </div>
                                <div v-else class="c-inner mt-1 text-center">{{ displayTime }}</div>
                            </div>
                        </v-col>
                        <v-col md="12" xs="12">
                            <TextField dense :value.sync="title" filled label="Event Title" color="#657186"/>
                        </v-col>
                        <v-col md="12" xs="12">
                            <TextField dense :value.sync="link" filled label="Event Link (Optional)" color="#657186">
                                <template v-slot:append>
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
                                        </template>
                                        <span>A link where participants can join. e.g Skype link, Zoom Link or a Google Meet link</span>
                                    </v-tooltip>
                                </template>
                            </TextField>
                        </v-col>
                        <v-col md="8" xs="12">
                            <v-select dense filled v-model="event_type" v-if="calendar" :items="calendar.event_types"
                                      menu-props="auto" label="Select Event Category" hide-details="auto" return-object
                                      item-text="name" item-value="id" single-line>
                                <template v-slot:item="{ item }">
                                    <span>
                                        <v-icon left :color="item.properties.color">mdi-circle</v-icon>
                                        {{ item.name }}
                                    </span>
                                </template>
                            </v-select>
                        </v-col>
                        <v-col md="4" xs="12" class="d__btn">
                            <v-btn :height="40" block @click="$emit('open-custom-event-type')">
                                <v-icon left>mdi-calendar-plus</v-icon>
                                Custom Event
                            </v-btn>
                        </v-col>
                        <v-col md="12" xs="12">
                            <Editor ref="editor" :key="dialogKey" :hasFloatingTools="false" v-model="description"
                                    :content="description" placeholder="Event Description"/>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="dialog__actions">
                    <v-btn @click="clear_and_close" class="dialog__actions_btn">Close</v-btn>
                    <v-btn class="dialog__actions_btn" :loading="btnloading" :disabled="disabled" @click="save">Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="./EventDialog.js"></script>
<style lang="scss" src="./EventDialog.scss"></style>
<style lang="css" scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }

    >>> .datetime-picker {
        background: #fff;
        width: 100%;
        line-height: 4 !important;
        text-align: center;
        border: 1px solid #dce1e5;
        border-bottom-color: rgb(220, 225, 229);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-radius: 5px 5px 0px 0px;
    }

    >>> .vdatetime-time-picker__item {
        text-transform: uppercase;
    }

    >>> .rich-editor {
        background: #fff;
    }
</style>