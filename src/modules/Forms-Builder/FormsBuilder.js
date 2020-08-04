import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
import {global_utils} from '@/global_utils/global_utils'
import {settings} from '@/variables'
//components
import TableHeader from '@/common/TableHeader.vue'
import Builder from "./components/Builder/Builder.vue";

export default {
    name: 'FormBuilder',
    mixins: [global_utils],
    components: {
        TableHeader,
        Builder
    },
    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Forms', disabled: false, route: {name: 'forms'}},
            {text: 'Builder', disabled: true, route: null}
        ],
        list: [],
        saving: false,
        form_title: null,
        form_notif_receivers: null,
        isFormEdit: false,
        formToEdit: null,
        status: 'active',
        structures: []
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.form_notif_receivers = this.user.email
        if (this.$route.params.id > 0) {
            this.getForm(this.$route.params.id)
        }
        this.getFormsTemplate()
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        disabled() {
            if (this.form_notif_receivers) {
                for (let i = 0; i < this.notif_email_receivers.length; i++) {
                    if (!this.validateEmail(this.notif_email_receivers[i].trim())) {
                        return true
                    }
                }
            }
            return this.structures.length === 0 || this.form_title === '' || this.form_title === null
        },
        notif_email_receivers() {
            if (!this.form_notif_receivers) {
                return []
            }
            return this.form_notif_receivers.split(',')
        },
        slugifyTitle() {
            return `URL: ${settings.BaseURL}/form/${this.slugify(this.form_title || '')}`
        }
    },
    methods: {
        validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        save() {
            this.saving = true
            let payload = {
                title: this.form_title,
                questions: this.structures,
                status: this.status,
                notif_email_receivers: this.notif_email_receivers
            };
            request.post(`api/forms`, payload)
                .then(({data}) => {
                    this.$event.$emit('open_snackbar', 'Form successfully created!')
                    this.$router.push({name: 'forms'})
                })
        },
        clearAll() {
            this.$refs.builder.clearAll()
        },
        update() {
            this.saving = true
            let payload = {
                title: this.form_title,
                questions: this.structures,
                id: this.formToEdit.id,
                status: this.status,
                notif_email_receivers: this.notif_email_receivers
            };
            request.put(`api/forms`, payload)
                .then(({data}) => {
                    this.$event.$emit('open_snackbar', 'Form successfully updated!')
                    this.$router.push({name: 'forms'})
                })
        },
        getForm(id) {
            request.get(`api/forms/${id}`)
                .then(({data}) => {
                    if (data) {
                        this.formToEdit = data
                        this.isFormEdit = true
                        this.status = data.status
                        this.structures = _cloneDeep(data.questions)
                        this.form_title = data.title
                        this.form_notif_receivers = null
                        if (data.props.notif_email_receivers) {
                            this.form_notif_receivers = data.props.notif_email_receivers.join(',')
                        }
                    }
                })
        },
        getFormsTemplate() {
            request.get(`api/forms/list`)
                .then(({data}) => {
                    if (data) {
                        this.list = data
                    }
                })
        },
    }
}