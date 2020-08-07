import request from '@/services/axios_instance'
import {global_utils} from '@/global_utils/global_utils'
import _cloneDeep from 'lodash/cloneDeep'

export default {
    name: 'FormOnline',
    mixins: [global_utils],
    data: () => ({
        form: null,
        date_formats: [
            {value: 'D-M-Y', text: 'D-M-Y e.g 01-12-2020'},
            {value: 'Y-M-D', text: 'Y-M-D e.g 2020-12-01'},
            {value: 'M-D-Y', text: 'M-D-Y e.g 12-01-2020'}
        ],
        viewMode: false,
        submitting: false,
        submitted: false,
        uploaded: []
    }),
    created() {
        if (this.$route.params.slug) {
            this.getForm(this.$route.params.slug)
        } else {
            this.$router.push({name: 'not_found'})
        }
        if (this.$route.params.view) {
            this.viewMode = true
        }
    },
    computed: {
        text_fields() {
            return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
        },
        disabled() {
            if (!this.form) {
                return true
            }
            for (let i = 0; i < this.form.questions.length; i++) {
                if (this.form.questions[i].required && !this.form.questions[i].value) {
                    return true
                }
            }
            return false
        },
        user() {
            return this.$store.getters.user || null
        }
    },
    methods: {
        alignClass(align) {
            if (align === 'right') return 'ml-auto'
            else if (align === 'center') return 'mx-auto'
            else return 'mr-auto'
        },
        getForm(slug) {
            request.get(`api/form/${slug}/online`)
                .then(({data}) => {
                    if (data) {
                        this.form = data
                    }
                })
        },
        getEmbed(src) {
            let youtubeID = src ? this.youtubeParser(src) : ''
            return `https://www.youtube.com/embed/${youtubeID}`
        },
        formValid() {
            if (!this.form) {
                this.$event.$emit('open_snackbar', 'Form is invalid', 'error')
                return false
            }
            let error = []
            for (let i = 0; i < this.form.questions.length; i++) {
                if (this.form.questions[i].required && (!this.form.questions[i].value || this.form.questions[i].value.length === 0)) {
                    error.push(`${this.form.questions[i]} should have valid value!`)
                }
            }
            if (error.length > 0) {
                this.$event.$emit('open_snackbar', error.join('<br>'), 'error')
                return false
            }
            return true
        },
        submitForm() {
            if (this.viewMode) return
            if (!this.formValid()) {
                return
            }
            this.submitting = true
            this.$store.commit('set_custom_loader', true)
            let payload = { data: _cloneDeep(this.form.questions)};
            if (this.user) {
                payload.user_id = this.user.id
            }
            request.post(`api/form/${this.form.id}/online`, payload)
                .then(({data}) => {
                    this.submitted = true
                })
                .finally(() => {
                    this.submitting = false
                    this.$store.commit('set_custom_loader', false)
                })
        },
        submit_another() {
            this.$router.go()
        },
        onchange(files, index) {
            this.form.questions[index].value = []
            this.form.questions[index].error = false
            files.forEach(file => {
                let formData = new FormData()
                formData.append('file', file)
                request.post(`api/attachments/dropzone`, formData)
                    .then(({data}) => {
                        this.form.questions[index].value.push(data)
                    }, (error) => {
                        this.form.questions[index].error = true
                        console.log(error)
                    })
            })
        }
    }
}