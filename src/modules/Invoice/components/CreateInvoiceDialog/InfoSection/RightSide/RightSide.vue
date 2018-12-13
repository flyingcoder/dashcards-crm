<template>
	<div class="right-side">
		<div class="invoice-title" >
			<input type="text" class="input" placeholder="Add Name" v-model.trim="title" />
		</div>
		<div class="invoice-number field">
			Invoice Number
			<input type="text" value="3" />
		</div>

		<div class="invoice-type field">
			Select type
			<v-select :items="['hourly', 'monthly']" value="hourly"></v-select>
		</div>

		<div class="invoice-project field">
			Select Project
			<v-select
					:items="projects"
					:value="selected_project"
					@change="project_changed"
					item-text="title"
					item-value="id"
					placeholder="Select Project"
			></v-select>
		</div>

		<div class="invoice-dates">
			<div class="created-date field">
				Date:
				<date-picker placeholder="Select Date"
				             :value="date"
				             :max="due_date"
				             @input="update_date($event, 'date')"
				/>
			</div>

			<div class="due-date field">
				Due Date:
				<date-picker placeholder="Select Date"
				             :value="due_date"
				             :min="date"
				             @input="update_date($event, 'due_date')"
				/>
			</div>
		</div>
	</div>
</template>

<script src="./RightSide.js">
</script>

<style lang="scss" scoped>
.right-side {
  display: grid;

  .invoice-title {
    width: 200px;
    font-size: 35px;
    color: gray;
    text-align: right;
    width: 100%;

    > .input {
      text-align: right;
      outline: none;
    }
  }

  .field {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    grid-gap: 15px;
  }

  .invoice-number {
    > input {
      padding: 10px;
      border: 1px solid grey;
      border-radius: 10px;
    }
  }
}
</style>
