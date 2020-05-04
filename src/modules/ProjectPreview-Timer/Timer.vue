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
      :hasFooter="true"
      :showSelect="false"
      :loading="loading"
    >
      <template v-slot:row-slot="{ item }">
        <td>
          <Avatars :items="item.assignee" :deep="false" :count="5"></Avatars>
        </td>
        <td class="text-cap clickable-td" @click="view_task(item.id)">
          {{ item.title }}
        </td>
        <td>
          {{ item.milestone.title }}
        </td>
        <td class="text-cap">{{ item.status }}</td>
        <td>
          <PlayPause :item="item" @row-item-updated="item = $event"></PlayPause>
        </td>
      </template>
    </VueTable>
  </div>
</template>

<script src="./Timer.js"></script>
<style lang="scss" scoped src="./Timer.scss"></style>
