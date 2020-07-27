<template>
    <v-layout justify-center>
        <CustomDialog
                :title="title"
                ref="dialog"
                :open.sync="open"
                button2-text="Save"
                @button1="open = false"
        >
            <template v-slot:content>
                <v-row justify-center v-show="!loading">
                    <v-col xs="12" sm="6">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('first_name')"
                                :error="$v.first_name.$error"
                                label="First Name"
                                v-model.trim="first_name"
                        />
                    </v-col>

                    <v-col xs="12" sm="6">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('last_name')"
                                :error="$v.last_name.$error"
                                label="Last Name"
                                v-model.trim="last_name"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6">
                        <v-select
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('group_name')"
                                :error="$v.group_name.$error"
                                label="Group Name"
                                v-model.trim="group_name"
                                :items="group_items"
                                item-text="name"
                                item-value="id"
                        />
                    </v-col>

                    <v-col xs="12" sm="6">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('job_title')"
                                :error="$v.job_title.$error"
                                label="Job Title"
                                v-model.trim="job_title"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('email')"
                                :error="$v.email.$error"
                                label="Email"
                                v-model.trim="email"
                        />
                    </v-col>

                    <v-col xs="12" sm="6">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('contact_number')"
                                :error="$v.contact_number.$error"
                                label="Contact Number"
                                mask="phone"
                                v-model.trim="contact_number"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" v-if="!isEditDialog">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('password')"
                                :error="$v.password.$error"
                                :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                label="Password"
                                :type="show_password ? 'text' : 'password'"
                                v-model.trim="password"
                                @click:append="show_password = !show_password"
                        />
                    </v-col>

                    <v-col xs="12" sm="6" v-if="!isEditDialog">
                        <v-text-field
                                color="#667187"
                                filled
                                hide-details="auto"
                                @blur="on_blur_field('repeat_password')"
                                :error="$v.repeat_password.$error"
                                :append-icon=" show_repeat_password ? 'visibility_off' : 'visibility' "
                                label="Repeat Password"
                                :type="show_repeat_password ? 'text' : 'password'"
                                v-model.trim="repeat_password"
                                @click:append="show_repeat_password = !show_repeat_password"
                        />
                    </v-col>
                </v-row>

                <div class="dialog-description">
                    <small>Password is at least 6 character with numbers and letters</small><br>
                    <small>All fields are required</small>
                </div>
            </template>

            <template slot="button2">
                <div class="dialog__actions">
                    <v-btn :disabled="$v.$invalid" @click="save">Save</v-btn>
                </div>
            </template>
        </CustomDialog>
    </v-layout>
</template>

<script src="./StaffDialog.js"></script>
<style lang="scss" scoped src="./StaffDialog.scss"></style>
