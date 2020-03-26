<template>
  <div class="task-custom-table">
    <v-layout class="task_header">
      <v-flex xs2 class="task__tableHead" v-if="tab == 'All Tasks'"
        >Assignee</v-flex
      >
      <v-flex xs5 class="task__tableHead" v-if="tab == 'All Tasks'"
        >Task</v-flex
      >
      <v-flex xs7 class="task__tableHead" v-if="tab != 'All Tasks'"
        >Task</v-flex
      >
      <v-flex xs2 class="task__tableHead">Status</v-flex>
      <v-flex xs3 class="task__tableHead">Action</v-flex>
    </v-layout>

    <div class="task_body" :style="{ height: bodyMaxHeight }">
      <v-layout
        align-center
        class="task-row"
        :class="['task__tableBody', { active: task.id === active_task_id }]"
        v-for="task in tasks"
        :key="task.id"
        @click="row_clicked(task)"
      >
        <v-flex xs2 class="assignee__col" v-if="tab == 'All Tasks'">
          <span v-if="task.assignee.length">
            <v-img :src="task.assignee[0].image_url" height="40" width="40" />
          </span>
          <span v-if="!task.assignee.length"></span>
        </v-flex>

        <v-flex xs5 class="project__col" v-if="tab == 'All Tasks'">
          {{ task.title }}
        </v-flex>

        <v-flex xs7 class="project__col" v-if="tab != 'All Tasks'">
          {{ task.title }}
        </v-flex>

        <v-flex xs2 class="status__col">
          {{ task.status }}

          <div v-if="task.status === 'completed'">
            <div class="status__completed"></div>
          </div>

          <div v-if="task.status === 'pending'">
            <div class="status__pending"></div>
          </div>

          <div v-if="task.status === 'behind'">
            <div class="status__behind"></div>
          </div>

          <div v-if="task.status === 'open'">
            <div class="status__open"></div>
          </div>
        </v-flex>
        <v-flex xs3 class="action__col">
          <v-btn
            icon
            v-if="task.status !== 'completed' && can_edit_task"
            @click="task_action(task, 'task-mark-as-complete')"
            title="Mark as complete"
          >
            <v-icon color="grey">check</v-icon>
          </v-btn>
          <v-btn icon v-else disabled>
            <v-icon color="#1fb868">like</v-icon>
          </v-btn>
          <v-btn
            icon
            v-if="can_delete_task"
            @click="task_action(task, 'task-delete')"
            title="Delete Task"
          >
            <v-icon color="grey">delete</v-icon>
          </v-btn>
          <v-btn
            icon
            v-if="can_view_task"
            @click="task_action(task, 'task-view')"
            title="View Task"
          >
            <v-icon color="grey">search</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import apiTo from '@/modules/ProjectPreview-Tasks/api'
export default {
  name: 'TaskCustomTable',
  props: {
    tasks: Array,
    tab: String
  },
  inject: {
    bodyMaxHeight: {
      from: 'bodyMaxHeight',
      default: '200px'
    }
  },

  data: () => ({
    active_task_id: null
  }),

  created() {
    this.active_task_id = this.tasks[0].id
    this.$event.$emit('task-row-clicked', this.tasks[0])
    this.$event.$on('task_completed', task => {
      if (!this.active_task_id) {
        this.active_task_id = task.id
      }
      this.task_is_completed()
    })
    this.$event.$on('task_deleted', task => {
      if (!this.active_task_id) {
        this.active_task_id = task.id
      }
      this.task_is_deleted()
    })
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    permission() {
      return this.$_permissions.get('tasks_own')
    },
    can_view_task() {
      if (this.user.is_admin) return true
      return this.permission && this.permission.view
    },
    can_edit_task() {
      if (this.user.is_admin) return true
      return this.permission && this.permission.update
    },
    can_delete_task() {
      if (this.user.is_admin) return true
      return this.permission && this.permission.delete
    }
  },
  methods: {
    row_clicked(row) {
      this.active_task_id = row.id
      this.$event.$emit('task-row-clicked', row)
    },
    task_action(item, event) {
      this.$event.$emit(event, item)
    },
    replace_task(task, id) {
      let index = this.tasks.findIndex(item => item.id === id)
      if (~index) {
        this.tasks.splice(index, 1, task)
      }
    },
    remove_task(id) {
      let index = this.tasks.findIndex(item => item.id === id)
      if (~index) {
        this.tasks.splice(index, 1)
      }
    },
    task_is_completed() {
      var payload = { status: 'completed' }
      apiTo
        .mark_as_complete_task(this.active_task_id, payload)
        .then(({ data }) => {
          this.replace_task(data, this.active_task_id)
          this.$event.$emit('btnloading_off', false)
          this.$event.$emit('open_snackbar', 'Task is completed')
          this.$event.$emit('close_confirm_dialog', true)
        })
    },
    task_is_deleted() {
      apiTo.delete_task(this.active_task_id).then(() => {
        this.remove_task(this.active_task_id)
        this.$event.$emit('btnloading_off', false)
        this.$event.$emit('close_delete_dialog', true)
        this.$event.$emit('open_snackbar', 'Task is deleted')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.task-custom-table {
  .task_header {
    border-bottom: 1px solid $borderGray;
    background-color: $tableBlueBg;
    padding: 10px 0;
    .task__tableHead {
      padding: 5px 10px;
      color: $tableTitleBlue;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .task-row {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* -webkit-box-flex: 1; */
    // -ms-flex: 1 1 auto;
    /* flex: 1 1 auto; */
    /* margin-right: -12px; */
    /* margin-left: -12px; */
  }

  @include styledScrollFor('.task_body'); //style the scroll

  .task_body {
    overflow: auto;
    background-color: $tableBlueBg;

    .task__tableBody {
      border-bottom: 1px solid $borderGray;
      cursor: pointer;

      &.active {
        background-color: $white;
      }

      &:hover {
        background-color: $white;
      }

      .assignee__col,
      .project__col {
        padding: 5px 10px;
        font-size: 17px;
        font-weight: 400;
      }
      .project__col {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .status__col {
        font-size: 12px;
        font-weight: 400;
        opacity: 0.8;
        color: $textGray;
        padding: 10px;

        .status__completed {
          height: 4px;
          width: 60px;
          border-radius: 10px;
          background-color: $green;
        }

        .status__pending {
          height: 4px;
          width: 60px;
          border-radius: 10px;
          background-color: $orange;
        }

        .status__behind {
          height: 4px;
          width: 60px;
          border-radius: 10px;
          background-color: $red;
        }

        .status__open {
          height: 4px;
          width: 60px;
          border-radius: 10px;
          background-color: $textGray;
        }
      }
      .action__col {
        display: flex;
        justify-content: center;
      }
    }
  }
}
//Laptop - Tablet View
@media only screen and (max-width: 1200px) and (min-width: 960px) {
  .task-custom-table {
    .task_header {
      .task__tableHead {
        font-size: 12px;
      }
    }

    .task_body {
      .task__tableBody {
        &.active {
          background-color: $white;
        }
        .assignee__col,
        .project__col {
          font-size: 14px;
        }
      }
    }
  }
}

//Mobile View
@media only screen and (max-width: 480px) {
  .task-custom-table {
    .task_header {
      .task__tableHead {
        font-size: 12px;
      }
    }

    .task_body {
      .task__tableBody {
        &.active {
          background-color: $white;
        }
        .assignee__col,
        .project__col {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
