<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12>

                <v-card>
                    <v-card-title>
                        Table

                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>

                        <v-text-field
                                placeholder="Search on the table"
                                append-icon="search"
                        ></v-text-field>

                    </v-card-title>

                    <v-data-table
                            :headers="headers"
                            :items="rows"
                            class="elevation-1"
                            :pagination.sync="pagination"
                            :total-items="total_items"
                            :loading="loading"
                            :rows-per-page-items="rows_per_page"
                    >
                        <template slot="headers" slot-scope="props">
                            <tr>
                                <th
                                    v-for="header in props.headers"
                                    :key="header.id"
                                    :width="header.width"
                                    :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                    @click="changeSort(header.value)"
                                >
                                    <template v-if="header.is_action">
                                        <img src="@/assets/icons/table/menu.svg" />
                                    </template>

                                    <template v-else>
                                        <v-icon small>arrow_upward</v-icon>
                                        {{header.text}}
                                    </template>

                                </th>
                            </tr>
                        </template>

                        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>

                        <template slot="items" slot-scope="{item}">
                            <td class="text-xs-center">{{ item.id }}</td>
                            <td class="text-xs-center">{{ item.name }}</td>
                            <td class="text-xs-center">{{ item.description }}</td>
                            <td class="actions">
                                <template v-for="action of get_actions(item.slug)">
                                    <v-tooltip bottom>
                                        <v-btn
                                            slot="activator"
                                            color="blue"
                                        >
                                            <img :src="action.icon" /> &nbsp;
                                            {{ action.text }}
                                        </v-btn>
                                        <span>{{action.tooltip}}</span>
                                    </v-tooltip>
                                </template>
                            </td>
                        </template>

                        <template slot="no-data">
                            <v-alert :value="true" color="error" icon="warning">
                                Sorry, nothing to display here :(
                            </v-alert>
                        </template>

                    </v-data-table>

                </v-card>



            </v-flex>
        </v-layout>
    </v-container>
</template>

<script src="./Groups.js"></script>
<style lang="scss" scoped src="./Groups.scss"></style>