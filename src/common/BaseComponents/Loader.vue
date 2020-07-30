<template functional>
    <transition name="fade" v-if="props.loading">
        <div class="custom-loader">
            <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="72"
            />
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            loading: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .custom-loader {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(224, 224, 189, 0.57);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 1;
    }
</style>
