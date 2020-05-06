export default {
  path: 'files/:view?',
  name: 'project-preview-files',
  component: () => import('./Files.vue'),
  props: true
}
