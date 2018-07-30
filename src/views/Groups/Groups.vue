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
                                v-model.trim="search"
                                @keydown.esc="search = ''"
                        ></v-text-field>

                    </v-card-title>

                    <custom-table
                            :headers="headers"
                            :items="rows"
                            :loading="loading"
                            :total-items="total_items"
                            :rows-per-page-items="rows_per_page"
                    >

                        <template slot="custom-item" slot-scope="item">
                            <td class="text-xs-center">{{item.item.id}}</td>
                            <td class="text-xs-center">{{item.item.name}}</td>
                            <td class="text-xs-center">{{item.item.description}}</td>
                            <td class="actions">
                                <template v-for="action of get_actions(item.item.slug)">
                                    <v-tooltip bottom>
                                        <v-btn
                                                slot="activator"
                                                color="blue"
                                                @click="action_clicked"
                                        >
                                            <img :src="action.icon"/> &nbsp;
                                            {{ action.text }}
                                        </v-btn>
                                        <span>{{action.tooltip}}</span>
                                    </v-tooltip>
                                </template>
                            </td>
                        </template>

                    </custom-table>


                    <!--<custom-table-->
                        <!--:headers="headers"-->
                        <!--:items="rows"-->
                        <!--:total-items="total_items"-->
                        <!--:loading="loading"-->
                        <!--:rows-per-page-items="rows_per_page"-->
                        <!--:pagination.sync="pagination"-->
                        <!--item-key="id"-->
                    <!--&gt;-->

                        <!--<template slot="headers">-->
                            <!--<tr>-->
                                <!--<th-->
                                        <!--v-for="header in headers"-->
                                        <!--:key="header.id"-->
                                        <!--:width="header.width"-->
                                        <!--:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"-->
                                        <!--@click="changeSort(header.value)"-->
                                <!--&gt;-->
                                    <!--<template v-if="header.is_action">-->
                                        <!--<img src="@/assets/icons/table/menu.svg"/>-->
                                    <!--</template>-->

                                    <!--<template v-else>-->
                                        <!--<v-icon small>arrow_upward</v-icon>-->
                                        <!--{{header.text}}-->
                                    <!--</template>-->

                                <!--</th>-->
                            <!--</tr>-->
                        <!--</template>-->

                        <!--<template slot="items" slot-scope="items">-->
                        <!--<tr>-->
                            <!--<td>{{items.items.item.id}}</td>-->
                            <!--<td class="text-xs-center">{{-->
                                <!--items.items.item.name }}-->
                            <!--</td>-->
                            <!--<td class="text-xs-center">{{-->
                                <!--items.items.item.description }}-->
                            <!--</td>-->
                            <!--<td class="actions">-->
                                <!--<template-->
                                        <!--v-for="action of get_actions(items.items.item.slug)">-->
                                    <!--<v-tooltip bottom>-->
                                        <!--<v-btn-->
                                                <!--slot="activator"-->
                                                <!--color="blue"-->
                                        <!--&gt;-->
                                            <!--<img :src="action.icon"/> &nbsp;-->
                                            <!--{{ action.text }}-->
                                        <!--</v-btn>-->
                                        <!--<span>{{action.tooltip}}</span>-->
                                    <!--</v-tooltip>-->
                                <!--</template>-->
                            <!--</td>-->
                        <!--</tr>-->
                    <!--</template>-->

                    <!--</custom-table>-->
                </v-card>



            </v-flex>
        </v-layout>
    </v-container>
</template>

<script src="./Groups.js"></script>
<style lang="scss" scoped src="./Groups.scss"></style>