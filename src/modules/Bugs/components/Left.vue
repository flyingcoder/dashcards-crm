<template>
    <div class="bugs-tab">
        <div class="bugs-tab-inner">
            <v-tabs fixed-tabs>
                <v-tab>
                    Bugs
                </v-tab>
                <v-tab>
                    Questions
                </v-tab>
                <v-tab>
                    Suggestions
                </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-row no-gutters class="bugs-cat">
                <v-col>
                    <v-chip small class="mx-1">
                        ALL
                        <v-avatar right class="task__avatar">0</v-avatar>
                    </v-chip>
                </v-col>
                <v-col>
                    <v-chip small class="mx-1">
                        FIXED
                        <v-avatar right class="task__avatar">0</v-avatar>
                    </v-chip>
                </v-col>
                <v-col>
                    <v-chip small class="mx-1">
                        ON REVIEW
                        <v-avatar right class="task__avatar">0</v-avatar>
                    </v-chip>
                </v-col>
                <v-col>
                    <v-chip small class="mx-1">
                        MODERATION
                        <v-avatar right class="task__avatar">0</v-avatar>
                    </v-chip>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters class="py-3">
                <v-col md="12">
                    <Empty icon="mdi-hammer-wrench" headline="Under Construction!"></Empty>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Right',
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';
@include styledTabs('.bugs-tab-inner');

.bugs-tab {
    padding: 20px;
    border-radius: 10px;
    background-color: $white;
    border: 1px solid $tableBorderBlue;

    .bugs-tab-inner {
        border: 1px solid $tableBorderBlue;
    }

    .bugs-cat {
        padding: 15px 5px;

        .v-chip.v-chip--no-color.theme--light {
            background-color: $chipDark;
            color: $white;
            padding-right: 7px;
        }

        .v-avatar {
            background-color: $chipGray;
            height: 20px !important;
            min-width: 20px !important;
            width: 20px !important;
        }
    }
}
</style>