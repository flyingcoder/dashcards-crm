<template>
    <custom-dialog
            :title="title"
            ref="dialog"
            :open.sync="opendialog"
            button2-text="Save"
            @button1="clear_and_close"
    >
        <template slot="content">
            <v-card flat>
                <v-progress-linear
                        v-if="loading"
                        slot="progress"
                        color="blue"
                        indeterminate
                />
                <v-card-text>
                    <v-col cols="12" v-if="required_current_password">
                        <v-text-field
                                color="#667187"
                                filled
                                dense
                                prepend-inner-icon="mdi-lock"
                                hide-details="auto"
                                :disabled="disabled_all"
                                @blur="on_blur_field('current_password')"
                                :error="$v.current_password.$error"
                                :append-icon="show_current_password ? 'visibility_off' : 'visibility'"
                                label="Current Password"
                                :type="show_current_password ? 'text' : 'password'"
                                v-model.trim="current_password"
                                @click:append="show_current_password = !show_current_password"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                                color="#667187"
                                filled
                                dense
                                prepend-inner-icon="mdi-onepassword"
                                hide-details="auto"
                                :disabled="disabled_all"
                                @blur="on_blur_field('password')"
                                :error="$v.password.$error"
                                :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                label="New Password"
                                :type="show_password ? 'text' : 'password'"
                                v-model.trim="password"
                                @click:append="show_password = !show_password"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-text-field
                                color="#667187"
                                filled
                                dense
                                prepend-inner-icon="mdi-onepassword"
                                hide-details="auto"
                                :disabled="disabled_all"
                                @blur="on_blur_field('repeat_password')"
                                :error="$v.repeat_password.$error"
                                :append-icon="show_repeat_password ? 'visibility_off' : 'visibility'"
                                label="Repeat New Password"
                                :type="show_repeat_password ? 'text' : 'password'"
                                v-model.trim="repeat_password"
                                @click:append="show_repeat_password = !show_repeat_password"
                        />
                    </v-col>
                </v-card-text>
            </v-card>
        </template>

        <template slot="button2">
            <v-btn :disabled="$v.$invalid" :loading="btnloading" @click="save">
                Save
            </v-btn>
        </template>
    </custom-dialog>
</template>

<script src="./UpdatePasswordDialog.js"></script>
<style lang="scss" scoped src="./UpdatePasswordDialog.scss"></style>
<style lang="css" scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }
</style>
