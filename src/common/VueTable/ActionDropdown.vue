<template>
    <td class="table-actions" align="center">
        <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn :outlined="outlined" icon v-bind="attrs" v-on="on">
                    <v-icon>{{mainIcon}}</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-if="hasEdit" v-show="can_edit" @click="handle_action('edit')">
                    <v-list-item-title>
                    <v-icon left>{{ editIcon }}</v-icon> Edit
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="hasDelete" v-show="can_delete" @click="handle_action('delete')">
                    <v-list-item-title>
                    <v-icon left>{{ deleteIcon }}</v-icon> Delete
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="hasView" v-show="can_view" @click="handle_action('view')">
                    <v-list-item-title>
                    <v-icon left>{{ viewIcon }}</v-icon> View
                    </v-list-item-title>
                </v-list-item>
                <slot name="extra"></slot>
            </v-list>
        </v-menu>
    </td>
</template>
<script>
export default {
    props: {
        item: { type: Object, default: null },
        permissions: {
            type: Object,
            default: () => ({
                delete: true,
                update: true,
                create: true,
                view: true
            })
        },
        mainIcon: { type: String, default: 'mdi-table-settings' },
        editIcon: { type: String, default: 'mdi-content-save-edit' },
        viewIcon: { type: String, default: 'mdi-file-search' },
        deleteIcon: { type: String, default: 'mdi-delete-alert' },
        hasDelete: { type: Boolean, default: true },
        hasEdit: { type: Boolean, default: true },
        hasView: { type: Boolean, default: true },
        outlined: { type: Boolean, default: false }
    },
    computed: {
        logged_user() {
            return this.$store.getters.user
        }
    },
    methods: {
        handle_action(event) {
            if (this.item) {
                this.$emit(event, this.item)
            }
        },
        can_delete() {
            if (this.logged_user.is_admin) {
                return true
            }
            return this.permissions && this.permissions.delete
        },
        can_edit() {
            if (this.logged_user.is_admin) {
                return true
            }
            return this.permissions && this.permissions.update
        },
        can_view() {
            if (this.logged_user.is_admin) {
                return true
            }
            return this.permissions && this.permissions.view
        }
    }
}
</script>
<style lang="scss">
@import '~@/sass/_variables';

.table-actions .theme--light.v-icon {
    color: $btnGray;
}

.table-actions .theme--light.v-icon:hover {
    color: $tableDarkText;
}
</style>