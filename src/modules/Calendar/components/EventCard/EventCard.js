import _cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'
import Avatars from '@/common/Avatars.vue'

export default {
	props : {
		event: Object
	},
	components : {
		Avatars
	},
	computed : {
		is_creator(){
			return this.event.properties.creator === this.loggeduser.id
		},
		permission() {
			if (!this.loggeduser.is_admin) return this.$_permissions.get('calendars_own')

			return this.$_permissions.get('calendars')
		},
		loggeduser(){
			return this.$store.getters.user
		},
    datetimedisplay() {
      let s = moment(this.event.start)
      let e = moment(this.event.end)
      if (this.event.all_day) {
      	return `${s.format('MMM D YYYY')}`
      }
      let x = moment(this.event.start).format('MMM D YYYY')
      let y = moment(this.event.end).format('MMM D YYYY')

      if (x === y) {
      	return `${s.format('MMM D YYYY H:mm A')} - ${s.format('H:mm A')}`
      } else {
      	return s.format('MMM D YYYY H:mm A') +' - ' +s.format('MMM D YYYY H:mm A')
      }
    },
		more_user () {
			if (this.event.participants.length < 4) {
				return ''
			}
			return `+${this.event.participants.length - 3} more invited`
		},
		first_three_participants (){
			if (this.event.participants.length < 4) {
				return this.event.participants
			}
			return _cloneDeep(this.event.participants).slice(0, 3)
		},
		can_delete(){
			if (this.event.properties.creator === this.loggeduser.id) return true
			if (this.loggeduser.is_admin) return true

			return this.permission && this.permission.delete
		},
		can_edit(){
			if (this.event.properties.creator === this.loggeduser.id) return true
			if (this.loggeduser.is_admin) return true

			return this.permission && this.permission.update
		}
	}
}