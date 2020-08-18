<template>
    <v-row justify="center">
        <custom-dialog
                :title="dialogTitle"
                ref="dialog"
                :open.sync="open"
                button2-text="Save"
                @button1="clear_and_close"
                @button2="save"
                :mainBtnDisabled="disabled"
        >
            <template v-slot:content>
                <v-card flat min-height="200">
                    <v-card-text>
                    <v-row class="justify-center align-center">
                        <v-col md="7" xs="12">
                            <v-text-field label="Event Type" filled hide-details class="text__field"
                                          v-model="name"
                            />
                        </v-col>
                        <v-col md="3" xs="12">
                            <v-overflow-btn class="v-overflow-btn" :items="dropdown_color" hide-details segmented filled
                                            v-model="theme"
                            >
                                <template v-slot:selection="{ item }">
                                    <v-avatar style="width: 100%;" tile :color="item" class="fullwidth">
                                        <span />
                                    </v-avatar>
                                </template>
                                <template v-slot:item="{ item }">
                                    <v-avatar :size="50" tile :color="item" class="mb-1 fullwidth"><span /></v-avatar>
                                </template>
                            </v-overflow-btn>
                        </v-col>
                        <v-col md="2" xs="12">
                            <v-btn fab :loading="btnloading2" tile icon class="action__btn add-btn"
                                   @click="add"
                            >
                                <v-icon>mdi-plus-circle-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-for="(type, index) in to_be_added" :key="index" class="justify-center align-center">
                        <v-col md="7" xs="12">
                            <v-text-field class="text__field" filled hide-details :value="type.name"
                                          readonly label="Event Type" disabled
                            />
                        </v-col>
                        <v-col md="3" xs="12">
                            <v-overflow-btn class="my-2 v-overflow-btn" :items="dropdown_color" hide-details segmented
                                            filled flat disabled :value="type.color"
                            >
                                <template v-slot:selection="{ item }">
                                    <v-avatar :size="50" tile :color="item"><span /></v-avatar>
                                </template>
                            </v-overflow-btn>
                        </v-col>
                        <v-col md="2" xs="12">
                            <v-btn fab :loading="btnloading2" tile icon
                                   class="action__btn delete-btn"
                                   @click="remove(index)"
                            >
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
            </template>
        </custom-dialog>
    </v-row>
</template>
<script src="./EventTypeDialog.js"></script>
<style lang="scss" scoped src="./EventTypeDialog.scss"></style>
<style lang="css" scoped>
    >>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
        background-color: #fff;
    }

    /*
    >>>.v-overflow-btn {
        height: 50px;
        position: relative;
    }

    >>>.v-overflow-btn .v-input__slot .v-label {
        margin-left: 15px;
        line-height: 50px;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 2px;
        left: -25px;
        border-radius: 5px;
    }
    >>>.text__field {
        height: 50px;
        width: 100%;
    }
    */

    >>> .v-select__selections {
        position: relative;
        top: 3px;
        left: -10px;
    }
</style>