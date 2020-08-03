<template>
    <div class="members-dropdown">
        <v-autocomplete
                :value="members"
                :items="items"
                :search-input.sync="search"
                :loading="isLoading"
                item-value="id"
                item-text="first_name"
                prepend-inner-icon="search"
                no-filter
                chips
                :multiple="multiple"
                clearable
                hide-details
                hide-selected
                color="#657186"
                label="Assign member(s)"
                v-bind="$attrs"
                filled
                clear-icon="mdi-close-circle-outline"
                :append-outer-icon="showOuterIcon ? 'mdi-plus-circle-outline' : ''"
                @click:append-outer="open_add_new_member"
        >
            <template v-slot:selection="data">
                <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="remove_chip(data.index)"
                >
                    <v-avatar left>
                        <v-img :src="data.item.image_url"/>
                    </v-avatar>
                    {{ data.item.name }}
                </v-chip>
            </template>
            <template v-slot:item="data">
                <v-list-item :key="data.item.id" @click="add_to_selected(data.item)">
                    <v-list-item-avatar>
                        <v-img :src="data.item.image_url"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="data.item.fullname"/>
                        <v-list-item-subtitle
                                v-html="data.item.job_title"
                        />
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon v-if="!is_item_active(data.item.id)" color="grey lighten-1">
                            check_circle_outline
                        </v-icon>
                        <v-icon v-if="is_item_active(data.item.id)" color="success">
                            check_circle
                        </v-icon>
                    </v-list-item-action>
                </v-list-item>
            </template>
        </v-autocomplete>
    </div>
</template>

<script src="./MembersDropdown.js"></script>
<style lang="scss" scoped src="./MembersDropdown.scss"></style>

<style scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }
</style>
