//import clientMessagesTab from './subpages/ClientMessages/route'
//import teamMessagesTab from './subpages/TeamMessages/route'

export default {
    path: 'messages/:conversation_id?',
    component: () => import('./Messages.vue'),
    props: true,
    //children: [clientMessagesTab, teamMessagesTab]
}
