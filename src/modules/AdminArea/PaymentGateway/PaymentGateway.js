import { config_utils } from '@/services/configs/config_utils'
import request from '@/services/axios_instance'
import { settings } from '@/variables'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { mapGetters } from 'vuex'

export default {
    name: 'Payments',
    mixins: [config_utils, list_functionality],

    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'Payments', disabled: false, router_name: 'admin-payments' },
        ],
        stripe_configs: {
            devMode: true,
            enable: true
        },
        from_stripe_plans: [],
        plan: {
            id: null,
            nickname: null,
            short_description: null,
            long_description: null,
            amount: null,
            currency: 'usd',
            discount: null
        },
        editting: false,
        adding: false,
        submitting: false,
        stripe_configs_btn: false
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.getStripePlans()
        if (this.global_configs.stripe_configs) {
            this.stripe_configs = this.global_configs.stripe_configs
        }
        this.all()
    },
    computed:{
        ...mapGetters(['global_configs'])
    },
    methods: {
        clear() {
            this.plan = {
                id: null,
                nickname: null,
                amount: null,
                currency: 'usd',
                short_description: null,
                long_description: null
            }
        },
        insertPlan() {
            if (!this.isvalidpayload()) {
                this.$event.$emit('open_snackbar', 'Please fill in required fields', 'error')
                return 
            }
            this.submitting = true
            request.post(`api/stripe/plans`, this.plan)
            .then(({ data }) => {
                this.from_stripe_plans = data.data
                this.cancel()
            })
            .finally(() => this.submitting = false)
        },
        isvalidpayload(){
            return (this.plan.nickname && this.plan.short_description && this.plan.long_description && this.plan.currency && this.plan.amount)
        },
        updatePlan() {
            if (!this.isvalidpayload()) {
                this.$event.$emit('open_snackbar', 'Please fill in required fields', 'error')
                return 
            }
            this.submitting = true
            request.put(`api/stripe/plans`, this.plan)
            .then(({ data }) => {
                this.from_stripe_plans = data.data
                this.cancel()
            })
            .finally(() => this.submitting = false)
        },
        cancel() {
            this.adding = this.editting = false
            this.clear()
        },
        editPlan(plan) {
            this.plan = {
                id: plan.id,
                nickname: plan.nickname,
                amount: plan.amount/100,
                currency: plan.currency,
                short_description: plan.metadata.discount_description,
                long_description: plan.metadata.plan_description
            }
            this.adding = false
            this.editting = true
        },
        getStripePlans() {
            this.loading = true
            request.get(`api/stripe/plans`)
                .then(({ data }) => {
                    this.from_stripe_plans = data.data
                })
                .finally(() => this.loading = false)
        },
        save_stripe_configs() {
            this.sendRequest('stripe_configs', { key: 'stripe_configs', value: this.stripe_configs, type: 'object' })
        },
    }
}