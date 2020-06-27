<template>
    <div class="general">
        <div class="general-wrapper">
            <div class="general-inner">
                <v-row no-gutters class="user-info">
                    <!-- <div class="loading" v-if="loading">
                            <v-progress-linear :indeterminate="true"></v-progress-linear>
                        </div> -->
                    <v-col md="8" sm="12" class="offset-md-2" v-if="current" :key="componentKey">
                        <v-row class="align-center">
                            <v-col md="4" cols="12" class="c-label">Dashboard Title</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field outlined placeholder="Buzzooka Dashboard" dense class="fullwidth" hide-details solo flat v-model="current.title" :value="current.title"></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Language</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="languages" item-value="value" outlined placeholder="English" dense class="fullwidth" hide-details solo flat v-model="current.lang" :value="current.lang"></v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Theme</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="themes" item-value="value" outlined placeholder="Default" dense class="fullwidth" hide-details solo flat v-model="current.theme" :value="current.theme"></v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Date Format</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="date_formats" item-value="value" outlined placeholder="D - M - Y" dense class="fullwidth" hide-details solo flat v-model="current.date_format" :value="current.date_format"></v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">General Page Limits</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field :rules="limit_rules" outlined placeholder="0" type="number" dense class="fullwidth" hide-details="auto" flat v-model="current.general_page_limits" :value="current.general_page_limits"></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Messages Page Limits</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field :rules="limit_rules" outlined placeholder="0" type="number" dense class="fullwidth" hide-details="auto" flat v-model="current.messages_page_limits" :value="current.messages_page_limits"></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Timeline Display Limits</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field :rules="limit_rules" outlined type="number" placeholder="0" dense class="fullwidth" hide-details="auto" flat v-model="current.timeline_display_limits" :value="current.timeline_display_limits"></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Currency</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="currencies" return-object item-value="currency_code" outlined placeholder="Currency" dense class="fullwidth" hide-details solo flat v-model="current.currency.currency_code" :value="current.currency.currency_code">
                                    <template v-slot:item="{ item }">
                                        <v-col>{{item.text}} ({{item.symbol}})</v-col>
                                        <v-col md="2">{{item.currency_code}}</v-col>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Show Information Tips</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="['Yes', 'No']" outlined placeholder="Yes" dense class="fullwidth" hide-details solo flat v-model="current.info_tips" :value="current.info_tips"></v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Allow Client Registration</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-select :items="['Yes', 'No']" outlined placeholder="Yes" dense class="fullwidth" hide-details solo flat v-model="current.client_registration" :value="current.client_registration"></v-select>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Notifications - Display <br> Duration (seconds)</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field :rules="notif_rules" outlined type="number" placeholder="1000" dense class="fullwidth" hide-details="auto" flat v-model="current.notif_duration" :value="current.notif_duration"></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12" class="c-label">Product Purchase Key <br> (license key)</v-col>
                            <v-col md="8" cols="12" class="c-field">
                                <v-text-field outlined placeholder="XXXX-XXXX-XXXX-XXXX-XX" dense class="fullwidth" hide-details solo flat v-model="current.license_key" :value="current.license_key"></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12" class="text-right">
                                <!-- <v-btn class="update-btn" :disabled="update_btn_loading || reset_btn_loading" :loading="reset_btn_loading" @click="reset_settings">
                                    <v-icon left small>mdi-database-refresh</v-icon>Reset Default Settings
                                </v-btn> -->
                                <v-btn class="update-btn" :disabled="update_btn_loading || reset_btn_loading" :loading="update_btn_loading" @click="update_settings">
                                    <v-icon left small>mdi-content-save</v-icon> Save Changes
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script src="./General.js"></script>
<style lang="scss" src="./General.scss"></style>