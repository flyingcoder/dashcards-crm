import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Payment',
  components: { TableHeader },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Payment', disabled: true, router_name: null }
    ]
  })
}
