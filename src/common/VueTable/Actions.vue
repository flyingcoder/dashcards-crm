<template>
    <td class="table-actions" align="center">
        <v-tooltip top v-if="hasEdit" v-show="can_edit">
            <template v-slot:activator="{ on }">
                <v-btn dense v-on="on" icon @click="handle_action('edit')">
                    <v-icon>{{ editIcon }}</v-icon>
                </v-btn>
            </template>
            <span>Edit</span>
        </v-tooltip>
        <v-tooltip top v-if="hasView" v-show="can_view">
            <template v-slot:activator="{ on }">
                <v-btn dense v-on="on" icon @click="handle_action('view')">
                    <v-icon>{{ viewIcon }}</v-icon>
                </v-btn>
            </template>
            <span>View</span>
        </v-tooltip>
        <v-tooltip top v-if="hasDelete" v-show="can_delete">
            <template v-slot:activator="{ on }">
                <v-btn dense v-on="on" icon @click="handle_action('delete')">
                    <v-icon>{{ deleteIcon }}</v-icon>
                </v-btn>
            </template>
            <span>Delete</span>
        </v-tooltip>
        <slot name="extra" />
    </td>
</template>
<script>
    export default {
        props: {
            item: {type: Object, default: null},
            permissions: {
                type: Object,
                default: () => ({
                    delete: true,
                    update: true,
                    create: true,
                    view: true
                })
            },
            editIcon: {type: String, default: 'mdi-circle-edit-outline'},
            viewIcon: {type: String, default: 'mdi-eye-circle-outline'},
            deleteIcon: {type: String, default: 'mdi-delete-circle-outline'},
            hasDelete: {type: Boolean, default: true},
            hasEdit: {type: Boolean, default: true},
            hasView: {type: Boolean, default: true}
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