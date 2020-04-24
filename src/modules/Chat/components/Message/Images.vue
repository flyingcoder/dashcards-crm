<template>
	<div class="pa-2">
		<v-img :src="media.thumb_url"></v-img>
	</div>
</template>
<script>
	export default {
		name : 'Images',
		props : {
			media: Object
		}
	}
</script>