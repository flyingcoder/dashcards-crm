<template>
    <custom-dialog title="Schedule Task History" :open.sync="open" button1-text="Close" max-width="800"
                   :hasFooter="false"
    >
        <template v-slot:content>
            <template v-if="items.length > 0">
                <v-expansion-panels focusable v-model="panel" multiple flat>
                    <v-expansion-panel v-for="history in items" :key="history.id">
                        <v-expansion-panel-header>
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <v-icon left>mdi-email-check-outline</v-icon>
                                    {{ history.props.name | ucwords }}
                                </v-col>
                                <v-col cols="3">
                                    <small class="caption">{{ snakeCaseToNormal(history.interval_type) | ucwords }}
                                        <span v-if="history.interval_at">{{ history.interval_at }}</span></small>
                                </v-col>
                                <v-col cols="3">
                                    <small class="caption"> {{ history.run_at }}</small>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-card flat>
                                <v-card-text>
                                    From: {{ history.props.from }} <br>
                                    To: {{ history.props.to.join(',') }} <br>
                                    Subject: {{ history.props.subject | ucwords }} <br>
                                    Sent: {{ history.run_at }}
                                </v-card-text>
                                <v-card-text v-html="history.props.contents"/>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-row>
                    <v-spacer/>
                    <v-btn text :disabled="noMoreData" :loading="btn_loading" @click="load_more_history">
                        Load More
                    </v-btn>
                    <v-spacer/>
                </v-row>
            </template>
            <Empty headline="No history yet" v-else/>
        </template>
    </custom-dialog>
</template>

<script>
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import {list_functionality} from "@/services/list-functionality/list-functionality";
    import {config_utils} from "@/services/configs/config_utils";
    import {global_utils} from "@/global_utils/global_utils";

    export default {
        name: "HistoryDialog",
        mixins: [list_functionality, config_utils, global_utils],
        components: {
            CustomDialog
        },
        props: {
            openDialog: Boolean,
            id: Number
        },
        data: () => ({
            task_id: null,
            open: false
        }),
        watch: {
            openDialog(val) {
                this.open = val
            },
            open(val) {
                this.$emit('update:openDialog', val)
            },
            id(val) {
                this.task_id = val
                this.load_history(val)
            }
        },
        methods: {
            load_history(id) {
                this.fill_table_via_url(`api/schedule-tasks/${id}/history`)
            },
            load_more_history() {
                this.load_more_via_url(`api/schedule-tasks/${this.id}/history`)
            }
        }
    }
</script>

<style scoped>

</style>