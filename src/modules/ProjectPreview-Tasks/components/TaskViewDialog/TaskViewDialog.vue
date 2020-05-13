<template>
    <v-layout justify-center v-if="task">
        <v-dialog scrollable max-width="800" v-model="dialog" transition="dialog-bottom-transition">
            <v-card tile>
                <v-toolbar dense dark color="#3b589e">
                    <v-toolbar-title>Task Preview : {{ task.title | ucwords }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn icon dark @click="close_dialog">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text style="height: 600px;" class="pa-0">
                    <preview-card :id="task.project_id" :active-id="task.id" :key="componentKey" @dropdown-action="handle_dropdown_action"></preview-card>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script src="./TaskViewDialog.js"></script>
<style lang="scss" scoped src="./TaskViewDialog.scss"></style>
<style scoped>
>>>.task__tab_preview_card .content__wrapper {
    box-shadow: none;
}
</style>