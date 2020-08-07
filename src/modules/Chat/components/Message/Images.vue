<template>
    <div class="pa-2">
        <v-dialog width="500">
            <template v-slot:activator="{ on }">
                <v-img :src="media.thumb_url" v-on="on" />
            </template>
            <img :src="media.public_url" width="500">
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: 'Images',
        props: {
            media: Object
        }
    }
</script>
