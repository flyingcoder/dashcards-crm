import Editor from '@/common/Editor/Editor.vue'

export default {
    name: 'Test',
    components: {
        Editor
    },
    data: () => ({
        content: 'nenenenenene',
        randKey: 0
    }),
    methods: {
        changeVal() {
            this.content = this.makeid(9)
            this.randKey = Math.floor(Date.now() / 1000)
        },
        makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }

}