<template>
  <div class="question-fields">
    <v-layout row v-for="(section, index) of dynamicSections" :key="index">
      <v-flex xs12>
        <div class="field">
          <v-layout row>
            <v-flex xs8 class="pr-5">
              <v-text-field
                :label="section.questionField.placeholder"
                v-model="section.questionField.text"
              ></v-text-field>
            </v-flex>

            <v-flex xs4>
              <v-select
                :value="section.selected"
                @change="dropdownChanged(index, $event)"
                :items="section.items"
                return-object
              ></v-select>
            </v-flex>
          </v-layout>

          <template v-if="section.shortAnswer.show">
            <v-layout row>
              <v-text-field
                label="Descriptions"
                v-model="section.shortAnswer.text"
              ></v-text-field>
            </v-layout>
            <v-layout row>
              <v-text-field disabled label="Short Answer"></v-text-field>
            </v-layout>
          </template>

          <template v-else-if="section.longAnswer.show">
            <v-layout row>
              <v-textarea
                label="Descriptions"
                v-model="section.longAnswer.text"
              ></v-textarea>
            </v-layout>
            <v-layout row>
              <v-textarea disabled label="Long Answer"></v-textarea>
            </v-layout>
          </template>

          <template v-else>
            <v-layout row class="default-field" align-center>
              <v-flex xs1>
                <v-icon>{{ section.selected.icon }}</v-icon>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  label="Default Text"
                  v-model.trim="section.newFieldText"
                  @keyup.enter="section.newFieldText && addNewField(index)"
                ></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-btn
                  icon
                  outline
                  color="indigo"
                  @click="addNewField(index)"
                  :disabled="!section.newFieldText"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <v-layout
              row
              align-center
              v-for="(field, fIndex) of section.fields"
              :key="fIndex"
              class="field"
            >
              <v-flex xs1 v-if="section.selected.showIcon">
                <v-icon>{{ section.selected.icon }}</v-icon>
              </v-flex>
              <v-flex xs10>
                <v-text-field readonly v-model.trim="field.text"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-btn
                  icon
                  outline
                  color="indigo"
                  @click="deleteField(index, fIndex)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </template>
        </div>
      </v-flex>
    </v-layout>
    <v-btn v-if="dynamicSections.length" @click="save">Save</v-btn>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import * as apiTo from '../api'

export default {
  props: {
    sections: Array,
    serviceId: [Number, String]
  },

  data: () => ({
    dynamicSections: []
  }),

  watch: {
    sections: {
      handler(val) {
        this.dynamicSections = cloneDeep(val)
      },
      immediate: true
    }
  },

  methods: {
    addNewField(index) {
      let sections = cloneDeep(this.dynamicSections)
      let maxId = 1
      const icon = sections[index].selected.icon
      const text = sections[index].newFieldText
      const maxIdFromFields = sections[index].fields.reduce(
        (acc, cur) => Math.max(acc, cur.id),
        0
      )
      if (maxIdFromFields > maxId) maxId = maxIdFromFields

      sections[index].fields.push({
        id: maxId,
        icon,
        text
      })
      sections[index].newFieldText = null
      this.dynamicSections = sections
    },
    deleteField(sIndex, fIndex) {
      //section index, field index
      let sections = cloneDeep(this.dynamicSections)
      sections[sIndex].fields.splice(fIndex, 1)
      this.dynamicSections = sections
    },
    dropdownChanged(index, event) {
      let sections = cloneDeep(this.dynamicSections)
      let section = this.defaultSection()
      if (event.value === 'short_answer') {
        section.shortAnswer.show = true
      } else if (event.value === 'paragraph') {
        section.longAnswer.show = true
      }
      section.selected = event
      sections[index] = section
      this.dynamicSections = sections
    },
    defaultSection() {
      return {
        type: 'Q', //question
        questionField: { placeholder: 'Question', text: '' },
        items: [
          {
            id: 1,
            text: 'Short Answer',
            value: 'short_answer',
            icon: 'short_text',
            showIcon: false
          },
          {
            id: 2,
            text: 'Paragraph',
            value: 'paragraph',
            icon: 'format_align_center',
            showIcon: false
          },
          {
            id: 3,
            text: 'Multiple Choice',
            value: 'multiple_choice',
            icon: 'radio_button_unchecked',
            showIcon: true
          },
          {
            id: 4,
            text: 'Checkboxes',
            value: 'checkboxes',
            icon: 'check_box',
            showIcon: true
          },
          {
            id: 5,
            text: 'Dropdown',
            value: 'dropdown',
            icon: 'arrow_drop_down_circle',
            showIcon: true
          }
        ],
        selected: {
          id: 3,
          text: 'Multiple Choice',
          value: 'multiple_choice',
          icon: 'radio_button_unchecked'
        },
        fields: [],
        shortAnswer: { show: false, text: null },
        longAnswer: { show: false, text: null },
        newFieldText: null
      }
    },
    save() {
      apiTo.postFields({
        service_id: this.serviceId,
        fields: this.dynamicSections
      })
    }
  }
}
</script>
