<template>
	<div class="task-custom-table">

		<v-layout row class="header">
			<v-flex xs3 class="task__tableHead">Assignee</v-flex>
			<v-flex xs6 class="task__tableHead">Task</v-flex>
			<v-flex xs3 class="task__tableHead">Status</v-flex>
		</v-layout>

		<div class="body" :style="{ maxHeight: bodyMaxHeight }">
			<v-layout row align-center
			          :class="['task__tableBody', { active: task.id === active_task_id }]"
			          v-for="task in tasks"
			          :key="task.id"
			          @click="row_clicked(task)"
			>

				<v-flex xs3 class="assignee__col">
					<v-img :src="require('@/assets/temp/user.png')" height="40" width="40" />
				</v-flex>

				<v-flex xs6 class="project__col">
					{{ task.title }}
				</v-flex>

				<v-flex xs3 class="status__col">
					{{task.status}}

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

			</v-layout>
		</div>

	</div>
</template>

<script>
export default {
  name: 'TaskCustomTable',
  props: {
    tasks: Array
  },
  inject: {
    bodyMaxHeight: {
      from: 'bodyMaxHeight',
      default: '300px'
    }
  },

  data: () => ({
    active_task_id: null
  }),

  created() {
    this.active_task_id = this.tasks[0].id
    this.$event.$emit('task-row-clicked', this.tasks[0])
  },

  methods: {
    row_clicked(row) {
      this.active_task_id = row.id
      this.$event.$emit('task-row-clicked', row)
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
