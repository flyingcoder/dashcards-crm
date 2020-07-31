<template>
    <custom-dialog :title="title" :max-width="800" ref="dialog" :open.sync="open">
        <template slot="content">
            <v-progress-linear v-if="loading" slot="progress" color="blue" indeterminate/>
            <v-row no-gutters v-show="!loading">
                <v-col xs="12" sm="6">
                    <v-text-field prepend-inner-icon="mdi-account-settings-outline"
                                  class="dialog__textfield d-field"
                                  color="#667187" filled dense hide-details @blur="on_blur_field('first_name')"
                                  :error="$v.first_name.$error" label="First Name *" v-model.trim="first_name"
                    />
                </v-col>
                <v-col xs="12" sm="6">
                    <v-text-field prepend-inner-icon="mdi-account-settings-outline"
                                  class="dialog__textfield d-field"
                                  color="#667187" filled dense hide-details @blur="on_blur_field('last_name')"
                                  :error="$v.last_name.$error" label="Last Name *" v-model.trim="last_name"
                    />
                </v-col>
                <v-col xs="12" sm="6">
                    <v-select prepend-inner-icon="mdi-account-group-outline" class="dialog__selectfield d-field"
                              color="#667187" filled dense hide-details @blur="on_blur_field('group_name')"
                              :error="$v.group_name.$error" label="Group Name *" v-model.trim="group_name"
                              :items="group_items" item-text="name" item-value="id"
                              append-outer-icon="mdi-plus-circle-outline"
                              @click:append-outer="$emit('add-new-group')"
                    />
                </v-col>
                <v-col xs="12" sm="6">
                    <v-text-field prepend-inner-icon="mdi-account-tie-outline" class="dialog__textfield d-field"
                                  color="#667187" filled dense hide-details @blur="on_blur_field('job_title')"
                                  :error="$v.job_title.$error" label="Job Title *" v-model.trim="job_title"
                    />
                </v-col>
                <v-col xs="12" sm="12" :md="!isEditDialog ? 6 : 12">
                    <v-text-field prepend-inner-icon="mdi-email-receive" class="dialog__email d-field"
                                  color="#667187"
                                  filled dense hide-details @blur="on_blur_field('email')" :error="$v.email.$error"
                                  label="Email *" v-model.trim="email"
                    />
                </v-col>
                <v-col xs="12" sm="12" md="6" v-if="!isEditDialog">
                    <v-select prepend-inner-icon="mdi-account-key-outline" class="dialog__selectfield d-field"
                              color="#667187" filled dense hide-details label="Password *"
                              :items="show_create_password_label"
                              v-model="show_create_password"
                    />
                </v-col>
                <v-col xs="12" sm="6" v-if="!isEditDialog && show_create_password">
                    <v-text-field prepend-inner-icon="mdi-account-lock-outline" class="dialog__password d-field"
                                  color="#667187" dense filled hide-details @blur="on_blur_field('password')"
                                  :error="$v.password.$error"
                                  :append-icon="show_password ? 'visibility_off' : 'visibility'" label="Password *"
                                  :type="show_password ? 'text' : 'password'" v-model.trim="password"
                                  @click:append="show_password = !show_password"
                    />
                </v-col>
                <v-col xs="12" sm="6" v-if="!isEditDialog && show_create_password">
                    <v-text-field prepend-inner-icon="mdi-account-key-outline" class="dialog__password d-field"
                                  color="#667187" dense filled hide-details @blur="on_blur_field('repeat_password')"
                                  :error="$v.repeat_password.$error" :append-icon="
              show_repeat_password ? 'visibility_off' : 'visibility'
            " label="Repeat Password *" :type="show_repeat_password ? 'text' : 'password'"
                                  v-model.trim="repeat_password"
                                  @click:append="show_repeat_password = !show_repeat_password"
                    />
                </v-col>
            </v-row>
            <div class="dialog-description">
                <small>* Above fields are required</small><br />
                <small v-if="show_create_password">Password must at least 6 character with numbers and letters</small>
            </div>
            <v-row no-gutters v-show="!loading">
                <v-col xs="12" sm="12">
                    <vue-phone-number-input class="dialog__textfield d-field" v-model="contact_number" size="lg"
                                            clearable :default-country-code="defaultCountryCode"
                                            @update="showUpdate"
                    />
                </v-col>
                <v-col xs="12" sm="6">
                    <v-text-field prepend-inner-icon="mdi-map-marker" class="dialog__textfield d-field"
                                  color="#667187"
                                  filled dense hide-details label="Location" v-model.trim="address"
                    />
                </v-col>
                <v-col xs="12" sm="6">
                    <v-text-field prepend-inner-icon="mdi-account-clock-outline" class="dialog__textfield d-field"
                                  color="#667187" filled dense hide-details label="Rate / Hour" suffix="$"
                                  @blur="on_blur_field('rate')" :error="$v.rate.$error" v-model.trim="rate"
                    />
                </v-col>
            </v-row>
        </template>
        <template slot="button1">
            <v-btn :disabled="btnloading" @click="cancel">Cancel</v-btn>
        </template>
        <template slot="button2">
            <v-btn :disabled="disabled_btn" :loading="btnloading" @click="save">Save</v-btn>
        </template>
    </custom-dialog>
</template>
<script src="./TeamsDialog.js"></script>
<style lang="scss" src="./TeamsDialog.scss"></style>