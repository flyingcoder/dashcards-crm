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
    <div class="d__dropdown" slot="activator">
      <header-icon
        :image-src="require('@/assets/icons/header/add__default.png')"
        :hovered-image-src="require('@/assets/icons/header/add.png')"
      />
    </div>

    <v-list class="add__cards_list">
      <v-list-tile-title class="add__cards__title">
        Data Boxes
      </v-list-tile-title>

      <template>
        <CustomCheckbox text="Add All Data Box" :checked.sync="checkbox" />

        <div class="dash__cards">
          <template v-for="item of dash_items">
            <DashCard
              :title="item.name"
              :img-src="item.img_path"
              :selected="selected_cards"
              :id="item.id"
              :key="item.id"
              @click="check_selected(item.id)"
            />
          </template>
        </div>

        <div class="card__btn">
          <v-btn dark color="#8b94bf" class="reset">Reset Default</v-btn>
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
