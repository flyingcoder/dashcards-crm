<template>
    <div class="reports__tab">
        <custom-dialog
            ref="dialog"
            title="Add Link"
        >
            <template slot="content">
                <v-text-field
                    pattern="https://.*"
                    type="url"
                    v-model.trim="link"
                    prepend-icon="link"
                    label="Link"
                    outline
                    clearable
                    @keydown="validate_url"
                />
            </template>

            <template slot="button2">
                <v-btn @click="on_dialog_save" :disabled="!link.length || !this.valid_url">Save</v-btn>
            </template>

        </custom-dialog>


        <div class="reports__body">
            <div class="reports__buttons">
                <div class="reports__option">

                    <v-btn large color="#3b589e" 
                           class="add__link"
                           @click="open_dialog"
                    >
                        Add Link
                    </v-btn>

                    <v-btn large color="#3b589e" class="save">
                        Save
                    </v-btn>

                    <v-btn fab flat small class="sort__option">
                        <v-icon>more_horiz</v-icon>
                    </v-btn>

                </div>
            </div>
            <div class="reports__content" v-if="iframe_src">
                <iframe :src="iframe_src"
                        frameborder="0"
                        width="100%"
                        height="500px"
                        @load="iframe_loaded"
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script src="./ReportsTab.js">
</script>
<style lang="scss" scoped src="./ReportsTab.scss">
</style>
