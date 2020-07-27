<template>
    <v-layout justify-center v-show="task">
        <v-dialog scrollable max-width="800" v-model="dialog" transition="dialog-bottom-transition">
            <v-card flat>
                <v-card-title class="py-1">
                    <v-col class="title" v-if="task"><span v-if="task.project">{{ task.project.title | ucwords }} :</span> {{ task.title | ucwords | truncate }}</v-col>
                    <v-spacer />
                    <v-btn icon @click="close_dialog">
                        <v-icon large>mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider />
                <v-card-text>
                    <preview-card v-if="task" :id="task.project_id" :active-id="task.id" :key="componentKey"
                                  @dropdown-action="handle_dropdown_action" />
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script src="./TaskViewDialog.js"></script>
<style lang="scss" scoped src="./TaskViewDialog.scss"></style>
<style scoped>
    >>> .task__tab_preview_card .content__wrapper {
        box-shadow: none;
    }
</style>