<template>
    <div class="signup">
        <div class="s__form">
            <login-component v-if="is_signup_enabled" title-text="Sign up" button-text="Register" :has-forgot-password="false" checkbox-text="Show Password" footer-text="Already have an account?" footer-link="/login" link-text="Login" card-height="90%" @checkbox-changed="set_checkbox" @button-clicked="register">
                <template slot="fields" >
                    <div class="l__labels">
                        <custom-field className="signup__field text-capitalize" v-model.trim="company_name.text" :valid="company_name.is_valid" input-type="text" placeholder="Company Name" @blur="validate_field('company_name')" @focus="company_name.is_valid = true" @keydown.enter="register"></custom-field>
                        <custom-field className="signup__field text-capitalize" v-model.trim="first_name.text" :valid="first_name.is_valid" input-type="text" placeholder="First Name" @blur="validate_field('first_name')" @focus="first_name.is_valid = true" @keydown.enter="register"></custom-field>
                        <custom-field className="signup__field text-capitalize" v-model.trim="last_name.text" :valid="last_name.is_valid" input-type="text" placeholder="Last Name" @blur="validate_field('last_name')" @focus="last_name.is_valid = true" @keydown.enter="register"></custom-field>
                        <custom-field className="signup__field" v-model.trim="email.text" :valid="email.is_valid" input-type="email" placeholder="Email" @blur="validate_field('email')" @focus="email.is_valid = true" @keydown.enter="register"></custom-field>
                        <custom-field className="signup__field" v-model.trim="password.text" :valid="password.is_valid" :input-type="input_type" placeholder="Password" @blur="validate_field('password')" @focus="password.is_valid = true" @keydown.enter="register"></custom-field>
                        <custom-field className="signup__field" v-model.trim="repeat_password.text" :valid="repeat_password.is_valid" :input-type="input_type" placeholder="Repeat Password" @blur="validate_field('repeat_password')" @focus="repeat_password.is_valid = true" @keydown.enter="register"></custom-field>
                    </div>
                </template>
            </login-component>
            <Empty style="background: transparent;" icon="mdi-account-multiple-remove-outline" headline="Signup is temporarily unavailable!">
              <template v-slot:extra>
                <v-btn large class="text--white" @click="$router.push({ name: 'login' })">Login</v-btn>
              </template>
            </Empty>
        </div>
        <div class="s__info">
            <div class="s__top">
                <div class="info__join">Join Over</div>
                <div class="info__count">56, 590</div>
                <div class="info__parag">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, non minus officia.
                </div>
            </div>
            <div class="s__bottom">
                <div class="info__text">
                    <label> What <span> Others </span> Say About Us</label>
                </div>
                <div class="info__testimony">
                    <div class="t__container">
                        <div class="t__image"><img src="@/assets/temp/user.png" /></div>
                        <div class="t__name">John Doe</div>
                        <div class="t__position">Marketing</div>
                        <div class="t__text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reprehenderit, non minus officia. Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Reprehenderit, non minus officia
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Signup.js"></script>
<style lang="scss" scoped src="./Signup.scss"></style>