<template>
    <div class="dash__card">
        <div class="card__header">
            <h3 class="card__title">{{ title }}</h3>
            <slot name="actions" v-if="dashboard">
                <div class="actions">
                    <v-icon fab class="action" v-if="hasListView" @click="$emit('list-view')">list</v-icon>
                    <v-icon fab class="action" v-if="hasGridView" @click="$emit('grid-view')">grid_on</v-icon>
                    <v-icon fab class="action" v-if="hasRemove" @click="$emit('remove')">remove</v-icon>
                    <v-icon fab class="action" v-if="hasAdd" @click="$emit('add')">mdi-plus-circle-outline</v-icon>
                    <v-icon fab class="action" v-if="hasExpand" @click="$emit('expand')">zoom_out_map</v-icon>
                    <v-icon fab class="action" v-if="hasClose" @click="$emit('close')">close</v-icon>
                </div>
            </slot>
        </div>
        <div class="card__content">
            <slot name="content"></slot>
        </div>
        <v-row no-gutters class="card__footer">
            <slot name="footer">
                <v-btn v-if="viewMoreBtn" text :loading="btnloading2" class="view__more_btn mx-auto" @click="$emit('view-more')">
                    VIEW MORE
                </v-btn>
            </slot>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'DashCard',
    props: {
        title: String,
        viewMoreBtn: Boolean,
        dashboard: Boolean,
        hasListView: { type: Boolean, default: false },
        hasGridView: { type: Boolean, default: false },
        hasRemove: { type: Boolean, default: false },
        hasAdd: { type: Boolean, default: false },
        hasExpand: { type: Boolean, default: true },
        hasClose: { type: Boolean, default: true }
    },
    data: () => ({
        btnloading2: false
    }),
    created() {
        this.$event.$on('btnloading_off', () => {
            this.btnloading2 = false
        })
    }
}
</script>
<style lang="scss" scoped src="./DashCard.scss"></style>