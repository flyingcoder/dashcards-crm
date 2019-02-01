import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Cloud',
  components: { TableHeader },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Cloud', disabled: true, router_name: null }
    ]
  })
}
