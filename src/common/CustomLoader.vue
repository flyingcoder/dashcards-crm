<template>
    <transition name="fade">
        <div class="custom-loader" v-show="should_show">
            <div class="loader-content">
                <div class="center-wrapper">
                    <v-progress-circular
                            style="margin-left: calc(50% - 70px);"
                            :size="72"
                            color="primary"
                            indeterminate
                    />
                    <div class="headline mt-3 text-center">Processing... Please wait...</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        computed: {
            should_show() {
                return this.$store.getters.custom_loader
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-loader {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 99999;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        background: rgba(224, 224, 189, 0.57);

        .loader-content {
            display: grid;
            height: 100%;

            .center-wrapper {
                margin: auto;
            }
        }
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
