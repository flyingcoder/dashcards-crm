<template>
    <v-row align="center" no-gutters class="step-one">
        <v-col cols="12" md="3" sm="12" class="label" v-if="!(dialog.type === 'create')">Invoice ID</v-col>
        <v-col cols="12" md="9" sm="12" class="value" v-if="!(dialog.type === 'create')">
            <v-text-field :disabled="dialog.type === 'edit'" outlined dense class="textfield" color="#657186" solo hide-details flat placeholder="#" :value="`#INV-` + invoice_id"></v-text-field>
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12" class="label">Invoice Title <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12" class="value">
            <v-text-field class="titlefield" color="#657186" solo hide-details flat dense outlined placeholder="Add Invoice Title *" v-model.trim="title"></v-text-field>
        </v-col>

        <v-col cols="12" md="3" sm="4" xs="12" class="label">Select Type <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12" class="value">
            <v-select :disabled="projectLock" solo outlined full-width dense hide-details color="#657186" flat :items="['hourly', 'monthly']" v-model="type" placeholder="Select Invoice Type"></v-select>
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12" class="label" v-if="type === 'hourly'">Project/Service <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12" class="value" v-if="type === 'hourly'">
            <v-select :disabled="projectLock" :clearable="!projectLock" solo hide-details color="#657186" flat full-width outlined dense :items="projects" :value="selected_project" @change="setBillingTargets" item-text="title" item-value="id" placeholder="Select Project/Service"></v-select>
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12" class="label">Invoice Date <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12" class="value">
            <date-picker :hasButtons="false" prepend-inner-icon="date_range" class="textfield" dense outlined hide-details color="#657186" flat placeholder="Select Date" :value="date" :max="due_date" @input="update_date({ date: $event, field: 'date' })" />
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12" class="label">Due Date <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12" class="value">
            <date-picker :hasButtons="false" prepend-inner-icon="date_range" class="textfield" dense outlined hide-details color="#657186" flat placeholder="Select Date" :value="due_date" :min="date" @input="update_date({ date: $event, field: 'due_date' })" />
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12">Billed From <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12">
            <v-autocomplete class="value" color="#657186" hide-details v-model="billed_from" :items="members" chips item-text="fullname" item-value="id" solo full-width outlined flat dense :value="billed_from" prepend-inner-icon="mdi-account-plus" @click:prepend-inner="show_add_member_dialog('billed_from')">
                <template v-slot:selection="data">
                    <v-chip v-bind="data.attrs" tile outlined>
                        <v-avatar left>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        {{ data.item.fullname }}
                    </v-chip>
                </template>
                <template v-slot:item="{ item }">
                    <template>
                        <v-list-item-avatar>
                            <img :src="item.image_url" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="item.fullname"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.job_title"></v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </template>
            </v-autocomplete>
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="12">Billed To <span class="required">*</span></v-col>
        <v-col cols="12" md="9" sm="8" xs="12">
            <v-autocomplete class="value" color="#657186" hide-details v-model="billed_to" :items="members" chips item-text="fullname" item-value="id" solo full-width outlined flat dense :value="billed_to" prepend-inner-icon="mdi-account-plus" @click:prepend-inner="show_add_member_dialog('billed_to')">
                <template v-slot:selection="data">
                    <v-chip v-bind="data.attrs" tile outlined>
                        <v-avatar left>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        {{ data.item.fullname }}
                    </v-chip>
                </template>
                <template v-slot:item="{ item }">
                    <v-list-item-avatar>
                        <img :src="item.image_url" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.fullname"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.job_title"></v-list-item-subtitle>
                    </v-list-item-content>
                </template>
            </v-autocomplete>
        </v-col>
        <teams-dialog ref="add_dialog" title="Add New Member" :dialog.sync="add_dialog" @save="add_member" @close-dialog="add_dialog = false"></teams-dialog>
    </v-row>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from '@/services/axios_instance'
import makeRequestTo from '@/services/makeRequestTo'
import _cloneDeep from 'lodash/cloneDeep'

//Components
import DatePicker from '@/common/DatePicker.vue'
import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'

export default {
    name: 'StepOne',
    components: {
        DatePicker,
        TeamsDialog
    },
    props: { 
        projectLock : { type: Boolean, default : false }
    },
    data: () => ({
        members: [],
        original: [],
        selected: 0,
        add_dialog: false,
        target_add: ''
    }),
    mounted() {
        setTimeout(() => {
            this.getMembers()
        }, 1)
    },
    computed: {
        ...mapGetters('invoice', [
            'projects',
            'selected_project',
            'due_date',
            'date',
            'dialog',
            'invoice_id',
            'type',
            'company_logo',
            'dialog'
        ]),
        billed_to: {
            get() {
                return this.$store.getters['invoice/billed_to']
            },
            set(newVal) {
                this.$store.commit('invoice/set_billed_to', newVal)
            }
        },

        billed_from: {
            get() {
                return this.$store.getters['invoice/billed_from']
            },
            set(newVal) {
                this.$store.commit('invoice/set_billed_from', newVal)
            }
        },
        type: {
            get() {
                return this.$store.getters['invoice/type']
            },
            set(newVal) {
                this.set_type(newVal)
            }
        },
        title: {
            get() {
                return this.$store.getters['invoice/title']
            },
            set(new_title) {
                this.$store.commit('invoice/set_title', new_title)
            }
        }
    },

    watch: {
        type(val) {
            if (val === 'monthly') {
                this.type_changed_to_monthly()
            }
        },

    },

    methods: {
        ...mapActions('invoice', ['type_changed_to_monthly']),

        ...mapMutations('invoice', [
            'init_date',
            'set_type',
            'set_selected_project',
            'update_date'
        ]),
        setBillingTargets(event) {
            this.set_selected_project(event)
            // this.$event.$emit('')
        },

        setFrom(val) {
            this.billed_from = val
        },
        setTo(val) {
            this.billed_to = val
        },
        getMembers() {
            makeRequestTo.get_all_teams().then(({ data }) => {
                this.original = _cloneDeep(data)
                this.members = data
            })
        },
        show_add_member_dialog(target) {
            this.target_add = target
            this.add_dialog = true
        },
        add_member(payload) {
            makeRequestTo
                .add_new_team(payload)
                .then(({ data }) => {
                    this.members.push(data)
                    if (this.target_add === 'billed_from') {
                        this.billed_from = data.id
                    } else if (this.target_add === 'billed_to') {
                        this.billed_to = data.id
                    }
                    this.$refs.add_dialog.clear_and_close()
                })
                .finally(() => {
                    this.target_add = ''
                    this.$event.$emit('btnloading_off', false)
                })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/variables';

.required {
    color: $red;
}

.label,
.value {
    margin-bottom: 10px;
}
</style>
<style scoped>
    >>> .v-select__selection.v-select__selection--comma{
        color: #667381;
    }
    >>> .v-list-item__title{
        color: #667381;
        font-size: 16px;
    }
</style>