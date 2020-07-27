<template>
    <v-layout wrap justify-center align-center class="login__card">
        <v-flex xs8 class="login__cardIn">
            <div class="l__logo">
                <a href="https://dashcards.com/">
                    <img src="@/assets/logo/logo-white.png">
                </a>
            </div>
            <div class="l__title">{{ titleText }}</div>
            <div class="l__divider" />
            <slot name="fields" />
            <v-layout wrap justify-space-between class="l__tools" v-if="hasTools">
                <v-flex class="checkbox">
                    <input type="checkbox" id="checkbox" v-model="checkbox">
                    <label for="checkbox">{{ checkboxText }}</label>
                </v-flex>
                <v-spacer />
                <v-flex class="forgot__password" v-if="hasForgotPassword">
                    <router-link tag="a" to="forgot-password">Forgot Your Password?</router-link>
                </v-flex>
            </v-layout>
            <div class="l__tools" v-if="hasTools" />
            <div class="l__button">
                <button @click="$emit('button-clicked')">{{ buttonText }}</button>
            </div>
            <div class="l__signup" v-if="hasFooter && hasSignup">
                <label>
                    {{ footerText }}
                    <router-link tag="a" :to="footerLink">{{ linkText }}</router-link>
                </label>
            </div>
        </v-flex>
    </v-layout>
</template>
<script src="./LoginComponent.js"></script>
<style lang="scss" scoped src="./LoginComponent.scss"></style>