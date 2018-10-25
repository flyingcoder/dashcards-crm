<template>
    <v-layout column wrap justify-center align-center class="login__card">
        <v-flex xs12 class="login__cardIn">
        <div class="l__logo">
            <img src="@/assets/logo/logo-white.png">
        </div>

        <div class="l__title"> {{ titleText }} </div>

        <div class="l__divider"></div>

        <slot name="fields"></slot>

        <!--TODO the old logic for errors should refactor-->
        <!--<div class="l__errors" v-if="error.status">-->
            <!--<div class="error__container">-->
                <!--<div class="e__message"><strong>{{error.message}}-->
                <!--</strong></div>-->
                <!--<div class="e__divider"></div>-->
            <!--</div>-->
        <!--</div>-->

        <v-layout row wrap justify-space-between class="l__tools" v-if="hasTools">
            <v-flex class="checkbox">
                <input type="checkbox" id="checkbox" v-model="checkbox">
                <label for="checkbox">{{ checkboxText }}</label>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex class="forgot__password" v-if="hasForgotPassword">
                <router-link tag="a" to="forgot-password">Forgot Your Password?</router-link>
            </v-flex>          
        </v-layout>

        <div class="l__tools" v-if="hasTools">
        </div>

        <div class="l__button">
            <button @click="$emit('button-clicked')">{{ buttonText }}</button>
        </div>

        <div class="l__signup" v-if="hasFooter">
            <label>{{ footerText }} <router-link tag="a" :to="footerLink">{{ linkText }}</router-link></label>
        </div>
        </v-flex>
    </v-layout>
    
</template>
<script src="./LoginComponent.js"></script>
<style lang="scss" scoped src="./LoginComponent.scss"></style>