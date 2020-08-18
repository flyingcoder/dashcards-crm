export default {
  path: 'tasks/:task_id?',
  name: 'project-preview-tasks',
  component: () => import('./Tasks.vue'),
  props: true
}
