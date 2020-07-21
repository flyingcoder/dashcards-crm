<template>
    <div class="passbox-card">
        <div class="passbox-card-content">
            <dash-card
                    title="Pass Box"
                    :view-more-link="true"
                    :dashboard="dashboard"
                    @close="$emit('close')"
                    :hasExpand="false"
            >
                <div class="content-wrapper fill-height" slot="content">
                    <div class="passbox fill-height" v-show="true">
                        <div class="passbox-body">
                            <img src="~@/assets/logo/passbox-logo.png" alt="Passbox">
                            <v-text-field
                                    class="dialog__password d-field"
                                    :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                    :type="show_password ? 'text' : 'password'"
                                    label="Password"
                                    v-model.trim="password"
                                    @click:append="show_password = !show_password"
                                    single-line
                                    outlined
                                    hide-details
                                    color="#657186"
                            />
                            <div class="actions">
                                <a href="#" style="float: left">Sign Up</a>
                                <a href="#" style="float: right">Forgot Password</a>
                            </div>
                        </div>
                    </div>

                    <div class="passbox2" v-show="false">
                        <div class="passbox-header">
                            <img src="~@/assets/logo/passbox-logo.png" alt="Passbox">
                        </div>
                        <div class="passbox-body">
                            <v-expansion-panels v-show="true">
                                <v-expansion-panel v-for="(item, i) in 6" :key="i">
                                    <v-expansion-panel-header>
                                        <v-avatar max-width="50" class="mr-5">
                                            <img src="@/assets/temp/user2.png" alt="John">
                                        </v-avatar>
                                        <div class="user-detail">
                                            <h2>Brian Howard</h2>
                                            <span>Last used 3 days ago</span>
                                        </div>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <div class="accounts">
                                            <div
                                                    class="account"
                                                    v-for="(account, i) in accounts"
                                                    :key="i"
                                            >
                                                <v-avatar max-width="50" class="mr-5">
                                                    <img
                                                            src="@/assets/temp/no-image.jpg"
                                                            :alt="account.name"
                                                    >
                                                </v-avatar>
                                                <div class="acc-title">
                                                    <h2>{{ account.name }}</h2>
                                                    <span>{{ account.email }}</span>
                                                </div>
                                                <div class="acc-actions">
                                                    <v-icon>edit</v-icon>
                                                    <v-icon>delete</v-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <div class="add-form" v-show="false">
                                <v-text-field
                                        class="dialog__password d-field"
                                        label="URL"
                                        single-line
                                        outlined
                                        hide-details
                                        dense
                                        color="#657186"
                                />
                                <v-text-field
                                        class="dialog__password d-field"
                                        label="Name"
                                        single-line
                                        outlined
                                        hide-details
                                        dense
                                        color="#657186"
                                />
                                <v-select
                                        :items="items"
                                        class="d-field"
                                        label="Category"
                                        hide-details
                                        dense
                                        outlined
                                />
                                <v-text-field
                                        class="dialog__password d-field"
                                        label="Username"
                                        single-line
                                        outlined
                                        dense
                                        hide-details
                                        color="#657186"
                                />
                                <v-text-field
                                        class="dialog__password d-field"
                                        :append-icon="show_password ? 'visibility_off' : 'visibility'"
                                        :type="show_password ? 'text' : 'password'"
                                        label="Password"
                                        v-model.trim="password"
                                        @click:append="show_password = !show_password"
                                        single-line
                                        outlined
                                        dense
                                        hide-details
                                        color="#657186"
                                />
                                <v-textarea
                                        class="dialog__password d-field"
                                        label="Notes"
                                        rows="3"
                                        outlined
                                        dense
                                        hide-details
                                        color="#657186"
                                />
                            </div>
                            <div class="form-actions">
                                <v-btn>
                                    Cancel
                                </v-btn>
                                <v-btn>
                                    Save
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </dash-card>
        </div>
    </div>
</template>

<script src="./PassboxCard.js"></script>
<style lang="scss" src="./PassboxCard.scss"></style>
