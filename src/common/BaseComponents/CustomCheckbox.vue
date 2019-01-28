<template functional>
	<label class="select__all">
		<span>{{ props.text }}</span>
		<input type="checkbox"
		       :checked="props.checked"
		       @change="listeners['update:checked'](!props.checked)"
		>
		<span class="checkmark"></span>
	</label>
</template>

<script>
export default {
  props: {
    text: String,
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.select__all {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 18px;
  color: $titleDarkBlue;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: $darkViolete;
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }

    &:after {
      left: 8px;
      top: 4px;
      width: 7px;
      height: 13px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  &:hover input ~ .checkmark {
    background-color: $darkViolete-2;
  }

  input:checked ~ .checkmark {
    background-color: $darkViolete-2;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
}
</style>
