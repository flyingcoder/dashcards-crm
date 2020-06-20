import moment from 'moment'
import timezone from 'moment-timezone'
import { settings } from '@/variables'

export const global_filters = {
    bzFromNow(date) {
        //bz = buzzooka
        const tz_date = moment.tz(date, 'UTC')
        if (moment().diff(date, 'days') >= 2) {
            return moment(tz_date).fromNow()
        }
        return tz_date.calendar().split(' ')[0]
    },

    from_now(date) {
        const tz_date = moment.tz(date, 'UTC')
        return moment(tz_date).fromNow()
    },

    chat_format(date) {
        const tz = timezone.tz.guess()
        const tz_date = timezone.tz(date, 'UTC')
        return tz_date.clone().tz(tz).format('YY/MM/DD, h:mm A')
    },

    truncate(text, stop, clamp) {
        if (!text) return ''
        return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    },

    str_limit(value, size) {
        if (!value) return ''
        value = value.toString()

        if (value.length <= size) {
            return value
        }
        return value.substr(0, size) + '...'
    },

    format(value, format) {
        if (!value || typeof value !== 'string') {
            return '-'
        }
        var form = typeof format === 'undefined' ? 'MMM D YYYY' : format
        var result = moment(value).format(form)
        return result === 'Invalid date' ? '' : result
    },

    uppercase(value) {
        return value.toUpperCase()
    },

    ucwords(value) {
        return (value + '').replace(/^(.)|\s+(.)/g, function($1) {
            return $1.toUpperCase()
        })
    },

    money(value, currency) {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency || 'USD'
        })

        return formatter.format(value)
    },

    bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes == 0) return '0 Byte'
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },

    unslugify(value) {
        return value.replace(/[a-z][a-z]*-?/g, ([f, ...rest]) =>
            f.toUpperCase() + rest.join('').replace('-', ' '))
    }
}