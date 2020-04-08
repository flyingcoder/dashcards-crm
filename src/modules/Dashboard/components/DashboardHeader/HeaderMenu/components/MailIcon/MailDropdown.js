import Empty from '@/common/Empty'

export default {
	components : {
		Empty
	},
	data: () => ({
    tabs :[ 
    	{ tab: 'Write', icon: 'mdi-email-edit'},
    	{ tab: 'Inbox', icon: 'mdi-email'},
    	{ tab: 'Sent', icon: 'mdi-email-send'},
    	{ tab: 'Draft', icon: 'mdi-email-open'},
    	{ tab: 'Bin', icon: 'mdi-email-minus'},
    ]
  }),
}