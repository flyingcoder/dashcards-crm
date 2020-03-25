<template>
  <div class="timer__tab">
    <VueTable
      :items="items" 
      :headers="headers"
      :showRowActions="true"
      @load-more="get_more_timers"
      icon="mdi-clock"
      title="Project Timers"
      :key="componentKey"
      :noMoreData="noMoreData"
      :hasFooter="false"
    >
      <template v-slot:row-slot="{item}">
        <tr>
          <td class="text-cap clickable-td" @click="view_task(item.id)">
          {{ item.title }}
        </td>
        <td>
          <!-- <assigned-btn :users="item.assignee" /> -->
          <v-avatar size="36"
            v-for="user in item.assignee"
            :key="user.id"
            >
            <v-img :src="user.image_url" :title="user.fullname"></v-img>
          </v-avatar>
        </td>
        <td>{{ item.total_time }}</td>
        <td class="text-cap">{{ item.status }}</td>
        </tr>
      </template>
    </VueTable>
  </div>
</template>

<script src="./Timer.js"></script>
<style lang="scss" scoped src="./Timer.scss"></style>
