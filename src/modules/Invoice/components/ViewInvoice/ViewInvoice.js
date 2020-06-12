import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        CustomDialog,
    },
  
    data: () => ({
        open: false,
        loading: false,
        parseTemplate: '',
        item : null
    }),

    mounted() {
        this.$event.$on('btnloading_off', status => (this.btnloading = status))
    },

    computed: {
        user() {
            return this.$store.getters.user
        },
        can_pay() {
            return this.item.billed_to === this.user.id
        },
        property() {
            if (!this.item.props) {
                return { send_email: false, template: null }
            }
            return typeof this.item.props === 'string' ? JSON.parse(this.item.props) : this.item.props
        },
        style() {
            return `min-height:470px; width: 100%;border:none;`
        },
        dialogTitle() {
            return this.item ? this.item.title : 'View Invoice'
        },
    },


    methods: {
        cancel() {
            this.$refs.dialog.close_dialog()
        },

        open_dialog(item) {
            this.item = item
            this.getParseHtml()
            this.$refs.dialog.open_dialog()
        },

        resizeIframe(obj) {
            obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
        },
        
        getParseHtml() {
            request.get(`api/invoice/${this.item.id}/parse-template`)
                .then(({ data }) => {
                    this.parseTemplate = data.html
                })
        },

        downloadPDF() {
            request.get(`api/invoice/${this.item.id}/download`)
                .then(({ data }) => {
                    window.open(data.url, '_blank');
                })
        }
    }
}

