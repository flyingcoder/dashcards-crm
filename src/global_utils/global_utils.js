import moment from 'moment'
import timezone from 'moment-timezone'
import { settings } from '@/variables'

export const global_utils = {
    methods: {
        scrollToBottom(e) {
            this.$nextTick(() => {
                if (typeof e !== 'undefined') {
                    e.scrollTop = e.scrollHeight - e.getBoundingClientRect().height
                }
            })
        },
        addHost(urlString) {
            if (typeof urlString === 'undefined') {
                return settings.apiHostBaseURL
            }

            if (
                !(
                    urlString.indexOf('http://') === 0 ||
                    urlString.indexOf('https://') === 0
                )
            ) {
                return settings.apiHostBaseURL + urlString
            }
            return urlString
        },
        altImage(item) {
            if (
                item &&
                item.hasOwnProperty('collection_name') &&
                item.collection_name === 'project.files.videos'
            ) {
                item.thumb_url = require('@/assets/temp/no-video-preview.png')
                item.public_url = require('@/assets/temp/no-video-preview.png')
            } else {
                item.thumb_url = require('@/assets/temp/no-image.jpg')
                item.public_url = require('@/assets/temp/no-image.jpg')
            }
        },
        generate_random(qty, min, max) {
            var items = []
            for (var i = 0; i < qty; i++) {
                items.push(parseInt((Math.random() * (max - min) + min).toFixed(0)))
            }
            return items
        },
        youtubeParser(url) {
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            const match = url.match(regExp);
            return match && match[7].length === 11 ? match[7] : false;
        },
        slugify(text, separator) {
            text = text.toString().toLowerCase().trim()

            const sets = [
                { to: "a", from: "[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]" },
                { to: "ae", from: "[Ä]" },
                { to: "c", from: "[ÇĆĈČ]" },
                { to: "d", from: "[ÐĎĐÞ]" },
                { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
                { to: "g", from: "[ĜĞĢǴ]" },
                { to: "h", from: "[ĤḦ]" },
                { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
                { to: "j", from: "[Ĵ]" },
                { to: "ij", from: "[Ĳ]" },
                { to: "k", from: "[Ķ]" },
                { to: "l", from: "[ĹĻĽŁ]" },
                { to: "m", from: "[Ḿ]" },
                { to: "n", from: "[ÑŃŅŇ]" },
                { to: "o", from: "[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
                { to: "oe", from: "[ŒÖ]" },
                { to: "p", from: "[ṕ]" },
                { to: "r", from: "[ŔŖŘ]" },
                { to: "s", from: "[ŚŜŞŠ]" },
                { to: "ss", from: "[ß]" },
                { to: "t", from: "[ŢŤ]" },
                { to: "u", from: "[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
                { to: "ue", from: "[Ü]" },
                { to: "w", from: "[ẂŴẀẄ]" },
                { to: "x", from: "[ẍ]" },
                { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
                { to: "z", from: "[ŹŻŽ]" },
                { to: "-", from: "[·/_,:;']" },
            ]

            sets.forEach((set) => {
                text = text.replace(new RegExp(set.from, "gi"), set.to)
            })

            text = text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/&/g, "-and-") // Replace & with 'and'
                .replace(/[^\w\-]+/g, "") // Remove all non-word chars
                .replace(/\--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, "") // Trim - from end of text

            if (typeof separator !== "undefined" && separator !== "-") {
                text = text.replace(/-/g, separator)
            }

            return text
        }
    }
}