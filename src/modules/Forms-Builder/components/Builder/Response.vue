<template>
    <v-card flat>
        <v-card-text v-if="items">
            <template v-for="(data, i) in items">
                <div class="pa-2" :key="i" v-if="data.type !== 'file_upload' && data.hasOwnProperty('value')">
                    <p class="subtitle-2">
                        <span class="subtitle-2" v-if="data.label">{{ data.label }}</span>
                    </p>
                    <p class="subtitle-1">
                        <span v-if="data.value">{{ typeof data.value === 'object' ? data.value.join(', ') : data.value }}</span>
                        <span v-else class="text-italic">No answer</span>
                    </p>
                </div>
                <div v-else-if="data.type === 'file_upload'" :key="i">
                    <p class="subtitle-2">
                        <span class="subtitle-2" v-if="data.label">{{ data.label }}</span>
                    </p>
                    <p class="subtitle-1">
                        <template v-if="data.value.length > 0">
                            <v-chip v-for="(item, index) in getAttachments(data.id)" :key="index"
                                    class="mr-2 my-1" label
                            >
                                <v-avatar class="mr-3">
                                    <v-img :src="item.file_url">
                                        <v-icon v-if="!item.file_url">mdi-file-outline</v-icon>
                                    </v-img>
                                </v-avatar>
                                {{ item.filename }} ({{ item.filesize | bytesToSize }})
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon @click="openLink(item.file_url)" right v-bind="attrs" v-on="on">
                                            mdi-cloud-download-outline
                                        </v-icon>
                                    </template>
                                    <span>Download file</span>
                                </v-tooltip>
                            </v-chip>
                        </template>
                        <span v-else>No file uploaded.</span>
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
                    <div v-else-if="text_fields.includes(data.type)">
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
            items: Array,
            attachments: Array
        },
        computed: {
            text_fields() {
                return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
            },
        },
        methods: {
            getAttachments(id) {
                if (this.attachments.length === 0) return []
                return this.attachments.filter(item => {
                    return item.title === id
                })
            },
            alignClass(align) {
                if (align === 'right') return 'ml-auto'
                else if (align === 'center') return 'mx-auto'
                else return 'mr-auto'
            },
            getEmbed(src) {
                let youtubeID = src ? this.youtubeParser(src) : ''
                return `https://www.youtube.com/embed/${youtubeID}`
            },
            openLink(link) {
                window.open(link, 'blank')
            }
        }
    }
</script>

<style scoped>

</style>