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
    <NoCards v-if="!cards.length" />

    <v-layout class="dashcard-content">
      <draggable class="row d__cards" v-model="cards">
        <template v-for="card in card_components">
          <component
            :is="card.component"
            :key="card.component"
            v-bind="args"
            v-if="
              should_show(card.slug) &&
                card.hasOwnProperty('component') &&
                card.can_view()
            "
            @close="close(card.id)"
          ></component>

          <template v-else-if="should_show(card.slug) && card.can_view()">
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
        </template>
        <div class="timeline-card" v-if="cards.length == 1">
          <NoCards />
        </div>
      </draggable>
    </v-layout>

    <DeleteDialog
      ref="delete_task_dialog"
      :open-dialog.sync="delete_task_dialog"
      title="Delete Task"
      text-content="Are you sure you want to delete this task?"
      @delete="confirm_delete_task"
    />

    <ConfirmDialog
      ref="confirm_mark_as_complete_dialog"
      :open-dialog.sync="confirm_mark_as_complete_dialog"
      title="Confirmation required!"
      confirm-button-text="Yes"
      text-content="Mark task as completed?"
      @confirm="confirm_mark_as_complete_task"
    />

    <TaskViewDialog
      ref="view_task_dialog"
      :dialog.sync="open_view_task_dialog"
      :task="active_task"
      @close-task-preview="open_view_task_dialog = false"
    />
  </div>
</template>
<script src="./DashboardContent.js"></script>
<style lang="scss" scoped src="./DashboardContent.scss"></style>
