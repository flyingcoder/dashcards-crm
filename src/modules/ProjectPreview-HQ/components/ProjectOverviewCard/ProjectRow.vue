<template functional>
    <v-row no-gutters class="project__overview_row">
        <v-col v-if="!props.oneCol" sm="5" class="project__label">
            <div class="project__label_icon">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="props.labelIcon" />
                </svg>
            </div>
            <div class="project__label_title">{{ props.col1 }}</div>
        </v-col>
        <v-col v-if="!props.oneCol" sm="7" class="project__value">{{ props.col2 }}</v-col>
        <v-col v-if="props.oneCol" md="12" sm="12" class="project__label">
            <div class="project__label_icon">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="props.labelIcon" />
                </svg>
            </div>
            <div class="project__label_title">{{ props.col1 }}</div>
        </v-col>
        <v-col v-if="props.oneCol" md="12" sm="12" class="project__value" v-html="props.col2"></v-col>
    </v-row>
</template>
<script>
export default {
    name: 'ProjectRow',
    functional: true,
    props: {
        labelIcon: String,
        col1: String,
        col2: [String, Number],
        oneCol: { type: Boolean, default: false }
    }
}
</script>
<style lang="scss" scoped src="./ProjectRow.scss"></style>
<style scoped>
.project__value {
    overflow-x: auto;
    display: block !important;
}
</style>