<template>
    <div class="reports__tab">
        <div class="reports__body">
            <div class="reports__buttons">
                <div class="reports__option">

                    <v-btn large color="#3b589e" 
                           class="add__link"
                           @click="add_content"
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
