<template>
    <div class="cloud">
        <div class="cloud-wrapper">
            <div class="cloud-content">
                <div class="cloud-header">
                    <div class="page-title">Apps &amp; Integrations</div>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </div>
                <div class="cloud-body">
                    <v-row>
                        <v-col md="4" cols="12">
                            <v-card class="integration gdrive">
                                <v-card-title><img  :src="require('@/assets/logo/gdrive.svg')" alt="Google Drive"></v-card-title>
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
                                <v-card-actions class="app-actions">
                                    <v-btn block text outlined @click="handleGooglebtn" class="mb-4">
                                        {{ googleBtnLabel }}
                                    </v-btn>
                                    <v-btn block text @click="showGoogleDesc = !showGoogleDesc">
                                        <v-icon>{{ showGoogleDesc ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
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
                        <v-col md="4" cols="12">
                            <v-card color="integration stripe">
                                <v-card-title><img :src="require('@/assets/logo/stripe-logo-white-stripe-icon.png')" alt="Stripe"></v-card-title>
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
                                <v-card-actions class="app-actions">
                                    <v-btn dark text block v-if="!stripeUser" outlined :href="stripeConnect" class="mb-4">
                                        Connect with Stripe
                                    </v-btn>
                                    <v-btn dark block text v-else outlined @click="handleStripeDisconnectAccount" class="mb-4">
                                        Disconnect from Stripe
                                    </v-btn>
                                    <v-btn dark block text @click="showStripeDesc = !showStripeDesc">
                                        <v-icon>{{ showStripeDesc ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
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
                        <v-col md="4" cols="12">
                            <v-card class="integration dropbox">
                                <v-card-title><img :src="require('@/assets/logo/dropbox-logo-white-80.png')" alt="Dropbox"></v-card-title>
                                <v-card-actions class="app-actions">
                                    <v-btn text block outlined disabled dark class="mb-4">
                                        Coming soon!
                                    </v-btn>
                                    <v-btn dark block text disabled>
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card class="integration gmeet">
                                <v-card-title><img :src="require('@/assets/logo/google-meet-seeklogo.com.svg')" alt="Google Meet"></v-card-title>
                                <v-card-actions class="app-actions">
                                    <v-btn text block outlined disabled dark class="mb-4">
                                        Coming soon!
                                    </v-btn>
                                    <v-btn dark block text disabled>
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card class="integration zoom">
                                <v-card-title><img :src="require('@/assets/logo/zoom-white-logo.png')" alt="Dropbox"></v-card-title>
                                <v-card-actions class="app-actions">
                                    <v-btn text block outlined disabled dark class="mb-4">
                                        Coming soon!
                                    </v-btn>
                                    <v-btn dark block text disabled>
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card class="integration seoprofiler">
                                <v-card-title><img :src="require('@/assets/logo/seoprofiler-logo-black-shine.png')" alt="Dropbox"></v-card-title>
                                <v-card-actions class="app-actions">
                                    <v-btn text block outlined disabled class="mb-4">
                                        Coming soon!
                                    </v-btn>
                                    <v-btn block text disabled>
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card class="integration skype">
                                <v-card-title><img :src="require('@/assets/logo/skype-white-logo.png')" alt="Dropbox"></v-card-title>
                                <v-card-actions class="app-actions">
                                    <v-btn text block outlined disabled dark class="mb-4">
                                        Coming soon!
                                    </v-btn>
                                    <v-btn dark block text disabled>
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </div> <!-- .cloud-content -->
        </div> <!-- .cloud-wrapper -->
    </div> <!-- .cloud -->
</template>
<script src="./Connect.js"></script>
<style lang="scss" scoped src="./Connect.scss">
</style>