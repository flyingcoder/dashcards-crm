<template>
    <div class="b-header">        
        <img class="logo" :src="company_logo" >
        <div class="h__pagetitle" v-if="$route.name !== 'pricing'">
            <v-breadcrumbs class="b-breadcrumbs" :items="paths" >
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item
                            :class="{'cursor-pointer' : item.route }"
                            @click="go_to(item)"
                            :disabled="item.disabled"
                    >
                        {{ item.text | truncate(10) }}
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </div>
        <div class="h__search" v-if="user">
            <header-search />
        </div>
        <div class="h__menu">
            <header-menu />
        </div>
    </div>
</template>
<script src="./DashboardHeader.js"></script>
<style lang="scss" src="./DashboardHeader.scss"></style>