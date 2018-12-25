<template>
    <div class="reports__tab">
        <custom-dialog
            ref="dialog"
            title="Add Link"
            button2-text="Save"
            @button2="on_dialog_save"
        >
            <template slot="content">
                <v-text-field
                    pattern="https://.*"
                    required
                    type="url"
                    v-model="link"
                    prepend-icon="link"
                    label="Link"
                    outline
                    clearable
                />
            </template>c

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
                <iframe src="https://www.your-report.com/clients/au/5cornerdental.com/aakspr6973"
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
