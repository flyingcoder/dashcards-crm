import request from '@/services/axios_instance'
import moment from 'moment'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { calendar_utils } from '@/services/calendar/calendar_utils'
import * as apiTo from '@/modules/Calendar/api'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import DashCard from '@/common/DashCard.vue'
import EventCard from '@/modules/Calendar/components/EventCard/EventCard.vue'
import TableHeader from '@/common/TableHeader.vue'
import CalendarDialog from '@/modules/Calendar/components/CalendarDialog/CalendarDialog.vue'
import EventDialog from '@/modules/Calendar/components/EventDialog/EventDialog.vue'
import EventTypeDialog from '@/modules/Calendar/components/EventTypeDialog/EventTypeDialog.vue'
import EventDetailDialog from '@/modules/Calendar/components/EventDetailDialog/EventDetailDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Empty from '@/common/Empty.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import Avatars from '@/common/Avatars.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'
import AddParticipantDialog from '@/modules/Calendar/components/AddParticipantDialog/AddParticipantDialog.vue'

export default {
  name: 'CalendarCard',
  mixins: [list_functionality, calendar_utils],
  components: {
    DashCard,
    CalendarDialog,
    DeleteDialog,
    ConfirmDialog,
    EventCard,
    EventDialog,
    EventTypeDialog,
    Empty,
    VueTable,
    Actions,
    Avatars,
    EventDetailDialog,
    AddParticipantDialog
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean
  },

  data: () => ({
    loading: false,
    start: null,
    today: moment().format('MMMM D, YYYY'),
    icon: 'M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z',
    attributes: []
  }),
  created() {
    apiTo.myCalendar().then(({ data }) => {
      this.calendar = data.calendar
      this.attributes = data.attributes
    })
    this.load_events()
  }

}
