<template>
  <div class="login">

      For email use: ross.buzzooka@gmail.com <br>
      For password use: gDQsa7nUyadmin

    <login-component
            title-text="Log in"
            button-text="LOG IN"
            :has-forgot-password="true"
            checkbox-text="Remember Me"
            footer-text="Not a member yet?"
            footer-link="/signup"
            link-text="Sign up"
            @checkbox-changed="set_checkbox"
            @button-clicked="login"
    >

      <template slot="fields">
        <div class="l__labels">
          <custom-field
                  className="field__icon"
                  icon="login/loginemail.png"
                  input-type="email"
                  placeholder="Email"
                  v-model.trim="email"
                  :valid="is_email_valid"
                  @blur="handle_validation('email')"
                  @focus="is_email_valid = true"
          ></custom-field>

          <custom-field
                  className="field__icon"
                  icon="login/loginpass.png"
                  input-type="password"
                  placeholder="Password"
                  v-model.trim="password"
                  :valid="is_password_valid"
                  @blur="handle_validation('password')"
                  @focus="is_password_valid = true"
          ></custom-field>
        </div>
      </template>

    </login-component>
  </div>
</template>
<script src="./Login.js"></script>
<style lang="scss" scoped src="./Login.scss"></style>