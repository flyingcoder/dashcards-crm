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
.tile {
  display: grid;
  grid-template-columns: 1fr 3fr;
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
    background: white;
    padding: 0;
    text-align: center;
    display: grid;
    align-items: center;
  }
}
</style>
