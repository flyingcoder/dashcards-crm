<template>
	<div class="left-side">

		<div class="add-logo-box">
			+ Add Your Logo
		</div>

		<div class="bill-from">
			<v-textarea label="Who is this invoice from"></v-textarea>
		</div>

		<div class="bill-to">
			<v-text-field label="Who is this invoice to"></v-text-field>
		</div>

	</div>
</template>

<style lang="scss" scoped>
.left-side {
  .add-logo-box {
    width: 200px;
    height: 150px;
    background: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .bill-from,
  .bill-to {
    width: 300px;
  }
}
</style>
