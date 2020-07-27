<template>
    <v-dialog
            v-model="dialog"
            scrollable
            :max-width="viewableTxt ? `800` : `500`"
            @click:outside="closeDialog"
    >
        <v-card v-if="media" class="docs-wrapper">
            <div class="voc-view" v-if="viewableTxt">
                <div class="dialog-header">
                    <v-btn outlined fab small text class="action" @click="closeDialog">
                        <v-icon>close</v-icon>
                    </v-btn>
                </div>
                <div class="dialog-body">
                    <VueDocPreview
                            class="text-preview"
                            :url="media.download_url"
                            type="text"
                    />
                </div>
            </div>
            <div v-else class="not-supported">
                <div class="dialog-header">
                    <v-btn icon fab small text class="action" @click="closeDialog">
                        <v-icon>close</v-icon>
                    </v-btn>
                </div>
                <div class="dialog-body">
                    <v-row no-gutters class="pa-2 mb-5">
                        <v-col md="3">
                            <Media :media="media" size="xl" />
                            <v-btn text small block disabled>
                                {{ media.size | bytesToSize  }}
                            </v-btn>
                        </v-col>
                        <v-col grow>
                            <p class="headline file-title">File preview not yet supported</p>
                            <p class="subtitle file-subtitle">
                                {{ media.file_name }}
                            </p>
                            <v-btn dark color="#3b589e" :href="media.download_url">
                                <v-icon left>mdi-cloud-download</v-icon>
                                Download file
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import VueDocPreview from 'vue-doc-preview'

    export default {
        name: 'DocsViewer',
        components: {
            VueDocPreview,
        },
        props: {
            media: Object
        },

        data: () => ({
            dialog: false,
            currentPage: 0,
            pageCount: 0
        }),
        computed: {
            viewableTxt() {
                return this.media && this.media.mime_type === 'text/plain'
            }
        },
        methods: {
            openDialog() {
                this.dialog = true
            },
            closeDialog() {
                this.dialog = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/_variables';

    @include styledScrollFor('.dialog-body');

    .docs-wrapper {
        border-radius: 15px;
        height: 100%;

        .file-title,
        .file-subtitle {
            color: $titleDarkBlue;
        }
    }

    .voc-view {
        .dialog-header {
            text-align: right;
            background: $white;
            padding: 10px;
            border-bottom: 1px solid $borderGray;

            .v-btn__content .v-icon {
                color: $btnGray;
            }

            .v-btn--outlined {
                border: thin solid $btnGray;
                margin-left: 5px;
            }
        }

        .dialog-body {
            background: $white;
            max-height: 500px;
            overflow: auto;
        }
    }

    .not-supported {
        .dialog-header {
            text-align: right;
        }

        .dialog-body {
            max-height: 500px;
            overflow: auto;
        }
    }

    #VueDocPreviewRoot {
        height: 100% !important;
        padding: 10px;
    }

    #VueDocPreviewRoot .content {
        height: 100%;
    }

    #VueDocPreviewRoot pre {
        overflow-x: auto;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        overflow-y: auto;
        height: 100%;
    }
</style>
<style scoped>
    >>> #VueDocPreviewRoot .content pre {
        font-size: 14px !important;
    }
</style>
