<template>
  <div class="support">
    <div class="support-wrapper">
      <v-row no-gutters>
        <v-col md="12" class="py-5 support-header">
          <h2 class="headline text-center">
            Get help with the <strong>Advanced Support</strong>
          </h2>
          <v-text-field
            solo
            flat
            :height="50"
            placeholder="Search Something"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="support-body">
          <h2 class="text-center help"> Help &amp; Support </h2>
          <v-row>
            <v-col md="4" cols="12" class="text-center s-features">
              <img src="">
              <h3>Knowledge Base</h3>
              <p>Read our getting started guides &amp; learn about more advance features.</p>
              <v-spacer></v-spacer>
              <v-btn text>Browse Articles</v-btn>
            </v-col>
            <v-col md="4" cols="12" class="text-center s-features">
              <img src="">
              <h3>Community Forums</h3>
              <p>Help us build a community arround Buzzooka get help from other Buzzooka users. We actively participate on the forums.</p>
              <v-spacer></v-spacer>
              <v-btn text>Browse Articles</v-btn>
            </v-col>
            <v-col md="4" cols="12" class="text-center s-features">
              <img src="">
              <h3>Contact Us</h3>
              <p>Contact our support directly via email, phone, voice chat &amp; phone. We are waiting for your feedback.</p>
              <v-spacer></v-spacer>
              <v-btn text>Browse Articles</v-btn>
            </v-col>
          </v-row>
          <v-row class="align-center support-cta">
            <v-col md="8" cols="12">
              <h3>Build with Buzzooka</h3>
              <p>Documentation and resources for developers building applications with Buzzooka API</p>
              <div class="actions">
                <v-btn>Register an application</v-btn>
                <v-btn text>Read the API docs</v-btn>
              </div>
            </v-col>
            <v-col md="4" cols="12">
              <img src="" alt="">
            </v-col>
          </v-row>
          <div class="support-icons">
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>E-Mail Support</h5>
            </div>
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>Voice Chat</h5>
            </div>
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>Phone</h5>
            </div>
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>Remote Chat</h5>
            </div>
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>Forum</h5>
            </div>
            <div class="s-icon">
              <v-icon></v-icon>
              <h5>K-Base</h5>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script src="./Support.js"></script>
<style lang="scss" scoped src="./Support.scss"></style>
