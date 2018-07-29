<template>
    <div class="forgot__password">
        <login-component
                title-text="Reset your password"
                button-text="SEND"
                :has-tools="false"
                :has-footer="false"
                @button-clicked="send_email"
        >
            <template slot="fields">
                <div class="l__labels">

                    <p class="l__message">We'll send you an email with further
                        instructions on how to reset your
                        password.</p>

                    <custom-field
                            className="field__icon"
                            icon="login/loginemail.png"
                            input-type="email"
                            placeholder="Email"
                            v-model="email"
                    ></custom-field>
                </div>
            </template>
        </login-component>
    </div>
</template>
<script src="./ForgotPassword.js"></script>
<style lang="scss" scoped src="./ForgotPassword.scss"></style>