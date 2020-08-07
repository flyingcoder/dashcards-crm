<template>
    <div class="pa-2">
        <Media :media="media" size="md" style="display:inline-block;">
            <small class="caption">{{ media.file_name }}</small>
        </Media>
        <v-tooltip top>
            <template v-slot:activator="{ on }">
                <v-btn icon right v-on="on" :href="media.download_url" class="ml-2">
                    <v-icon small>mdi-cloud-download</v-icon>
                </v-btn>
            </template>
            <span>Download</span>
        </v-tooltip>
    </div>
</template>
<script>
    export default {
        name: 'Others',
        props: {
            media: Object
        }
    }
</script>
