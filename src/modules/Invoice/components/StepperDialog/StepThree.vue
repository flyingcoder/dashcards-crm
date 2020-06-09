<template>
    <v-row no-gutters>  
        <v-col md="5" sm="6">Company Logo</v-col>
        <v-col md="7" sm="6">
            <div class="add__logo_box" v-if="image_preview">
                <img :src="image_preview" class="image-preview" />
                <v-btn outlined class="button" v-show="image_preview">Remove</v-btn>
            </div>
            <div class="add__logo_box" v-else @click="$refs.hidden_input.click()">
                <span class="text">+ Add Your Logo</span> 
                <input type="file" accept="image/*" ref="hidden_input" @change="file_selected" class="hidden-input" />
            </div>
        </v-col>
        <v-col md="5" sm="6" class="label">Send email to recepient?</v-col>
        <v-col md="7" sm="6" class="value">
            <v-radio-group :mandatory="true" row v-model="props.send_email" class="mt-0 pt-0">
                <v-radio label="Yes" value="yes" color="#3b589e"></v-radio>
                <v-radio label="No" value="no" color="#3b589e"></v-radio>
            </v-radio-group>
        </v-col>
        <v-col md="5" sm="6" class="label">Invoice Template </v-col>
        <v-col md="7" sm="6" class="value">
            <v-select color="#657186" :items="templates"  v-model="props.template" placeholder="Select template" item-text="name" item-value="id" solo flat outlined dense></v-select>
        </v-col>
    </v-row>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import axios from '@/services/axios_instance'

export default {
    name: 'StepThree',
    data: () => ({
        templates: [{ id: 1, name: 'Default' }],
        image_preview: null,
    }),
    computed: {
        ...mapGetters('invoice', [ 'props', 'dialog','company_logo'])
    },
    watch : {
        company_logo(val) {
            if (!val) {
                this.image_preview = null
                return
            }
            if (typeof val === 'object') {
                const reader = new FileReader()
                reader.onload = e => {
                    this.image_preview = e.target.result
                }
                reader.readAsDataURL(val)
            } else {
                this.image_preview = val
            }
        }
    },
    methods: {
        file_selected(event) {
            if (event.target.files && event.target.files[0]) {
                let formData = new FormData()
                formData.append('file', event.target.files[0])
                axios
                    .post(`api/file/image-upload`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    .then(({ data }) => {
                        this.$store.commit('invoice/set_company_logo', data.url)
                    })
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/variables';

.required {
    color: red;
}

.add__logo_box {
    position: relative;
    height: 150px;
    background-color: $bgLightBlue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: $textDark;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: $fieldLabel;

        >.button {
            display: block;
        }
    }

    .text,
    .button {
        position: absolute;
    }

    .button {
        display: none;
    }

    .image-preview {
        position: absolute;
        height: auto;
        width: auto;
        max-height: 150px;
        max-width: 200px;
    }

    .hidden-input {
        visibility: hidden;
    }
}
</style>
<style scoped>
    >>> .v-select__selection.v-select__selection--comma{
        color: #667381;
    }
    >>> .v-list-item__title{
        color: #667381;
        font-size: 16px;
    }
</style>