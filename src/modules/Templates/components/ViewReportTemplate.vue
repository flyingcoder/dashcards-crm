<template>
    <custom-dialog
            :title="title"
            :open.sync="open"
            :hasFooter="false"
            maxWidth="900"
    >
        <template v-slot:content>
            <Preview :questions="structures" />
        </template>
    </custom-dialog>
</template>

<script>
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import Preview from "@/modules/Forms-Builder/components/Builder/Preview.vue";
    export default {
        name: "ViewReportTemplate",
        components: {
            CustomDialog,
            Preview
        },
        props: {
            title: {type: String, default: 'Report Template'},
            structures: Array,
            openDialog: Boolean
        },

        data: () => ({
            open: false
        }),

        watch: {
            openDialog(val) {
                this.open = val
            },
            open(val) {
                this.$emit('update:openDialog', val)
            }
        },
        methods: {
            showDialog() {
                this.open = true
            },
            closeDialog() {
                this.open = false
            }
        }
    }
</script>

<style scoped>

</style>