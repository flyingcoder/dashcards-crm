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
            card-height="90%"
            @checkbox-changed="set_checkbox"
            @button-clicked="register"
    >

      <template slot="fields">
        <div class="l__labels">

          <custom-field
                  className="signup__field"
                  v-model.trim="company_name.text"
                  :valid="company_name.is_valid"
                  input-type="text"
                  placeholder="Company Name"
                  @blur="validate_field('company_name')"
                  @focus="company_name.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
                  v-model.trim="company_email.text"
                  :valid="company_email.is_valid"
                  input-type="email"
                  placeholder="Company Email"
                  @blur="validate_field('company_email')"
                  @focus="company_email.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
                  v-model.trim="first_name.text"
                  :valid="first_name.is_valid"
                  input-type="text"
                  placeholder="First Name"
                  @blur="validate_field('first_name')"
                  @focus="first_name.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
                  v-model.trim="last_name.text"
                  :valid="last_name.is_valid"
                  input-type="text"
                  placeholder="Last Name"
                  @blur="validate_field('last_name')"
                  @focus="last_name.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
                  v-model.trim="email.text"
                  :valid="email.is_valid"
                  input-type="email"
                  placeholder="Email"
                  @blur="validate_field('email')"
                  @focus="email.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
                  v-model.trim="password.text"
                  :valid="password.is_valid"
                  :input-type="input_type"
                  placeholder="Password"
                  @blur="validate_field('password')"
                  @focus="password.is_valid = true"
          ></custom-field>

          <custom-field
                  className="signup__field"
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

  </div>
</template>
<script src="./Signup.js"></script>
<style lang="scss" scoped src="./Signup.scss"></style>