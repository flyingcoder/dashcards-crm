<template>
    <div class="files__tab">
        <v-card outlined class="dropbox-content">
            <v-card-title class="py-1">
                <v-col>
                    <h3 class="page-title"><v-icon left>mdi-dropbox</v-icon> Dropbox</h3>
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
@import '~@/sass/variables';
.files__tab {
    padding: 1.25rem;

    .dropbox-content{
        border-radius: 10px !important;
        border: 1px solid $borderLightGray;
    }
    
    .page-title .v-icon{
        color: $textDark;
    }
}
</style>
<script> 

export default {
    name: 'DropboxTab', 
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