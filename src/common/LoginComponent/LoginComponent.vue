<template>
    <div class="login__container">

        <div class="login__card">

            <div class="l__logo">
                <img src="@/assets/logo/buzzooka-blue.png">
            </div>

            <div class="l__title">
                <p>{{ titleText }}</p>
            </div>

            <slot name="fields"></slot>

            <div class="l__errors" v-if="error.status">
                <div class="error__container">
                    <div class="e__message"><strong>{{error.message}}
                    </strong></div>
                    <div class="e__divider"></div>
                </div>
            </div>

            <div class="l__tools" v-if="hasTools">
                <div class="checkbox">
                    <input type="checkbox" id="checkbox" v-model="checkbox">
                    <label for="checkbox">{{ checkboxText }}</label>
                </div>
                <div class="forgot__password" v-if="hasForgotPassword">
                    <router-link tag="a" to="forgot-password">Forgot Your Password?</router-link>
                </div>
            </div>

            <div class="l__button">
                <button @click="$emit('button-clicked')">{{ buttonText }}</button>
            </div>

            <div class="l__signup" v-if="hasFooter">
                <label>{{ footerText }} <router-link tag="a" :to="footerLink">{{ linkText }}</router-link></label>
            </div>

        </div>

    </div>
</template>
<script src="./LoginComponent.js"></script>
<style lang="scss" scoped src="./LoginComponent.scss"></style>