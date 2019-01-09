<template>
	<div class="message__tab">

        <v-layout row wrap class="message__content">

            <v-flex sm3 xs12 class="message__sidebar">

                <div class="sidebar__options">
                    <v-btn dark color="#3e5aa3" class="write__btn">
                        Write A Message
                    </v-btn>

                    <v-btn flat class="inbox__btn option">
                        Inbox <span class="counter">250</span>
                    </v-btn>
                    <v-btn flat class="sent__btn option">
                        Sent Mail <span class="counter">100</span>
                    </v-btn>
                    <v-btn flat class="draft__btn option">
                        Draft <span class="counter">50</span>
                    </v-btn>
                    <v-btn flat class="bin__btn option">
                        Bin <span class="counter">250</span>
                    </v-btn>
                </div>
            </v-flex>

            <v-flex sm9 xs12 class="message__table">
                <custom-table
                        :headers="headers"
                        :items="items"
                        :loading="loading"
                        :sort="sort"
                        :has-checkbox="true"
                        hide-actions
                        @items-selected="selected_ids = $event"
                        @sorted="changeSort"
                        class="custom__table"
                >
                
                    <template slot="toolbar">
                        <v-toolbar flat class="table__toolbar">
                            
                            <v-toolbar-title class="table__toolbar-title">Inbox</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-toolbar-items class="message__option">
                                
                                <v-menu class="sort__dropdown"
                                    transition="slide-y-transition"
                                    :nudge-left="110"
                                    :nudge-bottom="2"
                                    flat
                                    offset-y>
                                    <v-btn fab flat small class="sort__option" slot="activator">
                                        <v-icon>more_horiz</v-icon>
                                    </v-btn>
                                    <v-list class="sort__list" flat>
                                        <v-list-tile class="sort__list_tile" v-for="(sortLists, index) in sortList" :key="index">
                                            <v-list-tile-title class="sort__list_item">{{ sortLists.title }}</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            
                            </v-toolbar-items>
                        </v-toolbar>
                    </template>

                </custom-table>
            </v-flex>

            <v-flex sm3 xs12>

                <div class="sidebar__chatlist">
                    <div class="you user">
                        <div class="user__img" >
                            <v-img :src="require('@/assets/temp/user.png')" />
                            <span class="status online"></span>
                        </div>
                        <span class="user__name">Mohammad</span>
                        <v-spacer></v-spacer>
                        <v-btn flat class="add__chat"><v-icon>add</v-icon></v-btn>
                    </div>

                    <div class="friend__list">
                        <div class="friend user" 
                            v-for="friend in friends"
                            :key="friend.id"
                        >

                            <div class="user__img" >
                                <v-img :src="require('@/assets/temp/user.png')" />
                                <span class="status" :class="friend.status"></span>
                            </div>

                            <span class="user__name">{{friend.name}}</span>

                        </div>
                    </div>

                    <div class="view__more">
                        <v-btn flat normal class="view__more_btn">VIEW MORE</v-btn>
                    </div>
                </div>

            </v-flex>

        </v-layout>

		

	</div>
</template>

<script src="./MessagesTab.js">
</script>
<style lang="scss" scoped src="./MessagesTab.scss">
</style>
<style scoped src="./MessagesTab.css">
</style>
