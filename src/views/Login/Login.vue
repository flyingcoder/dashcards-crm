<template>
  <div class="login__container">
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
                  v-model="email"
          ></custom-field>

          <custom-field
                  className="field__icon"
                  icon="login/loginpass.png"
                  input-type="password"
                  placeholder="Password"
                  v-model="password"
          ></custom-field>
        </div>
      </template>

    </login-component>
  </div>
</template>
<script src="./Login.js"></script>
<style lang="scss" scoped src="./Login.scss"></style>