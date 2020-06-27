import { list_functionality } from '@/services/list-functionality/list-functionality'
import { global_utils } from '@/global_utils/global_utils'
import request from '@/services/axios_instance'
import { settings } from '@/variables'
//components
import TableHeader from '@/common/TableHeader.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import SendFormDialog from './components/SendToDialog.vue'

export default {
    name: 'Forms',
    mixins: [list_functionality, global_utils],
    components: {
        TableHeader,
        VueTable,
        Actions,
        DeleteDialog,
        SendFormDialog
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Forms', disabled: false, router_name: 'forms' },
            { text: 'Questionnaire', disabled: true, router_name: null }
        ],
        headers: [{
                text: 'ID',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Title',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Created by',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Status',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Responses',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Date Created',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Action',
                sortable: false,
                align: 'center',
                width: '220px'
            }
        ]
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.load()
    },
    methods: {
        can_delete(item) {
            return true
        },
        can_edit(item) {
            return true
        },
        load() {
            this.fill_table_via_url(`api/forms`)
        },
        load_more() {
            this.load_more_via_url(`api/forms`)
        },
        async delete_form() {
            this.loading = true
            request.delete(`api/forms/${this.delete_item_id}`)
                .then(() => {
                    const index = this.items.findIndex(
                        item => item.id === this.delete_item_id
                    )
                    if (~index) {
                        this.items.splice(index, 1)
                        this.$event.$emit('open_snackbar', 'Form successfully deleted!')
                    }
                })
                .finally(() => {
                    this.delete_dialog = false
                    this.loading = false
                })
        },
        go_to_form_preview(item) {
            // this.$router.push({ name: 'form-response', params: { slug: item.slug } })
            window.open(`${settings.BaseURL}/form/${item.slug}/view`);
        },
        go_to_form_edit(item) {
            this.$router.push({ name: 'form-edit', params: { id: item.id } })
        },
        go_to_form_builder() {
            this.$router.push({ name: 'form-builder' })
        },
        go_to_form_responses(item) {
            this.$router.push({ name: 'forms/responses', params: { id: item.id } })
        },
        open_send_dialog(item) {
            this.$refs.send_dialog.open_dialog(item)
        },
    }
}