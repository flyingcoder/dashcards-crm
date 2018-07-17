<template>
    <div class="signup">

        <login-component
                title-text="Sign up"
                button-text="Register"
                :has-forgot-password="false"
                checkbox-text="Show Password"
                footer-text="Already have an account?"
                footer-link="/login"
                link-text="Login"
                @checkbox-changed="set_checkbox"
                @button-clicked="signup"
        >

            <template slot="fields">
                <div class="l__labels">
                    <custom-field className="signup__field" v-model="full_name" input-type="text" placeholder="Fullname"></custom-field>
                    <custom-field className="signup__field" v-model="company" input-type="text" placeholder="Company"></custom-field>
                    <custom-field className="signup__field" v-model="email" input-type="email" placeholder="Email"></custom-field>
                    <custom-field className="signup__field" v-model="password" :input-type="input_type" placeholder="Password"></custom-field>
                </div>
            </template>

        </login-component>

    </div>
</template>
<script src="./Signup.js"></script>
<style lang="scss" scoped src="./Signup.scss"></style>