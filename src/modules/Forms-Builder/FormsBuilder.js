import { v4 as uuidv4 } from 'uuid';
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
//components
import TableHeader from '@/common/TableHeader.vue'
import draggable from 'vuedraggable'

export default {
    name: 'FormBuilder',
    mixins: [global_utils],
    components: {
        TableHeader,
        draggable
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Forms', disabled: false, router_name: 'forms' },
            { text: 'Builder', disabled: true, router_name: null }
        ],
        divider: {
            id: null,
            type: 'divider',
            tag: 'hr',
            height: 5,
            hover: false
        },
        headings: {
            h1: {
                id: null,
                type: 'h1',
                tag: 'h1',
                description: 'Heading 1',
                text: '',
                hover: false,
                icon: 'mdi-format-header-1'
            },
            h2: {
                id: null,
                type: 'h2',
                tag: 'h2',
                description: 'Heading 2',
                text: '',
                hover: false,
                icon: 'mdi-format-header-2'
            },
            h3: {
                id: null,
                type: 'h3',
                tag: 'h3',
                description: 'Heading 3',
                text: '',
                hover: false,
                icon: 'mdi-format-header-3'
            },
            h4: {
                id: null,
                type: 'h4',
                tag: 'h4',
                description: 'Heading 4',
                text: '',
                hover: false,
                icon: 'mdi-format-header-4'
            },
            h5: {
                id: null,
                type: 'h5',
                tag: 'h5',
                description: 'Heading 5',
                text: '',
                hover: false,
                icon: 'mdi-format-header-5'
            },
            h6: {
                id: null,
                type: 'h6',
                tag: 'h6',
                description: 'Heading 6',
                text: '',
                hover: false,
                icon: 'mdi-format-header-6'
            }
        },
        paragraph: {
            id: null,
            type: 'paragraph',
            tag: 'p',
            text: '',
            hover: false
        },
        section: {
            id: null,
            type: 'section',
            tag: 'section',
            hover: false,
            children: [],
        },
        image: {
            id: null,
            type: 'image',
            tag: 'img',
            src: '',
            itemheight: 'auto',
            itemwidth: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            alt: '',
            hover: false,
            icon: 'mdi-image',
            label: null
        },
        video: {
            id: null,
            type: 'video',
            tag: 'video',
            src: '',
            itemheight: 'auto',
            itemwidth: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            hover: false,
            icon: 'mdi-video',
            label: null
        },
        date: {
            id: null,
            type: 'date',
            tag: 'datepicker',
            label: 'Date',
            icon: 'mdi-calendar',
            show_icon: false,
            placeholder: 'Select date',
            value: null,
            min_date: null,
            max_date: null,
            date_format: 'Y-M-D',
            required: false,
            hover: false
        },
        time: {
            id: null,
            type: 'time',
            tag: 'timepicker',
            label: 'Time',
            icon: 'mdi-calendar-clock',
            show_icon: false,
            placeholder: 'Select time',
            value: null,
            required: false,
            hover: false,
            popover: false
        },
        text: {
            id: null,
            type: 'text',
            tag: 'v-text-field',
            label: 'Untitle Question',
            icon: 'mdi-alpha-t-box-outline',
            show_icon: false,
            placeholder: 'Your answer',
            value: null,
            required: false,
            hover: false
        },
        textarea: {
            id: null,
            type: 'textarea',
            tag: 'v-textarea',
            label: 'Untitle Question',
            icon: 'mdi-reorder-horizontal',
            show_icon: false,
            placeholder: 'Your answer',
            value: null,
            rows: 3,
            required: false,
            hover: false
        },
        dropdown: {
            id: null,
            type: 'dropdown',
            tag: 'v-select',
            label: 'Select From the ff:',
            icon: 'mdi-arrow-down-drop-circle-outline',
            show_icon: false,
            placeholder: 'Select your answer',
            value: null,
            required: false,
            hover: false,
            items: ['Select 1', 'Select 2'],
        },
        multiple_choice: {
            id: null,
            type: 'multiple_choice',
            tag: 'v-radio-group',
            label: 'Select',
            icon: 'mdi-radiobox-marked',
            show_icon: false,
            value: null,
            required: false,
            hover: false,
            items: ['Option 1', 'Option 2'],
        },
        checkbox: {
            id: null,
            type: 'checkbox',
            tag: 'v-checkbox',
            label: 'Question',
            icon: 'mdi-checkbox-marked-outline',
            show_icon: false,
            text: 'Checkbox',
            hover: false,
            value: null,
        },
        date_formats: [
            { value: 'D-M-Y', text: 'D-M-Y e.g 01-12-2020' },
            { value: 'Y-M-D', text: 'Y-M-D e.g 2020-12-01' },
            { value: 'M-D-Y', text: 'M-D-Y e.g 12-01-2020' }
        ],
        list: [],
        structures: [],
        sidetab: 'Element',
        activeType: null,
        isEditing: false,
        parent: null,
        new_option: null,
        saving: false,
        form_title: null,
        isFormEdit: false,
        formToEdit: null
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        if (this.$route.params.id > 0) {
            this.getForm(this.$route.params.id)
        }
        this.getFormsTemplate()
    },
    computed: {
        headingList() {
            return Object.values(this.headings)
        },
        property_disabled() {
            return this.activeType || this.parent ? false : true
        },
        textfield() {
            return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        },
        formInputs() {
            return [
                this.date,
                this.time,
                this.text,
                this.textarea,
                this.dropdown,
                this.multiple_choice,
                this.checkbox
            ]
        },
        disabled() {
            return this.structures.length === 0 || this.form_title === '' || this.form_title === null
        }
    },
    watch: {
        structures(val) {
            if (val.length === 0) this.parent = null
        },
        parent(val, old) {
            if ((!val && old) || (val && old)) {
                this.cancelTextContent()
            }
        }
    },
    methods: {
        toggleParent(id) {
            this.parent = this.parent === id ? null : id
        },
        setProperty(item, parentId) {
            this.activeType = _cloneDeep(item)
            this.sidetab = 'Property'
            if (parentId && typeof parentId !== 'undefined') {
                this.parent = parentId
            }
        },
        insertTextContent() {
            let element = this.activeType
            element.id = uuidv4()
            if (this.parent) {
                this.insertTo(element, this.parent)
            } else {
                this.insert(element)
            }
            this.cancelTextContent()
        },
        updateTextContent() {
            let active = this.activeType
            if (this.parent) {
                let parentIndex = this.getIndex(this.structures, this.parent)
                let childIndex = this.getIndex(this.structures[parentIndex].children, active.id)
                this.structures[parentIndex].children.splice(childIndex, 1, active)
            } else {
                let index = this.getIndex(this.structures, active.id)
                this.structures.splice(index, 1, active)
            }
            this.cancelTextContent()
        },
        cancelTextContent() {
            this.activeType = null
            this.isEditing = false
            this.sidetab = 'Element'
        },
        insert(type) {
            this.structures.push(type)
        },
        insertTo(type, parentId) {
            let index = this.getIndex(this.structures, parentId)
            this.structures[index].children.push(type)
        },
        edit(item, parentId) {
            this.isEditing = true
            this.setProperty(item)
            this.parent = parentId || null
        },
        getIndex(arr, findId) {
            let index = arr.findIndex(i => i.id === findId)
            return index
        },
        addDivider(parentId) {
            if (parentId) {
                this.parent = parentId
            }
            let divider = _cloneDeep(this.divider)
            divider.id = uuidv4()
            if (this.parent) {
                let index = this.getIndex(this.structures, this.parent)
                this.structures[index].children.push(divider)
            } else {
                this.structures.push(divider)
            }
        },
        removeDivider(childid, parentid) {
            if (parent) {
                let parent_index = this.getIndex(this.structures, parentid)
                let child_index = this.getIndex(this.structures[parent_index].children, childid)
                this.structures[parent_index].children.splice(child_index, 1)
            } else {
                let index = this.getIndex(this.structures, parentid)
                this.structures.splice(index, 1)
            }
        },
        addSection() {
            let section = _cloneDeep(this.section)
            section.id = uuidv4()
            this.parent = section.id
            this.structures.push(section)
        },
        remove(index) {
            this.structures.splice(index, 1)
        },
        removeChild(pindex, cIndex) {
            this.structures[pindex].children.splice(cIndex, 1)
        },
        copySection(id) {
            let index = this.getIndex(this.structures, id)
            let section = _cloneDeep(this.structures[index])
            section.id = uuidv4()
            section.hover = false
            section.children.forEach(child => child.id = uuidv4())
            this.structures.push(section)
        },
        clearAll() {
            this.structures = []
            this.cancelTextContent()
        },
        previewForm() {

        },
        navigate_icons() {
            window.open('https://cdn.materialdesignicons.com/5.2.45/');
        },
        removeFromItems(index) {
            if (this.activeType) {
                this.activeType.items.splice(index, 1)
            }
        },
        addToItem() {
            if (this.activeType) {
                this.activeType.items.push(this.new_option)
                this.new_option = null
            }
        },
        getEmbed(src) {
            let youtubeID = this.youtubeParser(src)
            return `https://www.youtube.com/embed/${youtubeID}`
        },
        save() {
            this.saving = true
            var payload = {
                title: this.form_title,
                questions: this.structures,
                status: 'active'
            }
            request.post(`api/forms`, payload)
                .then(({ data }) => {
                    this.$event.$emit('open_snackbar', 'Form successfully created!')
                    this.$router.push({ name: 'forms' })
                })
        },
        update() {
            this.saving = true
            var payload = {
                title: this.form_title,
                questions: this.structures,
                id: this.formToEdit.id
            }
            request.put(`api/forms`, payload)
                .then(({ data }) => {
                    this.$event.$emit('open_snackbar', 'Form successfully updated!')
                    this.$router.push({ name: 'forms' })
                })
        },
        getForm(id) {
            request.get(`api/forms/${id}`)
                .then(({ data }) => {
                    if (data) {
                        this.formToEdit = data
                        this.isFormEdit = true
                        this.structures = _cloneDeep(data.questions)
                        this.form_title = data.title
                    }
                })
        },
        getFormsTemplate(){
            request.get(`api/forms/list`)
                .then(({ data }) => {
                    if (data) {
                        this.list = data
                    }
                })
        },
    }
}