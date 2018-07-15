<template>
  <v-container class="login" fluid fill-height>
    <v-layout row wrap align-center justify-center >
      <v-flex xs5 sm8 md4>
        <v-card elevation-12 align-center color="white">
          <v-card-text align-center > 
            <div class="logo">
              <img src="./../../assets/logo/buzzooka-blue.png" class="img-responsive">
            </div>
            <div class="title">
              <h1> Log In </h1> 
            </div>
            <v-form class="buzz-form" ref="form" v-model="valid" lazy-validation>
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    class="buzz-input"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-icon="email"
                    required
                  ></v-text-field> 
                </v-flex>

                <v-flex xs12 sm12 md12>  
                  <v-text-field
                    class="buzz-input"
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    prepend-icon="lock"
                    required
                  ></v-text-field> 
                </v-flex>

                <v-flex xs6 sm6 md6>  
                  <v-checkbox
                    v-model="checkbox"
                    label="Remember Me"
                  ></v-checkbox>   
                </v-flex>

                <v-flex xs6 sm6 md6>   
                   <v-btn
                    @click="forgot"
                    >
                    Forgot Password
                    </v-btn>   
                </v-flex>  

                <v-flex xs12 sm12 md12>   
                  <v-btn
                    class="submit"
                    :disabled="!valid"
                    @click="submit"
                    >
                    Log In
                  </v-btn>
                </v-flex>  

                <v-flex xs12 sm12 md12>  
                  <span>Not a member yet?</span> 
                  <v-btn
                    @click="signup"
                    >
                    Signup
                  </v-btn>
                </v-flex> 
              </v-layout>  
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./Login.js"></script>
<style lang="scss" scoped src="./Login.scss"></style>