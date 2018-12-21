//Components
import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Chat',
  components: {
    TableHeader,
  },
  
  data: () => ({
    friends: [
        { id: 0, name: 'Kate Martz', status: 'online', activeHistory: 'Active now' },
        { id: 1, name: 'Dennis Fernandez', status: 'offline', activeHistory: 'Active 2 mins ago' },
        { id: 2, name: 'Diane Wade', status: 'dnd', activeHistory: 'Active 32 sec ago' },
        { id: 3, name: 'Isaac Singletary', status: 'online', activeHistory: 'Active now' },
        { id: 4, name: 'Lida Gilman', status: 'offline', activeHistory: 'Active 2 days ago' },
        { id: 5, name: 'Walter Smith', status: 'dnd', activeHistory: 'Active 22 mins ago' },
        { id: 6, name: 'Joseph Bailey', status: 'online', activeHistory: 'Active now' },
        { id: 7, name: 'Laurie Brown', status: 'online', activeHistory: 'Active now' },
        { id: 8, name: 'Anthony Shade', status: 'offline', activeHistory: 'Active 6 hours ago' },
        { id: 9, name: 'Thomas Mace', status: 'offline', activeHistory: 'Active 3 weeks ago' }
      ],
  }),
}