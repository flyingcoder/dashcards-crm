<template>
    <div class="mx-auto bugs-preview">
        <v-row no-gutters class="pa-3">
            <p>General > Questions</p>
            <v-spacer></v-spacer>
            <v-btn icon small class="mr-1">
                <v-icon>more_horiz</v-icon>
            </v-btn>
        </v-row>
        <v-container fluid>
            <v-row dense>
                <v-col>
                    <Empty icon="mdi-hammer-wrench" headline="Under Construction!"></Empty>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Right',
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.bugs-preview {
    padding: 20px;
    background-color: $white;
    border: 1px solid $tableBorderBlue;
    border-radius: 10px;

    p {
        color: $textDark;
        font-size: 18px;
    }

    .v-btn {
        color: $btnGray;
        border: 1px solid $btnGray;
    }
}
</style>