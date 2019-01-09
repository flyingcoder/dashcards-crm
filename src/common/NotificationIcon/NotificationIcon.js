import HeaderIcon from '@/common/HeaderIcon.vue'

export default {
  components: {
    HeaderIcon
  },
  props: {
    imageSrc: String,
    hoveredImageSrc: String,
    count: [Number, String]
  },
  data: () => ({
    friends: [
      {
        id: 0,
        name: 'Mohammad Alongan',
        status: 'online',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 1,
        name: 'Klent Gary',
        status: 'offline',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 2,
        name: 'Alvin Pacot',
        status: 'dnd',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 3,
        name: 'Roland Doda',
        status: 'online',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      }
    ]
  })
}
