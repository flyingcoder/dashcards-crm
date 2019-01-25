<template>
	<div class="icons">

		<template v-for="icon of icons">

			<template v-if="icon.is_image">
				<div class="user-img" :key="icon.id" @click="$emit('icon-clicked', icon.action)">
					<img src="@/assets/temp/user.png" alt="User">
				</div>
			</template>

			<template v-else>
				<v-avatar class="icon" :key="icon.id" @click="$emit('icon-clicked', icon.action)">
					<v-icon dark>{{ icon.name }}</v-icon>
				</v-avatar>
			</template>

		</template>

	</div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { id: 1, name: 'account_circle', is_image: false, action: 'account' },
      { id: 2, name: 'notifications', is_image: false, action: 'notification' },
      { id: 3, name: 'camera', is_image: false, action: 'camera' },
      { id: 4, name: null, is_image: true, action: 'image' },
      { id: 5, name: 'call', is_image: false, action: 'call' },
      { id: 6, name: 'message', is_image: false, action: 'message' },
      { id: 7, name: 'mail_outline', is_image: false, action: 'mail' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid $borderLightGray;
}
.icon {
  justify-self: center;
  margin: 15px;
  cursor: pointer;
  background-color: $darkGray;

  &:hover {
    background-color: $blue;
  }
}
.user-img {
  justify-self: center;
  margin-top: -78px;
  cursor: pointer;
  z-index: 1;

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
}

@media only screen and (max-width: 910px) {
  .icon {
    margin: 10px;
    height: 40px !important;
    width: 40px !important;
    .v-icon {
      font-size: 18px;
    }
  }
  .user-img {
    margin-top: -56px;

    img {
      height: 120px;
      width: 120px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .icons {
    padding: 0 12px;
  }
}
</style>
