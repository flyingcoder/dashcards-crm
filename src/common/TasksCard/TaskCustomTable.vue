<template>
  <div class="task-custom-table">
    <v-layout row class="header">
      <v-flex xs2 class="task__tableHead" v-if="tab=='All Tasks'">Assignee</v-flex>
      <v-flex xs4 class="task__tableHead" v-if="tab=='All Tasks'">Task</v-flex>
      <v-flex xs6 class="task__tableHead" v-if="tab!='All Tasks'">Task</v-flex>
      <v-flex xs3 class="task__tableHead">Status</v-flex>
      <v-flex xs3 class="task__tableHead">Action</v-flex>
    </v-layout>

    <div class="body" :style="{ maxHeight: bodyMaxHeight }">
      <v-layout
        row
        align-center
        :class="['task__tableBody', { active: task.id === active_task_id }]"
        v-for="task in tasks"
        :key="task.id"
        @click="row_clicked(task)"
      > 
        <v-flex xs2 class="assignee__col" v-if="tab=='All Tasks'">
          <span v-if="task.assignee.length">
             <v-img
              :src="task.assignee[0].image_url"
              height="40"
              width="40"
            />
          </span>
          <span v-if="!task.assignee.length"></span>
        </v-flex>

        <v-flex xs4 class="project__col" v-if="tab=='All Tasks'">
          {{ task.title }}
        </v-flex>

        <v-flex xs6 class="project__col" v-if="tab!='All Tasks'">
          {{ task.title }}
        </v-flex>

        <v-flex xs3 class="status__col">
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
        <v-flex xs3  class="action__col">
              <v-btn icon v-if="task.status !== 'completed'" @click="task_action(task, 'task-mark-as-complete')" title="Mark as complete">
                <v-icon color="grey lighten-1">check</v-icon>
              </v-btn>
              <v-btn icon @click="task_action(task, 'task-delete')" title="Delete Task">
                <v-icon color="grey lighten-1">delete</v-icon>
              </v-btn>
              <v-btn icon @click="task_action(task, 'task-edit')" title="Edit Task">
                <v-icon color="grey lighten-1">edit</v-icon>
              </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCustomTable',
  props: {
    tasks: Array,
    tab: String
  },
  inject: {
    bodyMaxHeight: {
      from: 'bodyMaxHeight',
      default: '415px'
    }
  },

  data: () => ({
    active_task_id: null
  }),

  created() {
    this.active_task_id = this.tasks[0].id
    this.$event.$emit('task-row-clicked', this.tasks[0])
    this.$event.$on('task-is-updated', task => this.update_task(task))
  },

  methods: {
    row_clicked(row) {
      this.active_task_id = row.id
      this.$event.$emit('task-row-clicked', row)
    },
    task_action(item, event) {
      this.$event.$emit(event, item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.task-custom-table {
  .header {
    border-bottom: 1px solid $borderGray;
    background-color: $tableBlueBg;
    .task__tableHead {
      padding: 10px;
      color: $tableTitleBlue;
      font-size: 15px;
      font-weight: 500;
    }
  }

  @include styledScrollFor('.body'); //style the scroll

  .body {
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
        padding: 10px;
        font-size: 17px;
        font-weight: 400;
      }

      .status__col {
        font-size: 12px;
        font-weight: 400;
        opacity: 0.8;
        color: $textGray;

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
        justify-content: end;

        button {
          display : inline-block;
          width: 30%;
          margin : 0 5px;
        }
      }
    }
  }
}
//Laptop - Tablet View
@media only screen and (max-width: 1200px) and (min-width: 960px) {
  .task-custom-table {
    .header {
      .task__tableHead {
        font-size: 12px;
      }
    }

    .body {
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
    .header {
      .task__tableHead {
        font-size: 12px;
      }
    }

    .body {
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
