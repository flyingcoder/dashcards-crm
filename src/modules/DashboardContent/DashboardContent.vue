<template>
  <div class="dashboard-content">
    <div class="d__breadcrumbs">
      <div class="page__options">
        <breadcrumb :paths="paths" />
        <logon-label />
        <!--custom component-->

        <div class="option themes">
          <div class="color"></div>
          <div class="title">
            <span>Themes</span>
          </div>
        </div>
      </div>
    </div>

    <dashboard-tiles />
    <!-- custom component -->
    <v-row v-if="loading">
      <v-boilerplate 
        v-for="i in [1,2]"
        class="mb-6 col-md-6 col-xs-12"
        type="table-tfoot,table-heading, list-item-two-line, image "
      ></v-boilerplate>
    </v-row>

    <NoCards v-if="!cards.length && !loading" />

    <v-layout class="dashcard-content">
      <draggable class="row d__cards" v-model="cards">
        <template v-for="card in card_components">
          <v-col cols="12" md="6" v-if="should_show(card.slug) && card.can_view()">
            <component
              :is="card.component"
              :key="card.component"
              v-bind="args"
              v-if="card.hasOwnProperty('component')"
              @close="close(card.id)"
            ></component>

            <template v-else>
              <v-flex xs12 :key="card.id">
                <div>
                  <dash-card
                    @close="close(card.id)"
                    :title="card.name"
                    :dashboard="args.dashboard"
                  ></dash-card>
                </div>
              </v-flex>
            </template>
          </v-col>
        </template>

        <div class="timeline-card" v-if="cards.length == 1">
          <NoCards/>
        </div>
      </draggable>
    </v-layout>
  </div>
</template>
<script src="./DashboardContent.js"></script>
<style lang="scss" scoped src="./DashboardContent.scss"></style>
