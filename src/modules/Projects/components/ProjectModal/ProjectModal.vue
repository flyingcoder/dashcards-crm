<template>
    <v-row justify="center">
        <v-dialog v-model="open" scrollable max-width="700px" persistent>
            <v-card class="custom__dialog">
                <div class="dialog__header">
                    <h3 class="dialog__title">{{ title }}</h3>
                    <v-spacer />
                    <v-btn fab small depressed class="close__dialog" @click="clear_and_close">
                        <v-icon>close</v-icon>
                    </v-btn>
                </div>
                <v-card-text class="dialog__body">
                    <v-row no-gutter class="dialog__buttons">
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" max-height="300">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon"
                                                      d="M125 1c17,0 31,7 42,19 11,12 17,28 17,46 0,17 -6,33 -17,45 -1,1 -2,2 -3,3 -5,29 58,15 58,69l0 19c0,13 -6,25 -14,33 -9,9 -21,14 -34,14l-20 0 0 0 -3 0 -55 0 0 0 -20 0c-13,0 -25,-5 -34,-14 -8,-8 -14,-20 -14,-33l0 -19c0,-54 63,-40 58,-69 -1,-1 -2,-2 -3,-3 -11,-12 -17,-28 -17,-45 0,-18 6,-34 17,-46 11,-12 25,-19 42,-19zm26 232l3 0 0 0 20 0c9,0 17,-3 22,-9 6,-6 10,-14 10,-22l0 -19c0,-38 -49,-23 -57,-58 -8,4 -16,5 -24,5 -8,0 -16,-1 -24,-5 -9,36 -57,18 -57,58l0 19c0,8 4,16 10,22 5,6 13,9 22,9l20 0 0 0 55 0 0 0zm-34 -68c0,-4 4,-8 8,-8 4,0 8,4 8,8l0 50c0,5 -4,8 -8,8 -4,0 -8,-3 -8,-8l0 -50zm38 -134c-8,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -8,8 -13,21 -13,35 0,13 5,26 13,34 8,9 18,14 30,14 12,0 22,-5 30,-14 8,-8 13,-21 13,-34 0,-14 -5,-27 -13,-35z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Client *</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_client">
                                        <v-icon left>mdi-plus-circle-outline</v-icon>
                                        Add new client
                                    </v-list-item>
                                    <template v-for="item in client.items">
                                        <v-list-item v-for="company in item.client_companies" :key="company.id"
                                                     @click="clientSelected(item, company)"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="item.image_url" />
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-html="company.name" />
                                                <v-list-item-subtitle v-html="item.fullname" />
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="client.selected">
                                <v-chip close @click:close="removeClient" outlined label class="mt-1 tile">
                                    <v-avatar left>
                                        <v-img :src="client.selected.image_url" />
                                    </v-avatar>
                                    {{ client.selected.fullname }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-menu v-model="start_date_menu" ref="start_date_menu" close-on-content-click
                                    transition="scale-transition" offset-y min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon"
                                                      d="M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Start Date *</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-date-picker :max="date_pickers.end_date" v-model="date_pickers.start_date" no-title
                                               scrollable
                                />
                            </v-menu>
                            <div class="choosen" v-if="date_pickers.start_date">
                                <v-chip block outlined label class="mt-1" close
                                        @click:close="date_pickers.start_date = null"
                                >
                                    Start : {{ date_pickers.start_date | format('MMMM D, YYYY') }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-menu v-model="end_date_menu" ref="end_date_menu" close-on-content-click
                                    transition="scale-transition" offset-y min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon"
                                                      d="M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>End Date</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-date-picker :min="date_pickers.start_date" v-model="date_pickers.end_date" no-title
                                               scrollable
                                />
                            </v-menu>
                            <div class="choosen">
                                <v-chip v-if="date_pickers.end_date" block outlined label class="mt-1" close
                                        @click:close="date_pickers.end_date = null"
                                >
                                    End : {{ date_pickers.end_date | format('MMMM D, YYYY') }}
                                </v-chip>
                                <v-chip v-else block outlined label class="mt-1">
                                    End : Ongoing
                                </v-chip>
                            </div>
                        </v-col>
                        <!-- Managers -->
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition"
                                    max-height="300" offset-y
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <v-icon>mdi-account-tie</v-icon>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Managers</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_member_dialog">
                                        <v-icon left>mdi-plus-circle-outline</v-icon>
                                        Add new manager
                                    </v-list-item>
                                    <v-list-item v-for="(item, index) in non_selected_managers" :key="index"
                                                 @click="add_to_selected_managers(item)"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url" />
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.fullname" />
                                            <v-list-item-subtitle>{{ item.job_title | ucwords }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="manager.selected.length > 0">
                                <v-chip outlined class="mt-1 tile" v-for="item in manager.selected" :key="item.id" close
                                        label @click:close="remove_from_selected_managers(item)"
                                >
                                    <v-avatar left>
                                        <v-img :src="item.image_url" />
                                    </v-avatar>
                                    {{ item.fullname | truncate(14) }}
                                </v-chip>
                            </div>
                        </v-col>
                        <!-- Members -->
                        <v-col md="4" sm="12">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" max-height="300"
                                    offset-y left
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <v-icon>mdi-account-group</v-icon>
                                        </div>
                                        <div class="d__title">
                                            <span>Assign Members</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_member_dialog">
                                        <v-icon left>mdi-plus-circle-outline</v-icon>
                                        Add new member
                                    </v-list-item>
                                    <v-list-item v-for="(item, index) in non_selected_members" :key="index"
                                                 @click="add_to_selected_members(item)"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url" />
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.fullname" />
                                            <v-list-item-subtitle>{{ item.job_title | ucwords }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="members.selected.length > 0">
                                <v-chip outlined class="mt-1 tile" v-for="(item, index) in members.selected"
                                        :key="index" close label @click:close="remove_from_selected_members(item)"
                                >
                                    <v-avatar left>
                                        <v-img :src="item.image_url" />
                                    </v-avatar>
                                    {{ item.fullname | truncate(14) }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" max-height="300"
                                    offset-y left
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <v-icon>mdi-clipboard-pulse-outline</v-icon>
                                        </div>
                                        <div class="d__title">
                                            <span>Project Status</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item v-for="item in statuses" :key="item" @click="project_status = item">
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item" />
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="project_status">
                                <v-chip outlined class="mt-1 tile" label>
                                    {{ project_status }}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <TextField prepend-inner-icon="mdi-alpha-p-box-outline" dense filled hide-details
                                       :value.sync="project_title" label="Project Title *" color="#657186"
                            />
                        </v-col>
                        <v-col md="6" sm="12">
                            <TextField prepend-inner-icon="mdi-office-building" dense filled hide-details
                                       :value.sync="business_name" label="Business Name *" color="#657186"
                            />
                        </v-col>
                        <v-col md="6" sm="12">
                            <TextField prepend-inner-icon="mdi-map-marker" dense :value.sync="location" label="Location"
                                       color="#657186" filled
                            />
                        </v-col>
                        <v-col md="12" class="project__description">
                            <div class="project__description">
                                <Editor :hasFloatingTools="false" v-model="quill_editor.content"
                                        :content="quill_editor.content" placeholder="Project Description"
                                />
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="dialog__actions">
                    <v-btn @click="clear_and_close" class="dialog__actions_btn">Close</v-btn>
                    <v-btn class="dialog__actions_btn" :loading="btnloading" :disabled="disabled" @click="save">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="./ProjectModal.js"></script>
<style lang="scss" scoped src="./ProjectModal.scss"></style>
<style lang="css" scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }

    >>> .project__description .ql-container {
        min-height: 120px !important;
    }

    >>> .project__description .quillWrapper {
        background: #fff;
    }

    >>> .bordered-p {
        border: 1px solid #d1d1d6;
        text-align: center;
        border-radius: 5px;
        font-size: 14px;
        padding: 5px;
    }

    >>> .choosen .v-chip {
        width: 100%;
    }
</style>