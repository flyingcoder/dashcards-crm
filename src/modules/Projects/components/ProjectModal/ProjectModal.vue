<template>
    <v-row justify="center">
        <v-dialog v-model="open" scrollable max-width="700px" persistent>
            <v-card class="custom__dialog">
                <v-card-title class="dialog__header">
                    <span class="dialog__title">{{ title }}</span>
                    <v-spacer></v-spacer>
                    <v-btn fab small depressed class="close__dialog" @click="clear_and_close">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text style="height: 500px;">
                    <v-row no-gutter class="dialog__buttons">
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" bottom max-height="300">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon" d="M125 1c17,0 31,7 42,19 11,12 17,28 17,46 0,17 -6,33 -17,45 -1,1 -2,2 -3,3 -5,29 58,15 58,69l0 19c0,13 -6,25 -14,33 -9,9 -21,14 -34,14l-20 0 0 0 -3 0 -55 0 0 0 -20 0c-13,0 -25,-5 -34,-14 -8,-8 -14,-20 -14,-33l0 -19c0,-54 63,-40 58,-69 -1,-1 -2,-2 -3,-3 -11,-12 -17,-28 -17,-45 0,-18 6,-34 17,-46 11,-12 25,-19 42,-19zm26 232l3 0 0 0 20 0c9,0 17,-3 22,-9 6,-6 10,-14 10,-22l0 -19c0,-38 -49,-23 -57,-58 -8,4 -16,5 -24,5 -8,0 -16,-1 -24,-5 -9,36 -57,18 -57,58l0 19c0,8 4,16 10,22 5,6 13,9 22,9l20 0 0 0 55 0 0 0zm-34 -68c0,-4 4,-8 8,-8 4,0 8,4 8,8l0 50c0,5 -4,8 -8,8 -4,0 -8,-3 -8,-8l0 -50zm38 -134c-8,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -8,8 -13,21 -13,35 0,13 5,26 13,34 8,9 18,14 30,14 12,0 22,-5 30,-14 8,-8 13,-21 13,-34 0,-14 -5,-27 -13,-35z" />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Client</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_client">
                                        <v-icon left>add</v-icon> Add new client
                                    </v-list-item>
                                    <v-list-item v-for="(item, index) in client.items" :key="index" @click="client.selected = item">
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.fullname"></v-list-item-title>
                                            <v-list-item-subtitle v-html="item.company_name"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="client.selected">
                                <v-chip close @click:close="client.selected = null" outlined label class="mt-1 tile">
                                    <v-avatar left>
                                        <v-img :src="client.selected.image_url"></v-img>
                                    </v-avatar>
                                    {{ client.selected.fullname }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" bottom max-height="300">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon" d="M57 58l151 0 0 -7c0,-4 -2,-7 -4,-10 -3,-3 -7,-4 -11,-4l-165 0c-4,0 -8,1 -10,4 -3,3 -5,6 -5,10l0 113c0,4 2,8 5,10 2,3 6,4 10,4l1 0 0 -92c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm164 0l1 0c8,0 15,3 20,8 5,5 8,12 8,20l0 113c0,7 -3,14 -8,20 -5,5 -12,8 -20,8l-165 0c-8,0 -15,-3 -20,-8 -5,-6 -8,-13 -8,-20l0 -7 -1 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -113c0,-7 3,-14 8,-20 5,-5 12,-8 20,-8l165 0c8,0 15,3 20,8 5,6 8,13 8,20l0 7zm1 14l-165 0c-4,0 -8,1 -11,4 -2,2 -4,6 -4,10l0 113c0,4 2,7 4,10 3,3 7,4 11,4l165 0c4,0 8,-1 10,-4 3,-3 5,-6 5,-10l0 -113c0,-4 -2,-8 -5,-10 -2,-3 -6,-4 -10,-4z M125 67c3,0 5,1 7,3l0 0c1,2 2,4 2,7l0 5c6,1 10,3 15,6l4 -4c1,-2 4,-3 6,-3 3,0 5,1 7,3 2,2 3,4 3,7 0,2 -1,5 -3,6l-4 4c3,4 5,9 6,15l5 0c3,0 5,1 7,2l0 0c2,2 3,4 3,7 0,3 -1,5 -3,7 -2,1 -4,2 -7,2l-4 0c-2,6 -4,11 -7,15l4 4c2,1 3,4 3,6 0,3 -1,5 -3,7 -2,2 -4,3 -7,3 -2,0 -5,-1 -6,-3l-4 -3c-4,3 -9,5 -15,6l0 4c0,3 -1,5 -2,7 -2,2 -4,3 -7,3 -3,0 -5,-1 -7,-3l0 0c-1,-2 -2,-4 -2,-7l0 -4c-6,-1 -11,-3 -15,-6l-4 3c-1,2 -4,3 -6,3 -3,0 -5,-1 -7,-3 -2,-2 -3,-4 -3,-7 0,-2 1,-5 3,-6l4 -4c-3,-4 -5,-9 -7,-15l-4 0c-3,0 -5,-1 -7,-2l0 0c-2,-2 -3,-4 -3,-7 0,-3 1,-5 3,-7l0 0c2,-1 4,-2 7,-2l5 0c1,-6 3,-11 6,-15l-4 -4c-2,-1 -3,-4 -3,-6 0,-3 1,-5 3,-7 2,-2 4,-3 7,-3 2,0 5,1 6,3l4 4c5,-3 9,-5 15,-6l0 -5c0,-3 1,-5 2,-7l0 0c2,-2 4,-3 7,-3zm1 14l0 -4c0,-1 0,-1 0,-1l0 0c0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1l0 0c0,0 0,0 0,1l0 4c0,0 1,0 1,0 0,0 1,0 1,0zm29 12c1,0 1,1 1,1 1,0 1,1 1,1l3 -3c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1l-3 3zm14 31c0,0 0,1 0,1 0,1 0,1 0,1l4 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1l0 0c0,0 0,0 -1,0l-4 0zm-11 32c-1,0 -1,0 -2,1 0,0 0,0 0,1l2 2c0,1 1,1 1,1 1,0 1,0 1,-1 1,0 1,0 1,-1 0,0 0,-1 -1,-1l-2 -2zm-32 14c0,0 -1,0 -1,0 0,0 -1,0 -1,0l0 3c0,1 0,1 0,1l0 0c0,1 1,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 -3zm-32 -12c0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-2 2c-1,0 -1,1 -1,1 0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,0 1,-1l2 -2zm-13 -32c0,0 0,0 0,-1 0,0 0,-1 0,-1l-4 0c-1,0 -1,0 -1,0l0 0c-1,0 -1,1 -1,1 0,0 0,1 1,1l0 0c0,0 0,0 1,0l4 0zm12 -31c0,0 0,-1 1,-1 0,0 0,-1 1,-1l-3 -3c0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 0,0 0,1 1,1l3 3zm32 11c5,0 10,2 14,6 3,3 5,8 5,13 0,6 -2,11 -5,14l0 0c-4,4 -9,6 -14,6 -5,0 -10,-2 -14,-6l0 0c-3,-3 -5,-8 -5,-14 0,-5 2,-10 5,-13l0 0c4,-4 9,-6 14,-6zm4 15c-1,-1 -2,-1 -4,-1 -2,0 -3,0 -4,1l0 0c-1,1 -2,3 -2,4 0,2 1,4 2,5 1,1 2,1 4,1 2,0 3,0 4,-1 1,-1 2,-3 2,-5 0,-1 -1,-3 -2,-4zm18 -17c-6,-6 -13,-9 -22,-9 -9,0 -16,3 -22,9 -5,5 -9,13 -9,21 0,9 4,17 9,22 6,6 13,9 22,9 9,0 16,-3 22,-9 5,-5 9,-13 9,-22 0,-8 -4,-16 -9,-21z" />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Service</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_service">
                                        <v-icon left>add</v-icon> Add new service
                                    </v-list-item>
                                    <v-list-item v-for="(item, index) in service.items" :key="index" @click="service.selected = item">
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.name"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="service.selected">
                                <v-chip close @click:close="service.selected = null" outlined label class="mt-1 tile">
                                    {{ service.selected.name | truncate(18) }}
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-btn class="attachment d__btn" disabled block>
                                <v-icon> attach_file</v-icon>
                                <div class="d__title">Attach</div>
                            </v-btn>
                        </v-col>
                        <v-col md="4" sm="6">
                            <v-menu v-model="rangemenu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon" d="M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z" />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Date</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-date-picker v-model="dates" no-title range>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="rangemenu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="setDatesAndCloseMenu(dates)">Apply</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <div class="choosen" v-if="
                  date_pickers.start_date !== '' || date_pickers.end_date !== ''
                ">
                                <v-chip block outlined label class="mt-1">
                                    <v-icon></v-icon>
                                    Start : {{ date_pickers.start_date | format('MMMM D, YYYY') }}
                                </v-chip>
                                <v-chip block outlined label class="mt-1">
                                    <v-icon></v-icon>
                                    End : {{ date_pickers.end_date | format('MMMM D, YYYY') }}
                                </v-chip>
                            </div>
                        </v-col>
                        <!-- Managers -->
                        <v-col md="4" sm="6">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" bottom max-height="300" offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon" d="M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z" />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Select Managers</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_member_dialog">
                                        <v-icon left>add</v-icon> Add new manager
                                    </v-list-item>
                                    <v-list-item v-for="(item, index) in manager.items" :key="index" @click="add_to_selected_managers(item)">
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.fullname"></v-list-item-title>
                                            <v-list-item-subtitle>{{item.job_title | ucwords}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="manager.selected.length > 0">
                                <v-chip outlined class="mt-1 tile" v-for="item in manager.selected" close label @click:close="remove_from_selected_managers(item)">
                                    <v-avatar left>
                                        <v-img :src="item.image_url"></v-img>
                                    </v-avatar>
                                    {{ item.fullname | truncate(14) }}
                                </v-chip>
                            </div>
                        </v-col>
                        <!-- Members -->
                        <v-col md="4" sm="12">
                            <v-menu bottom close-on-content-click transition="slide-y-transition" max-height="300" offset-y left>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" class="d__btn" block>
                                        <div class="d__icon">
                                            <svg viewBox="0 0 250 250">
                                                <path class="icon" d="M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z" />
                                            </svg>
                                        </div>
                                        <div class="d__title">
                                            <span>Assign Members</span>
                                        </div>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item @click="open_add_new_member_dialog">
                                        <v-icon left>add</v-icon> Add new member
                                    </v-list-item>
                                    <v-list-item v-for="item in members.items" :key="item.user_id" @click="add_to_selected_members(item)">
                                        <v-list-item-avatar>
                                            <v-img :src="item.image_url"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.fullname"></v-list-item-title>
                                            <v-list-item-subtitle>{{item.job_title | ucwords}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <div class="choosen" v-if="members.selected.length > 0">
                                <v-chip outlined class="mt-1 tile" v-for="item in members.selected" close label @click:close="remove_from_selected_members(item)">
                                    <v-avatar left>
                                        <v-img :src="item.image_url"></v-img>
                                    </v-avatar>
                                    {{ item.fullname | truncate(14) }}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <TextField :value.sync="project_title" label="Project Title" color="#657186" filled></TextField>
                        </v-col>
                        <v-col md="12" class="project__description">
                            <div class="project__description">
                                <!-- <rich-editor placeholder="Add Project Description" ref="editor" v-model="quill_editor.content"></rich-editor> -->
                                <Editor :hasFloatingTools="false" v-model="quill_editor.content" @onchange="quill_editor.content = $event" :content="quill_editor.content" placeholder="Project Description" ></Editor>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="dialog__actions">
                    <v-btn @click="clear_and_close" class="dialog__actions_btn">Close</v-btn>
                    <v-btn class="dialog__actions_btn" :loading="btnloading" :disabled="disabled" @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="./ProjectModal.js"></script>
<style lang="scss" scoped src="./ProjectModal.scss"></style>
<style lang="css" scoped>
>>>.theme--light.v-text-field--filled>.v-input__control>.v-input__slot {
    background-color: #fff;
}

>>>.project__description .ql-container {
    min-height: 120px !important;
}

>>>.project__description .quillWrapper {
    background: #fff;
}

>>>.bordered-p {
    border: 1px solid #d1d1d6;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
}

>>>.choosen .v-chip {
    width: 100%;
}
</style>