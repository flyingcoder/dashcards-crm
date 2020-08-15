<template>
    <div class="text-center">
        <v-menu
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                :max-width="300"
                v-model="menu"
                :close-on-click="false"
        >
            <template v-slot:activator="{ on }">
                <v-btn :color="buttonColor" v-on="on" :block="isBtnBlock">
                    <v-icon left>{{ icon }}</v-icon>
                    {{ buttonLabel }}
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item class="px-1">
                        <v-combobox
                                multiple
                                v-model="selected"
                                chips
                                outlined
                                deletable-chips
                                class="tag-input"
                                prepend-inner-icon="search"
                                readonly
                        >
                            <template v-slot:selection="{ item }">
                                <v-chip :key="item.id" close @click:close="deselectUser(item)">
                                    <v-avatar class="accent white--text" left>
                                        <v-img :src="item.image_url" />
                                    </v-avatar>
                                    {{ item.fullname | str_limit(20) }}
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-list-item>

                    <v-list-item
                            :style="`max-height: ${maxHeight}px;`"
                            class="nexted px-0"
                            v-if="members.length > 0"
                    >
                        <v-list dense>
                            <v-list-item
                                    v-for="(user, index) in members"
                                    :key="index"
                                    class="hover clickable"
                                    @click="user_is_click(user, index)"
                            >
                                <v-list-item-avatar>
                                    <img :src="user.image_url" :alt="user.fullname" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ user.fullname | str_limit(20) }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ user.job_title | str_limit(20) }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-icon small right color="success" v-if="user.selected">mdi-check-circle</v-icon>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-list-item>

                    <v-list-item v-else>
                        <v-list-item-icon>
                            <v-icon>mdi-firework</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>No members yet</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="clear_and_close">Cancel</v-btn>
                    <v-btn text @click="clearAll">Clear All</v-btn>
                    <v-btn text @click="return_back_members">Save</v-btn>
                    <v-spacer />
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
    import makeRequestTo from '@/services/makeRequestTo'
    import {global_utils} from '@/global_utils/global_utils'
    import _cloneDeep from 'lodash/cloneDeep'

    export default {
        name: 'MembersPicker',
        mixins: [global_utils],
        props: {
            buttonColor: {type: String, default: 'white'},
            buttonLabel: {type: String, default: 'Members'},
            icon: {type: String, default: 'mdi-account'},
            maxHeight: {type: Number, default: 350},
            isBtnBlock: {type: Boolean, default: false},
            values: {type: Array, default: () => []},
            except: {type: Array, default: () => []}
        },
        data: () => ({
            selected: [],
            members: [],
            original: [],
            menu: false
        }),
        created() {
            setTimeout(() => {
                if (this.except.length > 0) {
                    this.getMembersExcept()
                } else {
                    this.getMembers()
                }
            }, 1)

            if (this.values.length > 0) {
                setTimeout(() => {
                    this.values.forEach(item => {
                        this.setAsSelected(item)
                    })
                })
            }

            this.$event.$on('remove-from-selected', item => {
                this.deselectUser(item)
            })
        },
        methods: {
            getMembers() {
                makeRequestTo.getAllMembers()
                    .then(({data}) => {
                    this.original = _cloneDeep(data)
                    this.members = data
                })
            },
            getMembersExcept() {
                var payload = {
                    except: this.except.map(o => {
                        return o.id
                    })
                }
                makeRequestTo.getAllMembersExcept(payload).then(({data}) => {
                    this.original = _cloneDeep(data)
                    this.members = data
                })
            },
            getMemberIndex(user) {
                return this.members.findIndex(member => user.id === member.id)
            },
            getSelectedIndex(user) {
                return this.selected.findIndex(member => user.id === member.id)
            },
            setAsSelected(user) {
                let memIdx = this.getMemberIndex(user)
                if (memIdx !== -1) this.members[memIdx].selected = true

                let selectIdx = this.getSelectedIndex(user)
                if (selectIdx === -1) this.selected.push(user)
            },
            deselectUser(user) {
                let memIdx = this.getMemberIndex(user)
                if (memIdx !== -1) this.members[memIdx].selected = false

                let selectIdx = this.getSelectedIndex(user)
                if (selectIdx !== -1) this.selected.splice(selectIdx, 1)
            },
            user_is_click(user) {
                let selectIdx = this.getSelectedIndex(user)
                if (selectIdx === -1) this.setAsSelected(user)
                else this.deselectUser(user)
            },
            clear_and_close() {
                this.clearAll()
                this.menu = false
            },
            return_back_members() {
                this.$emit('input', this.selected)
                this.menu = false
            },
            clearAll() {
                this.selected = []
                this.members = this.original
            }
        }
    }
</script>
<style scoped>
    >>> .nexted {
        overflow-y: auto;
        overflow-x: hidden;
        display: block;
    }

    >>> .hover {
        padding: 0 5px;
    }

    >>> .v-select__slot {
        max-height: 100px;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
