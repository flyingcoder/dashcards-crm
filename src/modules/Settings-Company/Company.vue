<template>
    <div class="company-profile">
        <div class="profile mt-1">
            <div class="profile-content">
                    <div class="background">
                         <!-- <v-icon class="camera" v-if="can_update">camera_alt</v-icon> -->
                        <!-- <v-menu bottom left v-if="can_update">
                            <template v-slot:activator="{ on }">
                                <v-btn dark icon v-on="on" class="settings">
                                    <v-icon large>settings</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-if="can_update" @click="open_edit_dialog(user)">
                                    <v-list-item-title>
                                        <v-icon left>mdi-account</v-icon> Edit Profile
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item v-if="can_update" @click="open_update_password_dialog(user)">
                                    <v-list-item-title>
                                        <v-icon left>lock</v-icon> Update Password
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list> -->
                        </v-menu> 
                    </div>
                    <div class="profile-logo" v-if="company">
                        <div class="user-img" @click="image_clicked">
                            <img v-if="true" :src="company_logo" width="100%" height="auto"/>
                            <v-icon v-else x-large>mdi-camera</v-icon>
                            <v-icon class="user-img-hover" x-large>mdi-camera</v-icon>
                        </div>
                    </div>
                    <v-row no-gutters class="user-info" v-if="company">
                        <div class="loading" v-if="loading">
                            <v-progress-linear :indeterminate="true"></v-progress-linear>
                        </div>
                        <v-col v-else md="8" sm="12" class="offset-md-2">
                            <v-row>
                                <v-col md="4" cols="12" class="c-label">Company Name <span class="required">*</span></v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="Name" dense class="fullwidth" hide-details solo flat v-model="company.name" :value="company.name"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Slogan</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="Slogan" dense class="fullwidth" hide-details solo flat v-model="company.short_description" :value="company.short_description"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Long Description</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-textarea :rows="2" outlined placeholder="Description" dense class="fullwidth" hide-details solo flat v-model="company.long_description" :value="company.long_description"></v-textarea>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Website</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="Website" dense class="fullwidth" hide-details solo flat v-model="company.domain" :value="company.domain"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Company Address</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined placeholder="Address" dense class="fullwidth" hide-details solo flat v-model="company.address" :value="company.address"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Contact Number</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <vue-phone-number-input class="fullwidth" v-model="contact_number" size="md" clearable :default-country-code="defaultCountryCode" @phone-number-blur="telephone_on_blur" @update="showUpdate"></vue-phone-number-input>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label">Company Email</v-col>
                                <v-col md="8" cols="12" class="c-field">
                                    <v-text-field outlined type="email" placeholder="Email" dense class="fullwidth" hide-details solo flat v-model="company.email" :value="company.email"></v-text-field>
                                </v-col>
                                <v-col md="4" cols="12" class="c-label"><span class="required">*</span> Required Fields</v-col>
                                <v-col md="8" cols="12">
                                    <v-btn @click="update_company" :loading="btnloading" class="float-right update-btn">
                                        <v-icon left small>mdi-content-save</v-icon> Save Changes
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
            </div>
        </div>
        <AddPicture :pictureDialog="open_add_picture" @company-logo-change="company_logo = $event"></AddPicture>
    </div>
</template>
<script src="./Company.js"></script>
<style lang="scss" src="./Company.scss"></style>