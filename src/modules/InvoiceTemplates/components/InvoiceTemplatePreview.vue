<template>
    <div class="invoice-template-dialog">
        <custom-dialog :hasFooter="false" ref="dialog" :open.sync="computedDialog" :title="dialogTitle" @button1="cancel" :maxWidth="900">
            <template v-slot:content>
                <v-row wrap class="custom-dialog">
                    <v-col grow v-if="item">
                        <iframe class="iframe" :style="style" :srcdoc="parseTemplate" @onload="resizeIframe" />
                    </v-col>
                </v-row>
            </template>
        </custom-dialog>
    </div>
</template>
<script>
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        CustomDialog,
    },

    props: {
        item: Object,
        dialog: Boolean,
        invoicefields: [Array, Object]
    },

    data: () => ({
        open: false,
    }),

    mounted() {
        this.$event.$on('btnloading_off', status => (this.btnloading = status))
    },

    computed: {
        computedDialog: {
            get() {
                return this.dialog
            },
            set(val) {
                !val && this.$emit('close')
                this.$emit('update:dialog', val)
            }
        },
        style() {
            return `min-height:470px; width: 100%;border:none;`
        },
        dialogTitle() {
            return this.item ? this.item.name : 'View Template'
        },
        parseTemplate() {
            if (!this.item.template) return ''
            let template = this.item.template
            const keys = Object.keys(this.invoicefields)
            for (const key of keys) {
                let myRegExp = new RegExp("{"+key+"}",'g');
                template = template.replace(myRegExp, this.invoicefields[key].mock_data)
            }
            return template
        }
    },

    watch: {
        dialog: {
            handler(new_val) {
                this.open = new_val
            }
        },
        open(new_val) {
            this.$emit('update:dialog', new_val)
        }
    },

    methods: {
        cancel() {
            this.dialog = false
        },

        open_dialog() {
            this.$refs.dialog.open_dialog()
        },

        resizeIframe(obj) {
            obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
        }
    }
}
</script>