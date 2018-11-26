<template>
	<div class="header-icon">
		<img :src="imageSrc" class="responsive-img icon default" />
		<img :src="hoveredImageSrc" class="responsive-img icon hovered" />
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
				return require(path)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-icon {
		height: 30px;
		.icon {
			height: 30px;
			width: 35px;
			margin: 0 10px 0 0;
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

	@media only screen and (max-width: 480px){
		.header-icon {
			height: 20px;
			.icon {
				height: 20px;
				width: 25px;
				margin: 0 7px 0 0;
			}
		}
	}
</style>