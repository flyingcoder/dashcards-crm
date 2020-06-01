<template>
    <div class="cloud">
        <table-header :paths="paths" :noButton="true" />
        <v-card class="mx-auto">
            <v-toolbar flat class="px-3">
                <v-toolbar-title>Integrations</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col md="4">
                        <v-card>
                            <v-img :height="200" contain src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/google_drive-512.png" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                <v-card-title>Google Drive Integration</v-card-title>
                            </v-img>
                            <v-list dense class="ma-0 pa-0" v-if="googleUser">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-img :src="googleUser.image"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title v-html="googleUser.name"></v-list-item-title>
                                        <v-list-item-subtitle v-html="googleUser.email"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-row no-gutters>
                                    <v-col grow>
                                        <v-btn block text large outlined @click="handleGooglebtn">
                                            {{ googleBtnLabel }}
                                        </v-btn>
                                    </v-col>
                                    <v-btn class="mx-2 mt-1" icon @click="showGoogleDesc = !showGoogleDesc">
                                        <v-icon>{{ showGoogleDesc ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="showGoogleDesc">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        Create and collaborate with others. Share documents and files through Google Drive integration.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                    <v-col md="4">
                        <v-card>
                            <v-img :height="200" cover :src="require('@/assets/services/Stripe logo - slate_sm.png')" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                <v-card-title>Stripe Connect</v-card-title>
                            </v-img>
                            <v-list dense class="ma-0 pa-0" v-if="stripeUser">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-icon large>mdi-account-cash</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title v-html="stripeUser.email"></v-list-item-title>
                                        <v-list-item-subtitle>Account Type: {{stripeUser.type | ucwords }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-row no-gutters>
                                    <v-col grow>
                                        <v-btn text block v-if="!stripeUser" large outlined :href="stripeConnect">
                                            Connect with Stripe
                                        </v-btn>
                                        <v-btn block text v-else large outlined @click="handleStripeDisconnectAccount">
                                            Disconnect from Stripe
                                        </v-btn>
                                    </v-col>
                                    <v-btn class="mx-2 mt-1" icon @click="showStripeDesc = !showStripeDesc">
                                        <v-icon>{{ showStripeDesc ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="showStripeDesc">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        Pay and accept payments through Stripe Connect
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                    <v-col md="4">
                        <v-card>
                            <v-img :height="200" contain src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Dropbox_Logo_02.svg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                <v-card-title>Dropbox Integration</v-card-title>
                            </v-img>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text block large outlined disabled>
                                    <v-icon color="success" left>mdi-dropbox</v-icon> Coming soon!
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script src="./Cloud.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.cloud');

.cloud {
    @include customTableRow;
}
</style>