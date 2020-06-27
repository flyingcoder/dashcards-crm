<template>
    <div class="forms">
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading" title="Forms" :key="componentKey" :noMoreData="noMoreData" :showSelect="false" @delete-selected="open_bulk_delete_dialog($event)">
            <template slot="header-toolbar">
                <table-header :noListButton="true" :noGridButton="true" @click="go_to_form_builder" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ item.id }}</td>
                <td class="subtitle-2">{{ item.title | ucwords }}</td>
                <td>
                    <Avatar :user="item.user"></Avatar>
                </td>
                <td>{{ item.status | ucwords }}</td>
                <td>{{ item.responses_count }}</td>
                <td>{{ item.created_at | format }}</td>
                <Actions :item="item" :permissions="$_permissions.get('forms')" :hasEdit="can_edit(item)" :hasDelete="can_delete(item)" @delete="open_delete_dialog(item)" @edit="go_to_form_edit(item)" @view="go_to_form_preview(item)">
                    <template v-slot:extra>
                        <v-tooltip left v-if="item.status === 'active'">
                            <template v-slot:activator="{ on }">
                                <v-btn dense v-on="on" icon @click="open_send_dialog(item)">
                                    <v-icon small>mdi-email-send-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Send to email</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on }">
                                <v-btn dense v-on="on" icon @click="go_to_form_responses(item)">
                                    <v-icon small>mdi-email-receive-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Responses</span>
                        </v-tooltip>
                    </template>
                </Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="go_to_form_builder">Create New Form</v-btn>
            </template>
        </VueTable>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Form" text-content="Are you sure you want to delete this form?" @delete="delete_form" />
        <SendFormDialog ref="send_dialog"></SendFormDialog>
    </div>
</template>
<script src="./Forms.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.forms');
</style>