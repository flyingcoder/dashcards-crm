export default {
    path: 'files/:view?',
    name: 'service-preview-files',
    component: () => import('./Files.vue'),
    props: true
}