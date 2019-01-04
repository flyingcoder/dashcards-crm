<template functional>
	<div class="tile">
		<div class="tile-icon" :style="{ background: props.imgBackground }">
			<slot name="tile-icon">
				<v-img :src="props.imgSrc" :height="props.imgHeight" :width="props.imgWidth" />
			</slot>
		</div>

		<div class="tile-content">
			<slot name="tile-content">
				<h2 class="text-counter"> {{ props.counter }} </h2>
				<div class="text-title">{{ props.title }}</div>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
  functional: true,
  inheritAttrs: false,
  props: {
    imgSrc: String,
    imgHeight: {
      type: String,
      default: '25px'
    },
    imgWidth: {
      type: String,
      default: '25px'
    },
    imgBackground: String,
    counter: [Number, String],
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
.tile {
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  height: 55px;
  border-radius: 9px;
  overflow: hidden;

  .tile-icon {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 7px;
  }

  .tile-content {
    background-color: $white;
    padding: 0;
    text-align: center;
    display: grid;
    align-items: center;

    .text-counter,
    .text-title {
      color: $titleDarkBlue;
    }
  }
}

@media only screen and (max-width: 500px) {
  .tile {
    height: 45px;

    .tile-icon {
      padding: 5px;
    }

    .tile-content {
      .text-counter {
        font-size: 16px;
      }
      .text-title {
        font-size: 12px;
      }
    }
  }
}
</style>
