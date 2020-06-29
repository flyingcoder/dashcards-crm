<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="dialog" @button1="cancel" @click.close="cancel">
        <template #content>
            <v-card flat>
                <v-row no-gutters>
                    <v-col md="6" class="pa-2"><label>Select from below:</label></v-col>
                    <v-col md="6" class="pa-2"><label>Selected Milestones:</label></v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col>
                        <v-treeview v-model="selected_template" item-children="milestones" item-text="name" :items="templates" selection-type="leaf" selectable return-object open-all expand-icon="mdi-chevron-down" on-icon="mdi-checkbox-marked" off-icon="mdi-checkbox-blank-outline" indeterminate-icon="mdi-checkbox-intermediate"></v-treeview>
                    </v-col md="6">
                    <v-divider vertical></v-divider>
                    <v-col class="pa-6" md="6">
                        <Empty v-if="selected_template.length === 0" headline="No milestone selected"></Empty>
                        <template v-else>
                            <div v-for="node in selected_template" :key="node.id">
                                <v-icon left>mdi-checkbox-marked-outline</v-icon> {{ node.name }}
                            </div>
                        </template>
                    </v-col>
                </v-row>
            </v-card>
        </template>
        <template v-slot:button2>
            <v-btn @click="save" :disabled="is_disabled" :loading="btnloading">Copy Milestone</v-btn>
        </template>
    </custom-dialog>
</template>
<script src="./SelectTemplateDialog.js"></script>
<style lang="scss" scoped src="./SelectTemplateDialog.scss"></style>