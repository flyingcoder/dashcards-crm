<template>
    <custom-dialog :max-width="900" :title="dialogTitle" ref="dialog" :open.sync="dialog" @button1="cancel"
                   @click.close="cancel"
    >
        <template #content>
            <v-card flat style="min-height: 300px;">
                <v-row no-gutters>
                    <v-col md="6" class="pa-2"><label>Select from below:</label></v-col>
                    <v-col md="6" class="pa-2"><label>Selected Milestones:</label></v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col v-if="templates.length > 0">
                        <v-treeview v-model="selected_template" item-children="milestones" item-text="name"
                                    :items="templates" selection-type="leaf" selectable return-object open-all
                                    expand-icon="mdi-chevron-down" on-icon="mdi-checkbox-marked"
                                    off-icon="mdi-checkbox-blank-outline"
                                    indeterminate-icon="mdi-checkbox-intermediate"
                        />
                    </v-col>
                    <v-col v-else class="pa-6">
                        <Empty v-if="selected_template.length === 0" icon="mdi-bookmark-off-outline"
                               headline="No milestone available"
                        />
                    </v-col>
                    <v-divider vertical />
                    <v-col class="pa-6" md="6">
                        <Empty v-if="selected_template.length === 0" icon="mdi-bookmark-remove-outline"
                               headline="No milestone selected"
                        />
                        <template v-else>
                            <div v-for="node in selected_template" :key="node.id">
                                <v-icon left>mdi-checkbox-marked-outline</v-icon>
                                {{ node.name }}
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