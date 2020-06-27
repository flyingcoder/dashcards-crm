<template>
    <div class="login">
        <v-layout wrap justify-center align-center class="login__content">
            <v-flex md6 xs12 fill-height class="l__form">
                <login-component title-text="Log in" button-text="LOG IN" :has-forgot-password="true" checkbox-text="Remember Me" footer-text="Not a member yet?" footer-link="/signup" link-text="Sign up" @checkbox-changed="set_checkbox" @button-clicked="login">
                    <template slot="fields">
                        <div class="l__labels">
                            <custom-field className="field__icon" icon="login/loginemail.png" input-type="email" placeholder="Email" v-model.trim="email" @keyup.enter="login"></custom-field>
                            <custom-field className="field__icon" icon="login/loginpass.png" input-type="password" placeholder="Password" v-model.trim="password" @keyup.enter="login"></custom-field>
                        </div>
                    </template>
                </login-component>
            </v-flex>
            <v-flex md6 xs12 fill-height class="l__gallery">
                <div class="gallery__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium <br />
                        assumenda et rem architecto eum,
                    </p>
                </div>
                <div class="gallery__images">
                    <img src="@/assets/login/gallery.png" />
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>
<script src="./Login.js"></script>
<style lang="scss" scoped src="./Login.scss"></style>