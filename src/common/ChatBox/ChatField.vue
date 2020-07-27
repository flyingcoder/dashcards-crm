<template>
    <v-row no-gutters class="chat-field">
        <v-col md="12" class="mb-1" v-if="files.length > 0">
            <span class="caption">Files :</span>
            <v-chip
                    dense
                    small
                    close
                    v-for="(file, inx) in files"
                    :key="inx"
                    class="mx-1"
                    @click:close="removeFile(file, inx)"
            >
                <v-icon left>mdi-file</v-icon>
                {{ file.name }}
            </v-chip>
        </v-col>
        <v-col class="avatar--wrapper" v-if="hasAvatar">
            <v-avatar size="45">
                <v-img :src="loggedUser.image_url"/>
            </v-avatar>
        </v-col>
        <v-col class="textfield--wrapper">
            <input
                    type="file"
                    ref="hidden_input"
                    @change="file_selected"
                    class="hidden-input"
            >
            <at-ta
                    :members="mentionables"
                    v-model="message"
                    name-key="username"
                    :allowSpaces="false"
            >
                <template slot="item" slot-scope="{ item }">
                    <img :src="item.image_url" class="mention-img">
                    <span v-text="item.fullname"/>
                </template>
                <textarea
                        class="write__msg solo"
                        placeholder="Type a message...@name..."
                        :rows="1"
                        @keydown.exact="$emit('typing')"
                        @keydown.enter="$emit('key-enter')"
                />
            </at-ta>
        </v-col>
        <v-col class="action--wrapper" v-if="!small">
            <v-btn icon class="action ml-1">
                <EmojiPicker @emoji-selected="appendEmoji"/>
            </v-btn>
            <v-btn icon class="action ml-1" @click="$refs.hidden_input.click()">
                <v-icon>attach_file</v-icon>
            </v-btn>
            <v-btn
                    :disabled="disabled"
                    :loading="btnsending"
                    icon
                    @click="sendMessage(message)"
                    class="action ml-1"
            >
                <v-icon color="primary">send</v-icon>
            </v-btn>
        </v-col>
        <v-col v-else md="12" style="display:flex;">
            <v-btn icon>
                <EmojiPicker @emoji-selected="appendEmoji"/>
            </v-btn>
            <v-btn icon class="action ml-1" @click="$refs.hidden_input.click()">
                <v-icon>attach_file</v-icon>
            </v-btn>
            <v-spacer/>
            <v-btn
                    :disabled="disabled"
                    :loading="btnsending"
                    icon
                    @click="sendMessage(message)"
            >
                <v-icon color="primary">send</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    import EmojiPicker from '@/common/EmojiPicker.vue'
    import AtTa from 'vue-at/dist/vue-at-textarea'

    export default {
        components: {
            EmojiPicker,
            AtTa
        },
        props: {
            mentionables: {type: Array, default: () => []},
            hasAvatar: {type: Boolean, default: true},
            small: {type: Boolean, default: false}
        },
        data: () => ({
            message: '',
            btnsending: false,
            files: [],
            fileLimit: 1
        }),
        created() {
            this.$event.$on('btnsending_off', status => {
                this.btnsending = false
                this.message = ''
                this.files = []
            })
        },
        computed: {
            loggedUser() {
                return this.$store.getters.user
            },
            disabled() {
                return (
                    this.btnsending ||
                    (this.message.trim() === '' && this.files.length <= 0)
                )
            }
        },
        methods: {
            sendMessage(text) {
                if (
                    this.btnsending ||
                    (this.message.trim() === '' && this.files.length <= 0)
                ) {
                    this.$event.$emit('open_snackbar', 'Message cannot be empty.', 'error')
                    return
                }
                this.btnsending = true
                this.$emit('send-message', {message: this.message, files: this.files})
            },

            appendEmoji(emoji) {
                if (this.message) {
                    this.message += emoji.data
                } else {
                    this.message = emoji.data
                }
            },
            removeFile(item, inx) {
                this.files.splice(inx, 1)
            },
            file_selected(event) {
                if (event.target.files && event.target.files[0]) {
                    this.files = []
                    this.files.push(event.target.files[0])
                }
            },
            handleKeyDown(event) {
                console.log('aaa')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .avatar--wrapper {
        max-width: 50px;
    }

    .textfield--wrapper {
        .write__msg {
        }
    }

    .action--wrapper {
        max-width: 140px;
        padding: 5px;
    }

    .hidden-input {
        display: none;
    }

    .write__msg {
        width: 100%;
        border: 1px solid #c1c1c1;
        border-radius: 5px;
        padding: 2px 5px;
        min-height: 45px;
        max-height: 45px;
    }

    .atwho-panel {
        .mention-img {
            width: 20px;
            margin-right: 5px;
            border-radius: 50%;
        }
    }
</style>
<style>
    ul.atwho-ul {
        padding: 0px !important;
    }
</style>
