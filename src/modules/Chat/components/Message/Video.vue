<template>
	<div class="pa-2">
		<video-player  class="video-player-box"
           ref="videoPlayer"
           :options="{
                muted: false,
                autoplay: false,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                  type: media.mime_type,
                  src: media.public_url
                }],
                controls: true,
                fluid: true
              }"
           :playsinline="true"
           ></video-player>
	</div>
</template>
<script>
	export default {
		name : 'Videos',
		props : {
			media: Object
		}
	}
</script>