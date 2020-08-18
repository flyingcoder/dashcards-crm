<template>
    <CustomDialog ref="dialog" :maxWidth="700" :title="dialog_title" button2-text="Save" @button1="cancel"
                  :open.sync="dialog_is_open" @click-close="clear_and_close"
    >
        <template v-slot:content>
            <v-card flat v-if="calendar">
                <v-card-text>
                    <v-row>
                        <v-col cols="4">
                            <v-menu top :close-on-content-click="hasMember">
                                <template v-slot:activator="{ on: menu, attrs }">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <v-btn class="text-none" block v-bind="attrs"
                                                   v-on="{ ...tooltip, ...menu }"
                                            >
                                                <v-icon left>mdi-account-group-outline</v-icon>
                                                Participants
                                            </v-btn>
                                        </template>
                                        <span>Select Event Participants</span>
                                    </v-tooltip>
                                </template>
                                <v-list dense :max-height="400" style="overflow-y: auto;">
                                    <template v-if="available.length > 0">
                                        <v-list-item class="cursor-pointer" v-for="(member, index) in available"
                                                     :key="index"
                                                     @click="addToSelected(member, index)"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="member.image_url"/>
                                            </v-list-item-avatar>
                                            <v-list-item-title>{{ member.fullname | ucwords }}</v-list-item-title>
                                        </v-list-item>
                                    </template>
                                    <v-list-item v-else>
                                        <v-list-item-title>No more member to select</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <template v-if="members.selected.length > 0">
                                <v-chip label class="fullwidth mt-1" outlined
                                        v-for="(selected, index) in members.selected" :key="index"
                                        close @click:close="removeFromSelected(selected, index)"
                                >
                                    <v-avatar>
                                        <v-img :src="selected.image_url"/>
                                    </v-avatar>
                                    <strong class="ml-1">{{ selected.fullname | ucwords | truncate(14) }}</strong>
                                </v-chip>
                            </template>
                        </v-col>
                        <v-col cols="4">
                            <v-menu top v-model="date_time_picker" :close-on-content-click="false">
                                <template v-slot:activator="{ on: menu, attrs }">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <v-btn class="text-none" block v-bind="attrs"
                                                   v-on="{ ...tooltip, ...menu }"
                                            >
                                                <v-icon left>mdi-calendar-clock</v-icon>
                                                Date & Time *
                                            </v-btn>
                                        </template>
                                        <span>Select Date and Time of Event</span>
                                    </v-tooltip>
                                </template>
                                <v-card flat width="400">
                                    <v-datetime-picker
                                            v-model="start_date"
                                            color="#3b589e"
                                            no-button
                                            :minuteInterval="5" :minDate="today"
                                            :format="date_time_format"
                                            :outputFormat="date_time_format"
                                            no-keyboard overlay no-button-now inline
                                    />
                                    <v-card-text class="pt-0">
                                        <v-row no-gutters>
                                            <v-spacer/>
                                            <v-btn @click="date_time_picker = false" dark color="#3b589e">
                                                Save
                                            </v-btn>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-menu>
                            <template v-if="start_date">
                                <v-chip label class="fullwidth mt-1" outlined
                                        close @click:close="start_date = null"
                                >
                                    <strong class="ml-1">{{ start_date }}</strong>
                                </v-chip>
                            </template>
                        </v-col>
                        <v-col cols="4">
                            <v-menu top close-on-content-click>
                                <template v-slot:activator="{ on: menu, attrs }">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <v-btn class="text-none" block v-bind="attrs"
                                                   v-on="{ ...tooltip, ...menu }"
                                                   :disabled="forceAlarm"
                                            >
                                                <v-icon left>mdi-bell-ring-outline</v-icon>
                                                Alarm
                                            </v-btn>
                                        </template>
                                        <span>Enable | Disable Alarm</span>
                                    </v-tooltip>
                                </template>
                                <v-list dense>
                                    <v-list-item class="cursor-pointer" @click="alarm = true ">
                                        <v-list-item-title>
                                            <v-icon left>mdi-bell-check</v-icon>
                                            Enable Alarm
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item class="cursor-pointer" @click="alarm = false ">
                                        <v-list-item-title>
                                            <v-icon left>mdi-bell-off-outline</v-icon>
                                            Disable Alarm
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <template>
                                <v-chip label class="fullwidth mt-1" outlined>
                                    <v-icon color="success" left v-if="alarm">mdi-bell-check</v-icon>
                                    <v-icon left v-else>mdi-bell-off-outline</v-icon>
                                    <strong class="ml-1">{{ alarm ? 'Enabled' : 'Disabled' }}</strong>
                                </v-chip>
                            </template>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field label="Event Title *" v-model="title" filled dense hide-details="auto"
                                          counter="40" :rules="title_rules"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-select dense filled v-model="event_type"
                                      :items="calendar.event_types"
                                      menu-props="auto" label="Select Event Category *" hide-details
                                      item-text="name" item-value="id" append-outer-icon="mdi-plus-circle-outline"
                                      @click:append-outer="$emit('open-custom-event-type')"
                            >
                                <template v-slot:item="{ item }">
                                        <span>
                                            <v-icon left :color="item.properties.color">mdi-circle</v-icon>
                                            {{ item.name }}
                                        </span>
                                </template>
                            </v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Event Link (Optional)" v-model="link" filled dense hide-details>
                                <template v-slot:append>
                                    <v-tooltip top left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
                                        </template>
                                        <span>A link where participants can join. e.g Skype link, Zoom Link or a Google Meet link</span>
                                    </v-tooltip>
                                </template>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <Editor ref="editor" :hasFloatingTools="false" v-model="description"
                                    :content="description" placeholder="Event Description"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
        <template #button2>
            <v-btn @click="save" :loading="btnloading" :disabled="disabled">{{ mainButton }}</v-btn>
        </template>
    </CustomDialog>
