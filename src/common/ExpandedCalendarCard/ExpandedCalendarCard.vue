<template>
    <div class="expanded-calendar-card">
        <v-layout class="table-header justify-end align-center">
            <div class="header-actions">
                <v-btn fab small dark color="#3b589e" class="mr-2">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn fab small class="mr-2">
                    <v-icon>more_horiz</v-icon>
                </v-btn>
                <v-btn fab small @click="minimize">
                    <v-icon>close</v-icon>
                </v-btn>
            </div>
        </v-layout>

        <Calendar :hasBreadCrumbs="false" />
    </div>
</template>

<script>
    import Calendar from '@/modules/Calendar/Calendar.vue'

    export default {
        name: 'ExpandedCalendarCard',
        components: {Calendar},

        data: () => ({
            paths: [
                {text: 'Dashboard', disabled: false, router_name: 'default-content'},
                {text: 'Expanded Calendar', disabled: true, router_name: null}
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

    @include pagePadding('.expanded-calendar-card');
    .expanded-calendar-card {
        .dash__card .card__content {
            height: 100%;
        }

        .calendar {
            padding: 20px 0;

            .calendar-wrapper {
                margin: 0;
            }
        }
    }
</style>
