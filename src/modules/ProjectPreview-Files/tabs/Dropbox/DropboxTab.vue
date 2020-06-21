<template>
    <div class="files__tab">
        <v-card>
            <v-card-title class="py-1">
                <v-col class="headline">
                    <v-icon left>mdi-dropbox</v-icon> Dropbox
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <v-text-field solo flat outlined dense prepend-inner-icon="search" hide-details></v-text-field>
                </v-col>
            </v-card-title>
            <v-card-text>
                <Empty headline="Under Construction!"></Empty>
            </v-card-text>
        </v-card>
    </div>
</template>
<style lang="scss">
.files__tab {
    padding: 24px;
}
</style>
<script>
import Empty from '@/common/Empty.vue'

export default {
    name: 'DropboxTab',
    components: {
        Empty
    },
    computed:{
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, router_name: 'default-content' },
                { text: this.type, disabled: true, router_name: null },
                { text: 'Dropbox', disabled: true, router_name: null }
            ]
        }
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    }
}
</script>