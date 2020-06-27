<template>
    <div class="forgot__password">
        <Loader :loading="loading" />
        <div class="f__form" v-if="!loading && !sent">
            <login-component title-text="Reset your password" button-text="SEND" :has-tools="false" :has-footer="false" @button-clicked="send_email">
                <template slot="fields">
                    <div class="l__labels">
                        <p class="l__message">
                            We'll send you an email with further instructions on how to reset
                            your password.
                        </p>
                        <custom-field className="field__icon" icon="login/loginemail.png" input-type="email" placeholder="Email" v-model="email"></custom-field>
                    </div>
                </template>
            </login-component>
        </div>
        <div class="f__form" style="flex-basis: 100%;" v-if="sent">
            <div class="l__logo">
                <a href="https://dashcards.com/">
                    <img src="@/assets/logo/logo-white.png" />
                </a>
            </div>
            <h1>
                A reset instruction is sent to your email!
            </h1>
        </div>
        <div v-else class="f__gallery">
            <div class="gallery__text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    <br />
                    assumenda et rem architecto eum,
                </p>
            </div>
            <div class="gallery__images">
                <img src="@/assets/login/gallery.png" />
            </div>
        </div>
    </div>
</template>
<script src="./ForgotPassword.js"></script>
<style lang="scss" scoped src="./ForgotPassword.scss"></style>