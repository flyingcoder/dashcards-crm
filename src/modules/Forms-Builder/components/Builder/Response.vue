<template>
    <v-card flat>
        <v-card-text v-if="items">
            <template v-for="(data, i) in items">
                <div class="pa-2" :key="i" v-if="data.hasOwnProperty('value')">
                    <p>
                        <v-icon small left>mdi-comment-question-outline</v-icon>
                        <span class="subtitle-1"
                              v-if="data.label"
                        >{{ data.label }}</span>
                    </p>
                    <p class="subtitle-2">
                        <v-icon x-small left>mdi-checkbox-marked-circle-outline</v-icon>
                        <span v-if="data.value">{{ typeof data.value === 'object' ? data.value.join(', ') : data.value }}</span>
                        <span v-else class="text-italic">No answer</span>
                    </p>
                </div>
                <div class="pa-2" :key="i" v-else>
                    <div v-if="data.type === 'divider'">
                        <hr>
                    </div>
                    <div v-else-if="data.type === 'image'">
                        <p v-if="data.label">{{ data.label }}</p>
                        <v-img style="max-width: 100%;" :class="alignClass(data.align)"
                               :width="data.itemwidth" :height="data.itemheight"
                               :src="data.src" :alt="data.alt"
                        />
                    </div>
                    <div v-else-if="data.type === 'video'">
                        <p v-if="data.label">{{ data.label }}</p>
                        <iframe style="max-width: 100%;display:block;"
                                :class="alignClass(data.align)"
                                allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                :src="getEmbed(data.src)" :width="data.itemwidth"
                                :height="data.itemheight"
                        />
                    </div>
                    <div v-else-if="data.type === 'paragraph'">
                        <p :style="`text-align:`+data.align">
                            {{ data.text }}
                        </p>
                    </div>
                    <div v-else-if="textfield.includes(data.type)">
                        <component :is="data.tag" :style="`text-align:`+data.align">
                            {{ data.text }}
                        </component>
                    </div>
                </div>
            </template>
        </v-card-text>
    </v-card>
</template>

<script>
    import {global_utils} from '@/global_utils/global_utils'

    export default {
        name: "Response",
        mixins: [global_utils],
        props: {
            items: Array
        },
        computed: {
            textfield() {
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
            },
        },
        methods: {
            alignClass(align) {
                if (align === 'right') return 'ml-auto'
                else if (align === 'center') return 'mx-auto'
                else return 'mr-auto'
            },
            getEmbed(src) {
                let youtubeID = this.youtubeParser(src)
                return `https://www.youtube.com/embed/${youtubeID}`
            },
        }
    }
</script>

<style scoped>

</style>