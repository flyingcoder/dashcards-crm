import request from '@/services/axios_instance'

export const myCalendar = () => {
  return request.get(`api/calendars/my-calendar`)
}
export const myCalendarAttributes = () => {
  return request.get(`api/calendars/attributes`)
}

export const getCalendarEvents = () => {
  return request.get(`api/events`)
}

export const getCalendarAttributes = () => {
  return request.get(`api/events/attributes`)
}

export const addNewEvent = ( payload) => {
  return request.post(`api/events`, payload)
}

export const updateEvent = (id, payload) => {
  return request.put(`api/events/${id}`, payload)
}

export const addNewEventType = (payload) => {
  return request.post(`api/calendars/event-types`, payload)
}

export const leaveEvent = (id, user_id) => {
  return request.delete(`api/events/${id}/participants/${user_id}`)
}
