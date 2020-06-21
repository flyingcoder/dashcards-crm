<template>
    <div class="header-icon">
        <img v-if="imageSrc" :src="imageSrc" class="responsive-img icon default" />
        <img v-if="hoveredImageSrc" :src="hoveredImageSrc" class="responsive-img icon hovered" />
    </div>
</template>
<script>
export default {
    name: 'HeaderIcon',
    props: {
        imageSrc: String,
        hoveredImageSrc: String
    },
    methods: {
        load_image(path) {
            // return require(path)
        }
    }
}
</script>
<style lang="scss" scoped>
.header-icon {
    height: 30px;
    margin: 0 10px 0 0;

    .icon {
        height: 30px;
        width: 35px;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover .icon.hovered {
        display: block;
    }

    &:hover .icon.default {
        display: none;
    }

    .icon.hovered {
        display: none;
    }
}

@media only screen and (max-width: 480px) {
    .header-icon {
        height: 20px;
        margin: 0 7px 0 0;

        .icon {
            height: 20px;
            width: 25px;
        }
    }
}
</style>