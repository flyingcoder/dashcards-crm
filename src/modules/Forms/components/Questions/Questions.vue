<template>
  <div class="questions">
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-text-field
            filled
            label="Title of form"
            v-model.trim="form_title"
          ></v-text-field>
          <v-textarea
            filled
            label="Descriptions"
            auto-grow
            rows="1"
            v-model.trim="form_descriptions"
          ></v-textarea>
        </v-flex>
      </v-layout>

      <v-layout
        v-for="(section, index) of dynamic_sections"
        :key="index"
        class="form-section"
      >
        <v-flex xs12>
          <div class="title-description-section" v-if="section.type === 'TD'">
            <v-layout>
              <v-text-field
                filled
                :label="section.title.placeholder"
                v-model="section.title.text"
              ></v-text-field>
            </v-layout>
            <v-layout>
              <v-textarea
                filled
                :label="section.description.placeholder"
                v-model="section.description.text"
              ></v-textarea>
            </v-layout>
          </div>

          <div class="question-section" v-else>
            <v-layout>
              <v-flex xs8 class="pr-5">
                <v-text-field
                  filled
                  :label="section.question_field.placeholder"
                  v-model="section.question_field.text"
                ></v-text-field>
              </v-flex>

              <v-flex xs4>
                <v-select
                  filled
                  :value="section.selected"
                  @change="dropdown_changed(index, $event)"
                  :items="section.items"
                  return-object
                ></v-select>
              </v-flex>
            </v-layout>

            <template v-if="section.short_answer.show">
              <v-layout>
                <v-text-field
                  filled
                  label="Descriptions"
                  v-model="section.short_answer.text"
                ></v-text-field>
              </v-layout>
              <v-layout>
                <v-text-field filled disabled label="Short Answer"></v-text-field>
              </v-layout>
            </template>

            <template v-else-if="section.long_answer.show">
              <v-layout>
                <v-textarea
                  filled
                  label="Descriptions"
                  v-model="section.long_answer.text"
                ></v-textarea>
              </v-layout>
              <v-layout>
                <v-textarea filled disabled label="Long Answer"></v-textarea>
              </v-layout>
            </template>

            <template v-else>
              <v-layout class="default-field" align-center>
                <v-flex xs1>
                  <v-icon>{{ section.selected.icon }}</v-icon>
                </v-flex>
                <v-flex xs10>
                  <v-text-field
                    filled
                    label="Default Text"
                    v-model.trim="section.new_field_text"
                    @keyup.enter="
                      section.new_field_text && add_new_field(index)
                    "
                  ></v-text-field>
                </v-flex>
                <v-flex xs1>
                  <v-btn
                    icon
                    outlined
                    color="indigo"
                    @click="add_new_field(index)"
                    :disabled="!section.new_field_text"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout
                align-center
                v-for="(field, f_index) of section.fields"
                :key="f_index"
                class="field"
              >
                <v-flex xs1 v-if="section.selected.show_icon">
                  <v-icon>{{ section.selected.icon }}</v-icon>
                </v-flex>
                <v-flex xs10>
                  <v-text-field
                    filled
                    readonly
                    v-model.trim="field.text"
                  ></v-text-field>
                </v-flex>
                <v-flex xs1>
                  <v-btn
                    icon
                    outlined
                    color="indigo"
                    @click="delete_field(index, f_index)"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </template>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./Questions.js"></script>
<style lang="scss" scoped>
.questions {
  .form-section {
    border: 1px solid #dce1e5;
    padding: 10px;
    margin-bottom: 5px;
  }
}
</style>

<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
