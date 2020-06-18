<template>
    <v-row no-gutters class="service__overview_row">
        <v-col v-if="!oneCol" sm="5" class="service__label">
            <div class="service__label_icon">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="labelIcon" />
                </svg>
            </div>
            <div class="service__label_title">{{ col1 }}</div>
        </v-col>
        <v-col v-if="!oneCol" sm="7" class="service__value">
            <slot name="coltwo"> {{ col2 }}</slot>
        </v-col>
        <v-col v-if="oneCol" md="12" sm="12" class="service__label">
            <div class="service__label_icon">
                <svg viewBox="0 0 250 250">
                    <path class="icon" :d="labelIcon" />
                </svg>
            </div>
            <div class="service__label_title">{{ col1 }}</div>
        </v-col>
        <v-col v-if="oneCol" md="12" sm="12" class="service__value" v-html="col2"></v-col>
    </v-row>
</template>
<script>
export default {
    name: 'ServiceRow',
    props: {
        labelIcon: String,
        col1: String,
        col2: [String, Number],
        oneCol: { type: Boolean, default: false }
    }
}
</script>
<style lang="scss" scoped src="./ServiceRow.scss"></style>
<style scoped>
.service__value {
    overflow-x: auto;
    display: block !important;
}
</style>