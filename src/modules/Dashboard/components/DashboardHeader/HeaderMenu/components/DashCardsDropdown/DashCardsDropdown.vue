<template>
  <v-menu
    class="datacards__dropdown"
    transition="slide-y-transition"
    :nudge-bottom="5"
    :nudge-left="180"
    offset-y
    :close-on-content-click="false"
    v-model="dropdown_visible"
  >
    <template v-slot:activator="{ on }">
      <div class="d__dropdown" v-on="on">
        <header-icon
          :image-src="require('@/assets/icons/header/add__default.png')"
          :hovered-image-src="require('@/assets/icons/header/add.png')"
        />
      </div>
    </template>
    <v-list class="add__cards_list">
      <v-list-item-title class="add__cards__title">
        Data Boxes
      </v-list-item-title>

      <template>
        <CustomCheckbox text="Add All Data Box" :checked.sync="checkbox" />

        <div class="dash__cards">
          <DashCard
            v-for="item of dash_items"
            :title="item.name"
            :img-src="item.img_path"
            :selected="selected_cards"
            :id="item.id"
            :key="item.id"
            @click="check_selected(item.id)"
          />
        </div>

        <div class="card__btn">
          <v-btn dark color="#8b94bf" class="reset" @click="reset">
            Reset Default
          </v-btn>
          <v-btn
            dark
            color="#8b94bf"
            class="save"
            :disabled="disabled"
            @click="save"
            >Save</v-btn
          >
        </div>
      </template>
    </v-list>
  </v-menu>
</template>

<script src="./DashCardsDropdown.js"></script>
<style lang="scss" scoped src="./DashCardsDropdown.scss"></style>
<style scoped>
>>> .save.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {
  background-color: rgba(139, 148, 191, 0.5) !important;
  border-color: rgb(139, 148, 191) !important;
}
</style>
