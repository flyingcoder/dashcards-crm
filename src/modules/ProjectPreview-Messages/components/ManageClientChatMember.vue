<template>
    <div class="text-center" v-if="conversation">
        <v-dialog v-model="dialog" max-width="800" persistent scrollable>
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Manage Members
                    <v-spacer />
                    <v-icon @click="clear_and_close()">close</v-icon>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col sm="12" md="8">
                                <v-text-field outlined flat label="Search for people to add"
                                              required clearable prepend-inner-icon="search" v-model="search"
                                              @keydown="filter_users" @click:clear="filter_users"
                                />
                                <v-list v-if="filtered_by_search.length > 0" id="filtered_by_search_wrapper">
                                    <v-list-item v-for="item in filtered_by_search" :key="item.title"
                                                 @click="selected(item)"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url" />
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.fullname" />
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon v-show="item.is_selected" color="success">
                                                mdi-checkbox-marked-circle
                                            </v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-col sm="12" md="4">
                                <v-list id="all_selected_wrapper">
                                    <v-subheader>
                                        Selected ({{ all_selected.length }})
                                    </v-subheader>
                                    <template v-if="all_selected.length > 0">
                                        <v-list-item v-for="item in all_selected" :key="item.title">
                                            <v-list-item-avatar>
                                                <v-img :src="item.image_url" />
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-subtitle v-text="item.fullname" />
                                            </v-list-item-content>
                                            <v-list-item-icon v-if="can_be_remove(item)">
                                                <v-icon @click="selected(item)" small color="danger">
                                                    close
                                                </v-icon>
                                            </v-list-item-icon>
                                        </v-list-item>
                                    </template>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-divider />
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="clear_and_close">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" @click="update_members" :loading="btnloading">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<style scoped>
    #all_selected_wrapper {
        max-height: 340px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    #filtered_by_search_wrapper {
        max-height: 260px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>

<script>
    import request from "@/services/axios_instance";
    import _cloneDeep from 'lodash/cloneDeep'
    import _diffBy from 'lodash/differenceBy'
    import {mapGetters} from "vuex";

    export default {
        name: 'ManageClientChatMember',
        props: {
            conversation: Object
        },
        data() {
            return {
                dialog: false,
                all_users: [],
                filtered_by_search: [],
                all_selected: [],
                search: '',
                btnloading: false
            }
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            open_dialog() {
                this.dialog = true
                this.all_selected = _cloneDeep(this.conversation.users)
                this.get_project_all_members()
            },
            clear_and_close() {
                this.dialog = false
            },
            get_project_all_members() {
                request.get(`api/chat/conversations/project/${this.conversation.project_id}/members`)
                    .then(({data}) => {
                        this.all_users = _cloneDeep(data)
                        this.filtered_by_search = _diffBy(data, this.all_selected, 'id')
                    })
            },
            update_members() {
                this.btnloading = true
                let payload = {
                    conversation_id: this.conversation.id,
                    users: this.all_selected.map(value => {
                        return value.id
                    })
                };
                request.post(`api/chat/conversations/${conversation.id}/members`, payload)
                    .then(({data}) => {
                        this.clear_and_close()
                    })
                    .finally(() => (this.btnloading = false))
            },
            can_be_remove(user) {
                if (user.is_client) return false //dont delete client in client chat
                if (user.id === this.user.id) return false //cant delete self
                if (user.is_company_owner) return false
                if (this.user.is_company_owner) return true
                const causer = this.user;
                if (causer.is_admin && user.is_admin) {
                    //both admin
                    return false
                } else if (causer.is_admin && !user.is_admin) {
                    return true
                } else if (causer.is_manager && user.is_manager) {
                    //both manager
                    return false
                } else if (causer.is_manager && user.is_manager) {
                    return false
                }
                return false
            },
            select(item, value) {
                let index = this.filtered_by_search.findIndex(user => item.id === user.id)
                if (~index) {
                    this.filtered_by_search[index].is_selected = value
                }
            },
            selected(item) {
                let index = this.all_selected.findIndex(user => item.id === user.id)
                if (~index) {
                    this.select(item, false)
                    this.all_selected.splice(index, 1)
                } else {
                    this.select(item, true)
                    this.all_selected.push(item)
                }
            },

            filter_users_for_selected(items) {
                let selected_ids = this.conversation.members.map(value => {
                    return value.id
                });
                return items.map(item =>
                    Object.assign(item, {is_selected: selected_ids.indexOf(item.id) >= 0})
                )
            },
            filter_users(event) {
                setTimeout(() => {
                    if (this.search && this.search !== '') {
                        this.filtered_by_search = _cloneDeep(this.all_users).filter(item => {
                            return item.fullname.toLowerCase().includes(this.search.toLowerCase().trim())
                        })
                    } else {
                        this.filtered_by_search = _cloneDeep(this.all_users)
                    }
                }, 1)
            }
        }
    }
</script>
