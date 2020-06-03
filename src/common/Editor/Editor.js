import {
    Editor,
    EditorContent,
    EditorMenuBar,
    EditorFloatingMenu,
    EditorMenuBubble
} from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
    TrailingNode,
    Image,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    Placeholder
} from 'tiptap-extensions'
import Youtube from './extension/Youtube.js'
import YTModal from "./components/YoutubeModal.vue"
import ImgModal from "./components/ImgModal.vue"

export default {
    components: {
        EditorContent,
        EditorMenuBar,
        YTModal,
        ImgModal,
        EditorFloatingMenu,
        EditorMenuBubble
    },
    props: {
        content: { type: String, default: '' },
        placeholder: { type: String, default: 'Write something...' },
        hasFloatingTools: { type: Boolean, default: true },
        editable: { type: Boolean, default: true }
    },
    data() {
        var self = this
        return {
            linkUrl: null,
            linkMenuIsActive: false,
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
                    new HorizontalRule(),
                    new ListItem(),
                    new OrderedList(),
                    // new TodoItem({ nested: true }),
                    // new TodoList(),
                    new Link(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new History(),
                    new TrailingNode(),
                    new Youtube(),
                    new Image(),
                    new Table({ resizable: true }),
                    new TableHeader(),
                    new TableCell(),
                    new TableRow(),
                    new Placeholder({
                        emptyEditorClass: 'is-editor-empty',
                        emptyNodeClass: 'is-empty',
                        emptyNodeText: self.placeholder,
                        showOnlyWhenEditable: true,
                        showOnlyCurrent: true,
                    }),
                ],
                editable: self.editable,
                content: self.content,
                onUpdate: ({ getHTML }) => {
                    const newContent = getHTML()
                    self.$emit('onchange', newContent)
                },
            }),
            fontSizes: [
                { level: 1, label: 'Heading 1', icon: 'mdi-format-header-1', fSize: '2em' },
                { level: 2, label: 'Heading 2', icon: 'mdi-format-header-2', fSize: '1.5em' },
                { level: 3, label: 'Heading 3', icon: 'mdi-format-header-3', fSize: '1.3em' },
                { level: 4, label: 'Heading 4', icon: 'mdi-format-header-4', fSize: '1em' },
                { level: 5, label: 'Heading 5', icon: 'mdi-format-header-5', fSize: '0.8em' },
                { level: 6, label: 'Heading 6', icon: 'mdi-format-header-6', fSize: '0.7em' }
            ],
            commandList: [
                { label: 'Undo', icon: 'mdi-undo-variant', method: (command) => { return command.undo() }, active: (isActive) => { return false } },
                { label: 'Redo', icon: 'mdi-redo-variant', method: (command) => { return command.redo() }, active: (isActive) => { return false } },
                { label: 'Bold', icon: 'mdi-format-bold', method: (command) => { command.bold() }, active: (isActive) => { return isActive.bold() } },
                { label: 'Italic', icon: 'mdi-format-italic', method: (command) => { command.italic() }, active: (isActive) => { return isActive.italic() } },
                { label: 'Strike', icon: 'mdi-format-strikethrough-variant', method: (command) => { command.strike() }, active: (isActive) => { return isActive.strike() } },
                { label: 'Underline', icon: 'mdi-format-underline', method: (command) => { return command.underline() }, active: (isActive) => { return isActive.underline() } },
                { label: 'Code', icon: 'mdi-code-braces', method: (command) => { return command.code() }, active: (isActive) => { return isActive.code() } },
                { label: 'Paragraph', icon: 'mdi-format-paragraph', method: (command) => { return command.paragraph() }, active: (isActive) => { return isActive.paragraph() } },
                { label: 'Bulleted List', icon: 'mdi-format-list-bulleted', method: (command) => { return command.bullet_list() }, active: (isActive) => { return isActive.bullet_list() } },
                { label: 'Ordered List', icon: 'mdi-format-list-numbered', method: (command) => { return command.ordered_list() }, active: (isActive) => { return isActive.ordered_list() } },
                // { label: 'Check List', icon: 'mdi-format-list-checks', method: (command) => { return command.todo_list() }, active: (isActive) => { return isActive.todo_list() } },
                { label: 'Blockquote', icon: 'mdi-format-quote-close', method: (command) => { return command.blockquote() }, active: (isActive) => { return isActive.blockquote() } },
                { label: 'Codeblock', icon: 'mdi-alpha-c-box-outline', method: (command) => { return command.code_block() }, active: (isActive) => { return isActive.code_block() } },
                { label: 'Horizontal Line', icon: 'mdi-minus', method: (command) => { return command.horizontal_rule() }, active: (isActive) => { return false } },
                { label: 'Youtube Embed', icon: 'mdi-youtube', method: (command) => { self.openModal('youtube', command.youtube) }, active: (isActive) => { return false } },
                { label: 'Image', icon: 'mdi-image', method: (command) => { self.openModal('image', command.image) }, active: (isActive) => { return false } },
                { label: 'Table', icon: 'mdi-table', method: (command) => { return command.createTable({ rowsCount: 3, colsCount: 3, withHeaderRow: false }) }, active: (isActive) => { return isActive.table() } },
            ],
            tableCommandList: [
                { label: 'Delete table', icon: 'mdi-table-remove', method: (command) => { command.deleteTable() }, active: (isActive) => { return false } },
                { label: 'Add Column Before', icon: 'mdi-table-column-plus-before', method: (command) => { command.addColumnBefore() }, active: (isActive) => { return false } },
                { label: 'Add Column After', icon: 'mdi-table-column-plus-after', method: (command) => { command.addColumnAfter() }, active: (isActive) => { return false } },
                { label: 'Delete Column', icon: 'mdi-table-column-remove', method: (command) => { command.deleteColumn() }, active: (isActive) => { return false } },
                { label: 'Add Row Before', icon: 'mdi-table-row-plus-before', method: (command) => { command.addRowBefore() }, active: (isActive) => { return false } },
                { label: 'Add Row After', icon: 'mdi-table-row-plus-after', method: (command) => { command.addRowAfter() }, active: (isActive) => { return false } },
                { label: 'Delete Row', icon: 'mdi-table-row-remove', method: (command) => { command.deleteRow() }, active: (isActive) => { return false } },
                { label: 'Toggle Cell Merge', icon: 'mdi-table-merge-cells', method: (command) => { command.toggleCellMerge() }, active: (isActive) => { return false } },
            ]
        }
    },
    beforeDestroy() {
        this.editor.destroy()
    },
    mounted() {
        this.setContent()
    },
    methods: {
        openModal(modal, command) {
            if (modal === 'youtube') {
                this.$refs.ytModal.openDialog(command)
            }
            if (modal === 'image') {
                this.$refs.imgModal.openDialog(command)
            }

        },
        addYTCommand(data) {
            if (data.command !== null) {
                data.command(data.data)
            }
        },
        addImgCommand(data) {
            if (data.command !== null) {
                data.command({ src: data.src })
            }
        },
        setContent() {
            if (this.editor) {
                this.editor.setContent(this.content)
            }
        },
        clearContent(){
            if (this.editor) {
                this.editor.setContent('')
            }
        },
        showLinkMenu(attrs) {
            this.linkUrl = attrs.href
            this.linkMenuIsActive = true
            this.$nextTick(() => {
                this.$refs.linkInput.focus()
            })
        },
        hideLinkMenu() {
            this.linkUrl = null
            this.linkMenuIsActive = false
        },
        setLinkUrl(command, url) {
            command({ href: url })
            this.hideLinkMenu()
        }
    }
}