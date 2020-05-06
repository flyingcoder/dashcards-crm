import Vue from 'vue'
import VueGoogleApi from 'vue-google-api'
import {
    settings
} from '@/variables.js'


Vue.use(VueGoogleApi, {
    apiKey: settings.googleApi.developerKey,
    clientId: settings.googleApi.clientId,
    scope: settings.googleApi.scope.join(' '),
    discoveryDocs: [ 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest' ]
})