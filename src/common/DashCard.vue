<template>
    <div class="dash__card">
        <v-row wrap no-gutters class="card__header" align-center>
            <v-flex xs5 class="card__title">
                {{ title }}
            </v-flex>
            <slot name="actions" v-if="dashboard">
                <v-flex xs7 class="actions">
                    <v-btn fab small text class="action" v-if="hasListView" @click="$emit('list-view')">
                        <v-icon>list</v-icon>
                    </v-btn>
                    <v-btn fab small text class="action" v-if="hasGridView" @click="$emit('grid-view')">
                        <v-icon>grid_on</v-icon>
                    </v-btn>
                    <v-btn fab small text class="action" v-if="hasRemove" @click="$emit('remove')">
                        <v-icon>remove</v-icon>
                    </v-btn>
                    <v-btn fab small text class="action" v-if="hasAdd" @click="$emit('add')">
                        <v-icon>add</v-icon>
                    </v-btn>
                    <v-btn fab small text class="action" v-if="hasExpand" @click="$emit('expand')">
                        <v-icon>zoom_out_map</v-icon>
                    </v-btn>
                    <v-btn fab small text class="action" v-if="hasClose" @click="$emit('close')">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-flex>
            </slot>
        </v-row>
        <div class="card__content">
            <slot name="content"></slot>
        </div>
        <v-row no-gutters class="card__footer">
            <slot name="footer">
                <v-btn v-if="viewMoreBtn" text :loading="btnloading" class="view__more_btn mx-auto" @click="$emit('view-more')">
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
        btnloading: false
    }),
    created() {
        this.$event.$on('btnloading_off', () => {
            this.btnloading = false
        })
    }
}
</script>
<style lang="scss" scoped src="./DashCard.scss"></style>