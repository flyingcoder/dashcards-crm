import Pusher from 'pusher-js'
//Components
import TableHeader from '@/common/TableHeader.vue'

const pusher = new Pusher('180f64fc668151a6279d', {
  cluster: 'eu',
  encrypted: true
})

export default {
  name: 'Chat',
  components: {
    TableHeader
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Chat', disabled: true, router_name: null }
    ],
    friends: [
      {
        id: 0,
        name: 'Kate Martz',
        status: 'online',
        activeHistory: 'Active now'
      },
      {
        id: 1,
        name: 'Dennis Fernandez',
        status: 'offline',
        activeHistory: 'Active 2 mins ago'
      },
      {
        id: 2,
        name: 'Diane Wade',
        status: 'dnd',
        activeHistory: 'Active 32 sec ago'
      },
      {
        id: 3,
        name: 'Isaac Singletary',
        status: 'online',
        activeHistory: 'Active now'
      },
      {
        id: 4,
        name: 'Lida Gilman',
        status: 'offline',
        activeHistory: 'Active 2 days ago'
      },
      {
        id: 5,
        name: 'Walter Smith',
        status: 'dnd',
        activeHistory: 'Active 22 mins ago'
      },
      {
        id: 6,
        name: 'Joseph Bailey',
        status: 'online',
        activeHistory: 'Active now'
      },
      {
        id: 7,
        name: 'Laurie Brown',
        status: 'online',
        activeHistory: 'Active now'
      },
      {
        id: 8,
        name: 'Anthony Shade',
        status: 'offline',
        activeHistory: 'Active 6 hours ago'
      },
      {
        id: 9,
        name: 'Thomas Mace',
        status: 'offline',
        activeHistory: 'Active 3 weeks ago'
      }
    ]
  }),

  created() {
    this.subscribe()
    this.$store.commit('set_floating_button', false)
  },

  beforeDestroy() {
    pusher.unsubscribe('chat') //TODO add channel name
    this.$store.commit('set_floating_button', true)
  },

  methods: {
    subscribe() {
      pusher.subscribe('chat') //TODO add subsciption
      pusher.bind('chat_new_message', data => {
        //TODO listen to channel
        console.log(data)
      })
    }
  }
}
