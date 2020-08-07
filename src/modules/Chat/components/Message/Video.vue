<template>
    <div class="pa-2">
        <video-player
                class="video-player-box"
                ref="videoPlayer"
                :options="options"
                :playsinline="true"
        />
    </div>
</template>
<script>
    export default {
        name: 'Videos',
        props: {
            media: Object
        },
        computed: {
            options() {
                return {
                    muted: false,
                    autoplay: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [
                        {
                            type: this.media.mime_type,
                            src: this.media.public_url
                        }
                    ],
                    controls: true,
                    fluid: true
                }
            }
        }
    }
</script>
