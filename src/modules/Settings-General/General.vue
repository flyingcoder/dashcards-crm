<template>
    <div class="general">
        <div class="general-wrapper">
            <div class="general-inner">
                    <v-row no-gutters class="user-info">
                        <!-- <div class="loading" v-if="loading">
                            <v-progress-linear :indeterminate="true"></v-progress-linear>
                        </div> -->
                        <v-col md="8" sm="12" class="offset-md-2">
                            <v-row class="align-center">
                                <v-col md="4" cols="12" class="c-label">Dashboard Title</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="Buzzooka Dashboard" dense class="fullwidth" hide-details solo flat v-model="dashboard.title" :value="dashboard.title"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Language</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-select outlined placeholder="English" dense class="fullwidth" hide-details solo flat v-model="dashboard.lang" :value="dashboard.lang"></v-select>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Theme</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-select outlined placeholder="Default" dense class="fullwidth" hide-details solo flat v-model="dashboard.theme" :value="dashboard.theme"></v-select>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Date Format</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-select outlined placeholder="D - M - Y" dense class="fullwidth" hide-details solo flat v-model="dashboard.date" :value="dashboard.date"></v-select>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">General Page Limits</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="0" type="number" dense class="fullwidth" hide-details solo flat v-model="dashboard.general_page_limits" :value="dashboard.general_page_limits"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Messages Page Limits</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="0" type="number" dense class="fullwidth" hide-details solo flat v-model="dashboard.messages_page_limits" :value="dashboard.messages_page_limits"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Timeline Display Limits</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined type="number" placeholder="0" dense class="fullwidth" hide-details solo flat v-model="dashboard.timeline_display_limits" :value="dashboard.timeline_display_limits"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Currency</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined type="number" placeholder="USD" dense class="fullwidth" hide-details solo flat v-model="dashboard.currency" :value="dashboard.currency"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Currency Symbol</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined type="number" placeholder="$" dense class="fullwidth" hide-details solo flat v-model="dashboard.currency_symbol" :value="dashboard.currency_symbol"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Show Information Tips</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-select outlined placeholder="Yes" dense class="fullwidth" hide-details solo flat v-model="dashboard.info_tips" :value="dashboard.info_tips"></v-select>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Allow Client Registration</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-select outlined placeholder="Yes" dense class="fullwidth" hide-details solo flat v-model="dashboard.client_registration" :value="dashboard.client_registration"></v-select>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Notifications - Display <br> Duration (milliseconds)</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined type="number" placeholder="1000" dense class="fullwidth" hide-details solo flat v-model="dashboard.notif" :value="dashboard.notif"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Product Purchase Code <br> (license number)</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="AAAAAAAAAAAAAAAAAAAAA" dense class="fullwidth" hide-details solo flat v-model="dashboard.code" :value="dashboard.code"></v-text-field>
                                </v-col>
                                <v-col md="12" cols="12" class="text-right">
                                    <v-btn class="update-btn">
                                        Reset Default Settings
                                    </v-btn>
                                    <v-btn class="update-btn">
                                        Save Changes
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