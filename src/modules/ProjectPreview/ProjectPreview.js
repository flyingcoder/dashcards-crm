import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
  name: 'ProjectPreview',
  mixins: [is_screen_medium_and_down],

  props: {
    id: [Number, String] //from route prop
  },

  data() {
    return {
      active_tab: null,
      tabs: [
        {
          id: 1,
          name: 'HQ',
          route: `/dashboard/project-preview/${this.id}`
        },
        {
          id: 2,
          name: 'Files',
          route: `/dashboard/project-preview/${this.id}/files`
        },
        {
          id: 3,
          name: 'Members',
          route: `/dashboard/project-preview/${this.id}/members`
        },
        {
          id: 4,
          name: 'Messages',
          route: `/dashboard/project-preview/${this.id}/messages`
        },
        {
          id: 5,
          name: 'Milestones',
          route: `/dashboard/project-preview/${this.id}/milestones`
        },
        {
          id: 6,
          name: 'Tasks',
          route: `/dashboard/project-preview/${this.id}/tasks`
        },
        {
          id: 7,
          name: 'Reports',
          route: `/dashboard/project-preview/${this.id}/reports`
        },
        {
          id: 8,
          name: 'Timer',
          route: `/dashboard/project-preview/${this.id}/timer`
        },
        {
          id: 9,
          name: 'Invoice',
          route: `/dashboard/project-preview/${this.id}/invoice`
        }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.verifyProject(to, from, next, 'project')
    })
  }
}
