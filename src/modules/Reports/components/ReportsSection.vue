<template>
    <div class="reports__body">
        <div class="reports-content">
            <div class="site-preview" v-if="iframeSrc">
                <!-- <iframe :src="iframeSrc" frameborder="0" width="100%" height="1000" @load="$emit('iframe-loaded')"></iframe> -->
                <vue-friendly-iframe className="iframe-vue" :src="iframeSrc" @load="$emit('iframe-loaded')"></vue-friendly-iframe>
            </div>
            <Empty v-else icon="mdi-link-off" headline="No url found!"></Empty>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        iframeSrc: String
    }
}
</script>
<style>
  .iframe-vue {
    width: 100%;
    height: 1000px;
  }
</style>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.reports__body {
    background-color: $tableBlueBg;
    border: 1px solid $tableBorderBlue;
    padding: 25px;
    display: grid;

    .reports__buttons {
        background-color: $white;
        height: auto;
        padding: 25px;

        .reports__option {
            text-align: right;

            .add__link {
                color: $white;
                width: 100px;
            }

            .save {
                color: $white;
                width: 100px;
            }
        }
    }
}

.reports-content {
    background-color: $white;
}

.site-preview {
    border: 1px solid $tableBorderBlue;
    margin: 5px 10px;
}
</style>