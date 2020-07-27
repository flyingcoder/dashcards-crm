<template>
    <div class="expanded-timeline-card">
        <v-layout class="table-header justify-end align-center">
            <div class="header-actions">
                <!-- <v-btn fab small dark color="#3b589e" class="mr-2">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn fab small class="mr-2">
                    <v-icon>more_horiz</v-icon>
                </v-btn> -->
                <v-btn fab small @click="minimize">
                    <v-icon>close</v-icon>
                </v-btn>
            </div>
        </v-layout>
        <v-row>
            <v-col cols="12">
                <timeline-card isExpanded/>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'

    export default {
        name: 'ExpandedTimelineCard',
        components: {TimelineCard},

        data: () => ({
            paths: [
                {text: 'Dashboard', disabled: false, router_name: 'default-content'},
                {text: 'Expanded Timeline', disabled: true, router_name: null}
            ]
        }),

        methods: {
            minimize() {
                this.$router.push({name: 'default-content'})
            }
        }
    }
</script>
<style lang="scss">
    @import '~@/sass/_variables';

    @include pagePadding('.expanded-timeline-card');

    .expanded-timeline-card {
        .dash__card .card__content {
            height: 100%;
        }
    }
</style>