
<template>
    <div class="set__password">
        <v-layout row wrap justify-center align-center class="set__password__content">
            <v-flex md6 xs12 fill-height class="l__form">
                <login-component
                    title-text="Set Password"
                    button-text="SET PASSWORD"
                    :has-tools="false"
                    footer-text="Already have an account?"
                    footer-link="/login"
                    link-text="Login"
                    @button-clicked="set_password"
                    >
                    <template slot="fields">
                        <div class="l__labels">

                            <custom-field
                                className="field__icon"
                                icon="login/loginpass.png"
                                v-model.trim="password.text"
                                :valid="password.is_valid"
                                :input-type="input_type"
                                placeholder="Password"
                                @blur="validate_field('password')"
                                @focus="password.is_valid = true"
                                ></custom-field>
                  
                            <custom-field
                                className="field__icon"
                                icon="login/loginpass.png"
                                v-model.trim="repeat_password.text"
                                :valid="repeat_password.is_valid"
                                :input-type="input_type"
                                placeholder="Repeat Password"
                                @blur="validate_field('repeat_password')"
                                @focus="repeat_password.is_valid = true"
                                ></custom-field>
                
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

<script src="./SetPassword.js"></script>
<style lang="scss" scoped src="./SetPassword.scss"></style>

