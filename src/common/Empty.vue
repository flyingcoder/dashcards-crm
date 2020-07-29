<template>
    <div class="empty" :id="slug">
        <div class="empty-content">
            <div class="center-wrapper">
                <div class="empty-svg">                    
                    <v-icon :size="100">{{ icon }}</v-icon>
                </div>
                <div class="empty-text">
                    <p>{{ headline }}</p>
                    <slot name="extra" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Empty',
        props: {
            icon: {type: String, default: 'mdi-selection-off'},
            slug: {type: String, default: 'empty-sample'},
            headline: {type: String, default: 'No data yet'}
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/_variables';

    @include emptyTableInner('.empty');

    .justify-content-center {
        display: flex;
        justify-content: center;
    }

    .empty {
        height: auto;
    }

    .justify-content-center {
        display: flex;
        justify-content: center;
    }

    .empty-div {
        margin: 5px;
    }

    .empty-svg .v-icon {
        color: $btnGray;
    }

    .empty-content {
        display: grid;
        height: 100%;
    }

    .center-wrapper {
        margin: auto;
    }
</style>
<style lang="scss" scoped>
    @import '~@/sass/_variables';

    @include emptyTableInner('.empty');
</style>