</template>

<script>
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import Editor from "@/common/Editor/Editor.vue";
    import makeRequestTo from '@/services/makeRequestTo'
    import moment from 'moment'
    import _cloneDeep from 'lodash/cloneDeep'
    import {mapGetters} from "vuex";
    import * as apiTo from '@/modules/Calendar/api'
    import _diffBy from "lodash/differenceBy";

    export default {
        name: "EventDialogV2",
        components: {
            CustomDialog,
            Editor
        },
        props: {
            dialog: {type: Boolean, default: false},
            isEdit: {type: Boolean, default: false},
            forceAlarm: {type: Boolean, default: false},
            calendar: {type: Object, default: null},
            eventToEdit: {type: Object, default: null}
        },
        data: () => ({
            loading: false,
            dialog_is_open: false,
            members: {
                original: [],
                items: [],
                selected: []
            },
            today: moment().format('YYYY-MM-DD HH:mm'),
            date_time_format: 'YYYY-MM-DD HH:mm',
            start_date: moment().format('YYYY-MM-DD HH:mm'),
            date_time_picker: false,
            alarm: false,
            title: '',
            link: null,
            description: '',
            event_type: null,
            add_event_type: false,
            btnloading: false,
            title_rules: [
                v => !!v || 'Required',
                v => v && v.length <= 40 || 'Max 40 characters',
            ],
        }),
        watch: {
            dialog: {
                handler(val) {
                    this.dialog_is_open = !!val
                    if (val) {
                        this.btnloading = false
                        this.getMembers();
                        if (this.forceAlarm) this.alarm = true
                    }
                },
                immediate: true
            },
            eventToEdit: {
                handler(val) {
                    if (this.isEdit)
                        this.setUpdateField(val)
                },
                immediate: true,
                deep: true
            }
        },
        computed: {
            ...mapGetters(['user', 'users']),
            dialog_title() {
                if (this.forceAlarm)
                    return this.isEdit ? 'Edit Alarm Event' : 'New Alarm Event'
                return this.isEdit ? 'Edit Event' : 'New Event'
            },
            mainButton() {
                return this.isEdit ? 'Update Event' : 'Save Event'
            },
            disabled() {
                return (!this.title || this.title.trim() === '' || !this.start_date || !this.event_type)
            },
            user_timezone() {
                return moment.tz.guess() || 'UTC'
            },
            hasMember() {
                return this.members.items.length > 0
            },
            available() {
                return _diffBy(this.members.items, this.members.selected, 'id')
            }
        },
        methods: {
            save() {
                if (this.disabled) {
                    this.$event.$emit('open_snackbar', 'Please fill in required * fields', 'error')
                    return
                }
                this.btnloading = true
                if (this.isEdit && this.eventToEdit) {
                    this.updateEvent()
                } else {
                    this.saveEvent()
                }
            },
            cancel() {
                this.dialog_is_open = false
                this.$emit('cancel')
            },
            clear_and_close() {
                this.members.selected = []
                this.members.items = _cloneDeep(this.members.original)
                this.alarm = false
                this.title = ''
                this.link = null
                this.description = ''
                this.event_type = null
                //this.$v.$reset()
                this.cancel()
            },
            saveEvent() {
                apiTo.addNewEvent(this.getPayload())
                    .then(({data}) => {
                        this.$emit('new-event-added', data)
                        this.$event.$emit('open_snackbar', 'Event successfully added!')
                    })
                    .finally(() => {
                        this.btnloading = false
                        this.clear_and_close()
                    })
            },
            updateEvent() {
                apiTo.updateEvent(this.eventToEdit.id, this.getPayload())
                    .then(({data}) => {
                        this.$emit('event-updated', data)
                        this.$event.$emit('open_snackbar', 'Event successfully updated!')
                    })
                    .finally(() => {
                        this.btnloading = false
                        this.clear_and_close()
                    })
            },
            getMembers() {
                if (!this.users || this.users.length === 0) {
                    this.$store.dispatch('fetchUsers')
                        .then(() => {
                            let users = this.$store.getters.users
                            this.members.items = _cloneDeep(users)
                            this.members.original = _cloneDeep(users)
                        })
                } else {
                    this.members.items = _cloneDeep(this.users)
                    this.members.original = _cloneDeep(this.users)
                }
            },
            addToSelected(item, index) {
                this.members.selected.push(item)
                this.members.items.splice(index, 1)
            },
            removeFromSelected(item, index) {
                this.members.selected.splice(index, 1)
                this.members.items.push(item)
            },
            getPayload() {
                let payload = {
                    title: this.title,
                    start_date: this.start_date,
                    end_date: null,
                    timezone: this.user_timezone,
                    all_day: 0,
                    description: this.description,
                    event_type: this.event_type,
                    alarm: this.alarm,
                    notify: this.alarm,
                    link: this.link
                };
                if (this.members.selected.length > 0) {
                    payload.participants = this.members.selected.map(item => {
                        return item.id
                    })
                }
                return payload
            },
            setUpdateField(event) {
                this.all_day = event.all_day
                this.start_date = moment(event.start).format(this.date_time_format)
                this.end_date = null
                this.event_type = event.event_type.hasOwnProperty('id') ? event.event_type.id : event.event_type
                this.description = event.description || null
                this.link = event.properties.link || null
                this.title = event.title
                this.members.selected = event.users
                this.alarm = event.properties.alarm || false
                if (this.$refs.editor)
                    this.$refs.editor.setValue(this.description)
            }
        }
    }
</script>

<style scoped>

</style>