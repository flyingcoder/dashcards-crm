<template>
    <custom-dialog :title="dialogTitle" ref="dialog" :open.sync="open" button2-text="Save" @button1="cancel"
                   @button2="save" :max-width="600" :mainBtnDisabled="!readyForSubmit"
    >
        <template slot="content">
            <v-row no-gutters class="clients__dialog">
                <v-col xs="12" sm="12" v-if="!isEditDialog">
                    <v-text-field prepend-inner-icon="mdi-office-building" class="dialog__textfield d-field"
                                  label="Business Name *" v-model.trim="company_name" dense filled hide-details
                                  color="#657186"
                    />
                </v-col>
                <v-col xs="12" sm="12" class="py-0 my-0">
                    <p class="owner">Client's Details</p>
                </v-col>
                <v-col v-if="!isEditDialog" xs="12" :sm="6" :md="6">
                    <v-select prepend-inner-icon="mdi-account-circle-outline" class="dialog__textfield d-field"
                              label="Client" v-model="is_new_client" dense filled hide-details
                              color="#657186" :items="is_new_client_items"
                    />
                </v-col>
                <v-col v-if="!isEditDialog" xs="12" :sm="6" :md="6">
                    <v-select prepend-inner-icon="mdi-account-circle-outline" class="dialog__textfield d-field"
                              :label="exists_client_label" v-model="existing_client" dense filled hide-details
                              color="#657186" :items="clients_list" :disabled="is_new_client" item-text="fullname"
                              return-object
                    />
                </v-col>
                <v-row no-gutters v-if="is_new_client">
                    <v-col xs="12" sm="6" md="6">
                        <v-text-field prepend-inner-icon="mdi-account-settings-outline"
                                      class="dialog__textfield d-field"
                                      label="First Name *" v-model.trim="first_name" dense filled hide-details
                                      color="#657186"
                        />
                    </v-col>
                    <v-col xs="12" sm="6" md="6">
                        <v-text-field prepend-inner-icon="mdi-account-settings-outline"
                                      class="dialog__textfield d-field"
                                      label="Last Name *" v-model.trim="last_name" dense filled hide-details
                                      color="#657186"
                        />
                    </v-col>
                    <v-col xs="12" sm="12">
                        <vue-phone-number-input class="dialog__textfield d-field" v-model="contact_number" size="lg"
                                                clearable show-code-on-list
                                                :default-country-code="defaultCountryCode" @update="showUpdate"
                                                @phone-number-blur="telephone_on_blur"
                        />
                    </v-col>
                    <v-col xs="12" sm="6">
                        <v-text-field prepend-inner-icon="mdi-email-receive" class="dialog__email d-field"
                                      label="Contact Email *" v-model.trim="email" dense filled hide-details
                                      color="#657186"
                        />
                    </v-col>
                    <v-col xs="12" sm="6">
                        <v-select prepend-inner-icon="mdi-account-question-outline" class="dialog__selectfield d-field"
                                  label="Status *" v-model.trim="status" :items="status_items" dense filled hide-details
                                  color="#657186"
                        />
                    </v-col>
                    <v-col xs="12" sm="6" v-if="!isEditDialog">
                        <v-text-field prepend-inner-icon="mdi-account-lock-outline" class="dialog__password d-field"
                                      :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                      :type="show_password ? 'text' : 'password'" label="Password *"
                                      v-model.trim="password"
                                      @click:append="show_password = !show_password"
                                      dense filled hide-details color="#657186"
                        />
                    </v-col>
                    <v-col xs="12" sm="6" v-if="!isEditDialog">
                        <v-text-field prepend-inner-icon="mdi-account-key-outline" class="dialog__password d-field"
                                      :append-icon=" show_repeat_password ? 'visibility_off' : 'visibility'"
                                      :type="show_repeat_password ? 'text' : 'password'" label="Repeat Password *"
                                      v-model.trim="repeat_password"
                                      @click:append="show_repeat_password = !show_repeat_password"
                                      dense filled hide-details color="#657186"
                        />
                    </v-col>
                </v-row>
            </v-row>
        </template>
    </custom-dialog>
</template>
<script src="./ClientsDialog.js"></script>
<style lang="scss" scoped src="./ClientsDialog.scss"></style>